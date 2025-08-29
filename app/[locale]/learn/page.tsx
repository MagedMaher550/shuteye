import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { getDictionary } from "@/lib/get-dictionary"
import type { Locale } from "@/lib/i18n"

interface LearnPageProps {
  params: { locale: Locale }
}

export default async function LearnPage({ params }: LearnPageProps) {
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
                <Link
                  href={`/${params.locale}/journey`}
                  className="text-foreground hover:text-accent transition-colors"
                >
                  {dict.nav.journey}
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
            <BookOpen className="w-4 h-4 mr-2" />
            {dict.home.about.title}
          </Badge>

          <h1 className="text-5xl md:text-7xl font-black mb-6 text-balance">{dict.learn.title}</h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty max-w-3xl mx-auto leading-relaxed">
            {dict.learn.subtitle}
          </p>
        </div>
      </section>

      {/* Origins */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">{dict.learn.origins.title}</h2>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed text-lg">{dict.learn.origins.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">{dict.learn.coreBeliefs.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">{dict.learn.coreBeliefs.belief1.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{dict.learn.coreBeliefs.belief1.description}</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">{dict.learn.coreBeliefs.belief2.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{dict.learn.coreBeliefs.belief2.description}</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">{dict.learn.coreBeliefs.belief3.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{dict.learn.coreBeliefs.belief3.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Practices and Beliefs */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">{dict.learn.practices.title}</h2>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{dict.learn.practices.practice1.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {dict.learn.practices.practice1.description}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{dict.learn.practices.practice2.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {dict.learn.practices.practice2.description}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{dict.learn.practices.practice3.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {dict.learn.practices.practice3.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ethical Framework */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">{dict.learn.ethics.title}</h2>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed text-lg">{dict.learn.ethics.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${params.locale}/journey`}>
              <Button size="lg" className="text-lg px-8 py-6">
                {dict.nav.journey}
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
