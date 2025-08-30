"use client"

import { useEffect, useRef } from "react"

export function ParallaxGrid() {
  const layerNear = useRef<HTMLDivElement>(null)
  const layerFar = useRef<HTMLDivElement>(null)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    const onScroll = () => {
      const sy = window.scrollY || 0
      if (rafId.current) cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        // near layer moves a bit more, far layer moves less
        if (layerNear.current) {
          layerNear.current.style.transform = `translate3d(0, ${sy * 0.1}px, 0)`
        }
        if (layerFar.current) {
          layerFar.current.style.transform = `translate3d(0, ${sy * 0.05}px, 0)`
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

  // theme-aware grid colors via CSS variables; using inline backgroundImage for reliability
  const gridLight =
    "repeating-linear-gradient(0deg, rgba(0,0,0,.05) 0 1px, transparent 1px 22px), repeating-linear-gradient(90deg, rgba(0,0,0,.05) 0 1px, transparent 1px 22px)"
  const gridDark =
    "repeating-linear-gradient(0deg, rgba(255,255,255,.06) 0 1px, transparent 1px 22px), repeating-linear-gradient(90deg, rgba(255,255,255,.06) 0 1px, transparent 1px 22px)"

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Far grid (softer, larger, slight blur) */}
      <div
        ref={layerFar}
        className="absolute -inset-[15%] blur-[1px] opacity-[0.10] dark:opacity-[0.10]"
        style={{
          backgroundSize: "24px 24px, 24px 24px",
          backgroundImage: gridLight,
        }}
        // Switch background for dark mode using a data attribute the <html> gets from ThemeProvider
        data-theme="grid-far"
      />
      {/* Near grid (crisper, smaller scale) */}
      <div
        ref={layerNear}
        className="absolute -inset-[10%] opacity-[0.12] dark:opacity-[0.12]"
        style={{
          backgroundSize: "20px 20px, 20px 20px",
          backgroundImage: gridLight,
        }}
        data-theme="grid-near"
      />
      <style jsx global>{`
        html.dark [data-theme="grid-far"],
        html.dark [data-theme="grid-near"] {
          background-image: ${gridDark};
        }
      `}</style>
    </div>
  )
}

export default ParallaxGrid
