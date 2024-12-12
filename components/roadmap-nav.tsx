'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Section {
  id: string
  label: string
}

const sections: Section[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

export function RoadmapNav() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { threshold: 0.5 })

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-8 z-50">
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-muted-foreground/20 -translate-x-1/2" />
      {sections.map((section) => (
        <Button
          key={section.id}
          variant="ghost"
          size="icon"
          className={cn(
            "w-3 h-3 rounded-full transition-all duration-300 ease-in-out opacity-50 hover:opacity-100",
            activeSection === section.id 
              ? "bg-primary scale-125 opacity-100" 
              : "bg-muted hover:scale-110"
          )}
          onClick={() => scrollToSection(section.id)}
          aria-label={`Navigate to ${section.label} section`}
        >
          <span className="sr-only">{section.label}</span>
        </Button>
      ))}
    </nav>
  )
}

