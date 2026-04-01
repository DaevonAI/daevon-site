export default function Solution() {
    return (
        <section style={{
            padding: "100px 20px",
            background: "#1a1a1a",
            color: "#eee",
            textAlign: "center"
        }}>
            <h2 style={{ marginBottom: "20px" }}>
                Daevon gives you structural clarity.
            </h2>

            <p style={{ maxWidth: "600px", margin: "0 auto 40px" }}>
                Instead of guessing what’s wrong, Daevon builds a structural model
                of your project and identifies issues before they break your workflow.
            </p>

            <div style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                flexWrap: "wrap"
            }}>
                <div>Dependency Graph</div>
                <div>Health Score</div>
                <div>Rule Engine</div>
            </div>
        </section>
    );
}