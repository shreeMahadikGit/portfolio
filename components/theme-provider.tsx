"use client"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

/* provide safe defaults and disableTransitionOnChange to reduce FOUC */
export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  themes = ["light", "dark"],
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      themes={themes}
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
