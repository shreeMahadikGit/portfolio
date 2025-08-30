"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type ParallaxProps = {
  children: React.ReactNode
  className?: string
  speed?: number // positive = moves with scroll, negative = moves opposite; default subtle
}

export function Parallax({ children, className, speed = -0.15 }: ParallaxProps) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const prefersReduced = React.useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  )

  React.useEffect(() => {
    if (!ref.current || prefersReduced) return
    let raf = 0
    const el = ref.current

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const y = window.scrollY * speed
        el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`
        raf = 0
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [speed, prefersReduced])

  return (
    <div ref={ref} className={cn(className)} style={{ willChange: "transform" }}>
      {children}
    </div>
  )
}
