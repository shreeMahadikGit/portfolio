import { EXPERIENCE } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Reveal, Highlight } from "@/components/ui/interactive" // add interactivity

export function Experience() {
  return (
    <section id="experience" className="px-4">
      <div className="mx-auto max-w-5xl space-y-6 py-10 md:py-14">
        <h2 className="text-balance text-2xl font-semibold">
          <Highlight type="underline" padding={4} strokeWidth={2}>
            Experience
          </Highlight>
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {EXPERIENCE.map((exp, idx) => (
            <Reveal key={exp.company + exp.period} delay={80 + idx * 80}>
              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">{exp.role}</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    {exp.company} — {exp.location}
                  </div>
                  <div className="text-sm">{exp.period}</div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  {exp.tags && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tags.map((t) => (
                        <Badge key={t} variant="outline" className="font-mono text-xs">
                          {t}
                        </Badge>
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

export { Experience as ExperienceSection }
