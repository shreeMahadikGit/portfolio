"use client"

import Link from "next/link"
import Image from "next/image" // use logo image in brand </CHANGE>
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo-sm.png" alt="SM logo" width={28} height={28} priority className="inline-block" />
          <span className="sr-only">Shree Mahadik</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="#about" className="text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link href="#projects" className="text-muted-foreground hover:text-foreground">
            Projects
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="secondary">
            <a href="/api/resume" download>
              Download Resume
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
