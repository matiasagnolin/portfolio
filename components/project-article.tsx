import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectArticleProps {
  title: string
  description: string
  imageSrc: string
  technologies: string[]
  websiteUrl: string
}

export function ProjectArticle({ title, description, imageSrc, technologies, websiteUrl }: ProjectArticleProps) {
  return (
    <article className="flex flex-col md:flex-row gap-6 bg-card rounded-lg overflow-hidden shadow-lg">
      <div className="flex-1 p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="rounded-full px-3 py-1">
              {tech}
            </Badge>
          ))}
        </div>
        <Button asChild>
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">Visit Project</a>
        </Button>
      </div>
      <div className="flex-1">
        <Image
          src={imageSrc}
          alt={`Screenshot of ${title}`}
          width={500}
          height={300}
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
    </article>
  )
}

