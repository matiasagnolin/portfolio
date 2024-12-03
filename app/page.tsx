import { Header } from "@/components/header"
import { ProjectArticle } from "@/components/project-article"
import { AnimatedBackground } from "@/components/animated-background"
import { AnimatedSection } from "@/components/animated-section"
import { LottieAnimation } from "@/components/lottie-animation"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 pt-20">
        <AnimatedSection>
          <section id="hero" className="py-20 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Welcome to My Serious Portfolio</h1>
              <p className="text-xl text-muted-foreground">I create professional and impactful solutions.</p>
            </div>
            <div className="flex-1">
              <LottieAnimation />
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="about" className="py-20">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-4">About Me</h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">I am a dedicated professional with expertise in web development and software engineering. With years of experience in creating robust and scalable applications, I bring a unique blend of technical skill and creative problem-solving to every project.</p>
            <p className="leading-7 mt-4">My journey in tech began with a fascination for how things work, which led me to pursue a degree in Computer Science. Since then, I've worked on a diverse range of projects, from small startups to large enterprises, always focusing on delivering high-quality, user-centric solutions.</p>
            <p className="leading-7 mt-4">When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech talks and blog posts. I'm passionate about creating technology that makes a positive impact and always eager to take on new challenges.</p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="projects" className="py-20">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-4">My Projects</h2>
            <div className="space-y-32">
              <AnimatedSection>
                <ProjectArticle
                  title="Project 1"
                  description="This innovative project showcases the power of modern web technologies. It demonstrates my ability to create responsive, accessible, and performant web applications."
                  imageSrc="/placeholder.svg?height=300&width=500&text=Project+1+Screenshot"
                  technologies={["React", "Next.js", "TypeScript"]}
                  websiteUrl="https://project1.example.com"
                />
              </AnimatedSection>
              <AnimatedSection>
                <ProjectArticle
                  title="Project 2"
                  description="An Android application that leverages the latest features of Kotlin and Java. This project highlights my mobile development skills and my ability to create user-friendly interfaces."
                  imageSrc="/placeholder.svg?height=300&width=500&text=Project+2+Screenshot"
                  technologies={["Kotlin", "Java", "Android"]}
                  websiteUrl="https://project2.example.com"
                />
              </AnimatedSection>
              <AnimatedSection>
                <ProjectArticle
                  title="Project 3"
                  description="A full-stack web application that demonstrates my proficiency in both frontend and backend technologies. This project showcases my ability to create scalable and maintainable software solutions."
                  imageSrc="/placeholder.svg?height=300&width=500&text=Project+3+Screenshot"
                  technologies={["Node.js", "Express", "MongoDB", "React"]}
                  websiteUrl="https://project3.example.com"
                />
              </AnimatedSection>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="contact" className="py-20">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-4">Contact Me</h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">I'm always open to new opportunities and collaborations. Whether you have a project in mind, want to discuss potential partnerships, or just want to connect, I'd love to hear from you.</p>
            <p className="leading-7 mt-4">You can reach me via email at <a href="mailto:your.email@example.com" className="text-primary hover:underline">your.email@example.com</a> or connect with me on LinkedIn. I typically respond within 24-48 hours.</p>
            <p className="leading-7 mt-4">For quick inquiries, feel free to use the contact form below. I look forward to hearing from you!</p>
            <form className="mt-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"></textarea>
              </div>
              <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
                Send Message
              </button>
            </form>
          </section>
        </AnimatedSection>
      </main>
      <footer className="bg-muted py-6 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2023 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

