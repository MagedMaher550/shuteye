import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Moon, Clock, Star, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { getDictionary } from "@/lib/get-dictionary"
import type { Locale } from "@/lib/i18n"

interface JourneyPageProps {
  params: { locale: Locale }
}

export default async function JourneyPage({ params }: JourneyPageProps) {
  const dict = await getDictionary(params.locale)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href={`/${params.locale}`} className="flex items-center space-x-2">
              <Eye className="w-8 h-8 text-primary" />
              <span className="text-2xl font-black">{dict.home.hero.title}</span>
            </Link>

            <div className="flex items-center space-x-4">
              {/* Desktop navigation links */}
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href={`/${params.locale}/#philosophy`}
                  className="text-foreground hover:text-accent transition-colors"
                >
                  {dict.home.about.title}
                </Link>
                <Link href={`/${params.locale}/learn`} className="text-foreground hover:text-accent transition-colors">
                  {dict.nav.learn}
                </Link>
                <Link
                  href={`/${params.locale}/#community`}
                  className="text-foreground hover:text-accent transition-colors"
                >
                  {dict.home.community.title}
                </Link>
              </div>

              <LanguageSwitcher currentLocale={params.locale} />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 text-lg px-4 py-2">
            <Star className="w-4 h-4 mr-2" />
            {dict.home.about.title}
          </Badge>

          <h1 className="text-5xl md:text-7xl font-black mb-6 text-balance">{dict.journey.title}</h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty max-w-3xl mx-auto leading-relaxed">
            {dict.journey.subtitle}
          </p>
        </div>
      </section>

      {/* Preparation Steps */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">{dict.journey.preparation.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">1</Badge>
                  <Moon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{dict.journey.preparation.step1.title}</CardTitle>
                <CardDescription className="text-lg">{dict.journey.preparation.step1.description}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">2</Badge>
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{dict.journey.preparation.step2.title}</CardTitle>
                <CardDescription className="text-lg">{dict.journey.preparation.step2.description}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">3</Badge>
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{dict.journey.preparation.step3.title}</CardTitle>
                <CardDescription className="text-lg">{dict.journey.preparation.step3.description}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Signs and Symptoms */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">{dict.journey.signs.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-3" />
                  {dict.journey.signs.sign1}
                </CardTitle>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-3" />
                  {dict.journey.signs.sign2}
                </CardTitle>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-3" />
                  {dict.journey.signs.sign3}
                </CardTitle>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-3" />
                  {dict.journey.signs.sign4}
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">{dict.journey.encounter.title}</h2>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed text-lg">{dict.journey.encounter.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* After Awakening */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">{dict.journey.afterAwakening.title}</h2>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {dict.journey.afterAwakening.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${params.locale}/learn`}>
              <Button size="lg" className="text-lg px-8 py-6">
                {dict.nav.learn}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href={`/${params.locale}/#community`}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                {dict.home.community.title}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
