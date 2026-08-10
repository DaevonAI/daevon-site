export default function BugReportCTA() {
    return (
        <section style={{
            padding: "90px 20px",
            background: "#131008",
            color: "#ddd",
            textAlign: "center"
        }}>
            <div style={{ maxWidth: "620px", margin: "0 auto" }}>
                <h2 style={{ color: "#EEE0CC", fontWeight: 400, margin: "0 0 14px" }}>
                    Found a bug?
                </h2>
                <p style={{ margin: "0 0 32px", lineHeight: "1.7", color: "#bbb" }}>
                    Daevon is in alpha, and your reports are how it gets better. It only takes a
                    minute, and it genuinely helps.
                </p>

                <a href="/bugreport.html" style={{
                    display: "inline-block",
                    background: "#B84A28",
                    color: "#fff",
                    padding: "16px 40px",
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontSize: "17px",
                    letterSpacing: "0.04em"
                }}>
                    Report a bug
                </a>
            </div>
        </section>
    );
}
