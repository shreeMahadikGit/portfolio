"use client"
import { PROFILE } from "@/lib/data"
import { downloadResume } from "@/lib/resume-generator"

export function SiteFooter() {
  return (
    <footer id="contact" className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex flex-col items-start justify-between gap-4 border-t pt-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a href={`mailto:${PROFILE.email}`} className="hover:underline">
            {PROFILE.email}
          </a>
          <span className="text-muted-foreground">•</span>
          <a href={PROFILE.github} className="hover:underline" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span className="text-muted-foreground">•</span>
          <button onClick={downloadResume} className="hover:underline">
            Download Resume
          </button>
        </div>
      </div>
    </footer>
  )
}
