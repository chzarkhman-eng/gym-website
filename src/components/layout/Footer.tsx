import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ArrowUp,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { name: "About Paragon", path: "/#about" },
  { name: "Training Programs", path: "/#training" },
  { name: "News & Events", path: "/news" },
  { name: "Contact Us", path: "/contact" },
];

const usefulLinks = [
  { name: "Adult Programs", path: "/training" },
  { name: "Kids Programs", path: "/training" },
  { name: "Class Schedule", path: "/schedule" },
  { name: "Trial Class", path: "/contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-primary text-primary-foreground">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 54"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(var(--background))"
            d="M0,32L80,37.3C160,43,320,53,480,53.3C640,53,800,43,960,37.3C1120,32,1280,32,1360,32L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-20 pb-8">
        {/* Google Map */}
        <div className="w-full h-80 rounded-xl overflow-hidden mb-16 shadow-2xl border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.861748283626!2d-119.82141502424667!3d34.43734097301476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e940f95e555555%3A0x6a6a6a6a6a6a6a6a!2s5940%20Calle%20Real%2C%20Goleta%2C%20CA%2093117%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Gym Logo" className="h-16 w-16 object-contain rounded-full bg-white/10 p-1" />
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight">Paragon</h3>
                <p className="text-[10px] text-primary-foreground/80 leading-tight uppercase">Martial Arts & Fitness</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Southern California's premier destination for Brazilian Jiu-Jitsu, Boxing, and MMA.
              We build champions on and off the mat through elite instruction and a supportive community.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-peima-gold hover:text-primary transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-peima-gold mt-2"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-peima-gold hover:pl-2 transition-all duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative">
              Useful Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-peima-gold mt-2"></span>
            </h4>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-peima-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-peima-gold mt-2"></span>
            </h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-peima-gold shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  5940 Calle Real, Goleta, CA 93117, USA
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-peima-gold shrink-0" />
                <a href="tel:+18056811691" className="text-primary-foreground/80 hover:text-peima-gold transition-colors">
                  (805) 681-1691
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-peima-gold shrink-0" />
                <a href="mailto:paragonbjjgoleta@gmail.com" className="text-primary-foreground/80 hover:text-peima-gold transition-colors">
                  paragonbjjgoleta@gmail.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-sm text-primary-foreground/80 mb-3">Subscribe for updates:</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-lg"
                />
                <Button className="bg-peima-gold text-primary hover:bg-peima-gold-dark shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Paragon Academy.
            All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-peima-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-peima-gold transition-colors">
              Terms of Use
            </Link>
            <Link to="/sitemap" className="text-primary-foreground/60 hover:text-peima-gold transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-peima-gold text-primary rounded-full shadow-peima-gold flex items-center justify-center hover:scale-110 transition-transform z-40"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
