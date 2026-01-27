import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const stats = [
  {
    value: 4276,
    suffix: "+",
    label: "Schools Under Management",
    description: "Public sector schools managed across Punjab",
  },
  {
    value: 590820,
    suffix: "",
    label: "Students Enrolled",
    description: "Children receiving quality education",
  },
  {
    value: 21095,
    suffix: "+",
    label: "Teachers Trained",
    description: "Professional development programs completed",
  },
  {
    value: 41,
    suffix: "",
    label: "Districts Covered",
    description: "Comprehensive coverage across Punjab",
  },
];

const leadershipMessages = [
  {
    role: "Chairperson's Message",
    name: "Mr. Ali Raza",
    image: "/person1.png",
    description: "The going on epoch is an era of knowledge. The role of knowledge has come to be identified as an engine of growth and a factor of production. Hence the buzzword of 'knowledge economies' has rained currency in the development of literature. In today's world, the knowledge provides the foundation stone on which the edifice of society has been erected. Therefore, for developing countries like Pakistan to be able to break the straitjacket of poverty, and retention of under-development, the related policy focuses on education to become the topmost national imperative and priority towards its goals.\n\nI am immensely proud that the Government of Punjab has risen to meet the challenges and trying the best efforts to fulfill its promise of promoting education in all over the province through the establishment of the Public-Private Partnership. The PEIMA is an appreciating supportive body for strengthening school education in the province. As per the 17 prescribed functions, the Commission would be able to undertake various programs aimed at the promotion of education in the province through a Public-Private Partnership."
  },
  {
    role: "Chief Executive Officer's Message",
    name: "Mr. Imtiaz Shahid Gondal",
    image: "/person3.png",
    description: "The Punjab Education Initiatives Management Authority (PEIMA) is geared towards building an educated Punjab by providing quality education through Public-Private Partnerships.\n\nPEIMA is committed to strengthening the existing assets and introducing new initiatives to improving equitable access, improving academic standards, and introducing mandatory faculty development programs to improve the teaching standards are a priority for PEIMA.\n\nMonitoring the educational standards of students is important. The assessment tools were developed by adopting best practices in the world and standardized test evaluation was ensured through the E-marking of assessment scripts.\n\nI strongly believe that education is the single best investment that can make our future. PEIMA is committed to uplifting the education sector in Punjab."
  }
];

const leadershipTeam = [
  {
    name: "Mr. Ali Raza",
    designation: "Chairperson",
    image: "/person1.png"
  },
  {
    name: "MR. Imtiaz Shahid Gondal",
    designation: "Chief Executive Officer",
    image: "/person3.png"
  },
  {
    name: "Ms. Zerva Sadiq",
    designation: "Director Monitoring & Evaluation",
    image: "/person2.png"
  },
  {
    name: "Ms. Sobia Samreen",
    designation: "Director( Corporate Cooperations)",
    image: "/person4.png"
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
          <h2 className="section-title text-primary-foreground mb-4">Our Impact in Numbers</h2>
          <p className="section-subtitle text-primary-foreground/70">
            Transforming education across Punjab with measurable results
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
        <div className="max-w-6xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="flex flex-col md:flex-row min-h-[400px]"
            >
              {/* Image Container with Controls */}
              <div className="w-full md:w-2/5 relative overflow-hidden group">
                <img
                  src={leadershipMessages[currentIndex].image}
                  alt={leadershipMessages[currentIndex].name}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 transition-colors z-20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 transition-colors z-20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Text Content Container */}
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  {leadershipMessages[currentIndex].role}
                </h3>
                <h4 className="text-2xl font-bold text-green-500 mb-6">
                  {leadershipMessages[currentIndex].name}
                </h4>


                <p className="text-gray-700 leading-relaxed text-sm">
                  {leadershipMessages[currentIndex].description}
                </p>
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

