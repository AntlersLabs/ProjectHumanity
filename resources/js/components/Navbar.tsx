import React from 'react'
import { Link } from "@inertiajs/react"
import { Search, Bell, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Navbar = () => {
  return (

<header className="sticky top-0 z-50 w-full bg-background border-b  px-4 md:px-6">

  <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto">
    <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
      <Link href="#" className="flex items-center space-x-2">
        <span className="text-xl font-bold">Project Humanity</span>
      </Link>
      <nav className="gap-6 hidden md:flex">
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
          Home
        </Link>
        <Link href={route('news')} prefetch className="text-sm font-medium hover:underline underline-offset-4">
          News
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

  )
}

export default Navbar
