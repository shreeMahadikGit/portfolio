import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Unbounded, Source_Code_Pro } from "next/font/google"
import { Suspense } from "react"
import ParallaxGrid from "@/components/parallax-grid"

const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unbounded",
})

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-code-pro",
})

export const metadata: Metadata = {
  title: "Shree Mahadik — Portfolio",
  description: "Full‑stack engineer specializing in microservices, high‑performance web apps, and polished UX.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${sourceCodePro.variable} antialiased`} suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} overflow-x-clip`} suppressHydrationWarning>
        <ParallaxGrid />
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
