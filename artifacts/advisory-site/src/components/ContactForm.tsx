import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SiWhatsapp } from "react-icons/si";
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

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  position: z.string().optional(),
  country: z.string().optional(),
  areaOfInterest: z.string().optional(),
  message: z.string().optional(),
});

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      position: "",
      country: "",
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

  return (
    <section id="contact" className="py-24 md:py-32 bg-[hsl(33,31%,93%)]">
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
              Contact
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
              Request a Confidential Preliminary Discussion
            </h2>
            <p className="text-base text-foreground/70 font-light leading-relaxed mb-4">
              Many families contact me when they need clarity around family and shareholder governance,
              succession and next-generation development, or business and board governance.
            </p>
            <p className="text-base text-foreground/70 font-light leading-relaxed mb-10">
              A confidential first conversation can help clarify your priorities, identify where
              governance may be creating risk or delay, and determine whether my advisory support
              could be useful.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {[
                {
                  label: "Family & Shareholder Governance",
                  text: "Family constitutions, ownership structure, shareholder agreements, employment policies.",
                },
                {
                  label: "Succession & Next-Generation",
                  text: "Leadership succession, ownership transition, next-generation development and preparation.",
                },
                {
                  label: "Business & Board Governance",
                  text: "Board effectiveness, board structure, professionalisation, non-family executives.",
                },
              ].map((item, idx) => (
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
              Contact via WhatsApp
            </a>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-card p-10 md:p-12 border border-border"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl font-serif mb-4">Thank You</h3>
                <p className="text-muted-foreground font-light">
                  Your message has been received. I will be in touch shortly.
                </p>
                <Button
                  variant="outline"
                  className="mt-8 rounded-none border-primary text-primary"
                  onClick={() => setIsSuccess(false)}
                >
                  Send Another Message
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
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" className="rounded-none bg-background border-border focus-visible:ring-primary" {...field} />
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
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">Email *</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" type="email" className="rounded-none bg-background border-border focus-visible:ring-primary" {...field} />
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
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Family business / organisation" className="rounded-none bg-background border-border focus-visible:ring-primary" {...field} />
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
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">Position</FormLabel>
                          <FormControl>
                            <Input placeholder="Your role or position" className="rounded-none bg-background border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">Country</FormLabel>
                          <FormControl>
                            <Input placeholder="Country" className="rounded-none bg-background border-border focus-visible:ring-primary" {...field} />
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
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">Area of Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-none bg-background border-border focus:ring-primary">
                                <SelectValue placeholder="Select area" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-none">
                              <SelectItem value="family-governance">Family & Shareholder Governance</SelectItem>
                              <SelectItem value="succession">Succession Planning</SelectItem>
                              <SelectItem value="next-generation">Next-Generation Development</SelectItem>
                              <SelectItem value="board-governance">Business & Board Governance</SelectItem>
                              <SelectItem value="family-constitution">Family Constitution</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
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
                        <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Briefly describe your situation or what you would like to discuss..."
                            className="rounded-none bg-background border-border min-h-[110px] focus-visible:ring-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <p className="text-xs text-muted-foreground font-light">
                    Your information will be treated confidentially.
                  </p>

                  <Button
                    type="submit"
                    className="w-full rounded-none h-13 font-serif tracking-wide bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                      "Request a Confidential Preliminary Discussion"
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
