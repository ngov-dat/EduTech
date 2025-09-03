import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { SiX, SiLinkedin, SiGithub, SiYoutube, SiDiscord } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-contact-title">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-description">
            Have questions about our courses or need help getting started? We're here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6" data-testid="text-form-title">
              Send us a message
            </h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your full name"
                          className="bg-input border-border"
                          data-testid="input-name"
                          {...field}
                        />
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
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          className="bg-input border-border"
                          data-testid="input-email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-input border-border" data-testid="select-subject">
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="course-inquiry">Course Inquiry</SelectItem>
                          <SelectItem value="technical-support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us how we can help you..."
                          className="bg-input border-border resize-none"
                          rows={6}
                          data-testid="textarea-message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="btn-primary w-full py-4 text-lg h-auto"
                  disabled={contactMutation.isPending}
                  data-testid="button-send-message"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6" data-testid="text-contact-info-title">
                Other ways to reach us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" data-testid="text-email-support-title">Email Support</h3>
                    <p className="text-muted-foreground" data-testid="text-email-support-address">support@codecraftacademy.com</p>
                    <p className="text-sm text-muted-foreground" data-testid="text-email-support-time">We typically respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" data-testid="text-phone-support-title">Phone Support</h3>
                    <p className="text-muted-foreground" data-testid="text-phone-support-number">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground" data-testid="text-phone-support-time">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" data-testid="text-live-chat-title">Live Chat</h3>
                    <p className="text-muted-foreground" data-testid="text-live-chat-availability">Available on our website</p>
                    <p className="text-sm text-muted-foreground" data-testid="text-live-chat-time">24/7 instant support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4" data-testid="text-follow-us-title">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-secondary border border-border rounded-lg flex items-center justify-center hover:bg-accent hover:border-accent transition-colors" data-testid="link-twitter">
                  <SiX className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-secondary border border-border rounded-lg flex items-center justify-center hover:bg-accent hover:border-accent transition-colors" data-testid="link-linkedin">
                  <SiLinkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-secondary border border-border rounded-lg flex items-center justify-center hover:bg-accent hover:border-accent transition-colors" data-testid="link-github">
                  <SiGithub className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-secondary border border-border rounded-lg flex items-center justify-center hover:bg-accent hover:border-accent transition-colors" data-testid="link-youtube">
                  <SiYoutube className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-secondary border border-border rounded-lg flex items-center justify-center hover:bg-accent hover:border-accent transition-colors" data-testid="link-discord">
                  <SiDiscord className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-secondary/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4" data-testid="text-quick-help-title">Quick Help</h3>
              <div className="space-y-3">
                <a href="#" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-faq">
                  <span className="mr-2">❓</span>Frequently Asked Questions
                </a>
                <a href="#" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-getting-started">
                  <span className="mr-2">📖</span>Getting Started Guide
                </a>
                <a href="#" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-catalog">
                  <span className="mr-2">🎓</span>Course Catalog
                </a>
                <a href="#" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-community">
                  <span className="mr-2">👥</span>Student Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
