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
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-2xl font-serif mb-4">Dr. Haluk Alacaklioglu</h2>
            <p className="text-background/60 font-light leading-relaxed">
              Family Business and Board Governance Expert Advisor. Since 1989, serving clients across 4 continents and more than 30 countries.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 text-center md:text-left">
            <div className="flex flex-col gap-3 text-sm font-medium tracking-wide">
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-background/80 hover:text-white transition-colors text-left uppercase">Home</button>
              <button onClick={() => scrollTo("about")} className="text-background/80 hover:text-white transition-colors text-left uppercase">About</button>
              <button onClick={() => scrollTo("services")} className="text-background/80 hover:text-white transition-colors text-left uppercase">Services</button>
              <button onClick={() => scrollTo("contact")} className="text-background/80 hover:text-white transition-colors text-left uppercase">Contact</button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-background/40 text-sm">
            &copy; {new Date().getFullYear()} Dr. Haluk Alacaklioglu. All rights reserved.
          </p>
          <a 
            href="https://wa.me/905321234567" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-background/80 hover:text-[#25D366] transition-colors"
          >
            <SiWhatsapp size={20} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
