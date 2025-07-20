"use client"

import { useState } from "react"
import { TreesIcon as Plant, BookOpen, GraduationCap, PenToolIcon as Tool, Users, Briefcase, Leaf } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  color: string
}

export default function ServiceCard({ title, description, icon, color }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = () => {
    switch (icon) {
      case "plant":
        return <Plant className={`h-10 w-10 ${getColorClass()}`} />
      case "book-open":
        return <BookOpen className={`h-10 w-10 ${getColorClass()}`} />
      case "graduation-cap":
        return <GraduationCap className={`h-10 w-10 ${getColorClass()}`} />
      case "tool":
        return <Tool className={`h-10 w-10 ${getColorClass()}`} />
      case "users":
        return <Users className={`h-10 w-10 ${getColorClass()}`} />
      case "briefcase":
        return <Briefcase className={`h-10 w-10 ${getColorClass()}`} />
      default:
        return <Leaf className={`h-10 w-10 ${getColorClass()}`} />
    }
  }

  const getColorClass = () => {
    switch (color) {
      case "green":
        return "text-green-600"
      case "blue":
        return "text-blue-600"
      case "yellow":
        return "text-yellow-600"
      case "orange":
        return "text-orange-600"
      case "purple":
        return "text-purple-600"
      case "red":
        return "text-red-600"
      default:
        return "text-green-600"
    }
  }

  const getBgColorClass = () => {
    switch (color) {
      case "green":
        return "bg-green-100"
      case "blue":
        return "bg-blue-100"
      case "yellow":
        return "bg-yellow-100"
      case "orange":
        return "bg-orange-100"
      case "purple":
        return "bg-purple-100"
      case "red":
        return "bg-red-100"
      default:
        return "bg-green-100"
    }
  }

  const getHoverBgColorClass = () => {
    switch (color) {
      case "green":
        return "group-hover:bg-green-600"
      case "blue":
        return "group-hover:bg-blue-600"
      case "yellow":
        return "group-hover:bg-yellow-600"
      case "orange":
        return "group-hover:bg-orange-600"
      case "purple":
        return "group-hover:bg-purple-600"
      case "red":
        return "group-hover:bg-red-600"
      default:
        return "group-hover:bg-green-600"
    }
  }

  return (
    <div
      className={`group bg-white rounded-lg p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 border-b-4 ${getBorderColorClass(color)}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`rounded-full p-4 inline-flex ${getBgColorClass()} ${getHoverBgColorClass()} transition-colors duration-300 mb-6`}
      >
        {getIcon()}
      </div>
      <h3 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-stone-900 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-stone-600 group-hover:text-stone-700 transition-colors duration-300">{description}</p>
    </div>
  )
}

function getBorderColorClass(color: string) {
  switch (color) {
    case "green":
      return "border-green-600"
    case "blue":
      return "border-blue-600"
    case "yellow":
      return "border-yellow-600"
    case "orange":
      return "border-orange-600"
    case "purple":
      return "border-purple-600"
    case "red":
      return "border-red-600"
    default:
      return "border-green-600"
  }
}
