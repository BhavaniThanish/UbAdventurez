"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Eye, Heart, Users, Award, MapPin } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"
import { StatCard } from "@/components/cards"

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "10K+", label: "Happy Adventurers" },
  { value: "50+", label: "Destinations" },
  { value: "200+", label: "Expert Guides" },
]

const values = [
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Excellence",
    description: "We strive for excellence in every adventure, ensuring each experience exceeds expectations.",
  },
  {
    icon: <Eye className="h-6 w-6 text-primary" />,
    title: "Safety",
    description: "Your safety is paramount. We maintain the highest standards of safety protocols and equipment.",
  },
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: "Passion",
    description: "Our love for adventure drives us to create meaningful experiences that inspire and transform.",
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Community",
    description: "We foster a welcoming community where adventurers from all walks of life come together.",
  },
]

const team = [
  {
    name: "Marcus Thompson",
    role: "Founder & Lead Guide",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "20+ years of mountaineering experience across 6 continents.",
  },
  {
    name: "Elena Rivera",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Expert in adventure logistics and sustainable tourism practices.",
  },
  {
    name: "David Chen",
    role: "Head of Safety",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bio: "Former rescue specialist with certifications in wilderness medicine.",
  },
  {
    name: "Sarah Williams",
    role: "Lead River Guide",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    bio: "Professional kayaker and whitewater expert with 15 years experience.",
  },
]

const milestones = [
  { year: "2009", title: "Founded", description: "Started as a small hiking tour company" },
  { year: "2012", title: "Expansion", description: "Added rafting and camping to our services" },
  { year: "2015", title: "Recognition", description: "Won Best Adventure Tourism Company award" },
  { year: "2018", title: "Growth", description: "Expanded to 50+ destinations worldwide" },
  { year: "2021", title: "Innovation", description: "Launched eco-friendly adventure programs" },
  { year: "2024", title: "Today", description: "Serving 10,000+ adventurers annually" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1920&q=80"
            alt="Mountain landscape"
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
              Crafting Adventures, Building Memories
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              For over 15 years, UB Adventurez has been transforming ordinary vacations into 
              extraordinary adventures. We are more than a tour company - we are your gateway 
              to the extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <Section className="bg-primary/5 -mt-10 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StatCard key={stat.label} {...stat} index={index} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Story Section */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                label="Our Story"
                title="From Passion to Purpose"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  UB Adventurez was born from a simple belief: that the great outdoors has the power 
                  to transform lives. In 2009, our founder Marcus Thompson, a seasoned mountaineer, 
                  set out to share his love for adventure with others.
                </p>
                <p>
                  What started as weekend hiking trips for friends quickly grew into something much 
                  larger. Word spread about our unique approach - combining expert guidance with 
                  genuine care for each adventurer&apos;s experience and safety.
                </p>
                <p>
                  Today, we operate across 50+ destinations worldwide, but our core mission remains 
                  unchanged: to provide safe, memorable, and transformative outdoor experiences that 
                  connect people with nature and with themselves.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80"
                      alt="Hiking adventure"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=400&q=80"
                      alt="Rafting adventure"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square relative rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80"
                      alt="Camping adventure"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1522163182402-834f871fd851?w=600&q=80"
                      alt="Climbing adventure"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            label="Our Values"
            title="What Drives Us Forward"
            description="These core values guide every decision we make and every adventure we create."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            label="Our Journey"
            title="Milestones Along the Way"
            description="From humble beginnings to becoming a leading adventure tourism company."
            center
          />
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                    <span className="text-primary font-bold text-lg">{milestone.year}</span>
                    <h4 className="text-foreground font-semibold text-xl mb-1">{milestone.title}</h4>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 ring-4 ring-background" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            label="Our Team"
            title="Meet the Experts"
            description="Passionate professionals dedicated to making your adventures unforgettable."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">{member.name}</h4>
                <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Certifications Section */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  Certifications
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Trusted & Certified
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our commitment to safety and excellence is backed by internationally recognized 
                  certifications and partnerships with leading outdoor organizations.
                </p>
                <ul className="space-y-3">
                  {[
                    "International Mountain Guides Association",
                    "American Canoe Association Certified",
                    "Wilderness First Responder Certified",
                    "Leave No Trace Center for Outdoor Ethics",
                    "Adventure Travel Trade Association Member",
                  ].map((cert) => (
                    <li key={cert} className="flex items-center gap-3 text-foreground">
                      <Award className="h-5 w-5 text-primary shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80"
                  alt="Certified guides"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
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
              Ready to Join Our Story?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Become part of the UB Adventurez family and create your own unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-semibold hover:bg-primary/90 transition-all hover:scale-105"
              >
                Start Your Adventure
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-full text-base font-semibold hover:bg-secondary transition-all"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
