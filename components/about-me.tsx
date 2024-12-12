import { LottieAnimationId } from "@/components/lottie-animation-id"
import { AnimatedSection } from "@/components/animated-section"

export function AboutMe() {
  return (
    <AnimatedSection>
      <section id="about" className="py-20">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-4">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <LottieAnimationId />
          </div>
          <div className="w-full md:w-2/3">
            <p className="leading-7 [&:not(:first-child)]:mt-6 font-helvetica-neue">
              <span className="text-6xl">
                I am a 
                <span className="relative inline-block">
                  <span className="highlight">
                    Backend Software Engineer
                  </span>
                </span>.
              </span>
              <br /><br />
              <span className="text-2xl relative inline-block font-Raleway">
                <span>I specialize in API integrations and distributed systems designed for{" "}
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
  )
}