import { motion } from "framer-motion";

export function StatsAboutStrip() {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">
              A Longstanding Advisor to Business Families
            </span>
            <p className="text-lg text-foreground/80 leading-relaxed font-light mb-12">
              This advisory practice brings decades of international experience to the challenges that shape family enterprises: leadership continuity, board governance, ownership dynamics, and strategic direction. Having worked with hundreds of businesses across 4 continents, the focus is always the same: help families and boards make sound decisions that protect legacy while enabling future growth.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-4xl md:text-5xl font-serif text-primary mb-2">$2B+</div>
                <div className="text-sm font-medium tracking-wide text-muted-foreground uppercase">Since 1989</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif text-primary mb-2">500+</div>
                <div className="text-sm font-medium tracking-wide text-muted-foreground uppercase">Clients</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif text-primary mb-2">30+</div>
                <div className="text-sm font-medium tracking-wide text-muted-foreground uppercase">Countries</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 aspect-[4/3] relative overflow-hidden"
          >
            <img 
              src="/attached_assets/generated_images/board_meeting.jpg" 
              alt="Board Meeting" 
              className="object-cover w-full h-full"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              }}
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
