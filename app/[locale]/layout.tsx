import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import { locales, type Locale, isRTL } from "@/lib/i18n"
import "../globals.css"

export const metadata: Metadata = {
  title: "Shuteye - The Philosophy of Awakening",
  description: "Discover the ancient philosophy of Shuteye and the entity that opens the third eye",
  generator: "v0.app",
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { locale: Locale }
}>) {
  const locale = params.locale
  const direction = isRTL(locale) ? "rtl" : "ltr"

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
