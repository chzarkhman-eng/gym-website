import { useState } from "react";
import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { Calendar, Eye, Search, Tag, ArrowRight, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import studentsLearning from "@/assets/students-learning.jpg";
import trainingWorkshop from "@/assets/training-workshop.jpg";
import aboutBuilding from "@/assets/about-building.jpg";

const newsItems = [
  {
    id: 1,
    title: "Goleta Open Championships: Paragon Team Dominates with 12 Gold Medals",
    excerpt: "Our athletes showcased incredible skill and discipline at the recent Goleta Open, securing the top spot in the overall team rankings. The victory underscores our technical superiority and community spirit.",
    content: "Full article content...",
    date: "February 15, 2026",
    category: "Competition",
    image: "/sport1.png",
    views: 3452,
    readTime: "4 min",
  },
  {
    id: 2,
    title: "Upcoming Brazilian Jiu-Jitsu Seminar with World Class Black Belts",
    excerpt: "Join us next month for an intensive theoretical and practical BJJ seminar focusing on advanced guard recovery systems. Perfect for practitioners of all levels seeking to refine their defense.",
    content: "Full article content...",
    date: "March 10, 2026",
    category: "Seminar",
    image: "/sport2.png",
    views: 1892,
    readTime: "6 min",
  },
  {
    id: 3,
    title: "New Morning Muay Thai Classes Starting This Monday",
    excerpt: "Due to popular demand, we are expanding our morning schedule to include dedicated Muay Thai striking sessions starting at 6:00 AM. Start your day with high-intensity technical training.",
    content: "Full article content...",
    date: "February 22, 2026",
    category: "Schedule",
    image: "/sport3.png",
    views: 2134,
    readTime: "3 min",
  },
  {
    id: 4,
    title: "Nutrition & Weight Cutting Workshop - Register Now",
    excerpt: "Learn the proper mechanics of fueling for performance and safety in weight-sensitive sports from our expert coaching staff. Registration is now open to all members.",
    content: "Full article content...",
    date: "February 20, 2026",
    category: "Workshop",
    image: "/sport4.png",
    views: 1256,
    readTime: "5 min",
  },
];

const categories = ["All", "Competition", "Seminar", "Schedule", "Workshop"];

export default function News() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNews = newsItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              News & Updates
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Stay informed about the latest developments at Paragon Goleta
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 border-2 border-secondary focus:border-primary rounded-full"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full ${selectedCategory === category ? "bg-primary" : ""}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="news-card group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {item.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Eye className="h-4 w-4 mr-1" />
                      {item.views} views
                    </div>
                    <Link to={`/news/${item.id}`}>
                      <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No news found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
