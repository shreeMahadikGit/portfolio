import Image from "next/image"
import { PROFILE } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Reveal, Highlight } from "@/components/ui/interactive" // add subtle animations

export function Hero() {
  return (
    <section className="px-4">
      <div className="mx-auto grid max-w-5xl items-center gap-8 py-10 md:grid-cols-[1.2fr_1fr] md:py-16">
        <Reveal className="space-y-5" delay={80}>
          <Highlight type="box" padding={4} strokeWidth={2} className="inline-block">
            <Badge className="bg-accent text-accent-foreground">Open to opportunities</Badge>
          </Highlight>
          <h1 className="text-pretty text-3xl font-semibold leading-tight sm:text-4xl">
            <Highlight type="underline" padding={4} strokeWidth={2}>
              {PROFILE.name}
            </Highlight>
          </h1>
          <p className="text-muted-foreground">
            {PROFILE.title} based in {PROFILE.location}. I build{" "}
            <Highlight type="box" padding={3} strokeWidth={2}>
              scalable microservices
            </Highlight>{" "}
            and{" "}
            <Highlight type="underline" padding={2} strokeWidth={2}>
              high‑performance web apps
            </Highlight>{" "}
            with a focus on clean UX and measurable impact.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="/api/resume" download>
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={PROFILE.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </Reveal>
        <div className="mx-auto">
          <Reveal delay={140}>
            <div className="relative h-40 w-40 overflow-hidden rounded-xl border sm:h-56 sm:w-56">
              <Image
                src={"/images/shree-portrait.jpeg"}
                alt="Portrait of a person working at a laptop in an office"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 160px, 224px"
                priority
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
