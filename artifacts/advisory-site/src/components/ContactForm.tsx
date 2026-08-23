import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SiWhatsapp } from "react-icons/si";
import draftingIllustration from "@images/drafting.png";
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
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function ContactForm() {
  const { t } = useLanguage();
  const f = t.contact.fields;

  const formSchema = z.object({
    fullName: z.string().min(2, f.errors.nameRequired),
    email: z.string().email(f.errors.emailInvalid),
    company: z.string().optional(),
    position: z.string().optional(),
    phone: z.string().optional(),
    familyMember: z.string().optional(),
    companyName: z.string().optional(),
    shareholder: z.string().optional(),
    generation: z.string().optional(),
    areaOfInterest: z.string().optional(),
    message: z.string().optional(),
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      position: "",
      phone: "",
      familyMember: "",
      companyName: "",
      shareholder: "",
      generation: "",
      areaOfInterest: "",
      message: "",
    },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
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
            <p className="text-base text-foreground/70 font-light leading-relaxed mb-4">
              {t.contact.p1}
            </p>
            <p className="text-base text-foreground/70 font-light leading-relaxed mb-10">
              {t.contact.p2}
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {t.contact.areas.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-1 bg-primary flex-shrink-0 rounded-full" />
                  <div>
                    <p className="font-medium text-sm text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground font-light">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/905321234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-7 py-3.5 text-sm font-medium hover:bg-[#20bd5a] transition-colors"
            >
              <SiWhatsapp size={20} />
              {t.contact.whatsapp}
            </a>

            <div className="mt-8 overflow-hidden border border-border bg-card">
              <img
                src={draftingIllustration}
                alt="Drafting illustration"
                className="block w-full h-[220px] sm:h-[260px] object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
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
                    onClick={() => setIsSuccess(false)}
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
                              <SelectItem value="yes">Evet</SelectItem>
                              <SelectItem value="no">Hayır</SelectItem>
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
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">{f.companyName}</FormLabel>
                          <FormControl>
                            <Input placeholder={f.companyNamePlaceholder} className="rounded-none bg-background border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
                              <SelectItem value="yes">Evet</SelectItem>
                              <SelectItem value="no">Hayır</SelectItem>
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
                    <FormField
                      control={form.control}
                      name="areaOfInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">{f.interest}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-none bg-background border-border focus:ring-primary">
                                <SelectValue placeholder={f.interestPlaceholder} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-none">
                              {f.interestOptions.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
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

                    <Button
                      type="submit"
                      className="w-full rounded-none h-13 font-serif tracking-wide bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isLoading}
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
