import React, { useState } from 'react'
import { Link } from "@inertiajs/react"
import { Bell, Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useAppearance } from '@/hooks/use-appearance'
import AppLogoIcon from './app-logo-icon'
import AppLogo from './app-logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { appearance, updateAppearance } = useAppearance()

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b px-4 md:px-6">
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <AppLogo />
          </Link>
          <nav className="gap-6 hidden md:flex">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href={route('news')} prefetch className="text-sm font-medium hover:underline underline-offset-4">
              News
            </Link>
            <Link href={route('donations')} prefetch className="text-sm font-medium hover:underline underline-offset-4">
              Donations
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => updateAppearance(appearance === 'dark' ? 'light' : 'dark')}>
            {appearance === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Menu</span>
          </Button>
          <Button className="hidden md:inline-flex">Subscribe</Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden",
        isOpen ? "block" : "hidden"
      )}>
        <div className="border-t px-2 py-4 space-y-2">
          <Link 
            href="/" 
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
          >
            Home
          </Link>
          <Link 
            href={route('news')} 
            prefetch
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
          >
            News
          </Link>
          <Link 
            href={route('donations')} 
            prefetch
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
          >
            Donations
          </Link>
          <div className="px-3 py-2">
            <Button className="w-full">Subscribe</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
