import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <MainLayout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Get in touch with us for any inquiries or support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-card p-8 rounded-2xl shadow-peima-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
                    <p className="text-muted-foreground text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="py-6 input-focus"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="py-6 input-focus"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="+92 300 1234567"
                        className="py-6 input-focus"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What is this about?"
                        className="py-6 input-focus"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Write your message here..."
                      className="min-h-[150px] input-focus"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-peima-gold to-peima-gold-dark text-primary font-semibold py-6 hover:shadow-peima-gold">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have questions about our programs, want to collaborate, or need
                assistance with educational initiatives, our team is ready to support you.
                Feel free to reach out through any of the channels below.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Office Address</h4>
                    <p className="text-muted-foreground">
                      50 Babar Block Garden Town, Lahore
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-12 h-12 bg-peima-gold rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Phone Number</h4>
                    <p className="text-muted-foreground">(042) 99232040</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-12 h-12 bg-peima-green rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Email Addresses</h4>
                    <p className="text-muted-foreground">info@peima.punjab.gov.pk</p>
                    <p className="text-muted-foreground">support@peima.punjab.gov.pk</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-12 h-12 bg-peima-sky-deep rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Working Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="h-96 relative group cursor-pointer">
        <a
          href="https://maps.app.goo.gl/p45RUh9uchT3NyET7?g_st=aw"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
        >
          <div className="w-full h-full bg-secondary flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"
              alt="Map Background"
              className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/20 flex flex-col items-center justify-center text-center p-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white drop-shadow-md">View Our Location on Google Maps</h3>
              <p className="text-white fill-current mt-2 drop-shadow-md">Click to open directions</p>
            </div>
          </div>
        </a>
      </section>
    </MainLayout>
  );
}
