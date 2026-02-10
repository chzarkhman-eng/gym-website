import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { Check, Target, Eye, Award, Users, Building, GraduationCap } from "lucide-react";
import aboutBuilding from "@/assets/about-building.jpg";
import trainingWorkshop from "@/assets/training-workshop.jpg";

const objectives = [
  "Provide world-class Brazilian Jiu-Jitsu instruction",
  "Foster a disciplined and supportive training community",
  "Offer diverse programs for all ages and skill levels",
  "Develop elite techniques for Boxing and Kickboxing",
  "Maintain a clean and professional training environment",
  "Support individual fitness and personal growth goals",
  "Build champions on and off the mat",
  "Promote a family-friendly atmosphere",
];

const team = [
  { name: "Frank R.", role: "Elite Trainer", icon: Award },
  { name: "Will E.", role: "Head Instructor", icon: Users },
  { name: "Jennifer S.", role: "Program Director", icon: GraduationCap },
  { name: "Billy H.", role: "MMA Coach", icon: Building },
];

export default function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 uppercase tracking-tighter">
              About Paragon Academy
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto uppercase tracking-wide">
              Discover our legacy of excellence in martial arts and fitness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 bg-secondary text-primary rounded-full text-sm font-medium mb-4 uppercase">
                Introduction
              </span>
              <h2 className="section-title text-foreground mb-6 uppercase tracking-tighter">
                Southern California's Premier Proving Ground
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded with a passion for technical excellence, Paragon Academy has been the gold standard
                for martial arts in the region for over 15 years. We specialize in Brazilian Jiu-Jitsu,
                Boxing, and MMA, providing a high-level training environment for everyone from hobbyists
                to professional fighters.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our mission is to empower individuals through discipline, technical mastery, and a
                supportive community. Whether you're looking to lose weight, learn self-defense, or
                compete at the highest levels, Paragon has a place for you.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { value: "2008", label: "Established" },
                  { value: "500+", label: "Active Members" },
                  { value: "10+", label: "Black Belts" },
                ].map((stat, i) => (
                  <div key={i} className="bg-secondary rounded-xl px-6 py-4 text-center">
                    <div className="text-2xl font-bold text-primary uppercase">{stat.value}</div>
                    <div className="text-sm text-muted-foreground uppercase font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/peimapic.png"
                alt="Paragon Academy Training"
                className="rounded-2xl shadow-peima-lg w-full h-[450px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-peima-gold p-6 rounded-xl shadow-xl">
                <Award className="h-12 w-12 text-primary" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl shadow-peima-sm"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-tight">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a global leader in martial arts instruction, fostering a community of champions on and off the mat.
                We believe in the power of martial arts to transform lives, build character, and create
                lasting discipline.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-peima-sm"
            >
              <div className="w-16 h-16 bg-peima-gold rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-tight">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Empowering individuals through elite training, technical precision, and a supportive
                family environment. We are committed to providing the best possible instruction
                while helping our students reach their personal fitness and competitive goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section id="objectives" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-secondary text-primary rounded-full text-sm font-medium mb-4 uppercase tracking-wider">
              Our Commitment
            </span>
            <h2 className="section-title text-foreground mb-4 uppercase tracking-tighter">Our Objectives</h2>
            <p className="section-subtitle">
              Clear goals driving our pursuit of excellence in every session
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-peima-sm hover:shadow-peima-md transition-shadow border border-border"
              >
                <div className="w-8 h-8 bg-peima-green-light rounded-full flex items-center justify-center shrink-0">
                  <Check className="h-5 w-5 text-peima-green" />
                </div>
                <p className="text-foreground font-medium">{objective}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="organogram" className="section-padding bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-peima-gold/20 text-peima-gold rounded-full text-sm font-medium mb-4 uppercase tracking-widest">
              Elite Staff
            </span>
            <h2 className="section-title text-primary-foreground mb-4 uppercase tracking-tighter">Our Instructors</h2>
            <p className="section-subtitle text-primary-foreground/70 uppercase">
              Dedicated professionals leading your growth through world-class training
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-white/20 transition-colors border border-white/5"
              >
                <div className="w-20 h-20 bg-peima-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-peima-gold/20">
                  <member.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground mb-1 uppercase tracking-tight">{member.name}</h3>
                <p className="text-peima-gold text-sm font-bold uppercase">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
