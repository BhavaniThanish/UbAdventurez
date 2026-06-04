"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, X } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"

const categories = ["All", "Mountains", "Water", "Camping", "Wildlife", "Climbing"]

const galleryItems = [
  { id: 1, src: "/gallery/mountains_peak.png", category: "Mountains", alt: "Mountain summit view" },
  { id: 2, src: "/gallery/water_kayak.png", category: "Water", alt: "River rafting adventure" },
  { id: 3, src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80", category: "Camping", alt: "Campsite at sunset" },
  { id: 4, src: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80", category: "Climbing", alt: "Rock climbing" },
  { id: 5, src: "/projects/himalayan_summit.png", category: "Mountains", alt: "Alpine landscape" },
  { id: 6, src: "/gallery/water_kayak.png", category: "Water", alt: "Kayaking adventure" },
  { id: 7, src: "/gallery/wildlife_leopard.png", category: "Wildlife", alt: "Majestic snow leopard in mountains" },
  { id: 8, src: "/projects/patagonia_trek.png", category: "Mountains", alt: "Hiking trail" },
  { id: 9, src: "/gallery/mountains_peak.png", category: "Mountains", alt: "Mountain reflection" },
  { id: 10, src: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=800&q=80", category: "Camping", alt: "Night camping" },
  { id: 11, src: "/projects/himalayan_summit.png", category: "Mountains", alt: "Valley view" },
  { id: 12, src: "/gallery/water_rafting.png", category: "Water", alt: "Canyon rafting" },
  { id: 13, src: "/projects/patagonia_trek.png", category: "Mountains", alt: "Patagonia peaks" },
  { id: 14, src: "/gallery/mountains_peak.png", category: "Mountains", alt: "Sunrise over mountains" },
  { id: 15, src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80", category: "Climbing", alt: "Climbing equipment" },
  { id: 16, src: "/gallery/wildlife_leopard.png", category: "Wildlife", alt: "Snow leopard on rocky ledge" },
  { id: 17, src: "/projects/himalayan_summit.png", category: "Mountains", alt: "Himalayan view" },
  { id: 18, src: "/projects/patagonia_trek.png", category: "Mountains", alt: "Japanese mountains" },
  { id: 19, src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80", category: "Wildlife", alt: "Northern lights" },
  { id: 20, src: "/projects/himalayan_summit.png", category: "Mountains", alt: "Snowy peaks" },
]

interface GalleryItem {
  id: number
  src: string
  category: string
  alt: string
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80"
            alt="Gallery hero"
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
              Gallery
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
              Moments That Inspire
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore stunning photography from our adventures around the world. 
              Each image tells a story of exploration, courage, and natural beauty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-foreground font-medium text-sm px-4 py-2 bg-primary rounded-full">
                    View
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-primary uppercase tracking-wider">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </Section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 bg-secondary rounded-full text-foreground hover:text-primary transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-5xl max-h-[80vh] w-full aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </motion.div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <span className="text-primary text-sm uppercase tracking-wider">{selectedImage.category}</span>
            <p className="text-foreground font-medium mt-1">{selectedImage.alt}</p>
          </div>
        </motion.div>
      )}

      {/* Stats Section */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5000+", label: "Photos Captured" },
              { value: "50+", label: "Destinations" },
              { value: "100+", label: "Expeditions Documented" },
              { value: "15", label: "Years of Adventures" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
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
              Ready to Create Your Own Memories?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join us on your next adventure and capture moments that will last a lifetime.
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
