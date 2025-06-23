"use client"

import { useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

/**
 * Counter Animation Component
 * @param {Object} props - Component props
 * @param {number} props.end - End number for counter
 * @param {number} [props.duration=2000] - Animation duration in milliseconds
 * @param {number} [props.start=0] - Start number for counter
 */
export default function CounterAnimation({ end, duration = 2000, start = 0 }) {
  const [count, setCount] = useState(start)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (end - start) + start)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, end, start, duration])

  return (
    <span ref={ref} className="text-3xl font-bold text-gray-900">
      {count}
    </span>
  )
}
