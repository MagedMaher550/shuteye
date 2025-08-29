import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Moon, Users, BookOpen, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { getDictionary } from "@/lib/get-dictionary"
import type { Locale } from "@/lib/i18n"

interface HomePageProps {
  params: { locale: Locale }
}

export default async function HomePage({ params }: HomePageProps) {
  const dict = await getDictionary(params.locale)

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/70" />
        <img
          src="/dark-mysterious-window-at-night-with-ethereal-shad.png"
          alt="Mysterious window at night"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <Badge variant="secondary" className="mb-6 text-lg px-4 py-2">
            <Eye className="w-4 h-4 mr-2" />
            {dict.home.about.title}
          </Badge>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 text-balance">{dict.home.hero.title}</h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            {dict.home.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={`/${params.locale}/journey`}>
              <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
                {dict.home.hero.beginJourney}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </Link>
            <Link href={`/${params.locale}/learn`}>
              <Button
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent w-full sm:w-auto"
              >
                {dict.home.hero.learnPhilosophy}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col space-y-3">
            <div className="w-full">
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                <span className="text-lg sm:text-2xl font-black whitespace-nowrap">{dict.home.hero.title}</span>
              </div>
            </div>

            <div className="w-full flex items-center justify-between">
              {/* Desktop navigation links */}
              <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
                <a
                  href="#philosophy"
                  className="text-sm lg:text-base text-foreground hover:text-accent transition-colors whitespace-nowrap"
                >
                  {dict.home.about.title}
                </a>
                <a
                  href="#encounters"
                  className="text-sm lg:text-base text-foreground hover:text-accent transition-colors whitespace-nowrap"
                >
                  {dict.home.encounters.title}
                </a>
                <a
                  href="#community"
                  className="text-sm lg:text-base text-foreground hover:text-accent transition-colors whitespace-nowrap"
                >
                  {dict.home.community.title}
                </a>
                <a
                  href="#teachings"
                  className="text-sm lg:text-base text-foreground hover:text-accent transition-colors whitespace-nowrap"
                >
                  {dict.home.teachings.title}
                </a>
              </div>

              <div className="flex items-center justify-between w-full md:justify-end md:w-auto space-x-4 md:space-x-4">
                <LanguageSwitcher currentLocale={params.locale} />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="philosophy" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">{dict.home.about.title}</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {dict.home.about.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Moon className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">{dict.home.teachings.teaching1.title}</CardTitle>
                <CardDescription className="text-lg">{dict.home.teachings.teaching1.description}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Eye className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">{dict.home.teachings.teaching2.title}</CardTitle>
                <CardDescription className="text-lg">{dict.home.teachings.teaching2.description}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Sparkles className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">{dict.home.teachings.teaching3.title}</CardTitle>
                <CardDescription className="text-lg">{dict.home.teachings.teaching3.description}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Encounters Section */}
      <section id="encounters" className="py-12 sm:py-20 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">{dict.home.encounters.title}</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed mb-4">"{dict.home.encounters.testimonial1.text}"</p>
                <p className="text-sm text-primary font-medium">— {dict.home.encounters.testimonial1.author}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed mb-4">"{dict.home.encounters.testimonial2.text}"</p>
                <p className="text-sm text-primary font-medium">— {dict.home.encounters.testimonial2.author}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed mb-4">"{dict.home.encounters.testimonial3.text}"</p>
                <p className="text-sm text-primary font-medium">— {dict.home.encounters.testimonial3.author}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">{dict.home.community.title}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="space-y-4">
              <Users className="w-16 h-16 text-primary mx-auto" />
              <h3 className="text-2xl font-bold">{"1,247"}</h3>
              <p className="text-muted-foreground">{dict.home.community.totalAwakened}</p>
            </div>

            <div className="space-y-4">
              <BookOpen className="w-16 h-16 text-primary mx-auto" />
              <h3 className="text-2xl font-bold">{"89"}</h3>
              <p className="text-muted-foreground">{dict.home.community.activeSeeker}</p>
            </div>

            <div className="space-y-4">
              <Sparkles className="w-16 h-16 text-primary mx-auto" />
              <h3 className="text-2xl font-bold">{"23"}</h3>
              <p className="text-muted-foreground">{dict.home.community.countriesReached}</p>
            </div>

            <div className="space-y-4">
              <Moon className="w-16 h-16 text-primary mx-auto" />
              <h3 className="text-2xl font-bold">{"156"}</h3>
              <p className="text-muted-foreground">{dict.home.community.nightlyEncounters}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            <span className="text-xl sm:text-2xl font-black whitespace-nowrap">{dict.home.hero.title}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-4 sm:mb-6">
            <Link href={`/${params.locale}`} className="hover:text-accent transition-colors">
              {dict.nav.home}
            </Link>
            <Link href={`/${params.locale}/journey`} className="hover:text-accent transition-colors">
              {dict.nav.journey}
            </Link>
            <Link href={`/${params.locale}/learn`} className="hover:text-accent transition-colors">
              {dict.nav.learn}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
