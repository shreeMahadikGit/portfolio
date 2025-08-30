import { EDUCATION } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Education() {
  return (
    <section id="education" className="px-4">
      <div className="mx-auto max-w-5xl space-y-6 py-10 md:py-14">
        <h2 className="text-balance text-2xl font-semibold">Education</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">{EDUCATION.degree}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {EDUCATION.school} — {EDUCATION.year}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
