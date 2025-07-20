"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  ChevronDown,
  Route,
  Cake,
  GraduationCap,
  Wine,
  MapPin,
  DollarSign,
  Clock,
  CalendarCheck,
  Utensils,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

const eventLinks = [
  { href: "/events/guided-tours", label: "Guided Tours", icon: Route },
  { href: "/events/school-groups", label: "School Groups", icon: GraduationCap },
  { href: "/events/birthday-parties", label: "Birthday Parties", icon: Cake },
  { href: "/events/sip-and-paint", label: "Sip & Paint", icon: Wine },
]

const visitorLinks = [
  { href: "/visitor-info/admission-prices", label: "Admission Prices", icon: DollarSign },
  { href: "/visitor-info/trading-hours", label: "Trading Hours", icon: Clock },
  { href: "/visitor-info/how-to-get-there", label: "How to Get There", icon: MapPin },
  { href: "/visitor-info/plan-your-day", label: "Plan Your Day", icon: CalendarCheck },
  { href: "/visitor-info/where-to-eat", label: "Where to Eat", icon: Utensils },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const isAboutPage = pathname === "/about"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
  }

  // Determine navbar background and text colors
  const getNavbarStyles = () => {
    if (isHomePage) {
      // Home page: transparent when not scrolled, white when scrolled
      return isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
    } else if (isAboutPage) {
      // About page: grey blur when not scrolled, white when scrolled
      return isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-black/10 backdrop-blur-sm"
    } else {
      // Other pages: transparent when not scrolled, white when scrolled
      return isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
    }
  }

  const getTextColor = () => {
    if (isHomePage) {
      // Home page: white when not scrolled, black when scrolled
      return isScrolled ? "text-stone-700" : "text-white"
    } else if (isAboutPage) {
      // About page: white when not scrolled, black when scrolled
      return isScrolled ? "text-stone-700" : "text-white"
    } else {
      // Other pages: black when not scrolled (for visibility), black when scrolled
      return "text-stone-700"
    }
  }

  const getButtonStyles = () => {
    if (isHomePage) {
      return isScrolled
        ? "bg-orange-600 hover:bg-orange-700 text-white"
        : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
    } else if (isAboutPage) {
      return isScrolled
        ? "bg-orange-600 hover:bg-orange-700 text-white"
        : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
    } else {
      // Other pages: solid orange button always for visibility
      return "bg-orange-600 hover:bg-orange-700 text-white"
    }
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarStyles()}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logo.png" alt="Portion 85 Logo" width={40} height={40} className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className={`${getTextColor()} hover:text-orange-600 transition-colors font-medium`}>
                About
              </Link>
              <Link
                href="/facilities"
                className={`${getTextColor()} hover:text-orange-600 transition-colors font-medium`}
              >
                Facilities
              </Link>

              {/* Events Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("events")}
                  className={`flex items-center ${getTextColor()} hover:text-orange-600 transition-colors font-medium`}
                >
                  Events
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === "events" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "events" && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-stone-200 py-2 z-50">
                    {eventLinks.map((link) => {
                      const IconComponent = link.icon
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center px-4 py-3 text-sm text-stone-700 hover:bg-orange-50 hover:text-orange-600 transition-colors group"
                          onClick={closeDropdowns}
                        >
                          <IconComponent className="h-4 w-4 mr-3 text-orange-500 group-hover:scale-110 transition-transform duration-200" />
                          {link.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Visitor Info Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("visitor")}
                  className={`flex items-center ${getTextColor()} hover:text-orange-600 transition-colors font-medium`}
                >
                  Visitor Info
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === "visitor" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "visitor" && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-stone-200 py-2 z-50">
                    {visitorLinks.map((link) => {
                      const IconComponent = link.icon
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center px-4 py-3 text-sm text-stone-700 hover:bg-orange-50 hover:text-orange-600 transition-colors group"
                          onClick={closeDropdowns}
                        >
                          <IconComponent className="h-4 w-4 mr-3 text-orange-500 group-hover:scale-110 transition-transform duration-200" />
                          {link.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/conferencing"
                className={`${getTextColor()} hover:text-orange-600 transition-colors font-medium`}
              >
                Conferencing
              </Link>
              <Link
                href="/venue-hire"
                className={`${getTextColor()} hover:text-orange-600 transition-colors font-medium`}
              >
                Venue Hire
              </Link>
              <Link href="/contact" className={`${getTextColor()} hover:text-orange-600 transition-colors font-medium`}>
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className={getButtonStyles()}>
                <Link href="/reservation">Book Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${getTextColor()}`} />
              ) : (
                <Menu className={`h-6 w-6 ${getTextColor()}`} />
              )}
            </Button>
          </div>
        </div>

        {/* Click outside to close dropdowns */}
        {activeDropdown && <div className="fixed inset-0 z-40" onClick={closeDropdowns} />}
      </nav>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        eventLinks={eventLinks}
        visitorLinks={visitorLinks}
      />
    </>
  )
}
