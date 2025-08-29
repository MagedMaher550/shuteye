import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Moon, Clock, Star, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Eye className="w-8 h-8 text-primary" />
              <span className="text-2xl font-black">SHUTEYE</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#philosophy" className="text-foreground hover:text-accent transition-colors">
                Philosophy
              </Link>
              <Link href="/learn" className="text-foreground hover:text-accent transition-colors">
                Learn
              </Link>
              <Link href="/#community" className="text-foreground hover:text-accent transition-colors">
                Community
              </Link>
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
            Begin Your Awakening
          </Badge>

          <h1 className="text-5xl md:text-7xl font-black mb-6 text-balance">Your Journey Starts Here</h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty max-w-3xl mx-auto leading-relaxed">
            {
              "Prepare yourself for the possibility of encounter. The entity chooses those who are ready, but readiness can be cultivated through understanding and openness."
            }
          </p>
        </div>
      </section>

      {/* Preparation Steps */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Preparation Steps</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {"Follow these steps to increase your receptivity to the entity's visitation."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">Step 1</Badge>
                  <Moon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Create Sacred Space</CardTitle>
                <CardDescription className="text-lg">
                  {
                    "Designate a quiet room with a clear view through a window. Remove distractions and create an atmosphere of calm receptivity."
                  }
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">Step 2</Badge>
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Night Vigil Practice</CardTitle>
                <CardDescription className="text-lg">
                  {
                    "Spend time in quiet contemplation during the hours between midnight and 3 AM. This is when the veil is thinnest and encounters most likely."
                  }
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">Step 3</Badge>
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Open Your Mind</CardTitle>
                <CardDescription className="text-lg">
                  {
                    "Release skepticism and fear. Approach the possibility of encounter with curiosity and genuine openness to transformation."
                  }
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Signs and Symptoms */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Signs of Readiness</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {"These indicators suggest you may be approaching readiness for the encounter."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-3" />
                  Heightened Intuition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "You find yourself knowing things without logical explanation. Your gut feelings prove accurate more often than chance would allow."
                  }
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-3" />
                  Vivid Dreams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "Your dreams become more intense and meaningful. You may dream of windows, shadows, or beings of light approaching in the night."
                  }
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-3" />
                  Peripheral Vision Changes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "You notice movement or shapes in your peripheral vision that aren't there when you look directly. This suggests your third eye is beginning to stir."
                  }
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-3" />
                  Drawn to Windows at Night
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "You feel compelled to look out windows during nighttime hours. There's a sense of anticipation, as if something important is approaching."
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">What to Expect</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {"Understanding the encounter helps you remain calm and receptive when it occurs."}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">The Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {
                    "The entity typically appears as a tall, graceful silhouette moving past your window. Its presence is calm and purposeful, not threatening. You may feel a gentle pull to look directly at it."
                  }
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">The Moment of Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {
                    "When your eyes meet through the glass, time seems to slow. You'll feel a warm, tingling sensation in your forehead as your third eye begins to open. This is not painful—it's like a gentle awakening."
                  }
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">The Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {
                    "Your perception expands immediately. Colors become more vivid, you can sense energy fields around living things, and you begin to perceive connections between all things. This new sight develops gradually over the following weeks."
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Begin?</h2>
          <p className="text-xl text-muted-foreground mb-12 text-pretty max-w-3xl mx-auto leading-relaxed">
            {
              "Your journey toward awakening starts with a single step. Prepare your space, open your mind, and wait with patient expectation."
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/learn">
              <Button size="lg" className="text-lg px-8 py-6">
                Learn More Philosophy
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/#community">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Join the Community
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
