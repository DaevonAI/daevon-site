export default function Problem() {
    return (
        <section style={{
            padding: "100px 20px",
            background: "#222018",
            color: "#ddd",
            textAlign: "center"
        }}>
            <h2 style={{ marginBottom: "20px", color: "#f5f5f5" }}>
                Most Unreal projects break
            </h2>
            <h2 style={{ marginBottom: "12px", color: "#7c7c7c", fontStyle:"italic", marginBottom: "20px"}}>
                silently
            </h2>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
                Dependency issues, architectural drift, and module violations don’t show up
                until late in development — when they’re expensive to fix.
            </p>
        </section>
    );
}