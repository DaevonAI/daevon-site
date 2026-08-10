import { useState } from "react";

export default function Hero() {
    const [showTip, setShowTip] = useState(false);

    return (
        <section style={{
            padding: "140px 20px",
            textAlign: "center",
            background: "#1A1510",
            color: "#f5f5f5"
        }}>

            <p style={{
                letterSpacing: "0.2em",
                fontSize: "12px",
                marginBottom: "20px",
                color: "#B84A28"
            }}>
                DEVELOPMENT GOVERNANCE INFRASTRUCTURE
            </p>

            <h1 style={{
                fontSize: "clamp(42px, 6vw, 80px)",
                fontWeight: "300",
                lineHeight: "1.1",
                marginBottom: "30px",
                color: "#EEE0CC"
            }}>
                Your Unreal project,
                <br />
                <span style={{ color: "#B84A28", fontStyle: "italic" }}>
                    structurally sound.
                </span>
            </h1>

            <p style={{
                maxWidth: "600px",
                margin: "0 auto 40px",
                lineHeight: "1.6",
                color: "#bbb"
            }}>
                Daevon reads your whole Unreal project and maps how every file, class, and module
                actually fits together. Daevon shows you where the structure is weak &mdash; before
                the whole project comes crashing down.
            </p>

            {/* ---- action buttons ---- */}
            <div style={{
                display: "flex",
                gap: "14px",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "16px"
            }}>
                <a href="#pricing" style={{
                    display: "inline-block",
                    background: "#B84A28",
                    color: "#fff",
                    padding: "16px 32px",
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontSize: "16px",
                    letterSpacing: "0.05em"
                }}>
                    Become a Founder &mdash; $5/month
                </a>

                <a
                    href="https://github.com/DaevonAI/Daevon-releases/releases/tag/v0.1.0-alpha.1"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        display: "inline-block",
                        background: "transparent",
                        color: "#EEE0CC",
                        padding: "16px 32px",
                        borderRadius: "4px",
                        textDecoration: "none",
                        fontSize: "16px",
                        letterSpacing: "0.05em",
                        border: "1px solid #2f261d"
                    }}
                >
                    Download for Windows
                </a>
            </div>

            {/* download guidance + alpha note */}
            <p style={{
                maxWidth: "540px",
                margin: "0 auto",
                fontSize: "13px",
                color: "#A09078",
                lineHeight: "1.6"
            }}>
                On the release page, open <strong style={{ color: "#EEE0CC" }}>Assets</strong> and
                download{" "}
                <strong style={{ color: "#EEE0CC" }}>Daevon-Alpha-v0.1.0-Windows-x64.zip</strong>.
                Windows x64, built for Unreal Engine 5.4.4. Daevon is currently in alpha release.
            </p>

            {/* SmartScreen heads-up — hover on desktop, tap on mobile */}
            <div style={{ marginTop: "10px", position: "relative", display: "inline-block" }}>
                <button
                    type="button"
                    onMouseEnter={() => setShowTip(true)}
                    onMouseLeave={() => setShowTip(false)}
                    onClick={() => setShowTip((v) => !v)}
                    aria-label="Windows install note"
                    style={{
                        background: "none",
                        border: "none",
                        color: "#A09078",
                        fontSize: "12px",
                        cursor: "pointer",
                        textDecoration: "underline dotted",
                        textUnderlineOffset: "3px",
                        padding: 0,
                        fontFamily: "inherit"
                    }}
                >
                    Seeing a Windows warning on launch?
                </button>

                {showTip && (
                    <div
                        role="tooltip"
                        style={{
                            position: "absolute",
                            top: "26px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "300px",
                            maxWidth: "80vw",
                            background: "#222018",
                            border: "1px solid #2f261d",
                            borderRadius: "8px",
                            padding: "14px 16px",
                            fontSize: "13px",
                            lineHeight: "1.6",
                            color: "#d6cbbb",
                            textAlign: "left",
                            zIndex: 10,
                            boxShadow: "0 8px 24px rgba(0,0,0,0.4)"
                        }}
                    >
                        Daevon is a new alpha build, so Windows may show{" "}
                        <strong style={{ color: "#EEE0CC" }}>&ldquo;Windows protected your PC.&rdquo;</strong>{" "}
                        That&rsquo;s the standard notice for newly-released software, not a problem with
                        Daevon. To continue, click{" "}
                        <strong style={{ color: "#EEE0CC" }}>More info</strong> &rarr;{" "}
                        <strong style={{ color: "#EEE0CC" }}>Run anyway</strong>.
                    </div>
                )}
            </div>

        </section>
    );
}
