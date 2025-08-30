import { PROJECTS } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Reveal, Highlight } from "@/components/ui/interactive" // add interactivity

export function Projects() {
  return (
    <section id="projects" className="px-4">
      <div className="mx-auto max-w-5xl space-y-6 py-10 md:py-14">
        <h2 className="text-balance text-2xl font-semibold">
          <Highlight type="underline" padding={4} strokeWidth={2}>
            Projects
          </Highlight>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p, idx) => (
            <Reveal key={p.name} delay={80 + idx * 80}>
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-lg">
                      <Highlight type="box" padding={3} strokeWidth={2}>
                        {p.name}
                      </Highlight>
                    </CardTitle>
                    {p.type ? (
                      <Badge
                        variant="outline"
                        className="whitespace-nowrap text-[10px] tracking-wide uppercase"
                        aria-label={`Project type: ${p.type}`}
                      >
                        {p.type}
                      </Badge>
                    ) : null}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Badge key={s} variant="outline" className="font-mono text-xs">
                        {s}
                      </Badge>
                    ))}
                  </div>
                  {p.links && p.links.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-3">
                      {p.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          target={l.href.startsWith("#") ? "_self" : "_blank"}
                          rel="noreferrer"
                          className="text-sm font-medium text-primary hover:underline"
                        >
                          {l.label} →
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Projects as ProjectsSection }
