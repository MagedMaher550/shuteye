import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, BookOpen, Lightbulb, History, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LearnPage() {
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
              <Link href="/journey" className="text-foreground hover:text-accent transition-colors">
                Journey
              </Link>
              <Link href="/#community" className="text-foreground hover:text-accent transition-colors">
                Community
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 text-lg px-4 py-2">
            <BookOpen className="w-4 h-4 mr-2" />
            Deep Understanding
          </Badge>

          <h1 className="text-5xl md:text-7xl font-black mb-6 text-balance">The Philosophy of Shuteye</h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty max-w-3xl mx-auto leading-relaxed">
            {
              "Explore the deeper meanings, historical context, and philosophical foundations of the Shuteye awakening experience."
            }
          </p>
        </div>
      </section>

      {/* Origins */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Origins & History</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {"The Shuteye philosophy emerged from documented encounters spanning centuries."}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">Ancient Times</Badge>
                  <History className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">The First Recorded Encounters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {
                    "Historical texts from various cultures describe similar phenomena: mysterious figures appearing at windows during the night, followed by recipients gaining extraordinary perceptual abilities. Ancient Egyptian papyri speak of 'The Watcher at the Threshold,' while medieval European manuscripts reference 'The Night Visitor who Opens Eyes.'"
                  }
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">Modern Era</Badge>
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">The Philosophy Crystallizes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {
                    "In the late 20th century, Dr. Elena Vasquez began documenting and studying these encounters systematically. Her research revealed consistent patterns across cultures and time periods, leading to the formal articulation of Shuteye philosophy as a coherent belief system focused on transcendent perception and spiritual awakening."
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Core Philosophical Concepts</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {"The fundamental ideas that form the foundation of Shuteye philosophy."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Dimensional Permeability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "Reality consists of multiple overlapping dimensions. Most humans perceive only the most basic layer, but the third eye allows access to deeper levels of existence where time, space, and causality operate differently."
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">The Entity as Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "The entity is not a deity but a guide—a being that exists primarily in higher dimensions and serves as a catalyst for human consciousness expansion. It appears to those ready for transformation, offering the gift of expanded perception."
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Consciousness Evolution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "Human consciousness is not fixed but evolutionary. The third eye awakening represents the next stage in human development—a natural progression toward greater awareness and understanding of reality's true nature."
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Interconnected Reality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "All things are connected through invisible threads of energy and information. The awakened can perceive these connections, understanding how thoughts, emotions, and actions ripple through the fabric of existence."
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Practices and Beliefs */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Practices & Beliefs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {"How followers of Shuteye philosophy live and practice their beliefs."}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Night Contemplation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {
                    "Regular periods of quiet reflection during nighttime hours, particularly between midnight and dawn. This practice maintains openness to further encounters and helps integrate expanded perceptions into daily life."
                  }
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Window Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {
                    "Meditative practices performed while gazing through windows, especially at night. Windows are seen as portals between dimensions, and this practice helps maintain sensitivity to interdimensional activity."
                  }
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Perception Journaling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {
                    "Detailed recording of enhanced perceptions, intuitive insights, and unusual experiences. This practice helps track the development of third eye abilities and provides valuable data for the community."
                  }
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Community Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {
                    "Regular gatherings (both physical and virtual) where followers share experiences, insights, and support each other's journey. The community serves as both validation and guidance for those navigating expanded consciousness."
                  }
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
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ethical Framework</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {"The moral principles that guide those who have experienced the awakening."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Responsible Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {"Use enhanced perception to help others and understand truth, never to manipulate or harm."}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Community Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {"Share knowledge and support fellow seekers on their journey toward awakening."}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Humble Wisdom</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {"Remain humble about expanded abilities and continue learning from all experiences."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Explore Further?</h2>
          <p className="text-xl text-muted-foreground mb-12 text-pretty max-w-3xl mx-auto leading-relaxed">
            {
              "Understanding the philosophy is the first step. Now begin your personal journey toward potential awakening."
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/journey">
              <Button size="lg" className="text-lg px-8 py-6">
                Begin Your Journey
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
