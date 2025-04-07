import { Search, Bell, Menu, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "@inertiajs/react"

export default function Home() {
  return (
    <div className="flex  flex-col ">
      <header className="sticky top-0 z-50 w-full border-b border-dashed bg-background px-4 md:px-6">
        <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
            <Link href="#" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Project Humanity</span>
            </Link>
            <nav className="gap-6 hidden md:flex">
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Home
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Politics
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Business
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Technology
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Entertainment
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Sports
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <form className="hidden lg:flex relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search news..." className="w-[200px] lg:w-[300px] pl-8" />
            </form>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
            <Button className="hidden md:inline-flex">Subscribe</Button>
          </div>
        </div>
      </header>
      <main className="flex-1 border border-dashed ">
        <section className="container mx-auto px-4 md:px-6">
            <div className=" border-l border-r  border-dashed">
          <div className=" p-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Breaking News</h2>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>{new Date().toLocaleDateString()}</span>
            </div>
          </div>
          </div>
        </section>
        <section className=" border border-dashed ">
          <div className="container mx-auto px-4 md:px-6">
            <div className=" border-l border-r  border-dashed">
            <div className=" p-4 grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-8">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=600&width=1200"
                    width={1200}
                    height={600}
                    alt="Featured news"
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 p-6 md:p-8">
                    <Badge className="mb-2">Breaking</Badge>
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                      Global Leaders Gather for Climate Summit to Address Environmental Challenges
                    </h1>
                    <p className="text-white/90 mb-4 max-w-[600px] hidden md:block">
                      World leaders from over 190 countries convene to discuss urgent climate action and sustainable
                      development goals.
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-muted" />
                      <div>
                        <p className="text-sm font-medium text-white">Sarah Johnson</p>
                        <p className="text-xs text-white/70">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-4 bg-background p-6 rounded-lg border border-dashed border border-dashed">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="News img"
                      className="aspect-video w-full rounded-lg object-cover"
                    />
                    <Badge variant="outline">Technology</Badge>
                    <h3 className="text-xl font-bold">Tech Giant Unveils Revolutionary AI Assistant for Home Use</h3>
                    <p className="text-muted-foreground">
                      The new AI system promises to transform how people interact with smart home devices.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Michael Chen</span>
                      <span>•</span>
                      <span>4 hours ago</span>
                    </div>
                  </div>
                  <div className="space-y-4 bg-background p-6 rounded-lg border border-dashed border">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="News img"
                      className="aspect-video w-full rounded-lg object-cover"
                    />
                    <Badge variant="outline">Business</Badge>
                    <h3 className="text-xl font-bold">Global Markets React to Central Bank's Interest Rate Decision</h3>
                    <p className="text-muted-foreground">
                      Investors closely monitor economic indicators as central banks adjust monetary policy.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Jessica Williams</span>
                      <span>•</span>
                      <span>6 hours ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="rounded-lg border border-dashed p-6 bg-background">
                  <h3 className="text-lg font-bold mb-4">Top Stories</h3>
                  <div className="space-y-6 divide-y">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className={item > 1 ? "pt-6" : ""}>
                        <div className="flex items-start gap-4">
                          <img
                            src={`/placeholder.svg?height=100&width=100&text=${item}`}
                            width={80}
                            height={80}
                            alt={`Top story ${item}`}
                            className="rounded-md object-cover"
                          />
                          <div>
                            <Badge variant="secondary" className="mb-1">
                              {["Politics", "Sports", "Health", "Science", "Entertainment"][item - 1]}
                            </Badge>
                            <h4 className="font-medium line-clamp-2">
                              {
                                [
                                  "New Healthcare Bill Passes Senate Vote",
                                  "National Team Advances to Championship Finals",
                                  "Breakthrough in Cancer Research Announced",
                                  "Space Agency Reveals Plans for Mars Mission",
                                  "Award-Winning Film Director Announces New Project",
                                ][item - 1]
                              }
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {Math.floor(Math.random() * 12) + 1} hours ago
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-6">
                    View All <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
                <div className="rounded-lg border p-6 bg-background">
                  <h3 className="text-lg font-bold mb-4">Subscribe to Newsletter</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest news delivered directly to your inbox.
                  </p>
                  <form className="space-y-3">
                    <Input type="email" placeholder="Your email address" />
                    <Button className="w-full">Subscribe</Button>
                  </form>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
        <section className=" border-top-b">
          <div className='container mx-auto px-4 md:px-6'>
            <div className="p-8 border-l border-r border-t-0 border-b-0  border-dashed">

           
            
        
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Categories</h2>
            <Button variant="ghost" size="sm">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8 flex h-9 w-full flex-wrap justify-start rounded-none border-b border-dashed bg-transparent p-0">
              <TabsTrigger
                value="all"
                className="h-9 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="politics"
                className="h-9 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Politics
              </TabsTrigger>
              <TabsTrigger
                value="business"
                className="h-9 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Business
              </TabsTrigger>
              <TabsTrigger
                value="technology"
                className="h-9 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Technology
              </TabsTrigger>
              <TabsTrigger
                value="entertainment"
                className="h-9 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Entertainment
              </TabsTrigger>
              <TabsTrigger
                value="sports"
                className="h-9 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Sports
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="border-none p-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="group space-y-4 bg-background p-6 rounded-lg border border-dashed border">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={`/placeholder.svg?height=400&width=600&text=${item}`}
                        width={600}
                        height={400}
                        alt={`News img ${item}`}
                        className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <Badge variant="outline">{["Politics", "Business", "Technology", "Sports"][item - 1]}</Badge>
                    <h3 className="font-bold line-clamp-2">
                      {
                        [
                          "Government Announces New Economic Stimulus Package",
                          "Major Merger Creates Industry Giant in Tech Sector",
                          "Revolutionary Smartphone Features Unveiled at Tech Conference",
                          "Local Team Celebrates Championship Victory with Fans",
                        ][item - 1]
                      }
                    </h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {
                        [
                          "The government has announced a comprehensive economic stimulus package aimed at boosting growth and creating jobs.",
                          "Two industry leaders have merged in a historic deal that reshapes the competitive landscape.",
                          "The latest smartphone innovations promise to transform how users interact with their devices.",
                          "Thousands gathered downtown to celebrate the team's first championship in over a decade.",
                        ][item - 1]
                      }
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{["Robert Smith", "Emma Davis", "David Wilson", "Amanda Lee"][item - 1]}</span>
                      <span>•</span>
                      <span>{Math.floor(Math.random() * 12) + 1} hours ago</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          </div>
          </div>
        </section>

{/* Latest News */}

        <section className=" border border-dashed">
          <div className="container mx-auto px-4 md:px-6">
           <div className=" p-8 border-l border-r border-t-0 border-b-0 border border-dashed">

           <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Latest News</h2>
              <Button variant="ghost" size="sm">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group space-y-4 bg-background p-6 rounded-lg border border-dashed border">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={`/placeholder.svg?height=400&width=600&text=${item}`}
                      width={600}
                      height={400}
                      alt={`Latest news img ${item}`}
                      className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <Badge variant="outline">
                    {["Politics", "Business", "Technology", "Health", "Science", "Entertainment"][item - 1]}
                  </Badge>
                  <h3 className="font-bold line-clamp-2">
                    {
                      [
                        "International Trade Agreement Faces Parliamentary Challenges",
                        "Stock Markets Reach Record Highs Amid Economic Recovery",
                        "AI Breakthrough Promises to Revolutionize Healthcare Diagnostics",
                        "New Study Reveals Benefits of Mediterranean Diet for Heart Health",
                        "Astronomers Discover Potentially Habitable Exoplanet",
                        "Acclaimed Director's Latest Film Receives Standing Ovation at Festival",
                      ][item - 1]
                    }
                  </h3>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {
                      [
                        "Lawmakers debate the merits of a new international trade agreement that could reshape global commerce.",
                        "Investors celebrate as major indices hit all-time highs following positive economic indicators.",
                        "A new AI system can detect early signs of disease with unprecedented accuracy, researchers claim.",
                        "Following a Mediterranean diet may significantly reduce the risk of heart disease, according to new research.",
                        "Scientists have identified a planet outside our solar system that could potentially support life.",
                        "Critics praise the groundbreaking cinematography and storytelling in the director's latest work.",
                      ][item - 1]
                    }
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>
                      {
                        [
                          "James Wilson",
                          "Sophia Garcia",
                          "Thomas Brown",
                          "Olivia Martinez",
                          "Daniel Taylor",
                          "Emily Johnson",
                        ][item - 1]
                      }
                    </span>
                    <span>•</span>
                    <span>{Math.floor(Math.random() * 24) + 1} hours ago</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg">
                Load More News
              </Button>
            </div>
           </div>
          </div>
        </section>
        <section className="border-top-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="border-l border-r border-dashed">
            <div className=" py-20 flex flex-col items-center text-center space-y-6">
              <h2 className="text-3xl font-bold">Stay Updated with NewsPortal</h2>
              <p className="text-muted-foreground max-w-[600px]">
                Subscribe to our newsletter to receive the latest news updates, exclusive stories, and special offers.
              </p>
              <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
                <Input placeholder="Enter your email" type="email" className="flex-1" />
                <Button>Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-dashed">
        <div className="container mx-auto  px-4 md:px-6">
        <div className='border-pattern'>

           
          <div className=" px-4 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-medium mb-4">NewsPortal</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Delivering accurate, timely, and engaging news coverage from around the world.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Categories</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Politics
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Business
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Technology
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Entertainment
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Sports
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Health
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  About Us
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Careers
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Contact
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Advertise
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Press Room
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Support</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Help Center
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Terms of Service
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Cookie Policy
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:underline">
                  Accessibility
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 border-t border-dashed pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} NewsPortal. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-4 md:mt-0">Powered by NewsPortal Media Group</p>
          </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
