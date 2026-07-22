import { motion } from "framer-motion";
import { Star } from "lucide-react";
import drHalukPhoto from "@assets/image_1784746982546.png";

export function Testimonial() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center gap-1 mb-10 text-primary">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={24} fill="currentColor" />
            ))}
          </div>
          
          <blockquote className="text-2xl md:text-4xl font-serif italic text-foreground leading-relaxed mb-12">
            "Since 1989, advising hundreds of businesses across 4 continents and more than 30 countries with trusted counsel on governance, succession, and board leadership."
          </blockquote>
          
          <div className="flex items-center justify-center gap-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border border-border">
              <img src={drHalukPhoto} alt="Dr. Haluk Alacaklioglu" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <div className="font-serif font-medium text-lg text-foreground">Global Advisory Record</div>
              <div className="text-sm font-light text-muted-foreground">Family Business and Board Governance Expert Advisor<br />International consulting practice</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
