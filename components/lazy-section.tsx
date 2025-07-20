"use client"

import { useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface LazySectionProps {
  children: ReactNode
  className?: string
  threshold?: number
}

export function LazySection({ children, className = "", threshold = 0.1 }: LazySectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  return (
    <div ref={ref} className={className}>
      {isInView ? children : <div className="h-96 bg-stone-50" />}
    </div>
  )
}
