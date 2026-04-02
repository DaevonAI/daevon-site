import { useState } from "react";

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <p>Welcome to Daevon. We’ll reach out when we open early access.</p>;
  }

  return (
    <form
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
      />

      <button type="submit">Join</button>
    </form>
  );
}