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

            <p style={{ maxWidth: "600px", margin: "0 auto 24px", lineHeight: "1.7" }}>
                You wire two parts together to get something working, and tell yourself
                you&rsquo;ll tidy it up later. Then you move on. Months pass, and you&rsquo;ve
                forgotten &mdash; along with every shortcut since. Nothing warns you. The project
                still builds. Until one day it doesn&rsquo;t, and untangling it costs weeks.
            </p>

            <p style={{
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.7",
                color: "#A09078"
            }}>
                Daevon keeps track of the small things, so they don&rsquo;t build up into a disaster.
            </p>
        </section>
    );
}
