import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Play, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const heroImages = [
  "/pic1.png",
  "/pic2.png",
  "/pic3.png",
];

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImage}
            src={heroImages[currentImage]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            alt="PEIMA Education"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
        {/* Lighter overlay to ensure images are visible */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-none transition-colors hidden group-hover:block"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-none transition-colors hidden group-hover:block"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Animated Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-peima-gold/10 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-peima-sky/10 rounded-full blur-3xl float-animation" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-primary-foreground leading-tight mb-6 uppercase tracking-tighter"
        >
          IT'S NOT JUST A GYM.
          <br />
          <span className="gradient-text">IT'S YOUR PROVING GROUND.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-primary-foreground/90 font-medium mb-8 max-w-2xl mx-auto drop-shadow-md"
        >
          Stop dreaming of a stronger, more confident you. Start building it. We provide more than just equipment—we provide a community, expert guidance, and the relentless motivation you need to break your limits. Every rep, every drop of sweat, is a step towards the person you're meant to be.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link to="/contact">
            <Button className="btn-hero shadow-lg shadow-peima-gold/20 text-lg py-7 px-8 uppercase">
              Try For FREE Class
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button variant="outline" className="border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 text-lg py-7 px-8 uppercase border-2">
            <Play className="mr-2 h-5 w-5 fill-peima-gold text-peima-gold" />
            Watch Video
          </Button>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "5000+", label: "People Trained" },
            { value: "50+", label: "Expert Trainers" },
            { value: "250+", label: "Success Stories" },
            { value: "15+", label: "Programs" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-black/20 backdrop-blur-md border border-white/10 hover:bg-black/30 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-peima-gold mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/90 font-medium shadow-black uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-peima-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
