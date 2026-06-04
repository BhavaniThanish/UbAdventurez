"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"
import { FAQSection } from "@/components/faq-section"
import { submitInquiry } from "@/lib/backend/actions"

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    content: "info@ubadventurez.com",
    description: "We respond within 24 hours",
    href: "mailto:info@ubadventurez.com",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    content: "+1 (234) 567-890",
    description: "Mon-Fri, 9am-6pm PST",
    href: "tel:+1234567890",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Visit Us",
    content: "123 Adventure Lane",
    description: "Mountain View, CA 94043",
    href: "#map",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Business Hours",
    content: "Mon - Fri: 9am - 6pm",
    description: "Sat: 10am - 4pm",
    href: null,
  },
]

const faqs = [
  {
    question: "How do I book an adventure?",
    answer: "You can book directly through our website by selecting your preferred adventure and filling out the booking form. Alternatively, contact us by phone or email and our team will assist you with the booking process.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Full refunds are available for cancellations made 30+ days before the adventure date. Cancellations 15-30 days prior receive a 50% refund or full credit for a future trip. We also offer trip insurance options at booking.",
  },
  {
    question: "Do I need prior experience?",
    answer: "Not necessarily! We offer adventures for all skill levels. Each adventure clearly indicates the required experience level, and our team can help you choose the perfect option based on your background.",
  },
  {
    question: "What equipment do I need to bring?",
    answer: "We provide all specialized equipment. You will receive a detailed packing list before your trip with personal items needed like appropriate clothing and footwear. Contact us if you have specific questions.",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer: "Yes! We cater to various dietary needs including vegetarian, vegan, gluten-free, and allergies. Please inform us of any requirements when booking so we can prepare accordingly.",
  },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const res = await submitInquiry({ success: false }, formData)
    if (res.success) {
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
    } else {
      alert(res.error || "Failed to send message.")
    }
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80"
            alt="Contact us"
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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
              Let&apos;s Plan Your Adventure
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Have questions or ready to book? Our team is here to help you plan 
              the perfect outdoor experience. Reach out and let&apos;s start your journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <Section className="bg-primary/5 -mt-10 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    className="block bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      {info.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <p className="text-primary font-medium mb-1">{info.content}</p>
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                  </a>
                ) : (
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      {info.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <p className="text-primary font-medium mb-1">{info.content}</p>
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Form & Map */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                label="Send a Message"
                title="Get in Touch"
                description="Fill out the form below and our team will get back to you within 24 hours."
              />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div>
                  <label htmlFor="adventure" className="block text-sm font-medium text-foreground mb-2">
                    Adventure Interest
                  </label>
                  <select
                    id="adventure"
                    name="adventure"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  >
                    <option value="">Select an adventure type</option>
                    <option value="hiking">Mountain Hiking</option>
                    <option value="rafting">River Rafting</option>
                    <option value="camping">Wilderness Camping</option>
                    <option value="climbing">Rock Climbing</option>
                    <option value="corporate">Corporate Team Building</option>
                    <option value="custom">Custom Package</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="groupSize" className="block text-sm font-medium text-foreground mb-2">
                    Group Size
                  </label>
                  <select
                    id="groupSize"
                    name="groupSize"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  >
                    <option value="">Select group size</option>
                    <option value="1">Solo</option>
                    <option value="2">2 people</option>
                    <option value="3-5">3-5 people</option>
                    <option value="6-10">6-10 people</option>
                    <option value="11+">11+ people</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your dream adventure, preferred dates, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-70"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div id="map" className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                  alt="Location map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Our Headquarters</h3>
                    <p className="text-muted-foreground">123 Adventure Lane</p>
                    <p className="text-muted-foreground">Mountain View, CA 94043</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium mt-4 hover:gap-3 transition-all"
                    >
                      Get Directions <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Quick Inquiries</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  For immediate assistance or quick questions:
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-foreground font-medium">Call Us</p>
                      <p className="text-muted-foreground text-sm">+1 (234) 567-890</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@ubadventurez.com"
                    className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-foreground font-medium">Email Us</p>
                      <p className="text-muted-foreground text-sm">info@ubadventurez.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            label="FAQs"
            title="Common Questions"
            description="Find answers to frequently asked questions about our adventures and booking process."
            center
          />
          <FAQSection items={faqs} />
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
              Ready to Explore?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Browse our adventures and find the perfect experience for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-semibold hover:bg-primary/90 transition-all hover:scale-105"
              >
                View All Adventures
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-full text-base font-semibold hover:bg-secondary transition-all"
              >
                Browse Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
