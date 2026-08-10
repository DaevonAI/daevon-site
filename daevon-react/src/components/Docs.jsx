export default function Docs() {
    const card = {
        flex: "1 1 240px",
        maxWidth: "300px",
        background: "#222018",
        border: "1px solid #2f261d",
        borderRadius: "12px",
        padding: "26px 24px",
        textAlign: "left",
        textDecoration: "none",
        color: "inherit",
        display: "block"
    };
    const title = { color: "#EEE0CC", fontSize: "18px", margin: "0 0 8px", fontWeight: 600 };
    const desc = { color: "#A09078", fontSize: "14px", margin: 0, lineHeight: "1.6" };
    const arrow = { color: "#D9714A", fontSize: "14px", marginTop: "14px", display: "block" };

    return (
        <section style={{
            padding: "90px 20px",
            background: "#1A1510",
            color: "#ddd",
            textAlign: "center"
        }}>
            <h2 style={{ color: "#EEE0CC", fontWeight: 400, margin: "0 0 12px" }}>
                Getting started
            </h2>
            <p style={{ margin: "0 auto 40px", maxWidth: "560px", lineHeight: "1.7", color: "#bbb" }}>
                Everything you need to install Daevon, run your first analysis, and understand what it
                finds.
            </p>

            <div style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
                maxWidth: "680px",
                margin: "0 auto"
            }}>
                <a href="/quickstart.html" style={card}>
                    <p style={title}>Quick Start</p>
                    <p style={desc}>
                        Download, install the plugin and runtime, launch Daevon, and run your first
                        project analysis.
                    </p>
                    <span style={arrow}>Read the Quick Start &rarr;</span>
                </a>

                <a href="/howtouse.html" style={card}>
                    <p style={title}>How to Use Daevon</p>
                    <p style={desc}>
                        Project Health, Findings, the structural rules Daevon checks, commands, and the
                        Project Knowledge Core.
                    </p>
                    <span style={arrow}>Read the guide &rarr;</span>
                </a>
            </div>
        </section>
    );
}
