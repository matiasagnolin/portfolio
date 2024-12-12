'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileDown } from 'lucide-react'
import { ModeToggle } from "@/components/mode-toggle"
import { motion } from 'framer-motion'

export function Header() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="rounded-lg border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
          <div className="flex h-20 items-center justify-between px-6">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-semibold">
                matías
              </Link>
            </div>
            <nav className="flex items-center gap-8">
              <Link 
                href="#about" 
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link 
                href="#projects" 
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Projects
              </Link>
              <Link 
                href="#contact" 
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" asChild className="ml-2">
                  <a 
                    href="/your-cv.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <FileDown className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                    Download CV
                  </a>
                </Button>
              </motion.div>
              <div className="flex items-center gap-4 pl-4 border-l">
                <Button variant="ghost" size="icon" asChild className="hover:bg-transparent">
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:bg-transparent">
                  <Link href="mailto:your.email@example.com">
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:bg-transparent">
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <ModeToggle />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

