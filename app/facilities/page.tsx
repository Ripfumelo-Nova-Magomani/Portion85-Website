"use client"

import type React from "react"

import { useState } from "react"
import { OptimizedImage } from "@/components/optimized-image"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import {
  Wine,
  GraduationCap,
  Users,
  TreePine,
  Utensils,
  Building,
  Palette,
  Tractor,
  Heart,
  ArrowRight,
  MapPin,
  Clock,
  Star,
} from "lucide-react"

interface Facility {
  id: string
  name: string
  description: string
  longDescription: string
  image: string
  icon: React.ReactNode
  category: string
  features: string[]
  capacity?: string
  duration?: string
  ageGroup?: string
}

const facilities: Facility[] = [
  {
    id: "wine-processing",
    name: "Wine Processing Simulation",
    description: "Experience live wine processing from grape to bottle",
    longDescription:
      "Our unique wine processing simulation offers visitors an immersive experience into the world of winemaking. Watch as we demonstrate the complete process from grape selection and crushing to fermentation, aging, and bottling. This educational experience is perfect for wine enthusiasts and those curious about the art of winemaking.",
    image: "/images/facility-1.jpg",
    icon: <Wine className="h-8 w-8" />,
    category: "Educational",
    features: ["Live demonstrations", "Interactive learning", "Tasting sessions", "Expert guidance"],
    capacity: "Up to 30 people",
    duration: "45 minutes",
    ageGroup: "18+ (for tasting)",
  },
  {
    id: "educational-center",
    name: "Educational Training Center",
    description: "Modern facilities for workshops and skills development",
    longDescription:
      "Our state-of-the-art educational center provides the perfect environment for learning and development. Equipped with modern technology, comfortable seating, and flexible layouts, this facility hosts workshops, seminars, training programs, and educational tours for visitors of all ages.",
    image: "/images/facility-2.jpg",
    icon: <GraduationCap className="h-8 w-8" />,
    category: "Education",
    features: ["Modern AV equipment", "Flexible seating", "Interactive whiteboards", "Climate controlled"],
    capacity: "Up to 80 people",
    duration: "Flexible",
    ageGroup: "All ages",
  },
  {
    id: "conference-hall",
    name: "Conference & Event Hall",
    description: "Professional venue for corporate events and celebrations",
    longDescription:
      "Our versatile conference hall is designed to accommodate a wide range of events, from corporate meetings and conferences to weddings and celebrations. With professional lighting, sound systems, and customizable layouts, we ensure your event is memorable and successful.",
    image: "/images/facility-3.jpg",
    icon: <Building className="h-8 w-8" />,
    category: "Events",
    features: ["Professional sound system", "Stage area", "Customizable lighting", "Catering facilities"],
    capacity: "Up to 150 people",
    duration: "Full day rental",
    ageGroup: "All ages",
  },
  {
    id: "outdoor-adventure",
    name: "Outdoor Adventure Area",
    description: "Exciting outdoor activities in natural surroundings",
    longDescription:
      "Our outdoor adventure area offers a variety of exciting activities set in beautiful natural surroundings. From team-building exercises to recreational games, this space provides the perfect opportunity to connect with nature while enjoying fun-filled activities.",
    image: "/images/facility-4.jpg",
    icon: <TreePine className="h-8 w-8" />,
    category: "Recreation",
    features: ["Team building activities", "Nature trails", "Picnic areas", "Adventure games"],
    capacity: "Up to 100 people",
    duration: "2-4 hours",
    ageGroup: "All ages",
  },
  {
    id: "art-gallery",
    name: "Cultural Art Gallery",
    description: "Showcasing local heritage and contemporary art",
    longDescription:
      "Our cultural art gallery celebrates local heritage and contemporary art through rotating exhibitions and permanent displays. This space serves as a cultural hub, showcasing the work of local artists and preserving the rich history of our region.",
    image: "/images/facility-5.jpg",
    icon: <Palette className="h-8 w-8" />,
    category: "Culture",
    features: ["Rotating exhibitions", "Local artist showcases", "Interactive displays", "Educational tours"],
    capacity: "Up to 50 people",
    duration: "Self-guided",
    ageGroup: "All ages",
  },
  {
    id: "restaurant",
    name: "The Harvest Table Restaurant",
    description: "Farm-to-table dining with fresh local ingredients",
    longDescription:
      "The Harvest Table Restaurant offers an exceptional farm-to-table dining experience featuring fresh ingredients grown right here on our farm. Our wood-fired oven produces artisanal pizzas, while our seasonal menu celebrates the best of local produce.",
    image: "/images/restaurant.jpg",
    icon: <Utensils className="h-8 w-8" />,
    category: "Dining",
    features: ["Wood-fired oven", "Farm-fresh ingredients", "Seasonal menu", "Outdoor seating"],
    capacity: "Up to 80 people",
    duration: "Open daily",
    ageGroup: "All ages",
  },
  {
    id: "farming-area",
    name: "Sustainable Farming Area",
    description: "Learn about sustainable agriculture and farming practices",
    longDescription:
      "Our sustainable farming area demonstrates modern agricultural practices and environmental stewardship. Visitors can learn about crop rotation, organic farming methods, and sustainable agriculture while exploring our working farm.",
    image: "/images/facility-6.jpg",
    icon: <Tractor className="h-8 w-8" />,
    category: "Educational",
    features: ["Guided tours", "Hands-on activities", "Crop demonstrations", "Sustainability education"],
    capacity: "Up to 40 people",
    duration: "1-2 hours",
    ageGroup: "All ages",
  },
  {
    id: "animal-area",
    name: "Farm Animal Experience",
    description: "Interactive experiences with friendly farm animals",
    longDescription:
      "Our farm animal area provides safe and educational interactions with a variety of friendly farm animals. Children and adults alike can learn about animal care, farming practices, and the important role animals play in sustainable agriculture.",
    image: "/images/facility-4.jpg",
    icon: <Heart className="h-8 w-8" />,
    category: "Recreation",
    features: ["Animal feeding", "Educational talks", "Petting area", "Photo opportunities"],
    capacity: "Up to 25 people",
    duration: "30-45 minutes",
    ageGroup: "All ages",
  },
]

