import { Search, Filter, Calendar, Clock, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Head, Link, router } from "@inertiajs/react"
import Default from "@/layouts/Default"
import { Category, Post } from "@/types/data"
import moment from "moment"
import { useState, useEffect, useCallback } from "react"
import debounce from "lodash/debounce"

interface PaginationData {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  data: Post[];
}

interface NewsPageProps {
  news: PaginationData;
  categories: Category[];
}

export default function NewsPage({news, categories}: NewsPageProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<number[]>([])
  const [dateFrom, setDateFrom] = useState("")
  const [dateTo, setDateTo] = useState("")
  const [sortBy, setSortBy] = useState("latest")
  const [currentPage, setCurrentPage] = useState(news.current_page)

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      router.get('/news', {
        search: query,
        categories: selectedCategories,
        dateFrom,
        dateTo,
        sort: sortBy,
        page: 1, // Reset to first page on search
        per_page: news.per_page
      }, {
        preserveState: true,
        preserveScroll: true
      })
    }, 300),
    [selectedCategories, dateFrom, dateTo, sortBy]
  )

  // Update search query and trigger debounced search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    debouncedSearch(query)
  }

  const handleCategoryToggle = (categoryId: number) => {
    const newCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId]
    
    setSelectedCategories(newCategories)
    // Immediately apply category filter
    applyFilters(1, newCategories)
  }

  const handleSort = (value: string) => {
    setSortBy(value)
    // Immediately apply sort
    applyFilters(1, selectedCategories, value)
  }

  const applyFilters = (page: number = 1, categories: number[] = selectedCategories, sort: string = sortBy) => {
    router.get('/news', {
      search: searchQuery,
      categories,
      dateFrom,
      dateTo,
      sort,
      page,
      per_page: news.per_page
    }, {
      preserveState: true,
      preserveScroll: true
    })
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    applyFilters(page)
  }

  const renderPaginationButtons = () => {
    const buttons = []
    const maxButtons = 5
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2))
    let endPage = Math.min(news.last_page, startPage + maxButtons - 1)

    if (endPage - startPage + 1 < maxButtons) {
      startPage = Math.max(1, endPage - maxButtons + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          key={i}
          variant={i === currentPage ? "default" : "outline"}
          className="h-9 w-9 p-0"
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Button>
      )
    }

    return buttons
  }

  return (
   <Default>
    <Head>
      <title>News</title>
      <meta name="description" content="Browse all our latest news articles and updates" />
      <meta name="keywords" content="news, articles, updates" />
      <meta name="author" content="Project Humanity" />
      <meta name="robots" content="index, follow" />
      
    </Head>
     <div className=" container mx-auto px-4 md:px-6 flex  flex-col bg-dotted-grid  ">
<div className=" border-pattern">

<main className="flex-1">
  <div className="container px-4 py-8 md:px-6">
    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 container mx-auto px-4 md:px-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">All News</h1>
        <p className="text-muted-foreground">Browse all our latest news articles and updates</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="hidden md:flex">
          <Calendar className="mr-2 h-4 w-4" />
          Filter by date
        </Button>
        <Select value={sortBy} onValueChange={handleSort}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">Latest first</SelectItem>
            <SelectItem value="oldest">Oldest first</SelectItem>
            <SelectItem value="popular">Most popular</SelectItem>
            <SelectItem value="trending">Trending</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12">
      {/* Filters sidebar */}
      <div className="hidden md:col-span-3 md:block">
        <div className="space-y-6">
          <div className="bg-background rounded-lg border p-4">
            <h3 className="mb-4 text-lg font-medium">Search</h3>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search articles..." 
                className="pl-8" 
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>

          <div className="bg-background rounded-lg border p-4">
            <h3 className="mb-4 text-lg font-medium">Categories</h3>
            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => handleCategoryToggle(category.id)}
                  />
                  <label
                    htmlFor={`category-${category.name}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background rounded-lg border p-4">
            <h3 className="mb-4 text-lg font-medium">Date Range</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-sm text-muted-foreground">From</label>
                  <Input 
                    type="date" 
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">To</label>
                  <Input 
                    type="date"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                  />
                </div>
              </div>
              <Button className="w-full" onClick={() => applyFilters()}>Apply Filter</Button>
            </div>
          </div>


        </div>
      </div>

      {/* Main content */}
      <div className="md:col-span-9">
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
              Breaking News
            </TabsTrigger>

          </TabsList>

          <TabsContent value="all" className="border-none p-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {news.data.map((article) => (
                <Card key={article.id} className="overflow-hidden bg-background">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{article.category?.name}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        {/* <span>{article.readTime}</span> */}
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 mt-2 text-xl">
                      <Link href={`/news/${article.slug}`} className="hover:underline">
                        {article.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="line-clamp-2 text-sm text-muted-foreground">{article.summary}</p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between p-4 pt-0">
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="font-medium">Anon</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{moment(article.created_at).fromNow()}</span>
                    </div>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={`/news/${article.slug}`}>
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">Read more</span>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </Button>
              {renderPaginationButtons()}
              <Button
                variant="outline"
                disabled={currentPage === news.last_page}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </Button>
            </div>
          </TabsContent>

          {/* Other tab contents would be similar but filtered by category */}
          <TabsContent value="politics" className="border-none p-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {news.data
                .filter((article) => article.category.name === "Breaking")
                .map((article) => (
                  <Card key={article.id} className="overflow-hidden bg-background">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{article.category?.name}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          {/* <span>{article.readTime}</span> */}
                        </div>
                      </div>
                      <CardTitle className="line-clamp-2 mt-2 text-xl">
                        <Link href={`/news/${article.slug}`} className="hover:underline">
                          {article.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="line-clamp-2 text-sm text-muted-foreground">{article.summary}</p>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between p-4 pt-0">
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="font-medium">Anon</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{moment(article.created_at).fromNow()}</span>
                      </div>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/news/${article.slug}`}>
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="sr-only">Read more</span>
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Mobile filters button */}
        <div className="fixed bottom-4 right-4 md:hidden">
          <Button size="lg" className="rounded-full shadow-lg">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>
    </div>
  </div>
</main>
</div>


</div>
   </Default>
  )
}
