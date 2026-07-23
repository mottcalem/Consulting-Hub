import drHalukPhoto from "@assets/image_1784788641739.png";

export function AboutDrHaluk() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" style={{ background: "hsl(33,31%,93%)", padding: "80px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px", display: "flex", gap: 64, alignItems: "flex-start" }}>

        {/* LEFT — text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ color: "#8b5a5a", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 13, marginBottom: 12 }}>
            About
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#2c2c2c", marginBottom: 28, lineHeight: 1.2 }}>
            About Dr. Haluk Alacaklioglu
          </h2>
          <p style={{ fontSize: 17, color: "#555", fontWeight: 300, lineHeight: 1.8, marginBottom: 16 }}>
            Haluk graduated with honors from Harvard Business School and later earned his PhD, with a thesis in Corporate Governance and Family Business, at AUL, London.
          </p>
          <p style={{ fontSize: 17, color: "#555", fontWeight: 300, lineHeight: 1.8, marginBottom: 40 }}>
            He started his career in multinational companies around the world, including P&amp;G and Philip Morris International, and has worked as a manager in the USA, Europe and the Middle East.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #ccc", marginBottom: 36 }} />

          <p style={{ color: "#8b5a5a", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 13, marginBottom: 12 }}>
            Career
          </p>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 600, color: "#2c2c2c", marginBottom: 16 }}>
            Global executive and advisory experience
          </h3>
          <p style={{ fontSize: 17, color: "#555", fontWeight: 300, lineHeight: 1.8, marginBottom: 28 }}>
            He opened offices in Eastern Europe and the Middle East as the Managing Partner of Egon Zehnder International and supported hundreds of companies in identifying and evaluating senior managers for over a decade.
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px" }}>
            {[
              "P&G and Philip Morris International",
              "Management roles across the USA, Europe and the Middle East",
              "Senior leadership assessment for hundreds of companies",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12, fontSize: 16, color: "#555", fontWeight: 300 }}>
                <span style={{ color: "#8b5a5a", marginTop: 2, flexShrink: 0 }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo("contact")}
            style={{ background: "#8b5a5a", color: "#fff", border: "none", padding: "14px 36px", fontSize: 16, fontFamily: "'Playfair Display', serif", letterSpacing: "0.05em", cursor: "pointer" }}
          >
            Contact
          </button>
        </div>

        {/* RIGHT — photo only */}
        <div style={{ width: 380, flexShrink: 0 }}>
          <img
            src={drHalukPhoto}
            alt="Dr. Haluk Alacaklioglu"
            style={{ width: "100%", height: "auto", display: "block", boxShadow: "8px 8px 0 rgba(139,90,90,0.2)" }}
          />
        </div>

      </div>
    </section>
  );
}
