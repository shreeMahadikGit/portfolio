import type { NextRequest } from "next/server"
import { PDFDocument, StandardFonts, rgb } from "pdf-lib"
import { PROFILE, EXPERIENCE, PROJECTS, EDUCATION, SKILLS } from "@/lib/data"

export const dynamic = "force-dynamic"

export async function GET(_req: NextRequest) {
  const doc = await PDFDocument.create()
  const page = doc.addPage([595.28, 841.89]) // A4 portrait
  const font = await doc.embedFont(StandardFonts.Helvetica)
  const bold = await doc.embedFont(StandardFonts.HelveticaBold)

  const marginX = 48
  let y = 800

  const line = (text: string, opts?: { size?: number; bold?: boolean; color?: [number, number, number] }) => {
    const size = opts?.size ?? 11
    page.drawText(text, {
      x: marginX,
      y,
      size,
      font: opts?.bold ? bold : font,
      color: rgb(...(opts?.color ?? [0, 0, 0])),
    })
    y -= size + 6
  }
  const section = (title: string) => {
    y -= 4
    line(title.toUpperCase(), { size: 12, bold: true })
  }

  // Header
  line(PROFILE.name, { size: 20, bold: true })
  if (PROFILE.title) line(PROFILE.title, { size: 12 })
  const contact = [PROFILE.location, PROFILE.phone, PROFILE.email].filter(Boolean).join(" • ")
  if (contact) line(contact, { size: 10, color: [0.25, 0.25, 0.25] })
  if (PROFILE.github) line(PROFILE.github, { size: 10 })
  y -= 6

  // Summary (optional)
  if ((PROFILE as any).summary) {
    section("Summary")
    line((PROFILE as any).summary)
  }

  // Skills
  if (SKILLS) {
    section("Skills")
    const parts: string[] = []
    SKILLS.languages && parts.push(`Languages: ${SKILLS.languages.join(", ")}`)
    SKILLS.frontend && parts.push(`Frontend: ${SKILLS.frontend.join(", ")}`)
    SKILLS.backend && parts.push(`Backend: ${SKILLS.backend.join(", ")}`)
    SKILLS.cloudDevOps && parts.push(`Cloud/DevOps: ${SKILLS.cloudDevOps.join(", ")}`)
    for (const p of parts) line(p)
  }

  // Experience
  if (Array.isArray(EXPERIENCE) && EXPERIENCE.length) {
    section("Experience")
    for (const role of EXPERIENCE) {
      line(`${role.role} — ${role.company}${role.location ? ` • ${role.location}` : ""}`, { bold: true })
      if (role.period) line(role.period, { size: 10, color: [0.25, 0.25, 0.25] })
      for (const b of role.bullets.slice(0, 6)) line(`• ${b}`)
      y -= 2
      if (y < 120) break
    }
  }

  // Projects
  if (Array.isArray(PROJECTS) && PROJECTS.length) {
    section("Projects")
    for (const p of PROJECTS.slice(0, 6)) {
      line(p.name + (p.links?.[0]?.href ? ` — ${p.links[0].href}` : ""), { bold: true })
      if (p.description) line(p.description)
      if (p.stack?.length) line(`Stack: ${p.stack.join(", ")}`)
      y -= 2
      if (y < 120) break
    }
  }

  // Education
  if (EDUCATION) {
    section("Education")
    line(`${EDUCATION.degree}`, { bold: true })
    line(`${EDUCATION.school}`)
    const extra = [EDUCATION.year].filter(Boolean).join(" • ")
    if (extra) line(extra)
  }

  const bytes = await doc.save()
  return new Response(bytes, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Shree-Mahadik-Resume.pdf"',
      "Cache-Control": "no-store",
    },
  })
}
