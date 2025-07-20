"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Search, X, MapPin, Clock, DollarSign, Route, Utensils, Users, Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  category: string
  icon: React.ReactNode
  keywords: string[]
}

const searchData: SearchResult[] = [
  // Visitor Information
  {
    id: "admission-prices",
    title: "Admission Prices",
    description: "Adult R115, Pensioner R100, Child R85. Includes guided tours and wine processing demo.",
    url: "/visitor-info/admission-prices",
    category: "Visitor Info",
    icon: <DollarSign className="h-4 w-4" />,
    keywords: ["prices", "admission", "cost", "fees", "adult", "child", "pensioner", "entrance", "ticket"],
  },
  {
    id: "how-to-get-there",
    title: "How to Get There",
    description: "GPS coordinates and detailed directions from Johannesburg, Pretoria, and surrounding areas.",
    url: "/visitor-info/how-to-get-there",
    category: "Visitor Info",
    icon: <MapPin className="h-4 w-4" />,
    keywords: ["directions", "location", "gps", "coordinates", "how to get", "address", "map", "driving", "route"],
  },
  {
    id: "trading-hours",
    title: "Trading Hours",
    description: "Open Mon-Fri 8AM-5PM, Sat 8AM-5PM, Sun 8AM-3:30PM. Closed Christmas Day.",
    url: "/visitor-info/trading-hours",
    category: "Visitor Info",
    icon: <Clock className="h-4 w-4" />,
    keywords: ["hours", "opening", "closing", "time", "schedule", "when open", "operating hours"],
  },
  {
    id: "plan-your-day",
    title: "Plan Your Day",
    description: "Tips for visiting, what to bring, tour schedules, and wine processing demonstration times.",
    url: "/visitor-info/plan-your-day",
    category: "Visitor Info",
    icon: <Calendar className="h-4 w-4" />,
    keywords: ["plan", "schedule", "itinerary", "what to bring", "tips", "visit", "day trip"],
  },
  {
    id: "where-to-eat",
    title: "Where to Eat",
    description: "Farm-to-table restaurant with wood-fired pizzas and fresh ingredients. Full menu available.",
    url: "/visitor-info/where-to-eat",
    category: "Visitor Info",
    icon: <Utensils className="h-4 w-4" />,
    keywords: ["food", "restaurant", "eat", "dining", "pizza", "menu", "farm to table", "wood fired"],
  },

  // Events
  {
    id: "guided-tours",
    title: "Guided Farm Tours",
    description: "90-minute educational tours showcasing sustainable farming and wine processing demonstrations.",
    url: "/events/guided-tours",
    category: "Events",
    icon: <Route className="h-4 w-4" />,
    keywords: [
      "tours",
      "guided",
      "farm tour",
      "educational",
      "sustainable farming",
      "wine processing",
      "demonstration",
    ],
  },
  {
    id: "birthday-parties",
    title: "Birthday Parties",
    description: "Farm-themed birthday celebrations with activities, food, and animal interactions.",
    url: "/events/birthday-parties",
    category: "Events",
    icon: <Users className="h-4 w-4" />,
    keywords: ["birthday", "party", "celebration", "kids", "children", "farm animals", "activities"],
  },
  {
    id: "school-groups",
    title: "School Group Visits",
    description: "Educational programs for schools with curriculum-aligned activities and hands-on learning.",
    url: "/events/school-groups",
    category: "Events",
    icon: <Users className="h-4 w-4" />,
    keywords: ["school", "education", "students", "learning", "curriculum", "field trip", "educational programs"],
  },
  {
    id: "sip-and-paint",
    title: "Sip & Paint Events",
    description: "Creative painting sessions combined with wine tasting in a relaxed farm setting.",
    url: "/events/sip-and-paint",
    category: "Events",
    icon: <Users className="h-4 w-4" />,
    keywords: ["sip and paint", "wine tasting", "painting", "art", "creative", "adults", "relaxation"],
  },

  // Facilities
  {
    id: "facilities",
    title: "Our Facilities",
    description: "25+ unique facilities including wine processing, educational centers, and event venues.",
    url: "/facilities",
    category: "Facilities",
    icon: <MapPin className="h-4 w-4" />,
    keywords: ["facilities", "attractions", "wine processing", "educational center", "event venue", "training"],
  },
  {
    id: "conferencing",
    title: "Conferencing & Functions",
    description: "Professional conference facilities for corporate events, meetings, and team building.",
    url: "/conferencing",
    category: "Business",
    icon: <Users className="h-4 w-4" />,
    keywords: ["conference", "meeting", "corporate", "business", "team building", "function", "professional"],
  },
  {
    id: "venue-hire",
    title: "Venue Hire",
    description: "Beautiful venues for weddings, private events, and celebrations in a farm setting.",
    url: "/venue-hire",
    category: "Events",
    icon: <MapPin className="h-4 w-4" />,
    keywords: ["venue", "hire", "wedding", "event", "celebration", "private", "booking"],
  },

  // Training & Development
  {
    id: "training-programs",
    title: "Training Programs",
    description: "Skills development and training courses in various fields including farming and business.",
    url: "/facilities",
    category: "Education",
    icon: <Users className="h-4 w-4" />,
    keywords: [
      "training",
      "skills development",
      "courses",
      "workshops",
      "education",
      "learning",
      "professional development",
    ],
  },

  // Contact
  {
    id: "contact",
    title: "Contact Us",
    description: "Get in touch via phone (067 963 4795), email (info@portion85.co.za), or visit us.",
    url: "/contact",
    category: "Contact",
    icon: <Phone className="h-4 w-4" />,
    keywords: ["contact", "phone", "email", "address", "get in touch", "information", "help"],
  },
]

