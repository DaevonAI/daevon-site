import Waitlist from "./Waitlist";

/* --- Daevon website tokens (warm) ---
   bg #1A1510 · surface #222018 · border #2f261d
   text #EEE0CC · dim #A09078 · accent #B84A28 / #D9714A */

const C = {
    surface: "#222018",
    border: "#2f261d",
    text: "#EEE0CC",
    dim: "#A09078",
    accent: "#B84A28",
    accentText: "#D9714A"
};

function Tier({ name, badge, rate, rateSmall, label, note, noteBottom, featured }) {
    return (
        <div style={{
            background: C.surface,
            border: featured ? `2px solid ${C.accent}` : `1px solid ${C.border}`,
            borderRadius: "12px",
            padding: featured ? "27px 25px" : "28px 26px",
            display: "flex",
            flexDirection: "column",
            flex: "1 1 240px",
            maxWidth: "320px",
            textAlign: "left"
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
                marginBottom: "20px"
            }}>
                <span style={{ fontSize: "17px", fontWeight: 600, color: C.text }}>{name}</span>
                {badge && (
                    <span style={{
                        fontSize: "12px",
                        padding: "4px 11px",
                        borderRadius: "6px",
                        whiteSpace: "nowrap",
                        background: "rgba(184, 74, 40, 0.12)",
                        color: C.accentText,
                        border: "1px solid rgba(184, 74, 40, 0.3)"
                    }}>{badge}</span>
                )}
            </div>

            <div style={{
                fontSize: rateSmall ? "30px" : "42px",
                fontWeight: 600,
                color: C.text,
                lineHeight: "1.05"
            }}>{rate}</div>
            <div style={{ fontSize: "14px", color: C.dim, marginTop: "6px", lineHeight: "1.5" }}>
                {label}
            </div>

            {note && (
                <div style={{
                    fontSize: "13px",
                    color: C.dim,
                    marginTop: noteBottom ? "auto" : "20px",
                    paddingTop: noteBottom ? "20px" : 0,
                    lineHeight: "1.6"
                }}>{note}</div>
            )}
        </div>
    );
}

export default function Pricing() {
    return (
        <section style={{
            padding: "100px 20px",
            background: "#1A1510",
            color: "#ddd",
            textAlign: "center"
        }}>
            <h2 style={{ marginBottom: "20px", color: C.text }}>Alpha pricing</h2>

            <p style={{ maxWidth: "620px", margin: "0 auto 6px", lineHeight: "1.7" }}>
                Daevon is in early alpha. It has bugs, it changes often, and it does one thing
                well: it tells you where your project stopped matching what it declares.
            </p>
            <p style={{ maxWidth: "620px", margin: "0 auto 56px", lineHeight: "1.7", color: C.accentText }}>
                It&rsquo;s priced accordingly.
            </p>

            {/* ---- the three numbers ---- */}
            <div style={{
                display: "flex",
                gap: "48px",
                justifyContent: "center",
                flexWrap: "wrap",
                maxWidth: "820px",
                margin: "0 auto 72px"
            }}>
                {[
                    ["Free", "Unlimited chat, health scoring, and memory querying. No card, no trial clock.", null],
                    ["$5", "Everything free, plus a full structural analysis of your project every 60 days.", "/month"],
                    ["$12", "A single analysis, no subscription. Unchanged project, cached result, no charge.", null]
                ].map(([price, blurb, suffix]) => (
                    <div key={price} style={{ minWidth: "200px", maxWidth: "240px" }}>
                        <p style={{ fontSize: "38px", color: C.text, margin: "0 0 8px", fontWeight: 300 }}>
                            {price}
                            {suffix && <span style={{ fontSize: "17px", color: C.dim }}>{suffix}</span>}
                        </p>
                        <p style={{ margin: 0, lineHeight: "1.7", fontSize: "15px" }}>{blurb}</p>
                    </div>
                ))}
            </div>

            {/* ---- tier panels ---- */}
            <h3 style={{ color: C.text, fontWeight: 400, fontSize: "22px", margin: "0 0 24px" }}>
                Subscribe during the alpha, pay less
            </h3>

            <div style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "stretch",
                maxWidth: "1000px",
                margin: "0 auto"
            }}>
                <Tier
                    featured
                    name="Founder"
                    badge="100 slots"
                    rate="50% off"
                    note="The first 100 people to subscribe. You get a permanent Founder number, #001 to #100 — it stays yours."
                />
                <Tier
                    name="Supporter"
                    badge="Early"
                    rate="25% off"
                    note="Everyone who subscribes during the alpha after the Founder slots are gone. No cap, no countdown."
                />
                <Tier
                    name="Standard"
                    rate="List price"
                    rateSmall
                    label="no discount applied"
                    note="For subscriptions started after the alpha ends."
                    noteBottom
                />
            </div>

            <p style={{
                maxWidth: "1000px",
                margin: "20px auto 0",
                fontSize: "14px",
                color: C.dim,
                lineHeight: "1.6"
            }}>
                Founder and Supporter rates apply to subscriptions and standalone purchases alike.
            </p>

            {/* ---- what happens at 1.0 ---- */}
            <div style={{
                borderTop: `1px solid ${C.border}`,
                maxWidth: "620px",
                margin: "72px auto 0",
                paddingTop: "48px"
            }}>
                <h3 style={{ color: C.text, fontWeight: 400, fontSize: "22px", margin: "0 0 16px" }}>
                    What happens when Daevon 1.0 ships
                </h3>
                <p style={{ margin: "0 0 18px", lineHeight: "1.7" }}>
                    $5 is an alpha price for alpha software. When Daevon 1.0 ships, we expect it to
                    cost around <strong style={{ color: C.text }}>$20/month</strong>, and some things
                    included today will be sold separately.
                </p>
                <p style={{ margin: "0 0 18px", lineHeight: "1.7" }}>
                    We&rsquo;d rather say this plainly now than surprise you later:
                    <strong style={{ color: C.text }}> your bill will go up.</strong> Your discount is
                    a percentage, not a frozen price.
                </p>
                <p style={{ margin: "0 0 18px", lineHeight: "1.7", color: C.accentText }}>
                    At $20, a Founder pays $10 and a Supporter pays $15 &mdash; and that same
                    percentage applies to anything we sell you afterward.
                </p>
                <p style={{ margin: 0, lineHeight: "1.7", fontSize: "15px", color: C.dim }}>
                    We&rsquo;ll announce any major pricing change at least 90 days before it takes
                    effect. There&rsquo;s no annual plan during the alpha &mdash; Daevon is too young
                    for us to take a year of your money in good conscience.
                </p>
            </div>

            {/* ---- CTA ---- */}
            <div style={{ maxWidth: "620px", margin: "64px auto 0" }}>
                <p style={{ margin: "0 0 6px", lineHeight: "1.7" }}>
                    Daevon isn&rsquo;t on sale yet. Join the waitlist and we&rsquo;ll email you when
                    it is.
                </p>
                <p style={{ margin: "0 0 8px", lineHeight: "1.7", fontSize: "15px", color: C.dim }}>
                    The waitlist isn&rsquo;t a Founder slot &mdash; Founders are the first 100 people
                    to actually subscribe. We&rsquo;ll give you a heads-up before that starts.
                </p>
                <Waitlist />
            </div>
        </section>
    );
}
