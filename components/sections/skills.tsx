import { SKILLS } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="border">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {items.map((i) => (
            <Badge key={i} variant="outline" className="font-mono text-xs">
              {i}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function Skills() {
  return (
    <section id="skills" className="px-4">
      <div className="mx-auto max-w-5xl space-y-6 py-10 md:py-14">
        <h2 className="text-balance text-2xl font-semibold">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <SkillGroup title="Programming Languages" items={SKILLS.languages} />
          <SkillGroup title="Frontend" items={SKILLS.frontend} />
          <SkillGroup title="Backend" items={SKILLS.backend} />
          <SkillGroup title="Cloud & DevOps" items={SKILLS.cloudDevOps} />
        </div>
      </div>
    </section>
  )
}

export { Skills as SkillsSection }
