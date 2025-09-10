"use client"

import Image from "next/image"
import { Highlight, Reveal } from "./ui/interactive"
import { downloadResume } from "@/lib/resume-generator"

export function HeroMinimal() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="grid items-center gap-8 md:grid-cols-[1.2fr_.8fr] md:gap-10">
        <Reveal as="div" className="space-y-5">
          <h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">
            Building <Highlight type="highlight" palette="yellow" alpha={0.3} strokeWidth={9}> reliable </Highlight>Backends & <Highlight type="highlight" padding={15} palette="yellow" alpha={0.3} strokeWidth={1}>delightful</Highlight> UIs.
          </h1>
          <Reveal as="p" className="text-pretty text-sm text-muted-foreground md:text-base">
            I’m Shree Mahadik, a <Highlight type="box">Full‑Stack Engineer</Highlight> (SDE I @ Fynd/JCP). I design{" "}
            <Highlight type="underline">scalable microservices</Highlight>, improve web performance with{" "}
            <Highlight type="underline">SSR</Highlight>, and ship{" "}
            <Highlight type="bracket">polished product experiences</Highlight>.
          </Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={downloadResume}
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Download Resume
            </button>
            <a
              href="mailto:shreemahadik899@gmail.com"
              className="inline-flex h-9 items-center justify-center rounded-md border px-4 text-sm font-medium hover:bg-muted"
            >
              Contact Me
            </a>
          </div>
        </Reveal>

        <div className="mx-auto">
          <div className="relative h-40 w-40 overflow-hidden rounded-xl border sm:h-56 sm:w-56">
            <Image
              src={"/images/shree-portrait.png"}
              alt="Developer portrait at a desk with laptop"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
