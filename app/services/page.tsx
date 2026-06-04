"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Users, MapPin, Check, Star } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"

const services = [
  {
    id: "hiking",
    title: "Mountain Hiking",
    tagline: "Conquer New Heights",
    description: "From gentle nature walks to challenging summit expeditions, our hiking adventures cater to all skill levels. Experience breathtaking vistas, diverse ecosystems, and the satisfaction of reaching new peaks.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    features: [
      "Beginner to expert trail options",
      "Professional mountain guides",
      "All necessary equipment provided",
      "Small group sizes (max 12)",
      "Scenic photography opportunities",
      "Wildlife spotting sessions",
    ],
    trips: [
      { name: "Summit Sunrise Trek", duration: "1 Day", difficulty: "Moderate", price: "$149" },
      { name: "Alpine Wilderness Expedition", duration: "3 Days", difficulty: "Challenging", price: "$549" },
      { name: "Family Nature Walk", duration: "Half Day", difficulty: "Easy", price: "$79" },
    ],
  },
  {
    id: "rafting",
    title: "River Rafting",
    tagline: "Ride the Rapids",
    description: "Feel the rush of adrenaline as you navigate thrilling rapids or enjoy peaceful floats through scenic river canyons. Our rafting experiences offer excitement for beginners and experts alike.",
    image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=1200&q=80",
    features: [
      "Class I to Class V rapids",
      "Coast Guard certified guides",
      "Top-quality safety equipment",
      "Waterproof camera rentals",
      "Riverside camping options",
      "Gourmet shore lunches",
    ],
    trips: [
      { name: "Gentle Float Adventure", duration: "Half Day", difficulty: "Easy", price: "$89" },
      { name: "Whitewater Thunder", duration: "1 Day", difficulty: "Challenging", price: "$179" },
      { name: "Multi-Day River Expedition", duration: "3 Days", difficulty: "Expert", price: "$699" },
    ],
  },
  {
    id: "camping",
    title: "Wilderness Camping",
    tagline: "Under the Stars",
    description: "Disconnect from the digital world and reconnect with nature. Our camping experiences range from comfortable glamping to rugged backcountry adventures, all with expert guidance and support.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80",
    features: [
      "Premium camping equipment",
      "Campfire cooking experiences",
      "Stargazing sessions",
      "Wilderness survival skills",
      "Leave No Trace education",
      "Photography workshops",
    ],
    trips: [
      { name: "Weekend Glamping Escape", duration: "2 Days", difficulty: "Easy", price: "$299" },
      { name: "Backcountry Adventure", duration: "4 Days", difficulty: "Moderate", price: "$599" },
      { name: "Survival Skills Intensive", duration: "3 Days", difficulty: "Challenging", price: "$449" },
    ],
  },
  {
    id: "climbing",
    title: "Rock Climbing",
    tagline: "Scale New Heights",
    description: "Whether you are a first-timer or an experienced climber, our rock climbing adventures provide the perfect challenge. Learn proper techniques and conquer stunning natural formations.",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=1200&q=80",
    features: [
      "AMGA certified instructors",
      "All climbing gear provided",
      "Indoor and outdoor options",
      "Personalized skill development",
      "Multi-pitch climbing routes",
      "Bouldering sessions",
    ],
    trips: [
      { name: "Intro to Climbing", duration: "Half Day", difficulty: "Beginner", price: "$99" },
      { name: "Vertical Challenge Day", duration: "1 Day", difficulty: "Intermediate", price: "$189" },
      { name: "Advanced Multi-Pitch Course", duration: "2 Days", difficulty: "Expert", price: "$449" },
    ],
  },
]

const additionalServices = [
  {
    title: "Corporate Team Building",
    description: "Strengthen your team through shared adventure experiences.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
  },
  {
    title: "Private Tours",
    description: "Customized adventures tailored to your specific desires.",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&q=80",
  },
  {
    title: "Photography Expeditions",
    description: "Capture stunning landscapes with expert guidance.",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80",
  },
  {
    title: "Youth Programs",
    description: "Building confidence and outdoor skills in young adventurers.",
    image: "https://images.unsplash.com/photo-1472745942893-4b9f730c7668?w=600&q=80",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80"
            alt="Mountain adventure"
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
              Adventures for Every Spirit
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              From mountain peaks to rushing rivers, we offer a diverse range of expertly 
              guided adventures. Find your perfect escape and create memories that last a lifetime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <Section
          key={service.id}
          id={service.id}
          className={index % 2 === 0 ? "bg-background" : "bg-card"}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 !== 0 ? "lg:order-2" : ""}
              >
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  {service.tagline}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-all hover:scale-105"
                >
                  Book This Adventure
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 !== 0 ? "lg:order-1" : ""}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Trip Options */}
                <div className="space-y-3">
                  {service.trips.map((trip) => (
                    <div
                      key={trip.name}
                      className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl"
                    >
                      <div>
                        <h4 className="font-medium text-foreground">{trip.name}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {trip.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="h-4 w-4" />
                            {trip.difficulty}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-primary font-bold text-lg">{trip.price}</span>
                        <p className="text-xs text-muted-foreground">per person</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Section>
      ))}

      {/* Additional Services */}
      <Section className="bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            label="More Adventures"
            title="Specialized Experiences"
            description="Beyond our core offerings, we provide unique experiences tailored to specific interests and groups."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing Info */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  Pricing
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  What&apos;s Included
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  All our adventure packages include essential items to ensure you have 
                  a safe and memorable experience. Here&apos;s what you can expect:
                </p>
                <ul className="space-y-3">
                  {[
                    "Professional certified guides",
                    "All necessary equipment and gear",
                    "Safety briefings and training",
                    "Meals during the adventure",
                    "Transportation from meeting point",
                    "Comprehensive travel insurance",
                    "24/7 emergency support",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary/50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Group Discounts</h3>
                <div className="space-y-4">
                  {[
                    { size: "4-6 people", discount: "10% off" },
                    { size: "7-10 people", discount: "15% off" },
                    { size: "11+ people", discount: "20% off" },
                  ].map((tier) => (
                    <div key={tier.size} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-foreground">{tier.size}</span>
                      </div>
                      <span className="text-primary font-semibold">{tier.discount}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border mt-6 pt-6">
                  <p className="text-muted-foreground text-sm mb-4">
                    Contact us for custom corporate packages and multi-day expedition pricing.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Get Custom Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your perfect adventure or book directly online.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-semibold hover:bg-primary/90 transition-all hover:scale-105"
              >
                Contact Us
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
