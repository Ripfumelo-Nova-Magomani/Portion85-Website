"use client"

import type React from "react"

import { useState, memo, useCallback } from "react"
import { motion } from "framer-motion"
import { MapPin, X, Home, Utensils, Leaf, Palette, Wine } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"

interface Location {
  id: string
  name: string
  description: string
  x: number
  y: number
  images: string[]
  icon: React.ReactNode
}

const locations: Location[] = [
  {
    id: "entrance",
    name: "Main Entrance",
    description: "Welcome to Portion 85! Your journey begins at our beautiful entrance gate.",
    x: 20,
    y: 75,
    images: ["/images/facility-1.jpg", "/images/facility-2.jpg"],
    icon: <Home className="h-4 w-4" />,
  },
  {
    id: "restaurant",
    name: "The Harvest Table Restaurant",
    description: "Enjoy farm-to-table dining with fresh ingredients grown right here on our farm.",
    x: 25,
    y: 30,
    images: ["/images/restaurant.jpg", "/images/facility-3.jpg"],
    icon: <Utensils className="h-4 w-4" />,
  },
  {
    id: "planting",
    name: "Planting Area",
    description: "Explore our sustainable farming practices and see where we grow our produce.",
    x: 50,
    y: 45,
    images: ["/images/facility-4.jpg", "/images/facility-5.jpg"],
    icon: <Leaf className="h-4 w-4" />,
  },
  {
    id: "gallery",
    name: "Art Gallery",
    description: "Discover local art and cultural exhibitions in our dedicated gallery space.",
    x: 75,
    y: 25,
    images: ["/images/facility-6.jpg", "/images/facility-1.jpg"],
    icon: <Palette className="h-4 w-4" />,
  },
  {
    id: "wineprocessing",
    name: "Wine Processing Rooms",
    description: "Witness our unique wine processing simulation from grape to bottle.",
    x: 80,
    y: 60,
    images: ["/images/facility-2.jpg", "/images/facility-3.jpg"],
    icon: <Wine className="h-4 w-4" />,
  },
  {
    id: "animals",
    name: "Animal Area",
    description: "Meet our friendly farm animals and learn about animal husbandry.",
    x: 55,
    y: 70,
    images: ["/images/facility-4.jpg", "/images/facility-5.jpg"],
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        <path d="M4.5 12.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S6.83 11 6 11s-1.5.67-1.5 1.5zM11 6c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm7 6.5c0 .83-.67 1.5-1.5 1.5S15 13.33 15 12.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" />
        <path d="M12 8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2z" />
      </svg>
    ),
  },
]

// Better animal icon - a simple cow/farm animal
const AnimalIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2c-1.1 0-2 .9-2 2v1c-1.1 0-2 .9-2 2v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V7c0-1.1-.9-2-2-2V4c0-1.1-.9-2-2-2z" />
    <circle cx="9" cy="6" r="1" />
    <circle cx="15" cy="6" r="1" />
    <path d="M12 10c-3.3 0-6 2.7-6 6v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-4c0-3.3-2.7-6-6-6z" />
    <path d="M8 14h2v2H8v-2zm6 0h2v2h-2v-2z" />
  </svg>
)

// Update the locations array to use the new animal icon
const updatedLocations = locations.map((location) =>
  location.id === "animals" ? { ...location, icon: <AnimalIcon /> } : location,
)

