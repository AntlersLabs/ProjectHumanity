import {  ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "@inertiajs/react"
import Default from "@/layouts/Default"
import { Post } from "@/types/data"
import moment from 'moment'
export default function Home({breakings, topstories, featureds}: {breakings: Post[], topstories: Post[], featureds: Post[]}) {
  return (
    <Default>

      <main className="flex-1 border-top-b ">
        <section className="container mx-auto px-4 md:px-6">
            <div className=" border-l border-r ">
          <div className=" p-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Breaking News</h2>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>{new Date().toLocaleDateString()}</span>
            </div>
          </div>
          </div>
        </section>
        <section className=" border-top-b ">
          <div className="container mx-auto px-4 md:px-6">
            <div className=" border-l border-r ">
            <div className=" p-4 grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-8">
               {breakings.map((post) => (
                    <div key={post.id} className="relative overflow-hidden rounded-lg">
                    <img
                      src={'storage/' + post.image}
                      width={1200}
                      height={600}
                      alt={post.slug}
                      className="aspect-[16/9] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 p-6 md:p-8">
                      <Badge className="mb-2">Breaking</Badge>
                      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                        {post.title}
                      </h1>
                      <p className="text-white/90 mb-4 max-w-[600px] hidden md:block">
                       {post.title}
                      </p>
                      <div className="flex items-center gap-2">
                        <div>
                          <p className="text-sm font-medium text-white">Anonymous</p>
                          <p className="text-xs text-white/70">{moment(post.created_at).fromNow()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
               ))}

                <div className="grid gap-8 md:grid-cols-2">
                    {featureds.map((post) => (
                        <div key={post.id} className="space-y-4 bg-background p-6 rounded-lg border ">
                        <img
                          src={'storage/' + post.image}
                          width={600}
                          height={400}
                          alt={post.slug}
                          className="aspect-video w-full rounded-lg object-cover"
                        />
                        <Badge variant="outline">{post.category?.name}</Badge>
                        <h3 className="text-xl font-bold">{post.title}</h3>
                        <p className="text-muted-foreground">
                         {post.summary}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>Anonymous</span>
                          <span>•</span>
                          <span>{moment(post.created_at).fromNow()}</span>
                        </div>
                      </div>
                    ))}


                </div>
              </div>
              <div className="space-y-8">
                <div className="rounded-lg border p-6 bg-background">
                  <h3 className="text-lg font-bold mb-4">Top Stories</h3>
                  <div className="space-y-6 divide-y">
                    {topstories.map((post) => (
                      <div key={post.id} className={post.id > 1 ? "pt-6" : ""}>
                        <div className="flex items-start gap-4">
                          <img
                            src={'storage/' + post.image}
                            width={80}
                            height={80}
                            alt={post.slug}
                            className="rounded-md object-cover"
                          />
                          <div>
                            <Badge variant="secondary" className="mb-1">
                              {post.category?.name}
                            </Badge>
                            <h4 className="font-medium line-clamp-2">
                             {post.title}
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
            <div className="p-8 border-l border-r border-t-0 border-b-0 ">




          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Categories</h2>
            <Button variant="ghost" size="sm">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8 flex h-9 w-full flex-wrap justify-start rounded-none border-b bg-transparent p-0">
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
                  <div key={item} className="group space-y-4 bg-background p-6 rounded-lg border ">
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

        <section className="  border-top-b">
          <div className="container mx-auto px-4 md:px-6">
           <div className=" p-8 border-pattern">

           <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Latest News</h2>
              <Button variant="ghost" size="sm">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group space-y-4 bg-background p-6 rounded-lg border ">
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
            <div className="border-pattern">
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

    </Default>
  )
}