const categories = ["All", "Educational", "Events", "Recreation", "Culture", "Dining"]

export default function FacilitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null)

  const filteredFacilities =
    selectedCategory === "All" ? facilities : facilities.filter((facility) => facility.category === selectedCategory)

  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60 z-10"></div>
        <OptimizedImage
          src="/images/facility-1.jpg"
          alt="Portion 85 Facilities"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Facilities</h1>
              <p className="text-xl text-white/90 mb-6">
                Discover our 25+ unique facilities designed to educate, inspire, and entertain visitors of all ages
              </p>
              <div className="flex items-center gap-4 text-white/80">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>25+ Facilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>All Ages Welcome</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>Open Daily</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-orange-600 text-white shadow-lg"
                    : "bg-stone-100 text-stone-700 hover:bg-orange-100 hover:text-orange-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              {selectedCategory === "All" ? "All Facilities" : `${selectedCategory} Facilities`}
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Each facility at Portion 85 is designed to provide unique experiences that combine education,
              entertainment, and inspiration in a beautiful farm setting.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFacilities.map((facility, index) => (
              <AnimatedSection
                key={facility.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                delay={index * 0.1}
                onClick={() => setSelectedFacility(facility)}
              >
                <div className="relative h-64">
                  <OptimizedImage
                    src={facility.image}
                    alt={facility.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-orange-600 text-white p-2 rounded-lg">{facility.icon}</div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm mb-2">
                      {facility.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{facility.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-stone-600 mb-4">{facility.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-stone-500">
                      {facility.capacity && (
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{facility.capacity}</span>
                        </div>
                      )}
                      {facility.duration && (
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{facility.duration}</span>
                        </div>
                      )}
                    </div>
                    <ArrowRight className="h-5 w-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Featured Experiences</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Don't miss these signature experiences that make Portion 85 truly special
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8" direction="left">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-600 text-white p-3 rounded-lg">
                  <Wine className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-2">Wine Processing Simulation</h3>
                  <p className="text-stone-600">
                    Our most popular attraction - witness the complete winemaking process
                  </p>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-orange-600" />
                  <span>Live demonstrations every hour</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-orange-600" />
                  <span>Expert sommelier guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-orange-600" />
                  <span>Tasting sessions included</span>
                </li>
              </ul>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </AnimatedSection>

            <AnimatedSection className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8" direction="right">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-green-600 text-white p-3 rounded-lg">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-2">Educational Programs</h3>
                  <p className="text-stone-600">Comprehensive learning experiences for schools and groups</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-green-600" />
                  <span>Curriculum-aligned content</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-green-600" />
                  <span>Hands-on learning activities</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-green-600" />
                  <span>Expert educator guides</span>
                </li>
              </ul>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Book School Visit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-stone-800">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Explore Our Facilities?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Book your visit today and experience all that Portion 85 has to offer. From educational tours to special
              events, we have something for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Book Your Visit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-stone-800"
              >
                Contact Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Facility Detail Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-64 md:h-80">
              <OptimizedImage
                src={selectedFacility.image}
                alt={selectedFacility.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-lg">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedFacility.name}</h2>
                  <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                    {selectedFacility.category}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <p className="text-lg text-stone-700 mb-6">{selectedFacility.longDescription}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {selectedFacility.capacity && (
                  <div className="text-center p-4 bg-stone-50 rounded-lg">
                    <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <p className="font-medium text-stone-800">Capacity</p>
                    <p className="text-stone-600">{selectedFacility.capacity}</p>
                  </div>
                )}
                {selectedFacility.duration && (
                  <div className="text-center p-4 bg-stone-50 rounded-lg">
                    <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <p className="font-medium text-stone-800">Duration</p>
                    <p className="text-stone-600">{selectedFacility.duration}</p>
                  </div>
                )}
                {selectedFacility.ageGroup && (
                  <div className="text-center p-4 bg-stone-50 rounded-lg">
                    <Heart className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <p className="font-medium text-stone-800">Age Group</p>
                    <p className="text-stone-600">{selectedFacility.ageGroup}</p>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-stone-800 mb-4">Features & Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedFacility.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-orange-600" />
                      <span className="text-stone-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white flex-1">Book This Experience</Button>
                <Button variant="outline" className="flex-1" onClick={() => setSelectedFacility(null)}>
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
