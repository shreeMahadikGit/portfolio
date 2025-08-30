import { ACHIEVEMENTS } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Achievements() {
  return (
    <section id="achievements" className="px-4">
      <div className="mx-auto max-w-5xl space-y-6 py-10 md:py-14">
        <h2 className="text-balance text-2xl font-semibold">Achievements</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
              {ACHIEVEMENTS.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
