"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const currentTheme = resolvedTheme || theme
  const isDark = currentTheme === "dark"

  const handleToggle = () => {
    const next = isDark ? "light" : "dark"
    setTheme(next)
    // Fallback: ensure root class flips immediately
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", next === "dark")
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      type="button"
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className="h-9 w-9 bg-transparent"
      onClick={handleToggle}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        // sun icon (shown in dark mode to indicate switching to light)
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="text-foreground">
          <path
            fill="currentColor"
            d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79l1.8-1.79m10.48 0l1.79-1.79l1.79 1.79l-1.79 1.79l-1.79-1.79M12 4V1h-0v3h0m0 19v-3h0v3h0M4 12H1v0h3v0m19 0h-3v0h3v0M6.76 19.16l-1.8 1.79l-1.79-1.79l1.79-1.79l1.8 1.79m10.48 0l1.79 1.79l1.79-1.79l-1.79-1.79l-1.79 1.79M12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8Z"
          />
        </svg>
      ) : (
        // moon icon (shown in light mode to indicate switching to dark)
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="text-foreground">
          <path fill="currentColor" d="M12 2a9.93 9.93 0 0 0-3 .46a10 10 0 1 0 12.54 12.54A10 10 0 0 1 12 2Z" />
        </svg>
      )}
    </Button>
  )
}
