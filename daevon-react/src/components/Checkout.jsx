import { useState, useEffect } from "react";

/* Daevon live checkout.
   Flow (per backend handoff, verified contract):
     1. buyer enters email
     2. POST /checkout/eligibility { email } -> { discount_id: "dsc_..." | null }
     3. open Paddle checkout for the $5/mo price, applying discount_id if present
   The webhook finalizes tier + Founder number after payment. Nothing to do post-pay here. */

const C = {
    surface: "#222018",
    border: "#2f261d",
    text: "#EEE0CC",
    dim: "#A09078",
    accent: "#B84A28",
    accentText: "#D9714A",
    warn: "#fbbf24"
};

// --- live config ---
const PADDLE_CLIENT_TOKEN = "live_b9710eca7b30002fb56bbee9729";
const PRICE_ID = "pri_01kzcp0qnkmcsvgps1dhsdr7e6";
const ELIGIBILITY_URL = "https://daevon-hosted.onrender.com/checkout/eligibility";

export default function Checkout() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle | checking | opening | error
    const [errMsg, setErrMsg] = useState("");
    const [paddleReady, setPaddleReady] = useState(false);

    // Load Paddle.js once, then initialize with the client-side token.
    useEffect(() => {
        if (window.Paddle) {
            try {
                window.Paddle.Environment.set("production");
                window.Paddle.Initialize({ token: PADDLE_CLIENT_TOKEN });
                setPaddleReady(true);
            } catch (e) {
                console.error("Paddle init failed", e);
            }
            return;
        }

        const script = document.createElement("script");
        script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
        script.async = true;
        script.onload = () => {
            try {
                window.Paddle.Environment.set("production");
                window.Paddle.Initialize({ token: PADDLE_CLIENT_TOKEN });
                setPaddleReady(true);
            } catch (e) {
                console.error("Paddle init failed", e);
            }
        };
        script.onerror = () => console.error("Paddle.js failed to load");
        document.body.appendChild(script);
    }, []);

    const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

    const handleSubscribe = async () => {
        const clean = email.trim();
        if (!validEmail(clean)) {
            setStatus("error");
            setErrMsg("Please enter a valid email address.");
            return;
        }
        if (!paddleReady || !window.Paddle) {
            setStatus("error");
            setErrMsg("Checkout is still loading — give it a second and try again.");
            return;
        }

        setStatus("checking");
        setErrMsg("");

        // 1) eligibility lookup — never blocks checkout; null is a normal outcome
        let discountId = null;
        try {
            const res = await fetch(ELIGIBILITY_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: clean })
            });
            if (res.ok) {
                const data = await res.json();
                // contract: { "discount_id": "dsc_..." } or { "discount_id": null }
                if (data && typeof data.discount_id === "string") {
                    discountId = data.discount_id;
                }
            }
            // any non-200 / parse issue -> proceed with no discount rather than blocking a sale
        } catch (e) {
            console.error("eligibility lookup failed, opening checkout without discount", e);
        }

        // 2) open Paddle checkout
        setStatus("opening");
        const items = [{ priceId: PRICE_ID, quantity: 1 }];
        const openOpts = {
            items,
            customer: { email: clean },
            settings: {
                displayMode: "overlay",
                theme: "dark",
                successUrl: "https://daevonai.com/success.html"
            }
        };
        if (discountId) openOpts.discountId = discountId;

        try {
            window.Paddle.Checkout.open(openOpts);
            // Paddle takes over in an overlay; reset our button state
            setStatus("idle");
        } catch (e) {
            console.error("Paddle.Checkout.open failed", e);
            setStatus("error");
            setErrMsg(
                "Something went wrong opening checkout. Please email contact.daevonai@gmail.com and we'll help."
            );
        }
    };

    const busy = status === "checking" || status === "opening";

    return (
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
            <div style={{
                display: "flex",
                gap: "6px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap"
            }}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") handleSubscribe(); }}
                    placeholder="your@email.com"
                    aria-label="Email address"
                    disabled={busy}
                    style={{
                        padding: "16px 18px",
                        width: "320px",
                        maxWidth: "100%",
                        border: `1px solid ${C.border}`,
                        background: "#0d0b07",
                        color: C.text,
                        outline: "none",
                        borderRadius: "4px",
                        fontSize: "16px"
                    }}
                />
                <button
                    onClick={handleSubscribe}
                    disabled={busy}
                    style={{
                        background: C.accent,
                        border: "none",
                        padding: "16px 28px",
                        color: "#fff",
                        cursor: busy ? "default" : "pointer",
                        opacity: busy ? 0.6 : 1,
                        letterSpacing: "0.05em",
                        borderRadius: "4px",
                        fontSize: "16px"
                    }}
                >
                    {status === "checking" ? "Checking\u2026"
                        : status === "opening" ? "Opening checkout\u2026"
                        : "Subscribe \u2014 $5/month"}
                </button>
            </div>

            <p style={{
                margin: "14px 0 0",
                fontSize: "13px",
                color: C.dim,
                lineHeight: "1.6"
            }}>
                Founder and Supporter discounts are applied automatically at checkout if you qualify.
                Payments are securely handled by Paddle, our authorized reseller.
            </p>

            {status === "error" && (
                <p style={{ margin: "12px 0 0", fontSize: "14px", color: C.warn }}>
                    {errMsg}
                </p>
            )}
        </div>
    );
}
