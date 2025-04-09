import { ArrowLeft, Clock, Share2, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Head, Link } from "@inertiajs/react"
import Default from "@/layouts/Default"

import moment from "moment"
import { Post } from "@/types/data"

interface DetailsProps {
  article: Post
}

export default function Details({ article }: DetailsProps) {
  return (
    <Default>
        <Head>
            <title>{article.title}</title>
            <meta name="description" content={article.summary} />
            <meta name="keywords" content="news, articles, updates" />
            <meta name="author" content="Project Humanity" />
            <meta name="robots" content="index, follow" />
            <meta name="url" content={window.location.href} />
            <meta name="image" content={article.image} />
            <meta name="og:title" content={article.title} />
            <meta name="og:description" content={article.summary} />
            <meta name="og:type" content="article" />
            <meta name="og:url" content={window.location.href} />
            <meta name="og:image" content={article.image_url} />
            <meta name="og:site_name" content="Project Humanity" />
            <meta name="og:locale" content="en_US" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ProjectHumanity" />
            <meta name="twitter:title" content={article.title} />
            <meta name="twitter:description" content={article.summary} />
            <meta name="twitter:image" content={article.image_url} />
        </Head>
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

          {/* Social Share Buttons */}
          <div className="flex items-center gap-4 my-6">
            <span className="text-sm text-muted-foreground flex items-center">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </span>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-[#1DA1F2]"
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Share on Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-[#4267B2]"
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Share on Facebook</span>
              </Button>
             
            </div>
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
          <div 
            className="mt-8 prose prose-slate max-w-none dark:prose-invert
              prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
              prose-p:text-base prose-p:leading-7 prose-p:my-4
              prose-a:text-primary hover:prose-a:text-primary/80
              prose-strong:font-bold prose-strong:text-foreground
              prose-em:italic
              prose-ul:list-disc prose-ul:pl-6 prose-ul:my-4
              prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-4
              prose-li:my-2
              prose-blockquote:border-l-4 prose-blockquote:border-primary/20 prose-blockquote:pl-4 prose-blockquote:italic
              prose-img:rounded-lg prose-img:my-8
              prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg
            " 
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />
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
