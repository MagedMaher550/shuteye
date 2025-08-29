"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { locales, localeNames, type Locale } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLocale: Locale
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const switchLanguage = (newLocale: Locale) => {
    // Remove current locale from pathname
    const segments = pathname.split("/")
    const pathWithoutLocale = segments.slice(2).join("/")

    // Navigate to new locale
    const newPath = `/${newLocale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ""}`
    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 text-red-400 hover:text-red-300 hover:bg-red-950/20 cursor-pointer"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
          <span className="sm:hidden">{currentLocale.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-black/90 border-red-900/50">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLanguage(locale)}
            className={`cursor-pointer hover:bg-red-950/30 ${
              locale === currentLocale ? "bg-red-950/20 text-red-400" : "text-gray-300 hover:text-red-300"
            }`}
          >
            <span className="w-8 text-sm font-medium">{locale.toUpperCase()}</span>
            <span>{localeNames[locale]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
