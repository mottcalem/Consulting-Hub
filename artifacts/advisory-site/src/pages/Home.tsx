import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AdvisoryServices } from "@/components/AdvisoryServices";
import { StatsAboutStrip } from "@/components/StatsAboutStrip";
import { CoreOfferings } from "@/components/CoreOfferings";
import { BoardExperience } from "@/components/BoardExperience";
import { Testimonial } from "@/components/Testimonial";
import { AboutDrHaluk } from "@/components/AboutDrHaluk";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <AdvisoryServices />
        <StatsAboutStrip />
        <CoreOfferings />
        <BoardExperience />
        <Testimonial />
        <AboutDrHaluk />
        <FaqAccordion />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
