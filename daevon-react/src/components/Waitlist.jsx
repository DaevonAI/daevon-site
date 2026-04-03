import { useState } from "react";

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ marginTop: "30px"}}>
        <p>Welcome to Daevon. We’ll reach out when we open early access.</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "40px" }}>
        <form
        name="waitlist"
        method="POST"
        data-netlify="true"
        onSubmit={() => setSubmitted(true)}
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px"
        }}
        >
        <input type="hidden" name="form-name" value="waitlist" />

        <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            style={{
            padding: "16px 18px",
            width: "320px",
            border: "1px solid #2a2a2a",   // darker, less noisy
            background: "#0d0d0d",
            color: "#f5f5f5",
            outline: "none",
            borderRadius: "4px"
            }}
        />

        <button
            type="submit"
            style={{
            background: "#c47a2c",
            border: "none",
            padding: "16px 28px",
            color: "#fff",
            cursor: "pointer",
            letterSpacing: "0.1em",
            borderRadius: "4px"
            }}
        >
            Request Early Access
        </button>
        </form>
    </div>
    );
}