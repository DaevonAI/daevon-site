export default function Problem() {
    return (
        <section style={{
            padding: "100px 20px",
            background: "#111",
            color: "#ddd",
            textAlign: "center"
        }}>
            <h2 style={{ marginBottom: "20px", color: "#f5f5f5" }}>
                Most Unreal projects break silently.
            </h2>

            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
                Dependency issues, architectural drift, and module violations don’t show up
                until late in development — when they’re expensive to fix.
            </p>
        </section>
    );
}