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
            <h2 style={{ marginBottom: "20px", color: "#7c7c7c", fontStyle: "italic" }}>
                silently
            </h2>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
                Dependencies tangle, module boundaries erode, and your architecture drifts from
                what you designed. These structural risks accumulate quietly — nothing announces
                them until late in development, when they&rsquo;re expensive to fix.
            </p>
        </section>
    );
}
