import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-stone-800 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-400">Portion 85</h3>
            <p className="text-stone-300 text-sm">
              Where farming meets education, innovation meets tradition, and dreams become reality.
            </p>
            <div className="flex items-center gap-2 text-sm text-stone-300">
              <MapPin className="h-4 w-4" />
              <span>Centurion, Gauteng</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-stone-300 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="text-stone-300 hover:text-orange-400 transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/conferencing" className="text-stone-300 hover:text-orange-400 transition-colors">
                  Conferencing
                </Link>
              </li>
              <li>
                <Link href="/venue-hire" className="text-stone-300 hover:text-orange-400 transition-colors">
                  Venue Hire
                </Link>
              </li>
            </ul>
          </div>

          {/* Events */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Events</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/events/guided-tours" className="text-stone-300 hover:text-orange-400 transition-colors">
                  Guided Tours
                </Link>
              </li>
              <li>
                <Link href="/events/school-groups" className="text-stone-300 hover:text-orange-400 transition-colors">
                  School Groups
                </Link>
              </li>
              <li>
                <Link
                  href="/events/birthday-parties"
                  className="text-stone-300 hover:text-orange-400 transition-colors"
                >
                  Birthday Parties
                </Link>
              </li>
              <li>
                <Link href="/events/sip-and-paint" className="text-stone-300 hover:text-orange-400 transition-colors">
                  Sip & Paint
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-stone-300">
                <Phone className="h-4 w-4" />
                <span>+27 12 345 6789</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Mail className="h-4 w-4" />
                <span>info@portion85.co.za</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Clock className="h-4 w-4" />
                <span>Mon-Sun: 8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-8 text-center text-sm text-stone-400">
          <p>&copy; 2024 Portion 85. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
