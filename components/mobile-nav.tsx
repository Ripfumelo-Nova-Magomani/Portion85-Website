"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  eventLinks: Array<{ href: string; label: string; icon: any }>
  visitorLinks: Array<{ href: string; label: string; icon: any }>
}

export function MobileNav({ isOpen, onClose, eventLinks, visitorLinks }: MobileNavProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      {/* Mobile Menu Panel */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-stone-200">
          <Link href="/" className="flex items-center space-x-2" onClick={onClose}>
            <Image src="/images/logo.png" alt="Portion 85 Logo" width={32} height={32} className="h-8 w-auto" />
          </Link>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6 text-stone-700" />
          </Button>
        </div>

        {/* Navigation Content */}
        <div className="overflow-y-auto h-full pb-20">
          <div className="px-4 py-6 space-y-2">
            <Link
              href="/"
              className="block py-3 px-4 text-stone-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-colors"
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-3 px-4 text-stone-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-colors"
              onClick={onClose}
            >
              About
            </Link>
            <Link
              href="/facilities"
              className="block py-3 px-4 text-stone-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-colors"
              onClick={onClose}
            >
              Facilities
            </Link>

            {/* Events Section */}
            <div>
              <button
                onClick={() => toggleSection("events")}
                className="flex items-center justify-between w-full py-3 px-4 text-stone-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-colors"
              >
                Events
                {expandedSection === "events" ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {expandedSection === "events" && (
                <div className="ml-4 mt-2 space-y-1">
                  {eventLinks.map((link) => {
                    const IconComponent = link.icon
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center py-2 px-4 text-sm text-stone-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors group"
                        onClick={onClose}
                      >
                        <IconComponent className="h-4 w-4 mr-3 text-orange-500 group-hover:scale-110 transition-transform duration-200" />
                        {link.label}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Visitor Info Section */}
            <div>
              <button
                onClick={() => toggleSection("visitor")}
                className="flex items-center justify-between w-full py-3 px-4 text-stone-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-colors"
              >
                Visitor Info
                {expandedSection === "visitor" ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {expandedSection === "visitor" && (
                <div className="ml-4 mt-2 space-y-1">
                  {visitorLinks.map((link) => {
                    const IconComponent = link.icon
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center py-2 px-4 text-sm text-stone-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors group"
                        onClick={onClose}
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
              className="block py-3 px-4 text-stone-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-colors"
              onClick={onClose}
            >
              Conferencing
            </Link>
            <Link
              href="/venue-hire"
              className="block py-3 px-4 text-stone-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-colors"
              onClick={onClose}
            >
              Venue Hire
            </Link>
            <Link
              href="/contact"
              className="block py-3 px-4 text-stone-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-colors"
              onClick={onClose}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <div className="pt-4">
              <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                <Link href="/reservation" onClick={onClose}>
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
