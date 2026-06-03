import Link from "next/link"
import { Mountain, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from "lucide-react"

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/gallery", label: "Gallery" },
  ],
  support: [
    { href: "/contact", label: "Contact" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQs" },
    { href: "#", label: "Safety Guidelines" },
  ],
  adventures: [
    { href: "/services#hiking", label: "Mountain Hiking" },
    { href: "/services#rafting", label: "River Rafting" },
    { href: "/services#camping", label: "Wilderness Camping" },
    { href: "/services#climbing", label: "Rock Climbing" },
  ],
}

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Youtube, label: "Youtube" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Mountain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold tracking-tight">
                UB <span className="text-primary">Adventurez</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Experience the thrill of a lifetime with premium adventure tourism. 
              We craft unforgettable journeys for the bold explorer.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-secondary rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>123 Adventure Lane, Mountain View, CA 94043</span>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ubadventurez.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <span>info@ubadventurez.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} UB Adventurez. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
