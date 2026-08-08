import { SiWhatsapp } from "react-icons/si";

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-serif mb-3">Dr. Haluk Alacaklıoğlu</h2>
            <p className="text-background/50 font-light text-sm leading-relaxed mb-2">
              Family Business Governance Advisor
            </p>
            <p className="text-background/40 font-light text-sm leading-relaxed">
              Advisory practice since 2000. Family governance, succession, ownership,
              and board effectiveness across five continents.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-background/40 text-xs font-medium tracking-widest uppercase mb-4">Navigation</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "About", anchor: "about" },
                { label: "How I Help", anchor: "services" },
                { label: "Family & Shareholder Governance", anchor: "governance" },
                { label: "Succession & Next Generation", anchor: "succession" },
                { label: "Business & Board Governance", anchor: "board" },
                { label: "Contact", anchor: "contact" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.anchor)}
                  className="text-background/65 hover:text-white transition-colors text-left text-sm font-light"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-background/40 text-xs font-medium tracking-widest uppercase mb-4">Contact</p>
            <p className="text-background/60 font-light text-sm leading-relaxed mb-6">
              For a confidential preliminary discussion about your family business priorities.
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="mb-4 w-full py-3 bg-[hsl(0,20%,40%)] text-white font-serif text-xs tracking-widest uppercase hover:bg-[hsl(0,20%,33%)] transition-colors text-center"
            >
              Request a Confidential Discussion
            </button>
            <a
              href="https://wa.me/905321234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-background/60 hover:text-[#25D366] transition-colors text-sm"
            >
              <SiWhatsapp size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/15 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/30 text-xs font-light">
            &copy; {new Date().getFullYear()} Dr. Haluk Alacaklıoğlu. All rights reserved.
          </p>
          <p className="text-background/25 text-xs font-light">
            FGB — Family Business Governance, LLP · Surrey, UK
          </p>
        </div>
      </div>
    </footer>
  );
}
