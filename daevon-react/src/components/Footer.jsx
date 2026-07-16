export default function Footer() {
    const linkStyle = {
        color: "#8b8073",
        textDecoration: "none",
        marginRight: "24px"
    };

    return (
        <footer style={{
            background: "#1A1510",
            borderTop: "1px solid #2f261d",
            padding: "40px 20px 56px",
            color: "#6f6559",
            fontSize: "14px",
            lineHeight: "1.7"
        }}>
            <div style={{ maxWidth: "720px", margin: "0 auto" }}>

                <p style={{ margin: "0 0 20px" }}>
                    <a href="/terms.html" style={linkStyle}>Terms of Service</a>
                    <a href="/privacy.html" style={linkStyle}>Privacy Policy</a>
                    <a href="mailto:contact.daevonai@gmail.com" style={linkStyle}>Contact</a>
                </p>

                <p style={{ margin: "0 0 8px" }}>
                    Daevon is AI-assisted development software &mdash; not a human. Its output is
                    advisory guidance, not guaranteed fixes, and it never changes your project
                    without your explicit authority.
                </p>

                <p style={{ margin: "0 0 8px" }}>
                    Intended for adults and for professional, educational, or hobbyist software
                    development. Not directed to children under 13.
                </p>

                <p style={{ margin: "0 0 8px" }}>
                    Not affiliated with, endorsed by, or sponsored by Epic Games. Unreal Engine and
                    related marks belong to their respective owners.
                </p>

                <p style={{ margin: "20px 0 0", color: "#564e44" }}>
                    &copy; 2026 Daevon Systems LLC. All rights reserved.
                </p>

            </div>
        </footer>
    );
}
