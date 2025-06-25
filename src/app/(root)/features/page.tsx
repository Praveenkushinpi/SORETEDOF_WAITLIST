import Navigation from "@/components/navigation"
import CustomCursor from "@/components/customcursor";
const features = [
  {
    title: "Notes That Think",
    description:
      "Write freeform notes. SORTEDOF turns them into intelligent flashcards using AI — no formatting rules, no templates.",
    image:
      "/img/people-14.png",
  },
  {
    title: "Flashcards Built for STEM",
    description:
      "From formulas to definitions to diagrams — generate, organize, and review cards that truly support how STEM students study.",
    image:
      "/img/people-17.png",
  },
  {
    title: "Ask Anything, Instantly",
    description:
      "Don’t get stuck. Ask SORTEDOF about any topic in your notes — math, code, theory — and get AI-powered answers instantly.",
    image:
      "/img/people-16.png",
  },
  {
    title: "Track Your Memory",
    description:
      "Smart spaced repetition. See which concepts you’re solid on, and what needs review — SORTEDOF adapts to how you retain info.",
    image:
      "/img/people-15.png",
  },
]

export default function FeaturesSection() {
  return (
    <div id="app">
        
        <CustomCursor />
    <section id="features" className="bg-white text-black py-24 px-6 md:px-12">
      <Navigation />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl font-extrabold mb-20 text-left md:text-left">
          What You Can Do with SORTEDOF
        </h2>
        <div className="space-y-32">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={` motion-translate-x-in-[100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] flex flex-col-reverse md:flex-row items-center gap-10 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg font-medium leading-relaxed text-gray-700">
                  {feature.description}
                </p>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-[280px] md:h-[320px] object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}
