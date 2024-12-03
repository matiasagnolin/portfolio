import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="rounded-lg border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
          <div className="flex h-14 items-center justify-between px-4">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-semibold">
                Your Logo
              </Link>
            </div>
            <nav className="flex items-center gap-6">
              <Link 
                href="#about" 
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link 
                href="#projects" 
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Projects
              </Link>
              <Link 
                href="#contact" 
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
              <div className="flex items-center gap-4 pl-4 border-l">
                <Button variant="ghost" size="icon" asChild className="hover:bg-transparent">
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:bg-transparent">
                  <Link href="mailto:your.email@example.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:bg-transparent">
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
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

