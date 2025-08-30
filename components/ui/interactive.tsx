// "use client" utilities for subtle interactivity: fade-in on view and rough-notation highlights.
"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { annotate, type RoughAnnotationType } from "rough-notation"

type RevealProps = {
  as?: React.ElementType
  className?: string
  delay?: number
  children: React.ReactNode
}

export function Reveal({ as = "div", className, delay = 0, children }: RevealProps) {
  const Comp: any = as
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    if (reduce) {
      setVisible(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          const t = window.setTimeout(() => setVisible(true), delay)
          return () => window.clearTimeout(t)
        }
      },
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <Comp
      ref={ref}
      className={`reveal ${className ?? ""}`}
      data-visible={visible ? "true" : "false"}
      style={{
        transitionDelay: visible ? `${delay}ms` : undefined,
        willChange: "opacity, transform",
        ["--reveal-delay" as any]: `${delay}ms`, // allows CSS to read var(--reveal-delay)
      }}
    >
      {children}
    </Comp>
  )
}

type HighlightProps = {
  children: React.ReactNode
  type?: RoughAnnotationType
  color?: string
  multiline?: boolean
  padding?: number
  strokeWidth?: number
  iterations?: number
  animationDurationMs?: number
  className?: string
  palette?: "red" | "blue" | "green" | "amber"
  pen?: "marker" | "pen"
  alpha?: number // only used for marker/highlight fill
}

export function Highlight({
  children,
  type = "underline",
  color,
  multiline = false,
  padding = 2,
  strokeWidth = 2,
  iterations = 1,
  animationDurationMs = 600,
  className,
  palette = "blue",
  pen = "pen",
  alpha = 0.28,
}: HighlightProps) {
  const spanRef = useRef<HTMLSpanElement | null>(null)
  const annRef = useRef<ReturnType<typeof annotate> | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const el = spanRef.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setReady(true)
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const el = spanRef.current
    if (!el || !ready) return

    const RGB: Record<NonNullable<HighlightProps["palette"]>, [number, number, number]> = {
      red: [239, 68, 68], // #ef4444
      blue: [59, 130, 246], // #3b82f6
      green: [16, 185, 129], // #10b981
      amber: [245, 158, 11], // #f59e0b
    }
    const [r, g, b] = RGB[palette]
    const resolvedType = (pen === "marker" ? "highlight" : type) as RoughAnnotationType
    const resolvedColor =
      color ??
      (resolvedType === "highlight"
        ? `rgba(${r}, ${g}, ${b}, ${Math.min(Math.max(alpha, 0.05), 0.6)})`
        : `rgb(${r}, ${g}, ${b})`)

    annRef.current = annotate(el, {
      type: resolvedType,
      color: resolvedColor,
      multiline,
      padding,
      strokeWidth,
      iterations,
      animationDuration: animationDurationMs,
    })
    annRef.current.show()

    return () => {
      annRef.current?.remove()
      annRef.current = null
    }
  }, [ready, type, color, multiline, padding, strokeWidth, iterations, animationDurationMs, palette, pen, alpha])

  return (
    <span ref={spanRef} className={className}>
      {children}
    </span>
  )
}
