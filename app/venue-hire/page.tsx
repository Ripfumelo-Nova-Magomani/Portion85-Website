"use client"

import type React from "react"

import { useState } from "react"
import { OptimizedImage } from "@/components/optimized-image"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import {
  Users,
  Clock,
  MapPin,
  Star,
  Heart,
  Utensils,
  Music,
  Camera,
  Wifi,
  Car,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react"

interface VenuePackage {
  id: string
  name: string
  description: string
  image: string
  capacity: string
  price: string
  features: string[]
  ideal: string[]
  duration: string
}

const venuePackages: VenuePackage[] = [
  {
    id: "wedding",
    name: "Wedding Celebrations",
    description: "Create magical memories in our beautiful farm setting",
    image: "/images/venue-hire.jpg",
    capacity: "50-200 guests",
    price: "From R15,000",
    duration: "Full day (12 hours)",
    features: [
      "Bridal suite preparation area",
      "Ceremony and reception spaces",
      "Professional lighting setup",
      "Sound system included",
      "Dedicated wedding coordinator",
      "Catering kitchen access",
      "Parking for 100+ vehicles",
      "Backup power supply",
    ],
    ideal: ["Romantic ceremonies", "Garden receptions", "Rustic weddings", "Intimate celebrations"],
  },
  {
    id: "corporate",
    name: "Corporate Events",
    description: "Professional venues for meetings, conferences, and team building",
    image: "/images/conferencing.jpg",
    capacity: "20-150 guests",
    price: "From R8,000",
    duration: "Half or full day",
    features: [
      "Modern AV equipment",
      "High-speed WiFi",
      "Flexible seating arrangements",
      "Breakout rooms available",
      "Catering services",
      "Professional support staff",
      "Climate control",
      "Presentation screens",
    ],
    ideal: ["Board meetings", "Conferences", "Team building", "Product launches"],
  },
  {
    id: "birthday",
    name: "Birthday Parties",
    description: "Unforgettable birthday celebrations for all ages",
    image: "/images/facility-4.jpg",
    capacity: "10-80 guests",
    price: "From R3,500",
    duration: "4-6 hours",
    features: [
      "Decorated party area",
      "Farm animal interactions",
      "Activity coordinators",
      "Sound system for music",
      "Tables and seating",
      "Kitchen facilities",
      "Safe play areas",
      "Photo opportunities",
    ],
    ideal: ["Children's parties", "Adult celebrations", "Family gatherings", "Themed parties"],
  },
  {
    id: "private",
    name: "Private Functions",
    description: "Exclusive venue hire for special occasions",
    image: "/images/facility-3.jpg",
    capacity: "30-120 guests",
    price: "From R6,000",
    duration: "6-8 hours",
    features: [
      "Exclusive venue access",
      "Customizable decorations",
      "Full catering options",
      "Bar service available",
      "Entertainment areas",
      "Photography friendly",
      "Flexible timing",
      "Personal event coordinator",
    ],
    ideal: ["Anniversary celebrations", "Graduation parties", "Family reunions", "Special milestones"],
  },
]

const additionalServices = [
  {
    name: "Catering Services",
    description: "Farm-to-table catering with fresh, local ingredients",
    icon: <Utensils className="h-6 w-6" />,
    options: ["Buffet style", "Plated meals", "Cocktail reception", "BBQ packages"],
  },
  {
    name: "Photography Services",
    description: "Professional photography to capture your special moments",
    icon: <Camera className="h-6 w-6" />,
    options: ["Event photography", "Portrait sessions", "Drone photography", "Photo booth setup"],
  },
  {
    name: "Entertainment",
    description: "Live music and entertainment options",
    icon: <Music className="h-6 w-6" />,
    options: ["Live bands", "DJ services", "Traditional music", "Children's entertainment"],
  },
  {
    name: "Decoration Services",
    description: "Professional decoration and styling services",
    icon: <Star className="h-6 w-6" />,
    options: ["Floral arrangements", "Lighting design", "Theme decorations", "Furniture rental"],
  },
]

export default function VenueHirePage() {
  const [selectedPackage, setSelectedPackage] = useState<VenuePackage | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-stone-700/60 z-10"></div>
        <OptimizedImage
          src="/images/venue-hire.jpg"
          alt="Venue Hire at Portion 85"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Venue Hire</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-6">
                Create unforgettable memories in our beautiful farm setting. Perfect for weddings, corporate events,
                celebrations, and special occasions.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-white/80 mb-8">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>10-200 Guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Multiple Venues</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  <span>Full Service</span>
                </div>
              </div>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Get Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Packages */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Venue Packages</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Choose from our carefully crafted venue packages, each designed to make your event memorable and
              stress-free.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {venuePackages.map((pkg, index) => (
              <AnimatedSection
                key={pkg.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                delay={index * 0.1}
              >
                <div className="relative h-64">
                  <OptimizedImage
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-white/90">{pkg.description}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-stone-600">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{pkg.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-orange-600">{pkg.price}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-stone-800 mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.ideal.map((item, idx) => (
                        <span key={idx} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                    onClick={() => setSelectedPackage(pkg)}
                  >
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Additional Services</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Enhance your event with our professional additional services, all designed to make your celebration
              perfect.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <AnimatedSection
                key={service.name}
                className="bg-stone-50 rounded-xl p-6 text-center hover:bg-orange-50 transition-colors duration-300"
                delay={index * 0.1}
              >
                <div className="bg-orange-600 text-white p-3 rounded-full w-fit mx-auto mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">{service.name}</h3>
                <p className="text-stone-600 mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.options.map((option, idx) => (
                    <li key={idx} className="text-sm text-stone-500">
                      • {option}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Portion 85?</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Our unique farm setting combined with professional service makes us the perfect choice for your special
              event.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Unique Setting",
                description: "Beautiful farm environment with stunning natural backdrops for photos",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Professional Service",
                description: "Dedicated event coordinators to ensure your event runs smoothly",
              },
              {
                icon: <Utensils className="h-8 w-8" />,
                title: "Farm-to-Table Catering",
                description: "Fresh, locally sourced ingredients prepared by our expert chefs",
              },
              {
                icon: <Car className="h-8 w-8" />,
                title: "Convenient Location",
                description: "Easy access from Johannesburg and Pretoria with ample parking",
              },
              {
                icon: <Wifi className="h-8 w-8" />,
                title: "Modern Amenities",
                description: "All the modern conveniences you need for a successful event",
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Memorable Experiences",
                description: "Create lasting memories in our unique and beautiful setting",
              },
            ].map((feature, index) => (
              <AnimatedSection key={feature.title} className="text-center" delay={index * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-fit mx-auto mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="opacity-90">{feature.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Request a Quote</h2>
              <p className="text-lg text-stone-600 mb-8">
                Ready to book your event? Fill out the form below and our team will get back to you within 24 hours with
                a personalized quote.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-stone-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="private">Private Function</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-stone-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      required
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-medium text-stone-700 mb-2">
                      Number of Guests *
                    </label>
                    <input
                      type="number"
                      id="guestCount"
                      name="guestCount"
                      required
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Expected number of guests"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Tell us more about your event requirements..."
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-stone-800 mb-6">Contact Information</h3>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-orange-600 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800">Phone</p>
                      <p className="text-stone-600">Ms Siyanda Bani: 067 963 4795</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-orange-600 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800">Email</p>
                      <p className="text-stone-600">
                        <a href="mailto:events@portion85.co.za" className="hover:text-orange-600 transition-colors">
                          events@portion85.co.za
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-orange-600 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800">Address</p>
                      <p className="text-stone-600">Portion 85 M26 Knopjeslaagte Centurion, 0014</p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h4 className="font-bold text-stone-800 mb-3">What happens next?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <span className="text-stone-700">We'll review your requirements within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <span className="text-stone-700">Schedule a site visit to discuss details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <span className="text-stone-700">Receive a detailed quote and proposal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <span className="text-stone-700">Finalize booking with deposit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Package Detail Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-64 md:h-80">
              <OptimizedImage
                src={selectedPackage.image}
                alt={selectedPackage.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-lg">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedPackage.name}</h2>
                  <p className="text-white/90 mb-2">{selectedPackage.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span>{selectedPackage.capacity}</span>
                    <span>•</span>
                    <span>{selectedPackage.duration}</span>
                    <span>•</span>
                    <span className="font-bold">{selectedPackage.price}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-stone-800 mb-4">Package Includes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedPackage.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="text-stone-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-stone-800 mb-4">Perfect For</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPackage.ideal.map((item, idx) => (
                    <span key={idx} className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white flex-1">
                  Request Quote for This Package
                </Button>
                <Button variant="outline" className="flex-1" onClick={() => setSelectedPackage(null)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
