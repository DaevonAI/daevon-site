export default function Solution() {
    return (
        <section style={{
            padding: "100px 20px",
            background: "#131008",
            color: "#eee",
            textAlign: "center"
        }}>
            <h2 style={{ marginBottom: "20px", color: "#A09078" }}>
                Daevon gives you structural clarity.
            </h2>

            <p style={{ maxWidth: "600px", margin: "0 auto 6px" }}>
                Instead of guessing, Daevon compares what your project declares its structure
                should be against what your code actually does, and shows you where the two
                disagree.
            </p>

            <p style={{
                maxWidth: "600px",
                margin: "0 auto 6px",
                color: "#D9714A"
            }}>
                You decide what to do about it.
            </p>

            <p style={{
                maxWidth: "600px",
                margin: "0 auto 40px",
                color: "#A09078"
            }}>
                Daevon does not.
            </p>

            <div style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                flexWrap: "wrap"
            }}>
                <div>Dependency Graph</div>
                <div>Health Score</div>
                <div>Module Boundaries</div>
            </div>
        </section>
    );
}
