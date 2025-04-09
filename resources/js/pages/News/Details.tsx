import { ArrowLeft, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "@inertiajs/react"
import Default from "@/layouts/Default"

import moment from "moment"
import { Post } from "@/types/data"

interface DetailsProps {
  article: Post
}

export default function Details({ article }: DetailsProps) {
  return (
    <Default>
      <div className="container mx-auto px-4 md:px-6">
      
            <div className="border-pattern py-12 px-4 md:px-6">
        {/* Back button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/news" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Link>
        </Button>

        <article className="mx-auto max-w-4xl">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="outline">{article.category?.name}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                <span>{moment(article.created_at).format('MMMM D, YYYY')}</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <p className="text-xl text-muted-foreground">{article.summary}</p>
          </div>

          {/* Featured Image */}
          <div className="my-8">
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-auto rounded-lg object-cover max-h-[500px]"
            />
          </div>

          {/* Article Content */}
          <div className="mt-8 prose prose-lg dark:prose-invert" dangerouslySetInnerHTML={{ __html: article.content }} />
          {/* Article Footer */}
          <div className="mt-12 border-t pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div>
                  <p className="font-medium">Published by</p>
                  <p className="text-sm text-muted-foreground">Admin</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Last updated: {moment(article.updated_at).format('MMMM D, YYYY')}
              </div>
            </div>
          </div>
        </article>
  
        </div>
      </div>
    </Default>
  )
}
