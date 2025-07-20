"use client"

import { useState, memo } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/optimized-image"

interface FacilityCardProps {
  title: string
  description: string
  imageSrc: string
}

const FacilityCard = memo(function FacilityCard({ title, description, imageSrc }: FacilityCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 w-full">
        <OptimizedImage
          src={imageSrc}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-stone-800 mb-2">{title}</h3>
        <p className="text-stone-600 mb-4">{description}</p>
        <Button variant="ghost" className="p-0 h-auto text-green-600 hover:text-green-700 hover:bg-transparent">
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
})

export default FacilityCard
