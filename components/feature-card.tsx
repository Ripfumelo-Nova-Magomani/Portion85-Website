"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  color?: "green" | "orange" | "stone"
  delay?: number
}

export function FeatureCard({
  title,
  description,
  icon = <CheckCircle className="h-6 w-6" />,
  color = "green",
  delay = 0,
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getColorClasses = () => {
    switch (color) {
      case "green":
        return {
          bg: "bg-green-50",
          border: "border-green-600",
          icon: "text-green-600",
          hoverBg: "group-hover:bg-green-100",
        }
      case "orange":
        return {
          bg: "bg-orange-50",
          border: "border-orange-600",
          icon: "text-orange-600",
          hoverBg: "group-hover:bg-orange-100",
        }
      case "stone":
        return {
          bg: "bg-stone-50",
          border: "border-stone-600",
          icon: "text-stone-600",
          hoverBg: "group-hover:bg-stone-100",
        }
      default:
        return {
          bg: "bg-green-50",
          border: "border-green-600",
          icon: "text-green-600",
          hoverBg: "group-hover:bg-green-100",
        }
    }
  }

  const colors = getColorClasses()

  return (
    <motion.div
      className={`group ${colors.bg} rounded-lg p-6 border-l-4 ${colors.border} shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={`mb-4 ${colors.icon}`}>
        <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 0.5 }}>
          {icon}
        </motion.div>
      </div>
      <h3 className="text-xl font-bold text-stone-800 mb-2">{title}</h3>
      <p className="text-stone-600">{description}</p>
    </motion.div>
  )
}
