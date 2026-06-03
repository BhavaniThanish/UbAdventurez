"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Quote, Star, ThumbsUp, MessageCircle, Award } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Adventure Enthusiast",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    content: "The mountain hiking expedition exceeded all expectations. The guides were incredibly knowledgeable and made sure everyone felt safe while pushing our limits. An experience I will cherish forever. The sunrise at the summit was absolutely breathtaking.",
    rating: 5,
    adventure: "Himalayan Summit Expedition",
    date: "October 2024",
    featured: true,
  },
  {
    id: 2,
    name: "James Chen",
    role: "Corporate Team Leader",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    content: "Organized a team-building trip with UB Adventurez. The rafting experience brought our team closer together. Professional, well-organized, and absolutely thrilling! Our team still talks about this adventure months later.",
    rating: 5,
    adventure: "Colorado River Expedition",
    date: "August 2024",
    featured: true,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Solo Traveler",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    content: "As a solo female traveler, I felt completely safe and welcomed. The wilderness camping trip was magical - sleeping under the stars with a wonderful group of fellow adventurers. The guides were incredibly supportive.",
    rating: 5,
    adventure: "Patagonia Wilderness Trek",
    date: "March 2024",
    featured: true,
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Photographer",
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    content: "The photography expedition to Iceland was a dream come true. The guides knew exactly where to take us for the best shots of the Northern Lights. I came back with portfolio-worthy images.",
    rating: 5,
    adventure: "Iceland Northern Lights",
    date: "February 2024",
    featured: false,
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Fitness Instructor",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    content: "The rock climbing course was challenging yet incredibly rewarding. The instructors were patient and made sure we learned proper techniques. I have since continued climbing on my own!",
    rating: 5,
    adventure: "Joshua Tree Climbing",
    date: "April 2024",
    featured: false,
  },
  {
    id: 6,
    name: "David Wilson",
    role: "Retired Teacher",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    content: "At 65, I was worried about keeping up, but the team at UB Adventurez made it possible. The gentle hiking tour was perfectly paced and the guides were attentive to everyone needs.",
    rating: 5,
    adventure: "Family Nature Walk",
    date: "May 2024",
    featured: false,
  },
  {
    id: 7,
    name: "Amanda Foster",
    role: "Marketing Director",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    content: "Booked the glamping experience for my birthday and it was absolutely magical. Luxury meets nature in the most perfect way. The stargazing session with the guides was a highlight.",
    rating: 5,
    adventure: "Weekend Glamping Escape",
    date: "June 2024",
    featured: false,
  },
  {
    id: 8,
    name: "Robert Martinez",
    role: "Software Engineer",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    content: "The multi-day river expedition was the reset I needed. Disconnecting from technology and connecting with nature was transformative. The guides made sure every moment was memorable.",
    rating: 5,
    adventure: "Multi-Day River Expedition",
    date: "July 2024",
    featured: false,
  },
]

const stats = [
  { icon: <Star className="h-6 w-6" />, value: "4.9/5", label: "Average Rating" },
  { icon: <ThumbsUp className="h-6 w-6" />, value: "98%", label: "Would Recommend" },
  { icon: <MessageCircle className="h-6 w-6" />, value: "2,500+", label: "Reviews" },
  { icon: <Award className="h-6 w-6" />, value: "#1", label: "Adventure Company 2024" },
]

const platforms = [
  { name: "TripAdvisor", rating: "4.9", reviews: "1,200+" },
  { name: "Google", rating: "4.8", reviews: "890+" },
  { name: "Yelp", rating: "4.9", reviews: "450+" },
]

export default function TestimonialsPage() {
  const featuredTestimonials = testimonials.filter(t => t.featured)
  const otherTestimonials = testimonials.filter(t => !t.featured)

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
            alt="Happy adventurers"
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
              Testimonials
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
              Stories From Our Adventurers
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Real experiences from real people. See why thousands of adventurers 
              trust UB Adventurez for their outdoor experiences.
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
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Testimonials */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            label="Featured Reviews"
            title="What Our Adventurers Say"
            description="Hear directly from those who have experienced the magic of our adventures."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <Quote className="h-10 w-10 text-primary/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6">{testimonial.content}</p>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? "text-primary fill-primary" : "text-muted"}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-primary text-sm font-medium">{testimonial.adventure}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* More Testimonials */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            label="More Reviews"
            title="Adventurers Share Their Stories"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background border border-border rounded-2xl p-6 flex gap-4"
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <span className="text-muted-foreground text-sm">- {testimonial.location}</span>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < testimonial.rating ? "text-primary fill-primary" : "text-muted"}`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">{testimonial.content}</p>
                  <p className="text-primary text-xs font-medium">{testimonial.adventure}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Platform Reviews */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            label="Verified Reviews"
            title="Find Us On"
            description="Read more reviews on these trusted platforms."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <h3 className="font-semibold text-foreground text-lg mb-2">{platform.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <span className="text-2xl font-bold text-foreground">{platform.rating}</span>
                </div>
                <p className="text-muted-foreground text-sm">{platform.reviews} reviews</p>
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
              Ready to Create Your Own Story?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of happy adventurers and embark on your next unforgettable journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-semibold hover:bg-primary/90 transition-all hover:scale-105"
              >
                Book Your Adventure
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-full text-base font-semibold hover:bg-secondary transition-all"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
