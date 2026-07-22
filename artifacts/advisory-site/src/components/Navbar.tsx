import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span 
            className="text-xl md:text-2xl font-serif font-semibold tracking-tight cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Dr. Haluk Alacaklioglu
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors">Services</button>
          <button onClick={() => scrollTo("experience")} className="hover:text-primary transition-colors">Insights</button>
          <button onClick={() => scrollTo("about")} className="hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors">Contact</button>
          <Button 
            className="ml-4 rounded-none font-serif tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            onClick={() => scrollTo("contact")}
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border p-6 flex flex-col gap-4 shadow-xl">
          <button onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMobileMenuOpen(false); }} className="text-left py-2 hover:text-primary">Home</button>
          <button onClick={() => scrollTo("services")} className="text-left py-2 hover:text-primary">Services</button>
          <button onClick={() => scrollTo("experience")} className="text-left py-2 hover:text-primary">Insights</button>
          <button onClick={() => scrollTo("about")} className="text-left py-2 hover:text-primary">About</button>
          <button onClick={() => scrollTo("contact")} className="text-left py-2 hover:text-primary">Contact</button>
          <Button 
            className="mt-4 rounded-none font-serif tracking-wide w-full"
            onClick={() => scrollTo("contact")}
          >
            Book Now
          </Button>
        </div>
      )}
    </nav>
  );
}
