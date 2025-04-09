import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRight } from 'lucide-react';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Default from '@/layouts/Default';
import { Post } from '@/types/data';
import moment from 'moment';
import { Link } from '@inertiajs/react';
export default function Home({ breakings, topstories, featureds, latest }: { breakings: Post[]; topstories: Post[]; featureds: Post[], latest: Post[] }) {
  return (
    <Default>
      <main className="border-top-b flex-1">
        <section className="container mx-auto px-4 md:px-6">
          <div className="border-r border-l">
            <div className="flex items-center justify-between p-4">
              <h2 className="text-2xl font-bold tracking-tight">Breaking News</h2>
              <div className="text-muted-foreground flex items-center text-sm">
                <span>{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </section>
        <section className="border-top-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="border-r border-l">
              <div className="grid gap-8 p-4 lg:grid-cols-3">
                <div className="space-y-8 lg:col-span-2">
                  {breakings.map((post) => (
                    <div key={post.id} className="relative overflow-hidden rounded-lg">
                      <Link href={`/news/${post.slug}`} >

                        <img
                          src={'storage/' + post.image}
                          width={1200}
                          height={600}
                          alt={post.slug}
                          className="aspect-[16/9] w-full object-cover"
                        />
                      </Link>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 p-6 md:p-8">
                        <Badge className="mb-2">Breaking</Badge>
                        <h1 className="mb-2 text-xl font-bold text-white md:text-2xl lg:text-3xl">
                          <Link href={`/news/${post.slug}`} className="hover:underline">
                            {post.title}
                          </Link>
                        </h1>
                        <p className="mb-4 hidden max-w-[600px] text-white/90 md:block">{post.title}</p>
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
                      <div key={post.id} className="bg-background space-y-4 rounded-lg border p-6">
                        <Link href={`/news/${post.slug}`} className="hover:underline">

                          <img
                            src={'storage/' + post.image}
                            width={600}
                            height={400}
                            alt={post.slug}
                            className="aspect-video w-full rounded-lg object-cover"
                          />
                        </Link>
                        <Badge variant="outline">{post.category?.name}</Badge>
                        <h3 className="text-xl font-bold"><Link href={`/news/${post.slug}`} className="hover:underline">
                          {post.title}
                        </Link></h3>
                        <p className="text-muted-foreground">{post.summary}</p>
                        <div className="text-muted-foreground flex items-center gap-2 text-sm">
                          <span>Anonymous</span>
                          <span>•</span>
                          <span>{moment(post.created_at).fromNow()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="bg-background rounded-lg border p-6">
                    <h3 className="mb-4 text-lg font-bold">Top Stories</h3>
                    <div className="space-y-6 divide-y">
                      {topstories.map((post) => (
                        <div key={post.id} className={post.id > 1 ? 'pt-6' : ''}>
                          <div className="flex items-start gap-4">
                            <Link href={`/news/${post.slug}`} >

                              <img
                                src={'storage/' + post.image}
                                width={80}
                                height={80}
                                alt={post.slug}
                                className="rounded-md object-cover"
                              />
                            </Link>
                            <div>
                              <Badge variant="secondary" className="mb-1">
                                {post.category?.name}
                              </Badge>
                              <h4 className="line-clamp-2 font-medium"><Link href={`/news/${post.slug}`} className="hover:underline">
                                {post.title}
                              </Link></h4>
                              <p className="text-muted-foreground mt-1 text-xs">
                                {Math.floor(Math.random() * 12) + 1} hours ago
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" className="mt-6 w-full">
                      View All <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="bg-background rounded-lg border p-6">
                    <h3 className="mb-4 text-lg font-bold">Subscribe to Newsletter</h3>
                    <p className="text-muted-foreground mb-4 text-sm">Get the latest news delivered directly to your inbox.</p>
                    <form className="space-y-3">
                      <Input type="email" placeholder="Your email address" />
                      <Button className="w-full" variant={'destructive'}>Subscribe</Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News */}

        <section className="border-top-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="border-pattern p-8">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Latest News</h2>
                <Button variant="ghost" size="sm">
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {latest.map((post) => (
                  <div key={post.id} className="group bg-background space-y-4 rounded-lg border p-6">
                    <div className="overflow-hidden rounded-lg">
                      <Link href={`/news/${post.slug}`} >

                        <img
                          src={'storage/' + post.image}
                          width={600}
                          height={400}
                          alt={post.slug}
                          className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </Link>
                    </div>
                    <Badge variant="outline">
                      {post.category?.name}
                    </Badge>
                    <h3 className="line-clamp-2 font-bold">
                      <Link href={`/news/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm">
                      {post.summary}
                    </p>
                    <div className="text-muted-foreground flex items-center gap-2 text-sm">
                      <span>
                        Anonymous
                      </span>
                      <span>•</span>
                      <span>{moment(post.created_at).fromNow()}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <Button variant="outline" size="lg">
                  See more
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="border-top-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="border-pattern">
              <div className="flex flex-col items-center space-y-6 py-20 text-center">
                <h2 className="text-3xl font-bold">Stay Updated with Project Humanity</h2>
                <p className="text-muted-foreground max-w-[600px]">Subscribe to our newsletter to receive the latest news updates.</p>
                <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
                  <Input placeholder="Enter your email" type="email" className="flex-1" />
                  <Button>Subscribe</Button>
                </div>
                <p className="text-muted-foreground text-xs">By subscribing, you agree to our Terms of Service and Privacy Policy.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Default>
  );
}
