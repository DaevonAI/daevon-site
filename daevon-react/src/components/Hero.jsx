import Waitlist from "./Waitlist";

export default function Hero() {
    const handleWaitlist = () => {
        alert("Waitlist coming soon");
    };

    return (
        <section style={{
            padding: "140px 20px",
            textAlign: "center",
            background: "#1A1510",
            color: "#f5f5f5"
        }}>
            
            <p style={{
                letterSpacing: "0.2em",
                fontSize: "12px",
                marginBottom: "20px",
                color: "#B84A28"
            }}>
                DEVELOPMENT GOVERNANCE INFRASTRUCTURE
            </p>

            <h1 style={{
                fontSize: "clamp(42px, 6vw, 80px)",
                fontWeight: "300",
                lineHeight: "1.1",
                marginBottom: "30px",
                color: "#EEE0CC"
            }}>
                Your Unreal project,
                <br />
                <span style={{ color: "#B84A28", fontStyle:"italic"}}>
                    structurally sound.
                </span>
            </h1>

            <p style={{
                maxWidth: "600px",
                margin: "0 auto 40px",
                lineHeight: "1.6",
                color: "#bbb"
            }}>
                Daevon audits the structural health of Unreal Engine projects —
                detecting dependency violations, module boundary issues, and architectural drift before they become production problems.
            </p>

            <Waitlist />
        </section>
    );
}