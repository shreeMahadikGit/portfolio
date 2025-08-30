import { PROFILE } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="px-4">
      <div className="mx-auto max-w-5xl space-y-6 py-10 md:py-14">
        <h2 className="text-balance text-2xl font-semibold">Contact</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Let’s work together</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-3 text-sm">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href={`mailto:${PROFILE.email}`}>Email</a>
            </Button>
            <Button asChild variant="outline">
              <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>Call</a>
            </Button>
            <Button asChild variant="ghost">
              <a href={PROFILE.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>
            <span className="text-muted-foreground">Based in {PROFILE.location}</span>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
