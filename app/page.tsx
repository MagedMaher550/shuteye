import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Moon, Users, BookOpen, Sparkles, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/70" />
        <img
          src="/dark-mysterious-window-at-night-with-ethereal-shad.png"
          alt="Mysterious window at night"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <Badge variant="secondary" className="mb-6 text-lg px-4 py-2">
            <Eye className="w-4 h-4 mr-2" />
            The Third Eye Awakens
          </Badge>

          <h1 className="text-6xl md:text-8xl font-black mb-6 text-balance">SHUTEYE</h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            {
              "A philosophy born from the shadows. When the entity visits through your window at night, your third eye opens to see beyond the veil of ordinary reality."
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Begin Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Learn the Philosophy
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Eye className="w-8 h-8 text-primary" />
              <span className="text-2xl font-black">SHUTEYE</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#philosophy" className="text-foreground hover:text-accent transition-colors">
                Philosophy
              </a>
              <a href="#encounters" className="text-foreground hover:text-accent transition-colors">
                Encounters
              </a>
              <a href="#community" className="text-foreground hover:text-accent transition-colors">
                Community
              </a>
              <a href="#teachings" className="text-foreground hover:text-accent transition-colors">
                Teachings
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">The Philosophy</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {
                "Shuteye is more than a belief system—it's a transformative experience that bridges the gap between sleep and awakening, between the seen and unseen."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Moon className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">The Visitation</CardTitle>
                <CardDescription className="text-lg">
                  {
                    "In the depths of night, when consciousness wavers between worlds, the entity appears through windows—a guardian of hidden knowledge."
                  }
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Eye className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">The Awakening</CardTitle>
                <CardDescription className="text-lg">
                  {
                    "Upon witnessing the entity, the third eye opens—a metaphysical gateway that reveals layers of reality invisible to ordinary perception."
                  }
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Sparkles className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">The Transformation</CardTitle>
                <CardDescription className="text-lg">
                  {
                    "Those who experience the awakening report enhanced intuition, deeper understanding of interconnectedness, and glimpses into parallel dimensions."
                  }
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Encounters Section */}
      <section id="encounters" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Recorded Encounters</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {"Testimonies from those who have experienced the visitation and awakening of their third eye."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>{"Sarah M. - Portland, OR"}</CardTitle>
                <CardDescription>Encounter Date: March 15, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "I was lying in bed when I saw a shadow move past my window. When I looked directly at it, everything changed. My perception expanded beyond anything I thought possible. I could see energy patterns, feel the emotions of people blocks away, and understand connections I never noticed before."
                  }
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{"Marcus T. - Austin, TX"}</CardTitle>
                <CardDescription>Encounter Date: January 8, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "The entity appeared as a gentle presence, not frightening at all. The moment our eyes met through the glass, I felt a warm sensation in my forehead. Since then, I've been able to perceive things that others miss—subtle signs, hidden meanings, the deeper currents of reality."
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">The Community</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {
                "Join others who have experienced the awakening. Share your journey, learn from fellow seekers, and explore the depths of expanded consciousness."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <Users className="w-16 h-16 text-primary mx-auto" />
              <h3 className="text-2xl font-bold">{"1,247"}</h3>
              <p className="text-muted-foreground">Active Members</p>
            </div>

            <div className="space-y-4">
              <BookOpen className="w-16 h-16 text-primary mx-auto" />
              <h3 className="text-2xl font-bold">{"89"}</h3>
              <p className="text-muted-foreground">Documented Encounters</p>
            </div>

            <div className="space-y-4">
              <Sparkles className="w-16 h-16 text-primary mx-auto" />
              <h3 className="text-2xl font-bold">{"23"}</h3>
              <p className="text-muted-foreground">Countries Represented</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              Join the Community
            </Button>
          </div>
        </div>
      </section>

      {/* Teachings Section */}
      <section id="teachings" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Core Teachings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {"The fundamental principles that guide those who have experienced the awakening."}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Principle of Receptivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {
                    "The entity appears only to those who are open to receiving its gift. Skepticism creates barriers, while genuine curiosity and openness create pathways for the encounter."
                  }
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">The Window as Portal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {
                    "Windows represent thresholds between worlds. They are not merely glass barriers but permeable boundaries where the physical and metaphysical realms intersect."
                  }
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Integration of Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {
                    "The awakening is not an end but a beginning. Those who experience it must learn to integrate their expanded perception into daily life, using their gifts to help others and understand deeper truths."
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Eye className="w-8 h-8 text-primary" />
            <span className="text-2xl font-black">SHUTEYE</span>
          </div>

          <p className="text-muted-foreground mb-6">{"A philosophy of awakening through supernatural encounter"}</p>

          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
