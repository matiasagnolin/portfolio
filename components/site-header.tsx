import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold">
            crespi.design
          </Link>
          <nav className="flex gap-6">
            <Link href="/work" className="text-sm hover:text-foreground/80">
              Work
            </Link>
            <Link href="/about" className="text-sm hover:text-foreground/80">
              About
            </Link>
          </nav>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="https://read.cv" className="text-sm hover:text-foreground/80" target="_blank">
            Read.cv
          </Link>
          <Link href="https://dribbble.com" className="text-sm hover:text-foreground/80" target="_blank">
            Dribbble
          </Link>
          <Link href="https://behance.net" className="text-sm hover:text-foreground/80" target="_blank">
            Behance
          </Link>
          <Link href="https://linkedin.com" className="text-sm hover:text-foreground/80" target="_blank">
            LinkedIn
          </Link>
          <Button variant="ghost" className="text-sm" asChild>
            <Link href="mailto:hi@crespi.design">hi@crespi.design</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

