import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from '@inertiajs/react'

const Footer = () => {

  return (
    <footer className="border-t ">
        <div className="container mx-auto  px-4 md:px-6">
        <div className='border-pattern'>


          <div className=" px-4 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-medium mb-4">Projecy Humanity by Antlers</h3>
              <p className="text-sm text-muted-foreground mb-4">
                In a collective collaboration with Antlers Labs, Adons Tech, PacaLabs, Grand Line: Once Piece and the people of Bangladesh.
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
          <div className="mt-8 border-t  pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} Antlers Labs. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-4 md:mt-0">Powered by Antlers Labs</p>
          </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
