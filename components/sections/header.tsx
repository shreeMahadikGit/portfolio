"use client"

import Link from "next/link"
import Image from "next/image" // logo support </CHANGE>
import { ThemeToggle } from "@/components/theme-toggle"
import { PROFILE } from "@/lib/data"
import { Button } from "@/components/ui/button"

const NAV = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="#" className="flex items-center gap-2">
          <Image src="/images/logo-sm.png" alt="SM logo" width={24} height={24} priority />
          <span className="sr-only">{PROFILE.name}</span>
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
          <ThemeToggle />
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
            <a href="#contact">Hire me</a>
          </Button>
        </nav>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
