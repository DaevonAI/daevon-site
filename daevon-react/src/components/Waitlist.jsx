import { useState } from "react";

export default function Waitlist() {
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const body = new URLSearchParams(new FormData(form)).toString();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        setStatus("done");
      })
      .catch(() => setStatus("error"));
  };

  if (status === "done") {
    return (
      <div style={{ marginTop: "30px" }}>
        <p>Welcome to Daevon. We&rsquo;ll reach out when we open early access.</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "40px" }}>
      <form
        name="waitlist"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "6px",
          flexWrap: "wrap"
        }}
      >
        <input type="hidden" name="form-name" value="waitlist" />

        {/* Honeypot — hidden from people, irresistible to bots */}
        <p style={{ display: "none" }}>
          <label>
            Don&rsquo;t fill this out if you&rsquo;re human: <input name="bot-field" />
          </label>
        </p>

        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          aria-label="Email address"
          required
          disabled={status === "sending"}
          style={{
            padding: "16px 18px",
            width: "320px",
            border: "1px solid #2a2a2a",
            background: "#0d0d0d",
            color: "#f5f5f5",
            outline: "none",
            borderRadius: "4px"
          }}
        />

        <button
          type="submit"
          disabled={status === "sending"}
          style={{
            background: "#c47a2c",
            border: "none",
            padding: "16px 28px",
            color: "#fff",
            cursor: status === "sending" ? "default" : "pointer",
            opacity: status === "sending" ? 0.6 : 1,
            letterSpacing: "0.1em",
            borderRadius: "4px"
          }}
        >
          {status === "sending" ? "Sending\u2026" : "Request Early Access"}
        </button>
      </form>

      {status === "error" && (
        <p style={{ marginTop: "16px", color: "#c47a2c", fontSize: "14px" }}>
          Something went wrong on our end. Please email{" "}
          <a href="mailto:contact.daevonai@gmail.com" style={{ color: "#c47a2c" }}>
            contact.daevonai@gmail.com
          </a>{" "}
          and we&rsquo;ll add you manually.
        </p>
      )}
    </div>
  );
}
