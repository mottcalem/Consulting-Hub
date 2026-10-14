import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function FaqSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="faq" className="scroll-mt-28 py-20 md:py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-3xl mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-5 leading-tight">
            {t.faq.heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          {t.faq.items.map((faq, index) => (
            <Dialog key={`${lang}-${index}`}>
              <DialogTrigger asChild>
                <button className="group flex w-full items-start gap-4 border-t border-border py-6 text-left transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4">
                  <span className="pt-1 text-xs font-semibold tracking-widest text-primary/70" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-serif text-lg md:text-xl leading-relaxed">{faq.q}</span>
                  <ArrowUpRight aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </DialogTrigger>
              <DialogContent closeLabel={lang === "tr" ? "Kapat" : "Close"} className="w-[calc(100%-2rem)] max-w-3xl rounded-none p-6 sm:p-10">
                <DialogHeader className="text-left pr-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{t.faq.heading} · {String(index + 1).padStart(2, "0")}</p>
                  <DialogTitle className="font-serif text-2xl sm:text-3xl font-normal leading-snug">{faq.q}</DialogTitle>
                </DialogHeader>
                <DialogDescription asChild>
                  <div className="space-y-4 text-base sm:text-lg text-foreground/75 leading-relaxed font-light">
                    {faq.a.split("\n\n").map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
                  </div>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
