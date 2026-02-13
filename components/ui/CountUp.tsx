'use client'

import { useEffect, useState } from 'react'

interface CountUpProps {
  end: number
  duration?: number
  start?: number
}

const CountUp = ({ end, duration = 2, start = 0 }: CountUpProps) => {
  const [count, setCount] = useState(start)

  useEffect(() => {
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * (end - start) + start))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [end, start, duration])

  return <span>{count}</span>
}

export default CountUp
