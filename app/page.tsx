import { Header } from "@/components/header"
import { LottieAnimationId } from "@/components/lottie-animation-id"
import { ProjectArticle } from "@/components/project-article"
import { AnimatedBackground } from "@/components/animated-background"
import { AnimatedSection } from "@/components/animated-section"
import { LottieAnimation } from "@/components/lottie-animation"

export default function Home() {
  return (
    <div>
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 pt-20">
        <AnimatedSection>
          <section id="hero" className="py-20 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 pt-20">
              <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl mb-4">Matías Agnolin</h1>
              <p className="text-xl text-muted-foreground">I help businesses to create scalable software solutions with a focus on performance and top-tier code quality</p>
            </div>
            <div className="flex-1">
              <LottieAnimation />
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="about" className="py-20">
            <h2 className="scroll-m-20  pb-2 text-4xl font-semibold tracking-tight transition-colors first:mt-0 mb-4">About me</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/4">
                <LottieAnimationId />
              </div>
              <div className="w-full md:w-2/3">
                <p className="leading-7 [&:not(:first-child)]:mt-6 font-helvetica-neue">
                  <span className="text-6xl">
                    I am a 
                    <span className="relative inline-block">
                      <span className="absolute left-0 right-0 bottom-0 h-1 bg-transparent">
                        <svg className="w-full h-2" viewBox="0 0 100 10" preserveAspectRatio="none">    
                        </svg>
                      </span>
                      <span className="bg-yellow-300 relative z-10 inline-block" style={{ padding: '0.1rem 0.2rem', borderRadius: '0.2rem', background: 'linear-gradient(to right, rgba(255, 255, 0, 0.6), rgba(255, 255, 0, 0.2))' }}>
                        Backend Software Engineer
                      </span>
                    </span>.
                  </span>
                  <br /><br />
                  <span className="text-2xl relative inline-block font-Raleway">
                    <span>I specialize in API integration and distributed systems designed for{" "}
                      <span className="relative inline-block">
                        <span className="absolute left-0 right-0 bottom-0 h-1 bg-transparent">
                          <svg className="w-full h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0,5 Q25,0 50,5 T100,5" stroke="blue" strokeWidth="6" fill="none" />
                          </svg>
                        </span>
                        high-traffic environments.
                      </span>
                    </span>
                    <br /><br />
                    I've worked for companies like {" "}
                    <span className="relative inline-block group">
                      <a href="https://example.com/ifco" className="font-Raleway font-bold text-2xl relative z-10">IFCO</a>
                      <span className="absolute left-0 right-0 bottom-0 h-1 bg-transparent transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100">
                        <svg className="w-full h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
                          <path d="M0,5 Q25,0 50,5 T100,5" stroke="red" strokeWidth="3" fill="none" />
                        </svg>
                      </span>
                    </span>, {" "}
                    <span className="relative inline-block group">
                      <a href="https://example.com/rappi" className="font-Raleway font-bold text-2xl relative z-10">Scytl</a>
                      <span className="absolute left-0 right-0 bottom-0 h-1 bg-transparent transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100">
                        <svg className="w-full h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
                          <path d="M0,5 Q25,0 50,5 T100,5" stroke="red" strokeWidth="3" fill="none" />
                        </svg>
                      </span>
                    </span>, {" "}
                    <span className="relative inline-block group">
                      <a href="https://example.com/scytl" className="font-Raleway font-bold text-2xl relative z-10">Modulr</a>
                      <span className="absolute left-0 right-0 bottom-0 h-1 bg-transparent transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100">
                        <svg className="w-full h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
                          <path d="M0,5 Q25,0 50,5 T100,5" stroke="red" strokeWidth="3" fill="none" />
                        </svg>
                      </span>
                    </span> and {" "}
                    <span className="relative inline-block group">
                      <a href="https://example.com/modulr" className="font-Raleway font-bold  text-2xl relative z-10">Rappi</a>
                      <span className="absolute left-0 right-0 bottom-0 h-1 bg-transparent transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100">
                        <svg className="w-full h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
                          <path d="M0,5 Q25,0 50,5 T100,5" stroke="red" strokeWidth="3" fill="none" />
                        </svg>
                      </span>
                    </span>.
                    Different industries and different projects, but I've been always working with the following technologies:
                    <div className="flex justify-center items-center">
                      <div className="relative">

                        <div className="flex items-center">
                          <span className="font-italic-raleway text-4xl pl-2 text-center">
                            Java* / Kotlin* / Python / NodeJS
                          </span>
                          <br /><br />
                        </div>
                        <span className="text-lg pr-2">(*mainly)</span>
                      </div>
                    </div>
                  </span>
                  <br /><br />
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="projects" className="py-20">
            <h2 className="scroll-m-20 pb-2 text-4xl font-semibold tracking-tight transition-colors first:mt-0 mb-4">Projects</h2>
            <div className="space-y-32">
              <AnimatedSection>
                <ProjectArticle
                  title="European Parliament"
                  description="I worked as a senior developer on building the software for deliverying the result on live at the moment that people were voting for the Parliament of the European Union, which was used in the last election (2024)."
                  imageSrc="/european-parliament.png"
                  technologies={["Java 17","SpringBoot", "SpringData", "SpringWeb", "PostgreSQL", "Kafka", "Redis"]}
                  websiteUrl="https://results.elections.europa.eu/en/"
                />
              </AnimatedSection>
              <AnimatedSection>
                <ProjectArticle
                  title="Rappi"
                  description="I worked on developing internal and external microservices for providing processes and calculations related to discounts and offers and creating a client profiling in order to keep people buying in App."
                  imageSrc="/rappi-app.jpg"
                  technologies={["Java 11","SpringBoot", "Kotlin", "Python", "NodeJS", "Gradle", "PostgreSQL", "RabbitMq", "Redis", "Swagger", "NodeJS"]}
                  websiteUrl="https://rappi.com"
                />
              </AnimatedSection>
              <AnimatedSection>
                <ProjectArticle
                  title="Modulr Finance"
                  description="In this project, I worked on the integration between Modulr and Ripple to receive and process international payments."
                  imageSrc="/modulr.svg"
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
      <footer className="py-6 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Matías Agnolin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