const LocationPin = memo(function LocationPin({
  location,
  index,
  onClick,
}: {
  location: Location
  index: number
  onClick: (location: Location) => void
}) {
  return (
    <motion.div
      className="absolute cursor-pointer z-20 flex flex-col items-center"
      style={{ left: `${location.x}%`, top: `${location.y}%`, transform: "translate(-50%, -100%)" }}
      initial={{ scale: 0, y: -20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.1,
      }}
      whileHover={{ scale: 1.1, y: -5 }}
      onClick={() => onClick(location)}
    >
      {/* Pin with icon */}
      <div className="relative">
        <div className="w-10 h-14 relative">
          <svg viewBox="0 0 24 36" className="w-full h-full">
            <path d="M12 0C5.383 0 0 5.383 0 12c0 9 12 24 12 24s12-15 12-24c0-6.617-5.383-12-12-12z" fill="#e65c00" />
            <circle cx="12" cy="12" r="8" fill="white" />
          </svg>
          {/* Icon inside the pin */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-orange-600">{location.icon}</div>
        </div>

        {/* Location name label */}
        <div className="mt-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-md border border-orange-200">
          <p className="text-xs font-medium text-stone-800 text-center whitespace-nowrap">{location.name}</p>
        </div>
      </div>
    </motion.div>
  )
})

export const FarmTourMap = memo(function FarmTourMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleLocationClick = useCallback((location: Location) => {
    setSelectedLocation(location)
    setIsPopupOpen(true)
    setCurrentImageIndex(0)
  }, [])

  const closePopup = useCallback(() => {
    setIsPopupOpen(false)
  }, [])

  const nextImage = useCallback(() => {
    if (selectedLocation) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedLocation.images.length)
    }
  }, [selectedLocation])

  const prevImage = useCallback(() => {
    if (selectedLocation) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedLocation.images.length) % selectedLocation.images.length)
    }
  }, [selectedLocation])

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Instruction text */}
      <div className="absolute -top-16 left-4 z-10 flex items-center">
        <MapPin className="h-10 w-10 text-orange-600" />
        <div className="ml-2">
          <p className="text-sm font-medium text-stone-600">CLICK ON THE PINS TO</p>
          <p className="text-lg font-bold text-stone-800">FIND OUT MORE</p>
        </div>
      </div>

      {/* Folded Map */}
      <div className="relative w-full aspect-[4/3] transform perspective-1000">
        {/* Map background with fold effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-xl overflow-hidden transform rotate-1">
          {/* Fold lines */}
          <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-stone-300/50"></div>
          <div className="absolute right-1/3 top-0 bottom-0 w-[1px] bg-stone-300/50"></div>
          <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-stone-300/50"></div>
          <div className="absolute bottom-1/3 left-0 right-0 h-[1px] bg-stone-300/50"></div>

          {/* Map title */}
          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-md transform -rotate-2">
            <h3 className="text-2xl font-bold text-green-800">
              PORTION 85
              <br />
              FARM MAP
            </h3>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-8 left-8">
            <div className="w-16 h-16 relative">
              <OptimizedImage src="/images/logo.png" alt="Portion 85 Logo" fill className="object-contain" />
            </div>
          </div>

          {/* Stylized farm elements */}
          <div className="absolute top-[40%] left-[40%] w-20 h-20 bg-green-200/50 rounded-full"></div>
          <div className="absolute top-[20%] left-[60%] w-16 h-16 bg-green-300/50 rounded-full"></div>
          <div className="absolute top-[60%] left-[70%] w-24 h-12 bg-green-200/50 rounded-full"></div>
          <div className="absolute top-[30%] left-[20%] w-12 h-12 bg-green-300/50 rounded-full"></div>
          <div className="absolute top-[70%] left-[30%] w-16 h-16 bg-green-200/50 rounded-full"></div>
        </div>

        {/* Location markers */}
        {updatedLocations.map((location, index) => (
          <LocationPin key={location.id} location={location} index={index} onClick={handleLocationClick} />
        ))}
      </div>

      {/* Location popup */}
      {isPopupOpen && selectedLocation && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <div className="p-4 border-b flex justify-between items-center bg-orange-50">
              <div className="flex items-center gap-2">
                <div className="text-orange-600">{selectedLocation.icon}</div>
                <h3 className="text-xl font-bold text-stone-800">{selectedLocation.name}</h3>
              </div>
              <button onClick={closePopup} className="text-stone-500 hover:text-stone-800">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative h-64 sm:h-80">
              <OptimizedImage
                src={selectedLocation.images[currentImageIndex]}
                alt={selectedLocation.name}
                fill
                className="object-cover"
                priority
              />

              {selectedLocation.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 p-2">
                {selectedLocation.images.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex ? "w-8 bg-orange-500" : "w-2 bg-white/70"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            <div className="p-4">
              <p className="text-stone-700">{selectedLocation.description}</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
})
