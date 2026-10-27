import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SiWhatsapp, SiYoutube } from "react-icons/si";
import draftingIllustration from "@images/11.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function ContactForm() {
  const { t, lang } = useLanguage();
  const f = t.contact.fields;

  const formSchema = z.object({
    fullName: z.string().min(2, f.errors.nameRequired),
    email: z.string().email(f.errors.emailInvalid),
    company: z.string().optional(),
    position: z.string().optional(),
    phone: z.string().optional(),
    familyMember: z.string().optional(),
    shareholder: z.string().optional(),
    generation: z.string().optional(),
    message: z.string().optional(),
  });

  const [challenge, setChallenge] = useState<{ id: string; question: string } | null>(null);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const [website, setWebsite] = useState("");

  async function loadChallenge() {
    setChallenge(null);
    setCaptchaAnswer("");
    setCaptchaError(false);
    try {
      const response = await fetch("/api/contact/challenge", { cache: "no-store" });
      if (!response.ok) throw new Error("Challenge unavailable");
      const result = await response.json();
      if (typeof result.id !== "string" || typeof result.question !== "string") throw new Error("Invalid challenge");
      setChallenge(result);
    } catch {
      setCaptchaError(true);
    }
  }

  useEffect(() => { void loadChallenge(); }, []);

  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      position: "",
      phone: "",
      familyMember: "",
      shareholder: "",
      generation: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!challenge || !captchaAnswer.trim()) return;
    setIsLoading(true);
    setSubmitError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, captchaId: challenge.id, captchaAnswer, website }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null) as { message?: string } | null;
        throw new Error(result?.message);
      }

      form.reset();
      setIsSuccess(true);
    } catch (error) {
      void loadChallenge();
      setSubmitError(
        error instanceof Error && error.message
          ? error.message
          : lang === "tr"
            ? "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin."
            : "Your message could not be sent. Please try again later.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: context */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              {t.contact.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
              {t.contact.heading}
            </h2>
            <p className="text-[18px] text-foreground/70 font-light leading-relaxed mb-4">
              {t.contact.p1}
            </p>
            <p className="text-[18px] text-foreground/70 font-light leading-relaxed mb-10">
              {t.contact.p2}
            </p>

            <div className="flex gap-4 mb-10 text-foreground/70">
              {lang !== "tr" && (
                <MapPin className="mt-1 size-5 flex-shrink-0 text-primary" aria-hidden="true" />
              )}
              <address className="not-italic text-base font-light leading-relaxed">
                <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-foreground">
                  {t.contact.addressLabel}
                </span>
                {t.contact.addressLines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </address>
            </div>

            <div className="flex flex-col gap-5 mb-10">
              {t.contact.areas.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-1 bg-primary flex-shrink-0 rounded-full" />
                  <div>
                    <p className="font-medium text-sm text-foreground">{item.label}</p>
                    <p className="text-base text-muted-foreground font-light">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex w-fit flex-col items-stretch gap-3">
              <a
                href="https://wa.me/905322316609"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-7 py-3.5 text-sm font-medium hover:bg-[#20bd5a] transition-colors"
              >
                <SiWhatsapp size={20} />
                {t.contact.whatsapp}
              </a>
              <a
                href="https://www.youtube.com/@HalukAlacaklioglu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#FF0000] text-white px-7 py-3.5 text-sm font-medium hover:bg-[#d90000] transition-colors"
              >
                <SiYoutube size={20} />
                {t.contact.youtube}
              </a>
            </div>

            <div className="mt-8 overflow-hidden border border-border bg-card">
              <img
                src={draftingIllustration}
                alt="Drafting illustration"
                className="block w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start"
          >
            <div className="bg-card p-10 md:p-12 border border-border">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif mb-4">{t.contact.successTitle}</h3>
                  <p className="text-muted-foreground font-light">
                    {t.contact.successMsg}
                  </p>
                  <Button
                    variant="outline"
                    className="mt-8 rounded-none border-primary text-primary"
                    onClick={() => { setIsSuccess(false); setWebsite(""); void loadChallenge(); }}
                  >
                    {t.contact.sendAnother}
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">{f.name} *</FormLabel>
                          <FormControl>
                            <Input placeholder={f.namePlaceholder} className="rounded-none bg-background border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">{f.email} *</FormLabel>
                          <FormControl>
                            <Input placeholder={f.emailPlaceholder} type="email" className="rounded-none bg-background border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">{f.company}</FormLabel>
                          <FormControl>
                            <Input placeholder={f.companyPlaceholder} className="rounded-none bg-background border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">{f.position}</FormLabel>
                          <FormControl>
                            <Input placeholder={f.positionPlaceholder} className="rounded-none bg-background border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">{f.phone}</FormLabel>
                          <FormControl>
                            <Input placeholder={f.phonePlaceholder} type="tel" className="rounded-none bg-background border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="familyMember"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">{f.familyMember}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-none bg-background border-border focus:ring-primary">
                                <SelectValue placeholder={f.familyMemberPlaceholder} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-none">
                              <SelectItem value="yes">{f.yes}</SelectItem>
                              <SelectItem value="no">{f.no}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="shareholder"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">{f.shareholder}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-none bg-background border-border focus:ring-primary">
                                <SelectValue placeholder={f.shareholderPlaceholder} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-none">
                              <SelectItem value="yes">{f.yes}</SelectItem>
                              <SelectItem value="no">{f.no}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="generation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">{f.generation}</FormLabel>
                          <FormControl>
                            <Input placeholder={f.generationPlaceholder} className="rounded-none bg-background border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">{f.message}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={f.messagePlaceholder}
                            className="rounded-none bg-background border-border min-h-[110px] focus-visible:ring-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <p className="text-xs text-muted-foreground font-light">
                    {t.contact.confidentiality}
                  </p>

                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="contact-website">Website</label>
                    <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-captcha" className="block text-xs text-foreground/70 uppercase tracking-wide">
                      {lang === "tr" ? "Güvenlik doğrulaması" : "Security check"} *
                    </label>
                    {challenge ? (
                      <div className="flex flex-wrap items-center gap-3">
                        <label htmlFor="contact-captcha" className="text-sm font-medium">{challenge.question}</label>
                        <Input id="contact-captcha" name="captchaAnswer" inputMode="numeric" autoComplete="off" required maxLength={3} value={captchaAnswer} onChange={(event) => setCaptchaAnswer(event.target.value)} className="w-24 rounded-none bg-background border-border" />
                        <button type="button" disabled={isLoading} onClick={() => void loadChallenge()} className="text-xs text-primary underline">
                          {lang === "tr" ? "Yeni soru" : "New question"}
                        </button>
                      </div>
                    ) : (
                      <p role="status" className="text-sm text-muted-foreground">
                        {captchaError
                          ? (lang === "tr" ? "Doğrulama yüklenemedi. " : "Could not load verification. ")
                          : (lang === "tr" ? "Doğrulama yükleniyor…" : "Loading verification…")}
                        {captchaError && <button type="button" onClick={() => void loadChallenge()} className="text-primary underline">{lang === "tr" ? "Tekrar dene" : "Retry"}</button>}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <p role="alert" className="text-sm text-destructive">
                      {submitError}
                    </p>
                  )}

                    <Button
                      type="submit"
                      className="w-full rounded-none h-13 font-sans text-base font-semibold tracking-wide bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isLoading || !challenge || !captchaAnswer.trim()}
                    >
                      {isLoading ? (
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      ) : (
                        t.contact.submitBtn
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
