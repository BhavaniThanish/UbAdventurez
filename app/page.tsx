"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play, Shield, Users, Award, Compass, Mountain, Waves, Tent, TreePine } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"
import { ServiceCard, FeatureCard, StatCard } from "@/components/cards"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { FAQSection } from "@/components/faq-section"
import { NewsletterForm } from "@/components/forms"

const services = [
  {
    title: "Mountain Hiking",
    description: "Conquer majestic peaks with expert guides. From beginner trails to challenging summits.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    href: "/services#hiking",
  },
  {
    title: "River Rafting",
    description: "Navigate thrilling rapids and serene waters. An unforgettable aquatic adventure awaits.",
    image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=800&q=80",
    href: "/services#rafting",
  },
  {
    title: "Wilderness Camping",
    description: "Disconnect to reconnect. Experience nature at its purest under starlit skies.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    href: "/services#camping",
  },
  {
    title: "Rock Climbing",
    description: "Scale new heights with professional instruction. All skill levels welcome.",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80",
    href: "/services#climbing",
  },
]

const features = [
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Safety First",
    description: "Certified guides, premium equipment, and comprehensive safety protocols for every adventure.",
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Expert Guides",
    description: "Passionate professionals with decades of combined experience in outdoor adventures.",
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    title: "Premium Experience",
    description: "Curated adventures with attention to every detail for an unforgettable journey.",
  },
  {
    icon: <Compass className="h-6 w-6 text-primary" />,
    title: "Custom Trips",
    description: "Tailored expeditions designed around your preferences, skill level, and dreams.",
  },
]

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "10K+", label: "Happy Adventurers" },
  { value: "50+", label: "Destinations" },
  { value: "99%", label: "Safety Record" },
]

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Adventure Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    content: "The mountain hiking expedition exceeded all expectations. The guides were incredibly knowledgeable and made sure everyone felt safe while pushing our limits. An experience I will cherish forever.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Chen",
    role: "Corporate Team Leader",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    content: "Organized a team-building trip with UB Adventurez. The rafting experience brought our team closer together. Professional, well-organized, and absolutely thrilling!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Solo Traveler",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    content: "As a solo female traveler, I felt completely safe and welcomed. The wilderness camping trip was magical - sleeping under the stars with a wonderful group of fellow adventurers.",
    rating: 5,
  },
]

const faqs = [
  {
    question: "What fitness level is required for your adventures?",
    answer: "We offer adventures for all fitness levels, from beginner-friendly hikes to challenging expeditions. Each tour clearly indicates the required fitness level, and our team can help you choose the perfect adventure based on your experience and capabilities.",
  },
  {
    question: "What equipment do I need to bring?",
    answer: "We provide all technical equipment needed for the adventure. You will receive a detailed packing list before your trip, which typically includes personal items like appropriate clothing, sturdy footwear, and personal medications. Specialized gear like climbing equipment, rafting gear, or camping equipment is provided by us.",
  },
  {
    question: "Are your guides certified?",
    answer: "Absolutely! All our guides hold internationally recognized certifications in their respective fields. They undergo rigorous training, maintain current first aid and wilderness rescue certifications, and have extensive field experience. Your safety is our top priority.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We understand plans can change. Full refunds are available for cancellations made 30+ days before the adventure date. Cancellations 15-30 days prior receive a 50% refund or full credit for a future trip. We also offer trip insurance options at booking.",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer: "Yes! We cater to various dietary needs including vegetarian, vegan, gluten-free, and allergies. Please inform us of any dietary requirements when booking, and our team will ensure appropriate meals are prepared for your adventure.",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1920&q=80"
            alt="Mountain adventure landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-primary/10 backdrop-blur-sm text-primary text-sm font-medium rounded-full mb-6"
            >
              Premium Adventure Tourism
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance"
            >
              Embrace the Wild.
              <br />
              <span className="text-primary">Discover Yourself.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Experience the thrill of a lifetime with expertly guided adventures. 
              From mountain peaks to rushing rivers, your journey begins here.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-semibold hover:bg-primary/90 transition-all hover:scale-105"
              >
                Explore Adventures
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            label="Our Services"
            title="Adventures That Await You"
            description="From adrenaline-pumping expeditions to peaceful nature retreats, discover experiences crafted for every type of adventurer."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* About Preview Section */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
                <Image
                  src="/home_guides.png"
                  alt="Adventure guides"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/30 rounded-2xl -z-10" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Passionate About Adventure Since 2009
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded by a team of outdoor enthusiasts, UB Adventurez has grown from a small local 
                operation to a premier adventure tourism company. We believe that the best experiences 
                happen when you step outside your comfort zone.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our mission is simple: to provide safe, memorable, and transformative outdoor 
                experiences that connect people with nature and with themselves.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn More About Us <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            label="Why Choose Us"
            title="The UB Adventurez Difference"
            description="What sets us apart is our unwavering commitment to excellence, safety, and creating memories that last a lifetime."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} {...stat} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Adventure Types Grid */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            label="Adventure Types"
            title="Choose Your Path"
            description="Whether you seek the thrill of heights or the peace of wilderness, we have the perfect adventure waiting for you."
            center
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Mountain, label: "Mountains", count: "15 Trips" },
              { icon: Waves, label: "Water", count: "12 Trips" },
              { icon: Tent, label: "Camping", count: "8 Trips" },
              { icon: TreePine, label: "Forest", count: "10 Trips" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all cursor-pointer text-center"
              >
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            label="Testimonials"
            title="Stories From Our Adventurers"
            description="Do not just take our word for it. Hear from those who have experienced the magic of our adventures."
            center
          />
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            label="FAQs"
            title="Frequently Asked Questions"
            description="Everything you need to know before embarking on your next adventure with us."
            center
          />
          <FAQSection items={faqs} />
        </div>
      </Section>

      {/* Newsletter Section */}
      <Section className="bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stay in the Loop
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for exclusive offers, adventure tips, and early access to new expeditions.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=1600&q=80"
                alt="Adventure landscape"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/80" />
            </div>
            <div className="relative z-10 py-20 px-8 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Ready to Begin Your Adventure?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Take the first step towards an unforgettable experience. Our team is ready to help you plan the perfect adventure.
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
                  View All Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
