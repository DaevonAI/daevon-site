export default function Waitlist() {
    return (
        <section style={{
            padding: "100px 20px",
            textAlign: "center",
            background: "#111",
            color: "#eee"
        }}>
            <h2>Join the waitlist</h2>

            <form
                name="waitlist"
                method="POST"
                data-netlify="true"
                onSubmit={(e) => {
                    e.preventDefault();
                    alert("Submitted (Netlify will capture this after deploy)");
                }}
            >
                <input type="hidden" name="form-name" value="waitlist" />

                <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    style={{
                        padding: "12px",
                        margin: "10px",
                        width: "250px"
                    }}
                />

                <button type="submit">
                    Join
                </button>
            </form>
        </section>
    );
}