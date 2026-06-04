"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Users, Clock } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"

const featuredProjects = [
  {
    id: 1,
    title: "Himalayan Summit Expedition",
    category: "Mountain Expedition",
    location: "Nepal",
    date: "October 2024",
    participants: 12,
    duration: "14 Days",
    image: "/projects/himalayan_summit.png",
    description: "An epic journey to base camp with breathtaking views of the world's highest peaks. Our team guided 12 adventurers through challenging terrain and unforgettable experiences.",
    highlights: ["Reached 5,364m elevation", "Zero safety incidents", "Wildlife encounters with Himalayan Tahr"],
  },
  {
    id: 2,
    title: "Colorado River Expedition",
    category: "River Adventure",
    location: "Grand Canyon, USA",
    date: "August 2024",
    participants: 24,
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=1200&q=80",
    description: "A week-long rafting adventure through the heart of the Grand Canyon, navigating legendary rapids and camping under the stars in one of Earth's most spectacular landscapes.",
    highlights: ["226 miles of river", "Class IV rapids conquered", "Ancient Native American sites visited"],
  },
  {
    id: 3,
    title: "Patagonia Wilderness Trek",
    category: "Multi-Sport",
    location: "Chile & Argentina",
    date: "March 2024",
    participants: 8,
    duration: "10 Days",
    image: "/projects/patagonia_trek.png",
    description: "An ultimate adventure combining hiking, kayaking, and camping through the pristine wilderness of Patagonia, featuring glaciers, mountains, and incredible wildlife.",
    highlights: ["Glacier trekking", "Kayaking among icebergs", "Puma sighting"],
  },
]

const pastProjects = [
  {
    id: 4,
    title: "Alps Mountain Biking",
    category: "Cycling",
    image: "/projects/alps_mountain_biking.png",
    location: "Switzerland",
  },
  {
    id: 5,
    title: "Amazon Rainforest Expedition",
    category: "Wilderness",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    location: "Brazil",
  },
  {
    id: 6,
    title: "Iceland Northern Lights",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    location: "Iceland",
  },
  {
    id: 7,
    title: "Joshua Tree Climbing",
    category: "Rock Climbing",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80",
    location: "California, USA",
  },
  {
    id: 8,
    title: "New Zealand Kayaking",
    category: "Water Sports",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    location: "New Zealand",
  },
  {
    id: 9,
    title: "African Safari Camp",
    category: "Wildlife",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    location: "Kenya",
  },
]

const upcomingProjects = [
  {
    title: "Torres del Paine Circuit",
    date: "January 2025",
    location: "Chile",
    spotsLeft: 4,
    image: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=600&q=80",
  },
  {
    title: "Japanese Alps Traverse",
    date: "April 2025",
    location: "Japan",
    spotsLeft: 8,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80",
  },
  {
    title: "Norwegian Fjords Kayaking",
    date: "June 2025",
    location: "Norway",
    spotsLeft: 6,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
            alt="Mountain expedition"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Our Projects
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
              Adventures That Made History
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of completed expeditions and upcoming adventures. 
              Each project represents a unique journey and unforgettable memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            label="Featured"
            title="Recent Expeditions"
            description="Highlights from our most memorable adventures over the past year."
          />
          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 !== 0 ? "lg:order-2" : ""} group`}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 border border-border/60">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 z-10">
                      <span className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  <h3 className="text-3xl font-extrabold text-foreground mb-4 tracking-tight leading-none">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                    {project.description}
                  </p>
                  
                  {/* Meta Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 text-muted-foreground bg-card border border-border p-3.5 rounded-2xl shadow-sm hover:border-primary/30 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/60 leading-none mb-1">Location</p>
                        <p className="text-xs font-bold text-foreground leading-none">{project.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground bg-card border border-border p-3.5 rounded-2xl shadow-sm hover:border-primary/30 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/60 leading-none mb-1">Completed</p>
                        <p className="text-xs font-bold text-foreground leading-none">{project.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground bg-card border border-border p-3.5 rounded-2xl shadow-sm hover:border-primary/30 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Users className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/60 leading-none mb-1">Group size</p>
                        <p className="text-xs font-bold text-foreground leading-none">{project.participants} Travelers</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground bg-card border border-border p-3.5 rounded-2xl shadow-sm hover:border-primary/30 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/60 leading-none mb-1">Duration</p>
                        <p className="text-xs font-bold text-foreground leading-none">{project.duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Card */}
                  <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-primary mb-3.5">Expedition Accomplishments</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2.5 text-xs text-muted-foreground bg-secondary/30 px-3.5 py-3 rounded-xl border border-border/50">
                          <svg className="h-4.5 w-4.5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-medium text-foreground/80 leading-tight">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Past Projects Grid */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            label="Archive"
            title="Past Adventures"
            description="A selection of expeditions from our extensive portfolio."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs text-primary uppercase tracking-wider font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Upcoming Projects */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            label="Coming Soon"
            title="Upcoming Expeditions"
            description="Reserve your spot on our next adventures before they fill up."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      {project.spotsLeft} spots left
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all"
                  >
                    Reserve Spot <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Want to Join Our Next Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Whether you want to join a scheduled expedition or plan a custom adventure, 
              we are here to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-semibold hover:bg-primary/90 transition-all hover:scale-105"
              >
                Plan Your Expedition
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-full text-base font-semibold hover:bg-secondary transition-all"
              >
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
