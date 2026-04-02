import { useState } from "react";

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ marginTop: "30px" }}>
        <p>Welcome to Daevon. We’ll reach out when we open early access.</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <form
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}
        name="waitlist"
        method="POST"
        data-netlify="true"
        onSubmit={() => setSubmitted(true)}
      >
        <input type="hidden" name="form-name" value="waitlist" />

        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          style={{
            padding: "12px",
            marginRight: "10px"
          }}
        />

        <button type="submit">Join</button>
      </form>
    </div>
  );
}