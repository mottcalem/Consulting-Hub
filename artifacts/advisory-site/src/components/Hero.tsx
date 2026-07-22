import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 md:pt-0 md:pb-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10 mix-blend-multiply" />
        <img 
          src="/attached_assets/generated_images/hero_background.jpg" 
          alt="Executive Boardroom" 
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
          }}
        />
      </div>

      <div className="container relative z-20 mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl bg-foreground/90 text-background p-10 md:p-16 backdrop-blur-sm border-l-4 border-primary">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              Globally acclaimed advisory support for business-owning families, boards, and multi-generational enterprises.
            </h1>
            <p className="text-lg md:text-xl text-background/80 font-light leading-relaxed mb-10 max-w-2xl">
              Since 1989, serving clients across 4 continents and more than 30 countries with strategic counsel grounded in governance, succession, and leadership continuity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="rounded-none font-serif text-lg tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8"
                onClick={() => scrollTo("contact")}
              >
                Book Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-none font-serif text-lg tracking-wide border-background/30 text-foreground hover:bg-background hover:text-foreground h-14 px-8 bg-background/10 backdrop-blur-md"
                onClick={() => scrollTo("services")}
              >
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
