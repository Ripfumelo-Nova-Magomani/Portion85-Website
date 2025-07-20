"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface EventCTAProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  bgColor?: "green" | "orange" | "stone"
}

export function EventCTA({ title, description, buttonText, buttonLink, bgColor = "green" }: EventCTAProps) {
  const getBgColor = () => {
    switch (bgColor) {
      case "green":
        return "bg-green-600"
      case "orange":
        return "bg-orange-600"
      case "stone":
        return "bg-stone-800"
      default:
        return "bg-green-600"
    }
  }

  return (
    <div className={`${getBgColor()} rounded-xl overflow-hidden`}>
      <motion.div
        className="p-8 md:p-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">{description}</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="lg"
            className="bg-white text-stone-800 hover:bg-white/90"
            onClick={() => (window.location.href = buttonLink)}
          >
            {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
