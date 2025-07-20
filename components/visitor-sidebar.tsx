"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { MapPin, DollarSign, Clock, CalendarCheck, Utensils, ChevronRight } from "lucide-react"

export function VisitorSidebar() {
  const pathname = usePathname()

  const visitorLinks = [
    {
      href: "/visitor-info/how-to-get-there",
      label: "How to Get There",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      href: "/visitor-info/admission-prices",
      label: "Admission Prices",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      href: "/visitor-info/trading-hours",
      label: "Trading Hours",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      href: "/visitor-info/plan-your-day",
      label: "Plan Your Day",
      icon: <CalendarCheck className="h-5 w-5" />,
    },
    {
      href: "/visitor-info/where-to-eat",
      label: "Where to Eat",
      icon: <Utensils className="h-5 w-5" />,
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-stone-800 mb-6">Visitor Information</h3>
      <nav className="space-y-2">
        {visitorLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center p-3 rounded-md transition-all duration-200 group ${
                isActive ? "bg-orange-100 text-orange-700" : "text-stone-700 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              <span className={`mr-3 ${isActive ? "text-orange-500" : "text-orange-400 group-hover:text-orange-500"}`}>
                {link.icon}
              </span>
              <span className="flex-1">{link.label}</span>
              {isActive && <ChevronRight className="h-4 w-4 text-orange-500" />}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
