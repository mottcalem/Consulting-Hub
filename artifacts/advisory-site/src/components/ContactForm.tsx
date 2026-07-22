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
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  topic: z.string().optional(),
  date: z.string().optional(),
  message: z.string().optional(),
});

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      topic: "",
      date: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Contact
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8">
              Request an Appointment
            </h2>
            <p className="text-lg text-foreground/80 font-light leading-relaxed mb-12">
              Begin with a confidential consultation. Fill out the form to request an introductory call, or reach us directly via WhatsApp.
            </p>
            
            <a 
              href="https://wa.me/905321234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 text-lg font-medium hover:bg-[#20bd5a] transition-colors"
            >
              <SiWhatsapp size={24} />
              Chat on WhatsApp
            </a>
          </motion.div>

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
                <h3 className="text-2xl font-serif mb-4">Request Received</h3>
                <p className="text-muted-foreground">Thank you. We will be in touch shortly.</p>
                <Button 
                  variant="outline" 
                  className="mt-8 rounded-none border-primary text-primary"
                  onClick={() => setIsSuccess(false)}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" className="rounded-none bg-background border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">Company/Organization</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Corp" className="rounded-none bg-background border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">Email *</FormLabel>
                          <FormControl>
                            <Input placeholder="jane@example.com" type="email" className="rounded-none bg-background border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 555 123 4567" type="tel" className="rounded-none bg-background border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="topic"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">Topic of Inquiry</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-none bg-background border-border focus:ring-primary">
                                <SelectValue placeholder="Select topic" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-none">
                              <SelectItem value="family-governance">Family Governance</SelectItem>
                              <SelectItem value="board-effectiveness">Board Effectiveness</SelectItem>
                              <SelectItem value="succession-planning">Succession Planning</SelectItem>
                              <SelectItem value="strategic-counsel">Strategic Counsel</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">Preferred Date</FormLabel>
                          <FormControl>
                            <Input type="date" className="rounded-none bg-background border-border focus-visible:ring-primary" {...field} />
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
                        <FormLabel className="text-foreground/70 uppercase tracking-wide text-xs">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Briefly describe your inquiry..." 
                            className="rounded-none bg-background border-border min-h-[120px] focus-visible:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full rounded-none h-14 font-serif text-lg tracking-wide bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : "Request Appointment"}
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