interface WebsiteSearchProps {
  isOpen: boolean
  onClose: () => void
}

export function WebsiteSearch({ isOpen, onClose }: WebsiteSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)

    // Simulate search delay for better UX
    const searchTimeout = setTimeout(() => {
      const query = searchQuery.toLowerCase().trim()
      const results = searchData.filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(query)
        const descriptionMatch = item.description.toLowerCase().includes(query)
        const keywordMatch = item.keywords.some((keyword) => keyword.toLowerCase().includes(query))
        const categoryMatch = item.category.toLowerCase().includes(query)

        return titleMatch || descriptionMatch || keywordMatch || categoryMatch
      })

      setSearchResults(results)
      setIsSearching(false)
    }, 300)

    return () => clearTimeout(searchTimeout)
  }, [searchQuery])

  const handleResultClick = () => {
    setSearchQuery("")
    setSearchResults([])
    onClose()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        {/* Search Header */}
        <div className="p-6 border-b border-stone-200">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for tours, prices, directions, facilities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              {isSearching && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-orange-500"></div>
                </div>
              )}
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="p-2 hover:bg-stone-100">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {searchQuery.trim() === "" ? (
            <div className="p-6 text-center">
              <Search className="h-12 w-12 text-stone-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-stone-800 mb-2">Search Portion 85</h3>
              <p className="text-stone-600">
                Find information about tours, prices, directions, facilities, and more...
              </p>
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {["tours", "prices", "directions", "training", "events", "contact"].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setSearchQuery(suggestion)}
                    className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm hover:bg-orange-100 hover:text-orange-700 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 && !isSearching ? (
            <div className="p-6 text-center">
              <div className="text-stone-400 mb-4">
                <Search className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-stone-800 mb-2">No results found</h3>
              <p className="text-stone-600">Try searching for "tours", "prices", "directions", or "facilities"</p>
            </div>
          ) : (
            <div className="p-4">
              {searchResults.map((result, index) => (
                <Link
                  key={result.id}
                  href={result.url}
                  onClick={handleResultClick}
                  className="block p-4 rounded-lg hover:bg-stone-50 transition-colors group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 text-orange-600 p-2 rounded-lg group-hover:bg-orange-200 transition-colors">
                      {result.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-stone-800 group-hover:text-orange-600 transition-colors">
                          {result.title}
                        </h4>
                        <span className="px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">
                          {result.category}
                        </span>
                      </div>
                      <p className="text-stone-600 text-sm line-clamp-2">{result.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Search Footer */}
        {searchResults.length > 0 && (
          <div className="p-4 border-t border-stone-200 bg-stone-50">
            <p className="text-sm text-stone-600 text-center">
              Found {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
