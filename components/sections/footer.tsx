import { PROFILE } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="border-t px-4">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 py-6 text-sm text-muted-foreground md:flex-row md:items-center">
        <span>
          © {new Date().getFullYear()} {PROFILE.name}
        </span>
        <span>Built with Next.js & shadcn/ui</span>
      </div>
    </footer>
  )
}
