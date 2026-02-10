import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const stats = [
  {
    value: 5000,
    suffix: "+",
    label: "People Trained",
    description: "Athletes and fitness enthusiasts who transformed their lives",
  },
  {
    value: 50,
    suffix: "+",
    label: "Expert Trainers",
    description: "World-class instructors dedicated to your growth",
  },
  {
    value: 250,
    suffix: "+",
    label: "Success Stories",
    description: "Real people achieving remarkable fitness milestones",
  },
  {
    value: 15,
    suffix: "+",
    label: "Programs",
    description: "Diverse training regimes from Jiu-Jitsu to MMA",
  },
];

const leadershipMessages = [
  {
    role: "Black belt, training for 19 years.",
    name: "Frank R.",
    image: "/sport1.png",
    description: "I enjoy dropping into gyms when I travel and the owner John was world class. Super friendly, welcoming, and his students were a class act. The instruction was detailed and just when you think you’ve seen it all, you learn new little details. All of the students were very friendly and treated me with respect. 10/10 will stop by again and couldn’t recommend it more for new students."
  },
  {
    role: "Life Transformed",
    name: "Jennifer S.",
    image: "/sport2.png",
    description: "I don't know how else to say it, but this gym has changed my life for the better! I even sought out a new job to make sure I could pay the membership—worth every penny. I started out kickboxing, and have now trained Jiu-Jitsu for the last two years. The sport is amazing, especially for women in regards to self defense and self confidence. The instructors are dedicated, extremely proficient, patient, motivating, and fun. Paragon becomes family! If you've been on the fence about trying boxing, kickboxing, wrestling, or Jiu-Jitsu (GREAT kids' classes for anti-bullying!), start a trial today."
  },
  {
    role: "Relentless Community",
    name: "Will E.",
    image: "/sport3.png",
    description: "Just calling this place a gym is a disservice. It's a community where everyone is there to lift each other up. I had zero martial arts experience and was treated like a long-time member the first time I walked in the door. This place and Jiu-Jitsu truly changed my life and how I think about handling adversity going forward. The classes and workouts are awesome, but the instructors and other students are what keeps you coming back. It truly is a family."
  },
  {
    role: "Elite Training",
    name: "Billy H.",
    image: "/sport4.png",
    description: "Awesome gym! I've been training MMA for over 10 years and fighting as an amateur cage fighter. I've trained at high level gyms all over the country and Paragon has an elite level to rival any gym I've trained in. Truly a wealth of knowledge from Jiu-Jitsu, wrestling, Muay Thai and boxing! The teachers are awesome and Paragon has so many different levels of training partners, from beginners to advanced professionals. If you're looking to get legit training, the only place I would recommend is Paragon!"
  }
];

const leadershipTeam = [
  {
    name: "John Miller",
    designation: "Head Coach & BJJ Black Belt",
    image: "/team1.png"
  },
  {
    name: "David Thompson",
    designation: "Elite Boxing Specialist",
    image: "/team2.png"
  },
  {
    name: "Michael Ross",
    designation: "MMA Conditioning Expert",
    image: "/team3.png"
  },
  {
    name: "Sarah Parker",
    designation: "Program Coordinator",
    image: "/team4.png"
  }
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % leadershipMessages.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev: number) => (prev - 1 + leadershipMessages.length) % leadershipMessages.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary via-peima-navy to-peima-navy-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-peima-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-peima-sky/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-primary-foreground mb-4 uppercase tracking-tighter">Our Fitness Impact</h2>
          <p className="section-subtitle text-primary-foreground/70">
            Building a stronger community through dedicated training
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="stat-card group"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2 group-hover:text-peima-gold transition-colors">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Sliding Leadership Message Section */}
        <div className="max-w-6xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl relative min-h-[500px] md:min-h-[450px]">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
              className="flex flex-col md:flex-row h-full"
            >
              {/* Image Container with Controls */}
              <div className="w-full md:w-2/5 relative overflow-hidden group min-h-[300px] md:min-h-full">
                <img
                  src={leadershipMessages[currentIndex].image}
                  alt={leadershipMessages[currentIndex].name}
                  className="w-full h-full object-cover absolute inset-0"
                />

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 transition-colors z-20 rounded-r-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 transition-colors z-20 rounded-l-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Text Content Container */}
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center bg-white">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {leadershipMessages[currentIndex].role}
                  </h3>
                  <h4 className="text-3xl font-bold text-peima-gold mb-6">
                    {leadershipMessages[currentIndex].name}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg italic">
                    "{leadershipMessages[currentIndex].description}"
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Leadership Team Row */}
        <div className="mt-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" />
                  <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white overflow-hidden shadow-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-1 tracking-wider uppercase">
                  {member.name}
                </h4>
                <p className="text-peima-gold font-medium text-sm md:text-base">
                  Designation: {member.designation}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

