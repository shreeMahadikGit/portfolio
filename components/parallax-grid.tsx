"use client"

import { useEffect, useRef } from "react"

export function ParallaxGrid() {
  const layerNear = useRef<HTMLDivElement>(null)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    const onScroll = () => {
      const sy = window.scrollY || 0
      if (rafId.current) cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        if (layerNear.current) {
          layerNear.current.style.transform = `translate3d(0, ${sy * 0.1}px, 0)`
        }
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const gridLight =
    "repeating-linear-gradient(0deg, rgba(0,0,0,.12) 0 1px, transparent 1px 22px), repeating-linear-gradient(90deg, rgba(0,0,0,.12) 0 1px, transparent 1px 22px)"
  const gridDark =
    "repeating-linear-gradient(0deg, rgba(255,255,255,.25) 0 1px, transparent 1px 22px), repeating-linear-gradient(90deg, rgba(255,255,255,.25) 0 1px, transparent 1px 22px)"

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={layerNear}
        className="absolute -inset-[10%] opacity-[0.25] dark:opacity-[0.25]"
        style={{
          backgroundSize: "22px 22px, 22px 22px",
          backgroundImage: gridLight,
        }}
        data-theme="grid-near"
      />
      <style jsx global>{`
        html.dark [data-theme="grid-near"] {
          background-image: ${gridDark};
        }
      `}</style>
    </div>
  )
}

export default ParallaxGrid
