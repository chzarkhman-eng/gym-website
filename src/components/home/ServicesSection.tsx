import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Users,
  Building2,
  BookOpen,
  Lightbulb,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    image: "/boxing.png",
    title: "Boxing",
    description: "Master the art of striking. Our boxing program focuses on technique, footwork, and conditioning for all levels, from beginners to pros.",
    link: "/training",
  },
  {
    image: "/grabb.png",
    title: "Grappling",
    description: "The core of ground fighting. Learn the essential techniques of No-Gi grappling, wrestling, and submission tactics to dominate on the mat.",
    link: "/training",
  },
  {
    image: "/jiju.png",
    title: "Jiu-Jitsu",
    description: "The gentle art of leverage. Master Brazilian Jiu-Jitsu with our world-class instructors. Perfect for self-defense, competition, and fitness.",
    link: "/training",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="training" ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-secondary text-primary rounded-full text-sm font-medium mb-4 uppercase">
            Our Programs
          </span>
          <h2 className="section-title text-foreground mb-4 uppercase tracking-tighter">Training Programs</h2>
          <p className="section-subtitle">
            Elite training programs designed to push your limits and transform your skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={program.link} className="block group">
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-border">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors uppercase tracking-tight">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {program.description}
                    </p>
                    <div className="flex items-center text-primary font-bold text-sm tracking-uppercase group-hover:gap-3 gap-1 transition-all">
                      VIEW PROGRAM DETAILS
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
