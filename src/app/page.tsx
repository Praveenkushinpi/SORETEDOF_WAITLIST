import Image from "next/image";
import CustomCursor from "../components/customcursor";
import ScrollAnimate from "../components/scrollanimate";
import Link from "next/link";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

export default function HomePage() {
  return (
    <div id="app">
      <CustomCursor />
      
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col lg:flex-row">
        <Navigation />
        <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-12 lg:py-0">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h1 className=" text-white text-4xl sm:text-6xl lg:text-7xl xl:text-9xl font-bold leading-tight px-2 motion-translate-x-in-[0%] motion-translate-y-in-[100%] motion-opacity-in-[1%] motion-blur-in-[100px] [2.25s]">
              SORTEDOF
            </h1>
            <p className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl mt-4 lg:mt-6 leading-relaxed px-2 motion-translate-x-in-[0%] motion-translate-y-in-[100%] motion-opacity-in-[1%] motion-blur-in-[100px] [2.25s]">
              One Hand Solution For Your Everyday Notes
            </p>

           <a
  href="#waitlist"
  className="mt-6 mx-2 inline-flex items-center text-white font-semibold text-lg hover:underline group transition-all motion-translate-x-in-[0%] motion-translate-y-in-[100%] motion-opacity-in-[1%] motion-blur-in-[100px] [2.25s]"
>
  Join now
  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
</a>

         </div>
         </div>     
        {/* Image Section */}
        <div className="flex-1 relative min-h-[300px] motion-translate-x-in-[100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
          <Image
            src="/img/dolphin.png"
            alt="A dolphin"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* What We Are Doing Section */}
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Content Section - Left Side */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-12 lg:py-0">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <ScrollAnimate>
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-left px-2 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
                What we are doing?
              </h1>
            </ScrollAnimate>
            
            <ScrollAnimate>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 lg:mt-8 leading-relaxed text-gray-500 font-light px-2 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
                <span className="font-semibold text-white">SORTOF</span> is a one-hand solution for your everyday notes. 
                It allows you to quickly jot down ideas, tasks, and reminders with ease, 
                making it perfect for busy individuals on the go.
              </p>
            </ScrollAnimate>

            {/* Feature List */}
            <div className="mt-8 lg:mt-12 space-y-6">
              <div className="flex items-start space-x-4 px-2">
                <ScrollAnimate>
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </ScrollAnimate>
                <div>                
                  <ScrollAnimate>
                    <h3 className="text-white text-lg font-semibold px-2 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">Quick Capture</h3>
                    <p className="text-gray-600 px-2 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">Instantly capture your thoughts with one-handed operation</p>
                  </ScrollAnimate>
                </div>
              </div>

              <div className="flex items-start space-x-4 px-2">
                <ScrollAnimate>
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                </ScrollAnimate>
                <div>
                  <ScrollAnimate>
                    <h3 className="text-white text-lg font-semibold px-2 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">Mobile First</h3>
                    <p className="text-gray-600 px-2 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">Designed for seamless mobile experience</p>
                  </ScrollAnimate>
                </div>
              </div>
                
              <div className="flex items-start space-x-4 px-2">
                <ScrollAnimate>
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </ScrollAnimate>
                <div>
                  <ScrollAnimate>
                    <h3 className="text-white text-lg font-semibold px-2 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">Stay Organized</h3>
                    <p className="text-gray-600 px-2 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">Keep your ideas and tasks perfectly organized</p>
                  </ScrollAnimate>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Images Section - Right Side */}
        <div className="flex-1 relative min-h-[400px] lg:min-h-screen">
          <div className="grid grid-cols-2 gap-4 p-6 h-full">
            {/* Top Left Image */}          
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg motion-translate-x-in-[100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
              <Image
                src="/img/people-11.png"
                alt="Quick note taking interface"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Top Right Image */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg motion-translate-x-in-[100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
              <Image
                src="/img/people-9.png"
                alt="Mobile note organization"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Bottom Left Image */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg motion-translate-x-in-[100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
              <Image
                src="/img/people-12.png"
                alt="One-handed note writing"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg motion-translate-x-in-[100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
              <Image
                src="/img/people-13.png"
                alt="Task management features"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>  
          </div>
        </div>
      </div>

 <div>
      {/* Problems We Solve Section */}
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <ScrollAnimate>
          <div className="border-b border-white">
            <div className="max-w-7xl mx-auto px-8 py-20">
              <div className="max-w-4xl">
                <h1 className="text-7xl md:text-8xl font-black text-white mb-8 leading-none">
                  PROBLEMS<br />
                  WE SOLVE
                </h1>
                <p className="text-2xl text-gray-300 font-light max-w-2xl">
                  Real problems. Real solutions. Real results.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimate>

        {/* Problem 1: Scattered Study Resources */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="min-h-screen flex items-center border-b border-gray-800">
            {/* Content Side */}
            <div className="flex-1 pr-8">
              <div className="max-w-2xl">
                <div className="mb-12">
                  <ScrollAnimate>
                    <h2 className="text-5xl font-black text-white mb-8 leading-tight">
                      SCATTERED STUDY RESOURCES
                    </h2>
                  </ScrollAnimate>
                </div>

                {/* Problem */}
                <div className="mb-12">
                  <ScrollAnimate>
                    <h3 className="text-2xl font-bold text-white mb-4">PROBLEM</h3>
                    <p className="text-xl text-gray-200 font-medium leading-relaxed">
                      STEM students juggle notes, textbooks, and external tools with no central place to review or revise.
                    </p>
                  </ScrollAnimate>
                </div>

                {/* Solution */}
                <div className="mb-12">
                  <ScrollAnimate>
                    <h3 className="text-2xl font-bold text-white mb-4">SOLUTION</h3>
                    <p className="text-xl text-white font-bold leading-relaxed mb-6">
                      One app for notes, flashcards, and revision. Unified and accessible from anywhere.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white mr-4"></div>
                        <span className="text-lg font-medium text-gray-200">All-in-one note and flashcard tool</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white mr-4"></div>
                        <span className="text-lg font-medium text-gray-200">Linked notes and spaced-repetition cards</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white mr-4"></div>
                        <span className="text-lg font-medium text-gray-200">Offline access for uninterrupted learning</span>
                      </div>
                    </div>
                  </ScrollAnimate>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="flex-1 pl-8">
              <ScrollAnimate>
                <div className="aspect-[4/5] relative">
                  <img
                    src="img/people-1.png"
                    alt="Scattered Study Resources"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 border-4 border-white"></div>
                </div>
              </ScrollAnimate>
            </div>
          </div>

          {/* Problem 2: Wasted Time Creating Flashcards */}
          <div className="min-h-screen flex items-center flex-row-reverse border-b border-gray-800">
            {/* Content Side */}
            <div className="flex-1 pl-8">
              <div className="max-w-2xl ml-auto">
                <div className="mb-12">
                  <ScrollAnimate>
                    <h2 className="text-5xl font-black text-white mb-8 leading-tight">
                      WASTED TIME CREATING FLASHCARDS
                    </h2>
                  </ScrollAnimate>
                </div>

                {/* Problem */}
                <div className="mb-12">
                  <ScrollAnimate>
                    <h3 className="text-2xl font-bold text-white mb-4">PROBLEM</h3>
                    <p className="text-xl text-gray-200 font-medium leading-relaxed">
                      Manually turning notes into flashcards is time-consuming and inconsistent.
                    </p>
                  </ScrollAnimate>
                </div>

                {/* Solution */}
                <div className="mb-12">
                  <ScrollAnimate>
                    <h3 className="text-2xl font-bold text-white mb-4">SOLUTION</h3>
                    <p className="text-xl text-white font-bold leading-relaxed mb-6">
                      Use AI to automatically convert your notes into smart flashcards.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white mr-4"></div>
                        <span className="text-lg font-medium text-gray-200">AI-generated Q&A cards from written content</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white mr-4"></div>
                        <span className="text-lg font-medium text-gray-200">Customizable flashcards</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white mr-4"></div>
                        <span className="text-lg font-medium text-gray-200">Supports math, code, and science topics</span>
                      </div>
                    </div>
                  </ScrollAnimate>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="flex-1 pr-8">
              <ScrollAnimate>
                <div className="aspect-[4/5] relative">
                  <img
                    src="img/people-4.png"
                    alt="Wasted Time Creating Flashcards"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 border-4 border-white"></div>
                </div>
              </ScrollAnimate>
            </div>
          </div>

          {/* Problem 3: Ineffective Revision */}
          <div className="min-h-screen flex items-center border-b border-gray-800">
            {/* Content Side */}
            <div className="flex-1 pr-8">
              <div className="max-w-2xl">
                <div className="mb-12">
                  <ScrollAnimate>
                    <h2 className="text-5xl font-black text-white mb-8 leading-tight">
                      INEFFECTIVE REVISION
                    </h2>
                  </ScrollAnimate>
                </div>

                {/* Problem */}
                <div className="mb-12">
                  <ScrollAnimate>
                    <h3 className="text-2xl font-bold text-white mb-4">PROBLEM</h3>
                    <p className="text-xl text-gray-200 font-medium leading-relaxed">
                      Random or last-minute revision doesn't help long-term memory retention.
                    </p>
                  </ScrollAnimate>
                </div>

                {/* Solution */}
                <div className="mb-12">
                  <ScrollAnimate>
                    <h3 className="text-2xl font-bold text-white mb-4">SOLUTION</h3>
                    <p className="text-xl text-white font-bold leading-relaxed mb-6">
                      Spaced repetition based on science to boost recall and confidence.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white mr-4"></div>
                        <span className="text-lg font-medium text-gray-200">Daily review system</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white mr-4"></div>
                        <span className="text-lg font-medium text-gray-200">Smart card prioritization</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white mr-4"></div>
                        <span className="text-lg font-medium text-gray-200">Progress tracking</span>
                      </div>
                    </div>
                  </ScrollAnimate>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="flex-1 pl-8">
              <ScrollAnimate>
                <div className="aspect-[4/5] relative">
                  <img
                    src="img/people-2.png"
                    alt="Ineffective Revision"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 border-4 border-white"></div>
                </div>
              </ScrollAnimate>
            </div>
          </div>

          {/* Problem 4: Hard-to-Find Definitions and Concepts */}
          <div className="min-h-screen flex items-center flex-row-reverse border-b border-gray-800">
            {/* Content Side */}
            <div className="flex-1 pl-8">
              <div className="max-w-2xl ml-auto">
                <div className="mb-12">
                  <ScrollAnimate>
                    <h2 className="text-5xl font-black text-white mb-8 leading-tight">
                      HARD-TO-FIND DEFINITIONS AND CONCEPTS
                    </h2>
                  </ScrollAnimate>
                </div>

                {/* Problem */}
                <div className="mb-12">
                  <ScrollAnimate>
                    <h3 className="text-2xl font-bold text-white mb-4">PROBLEM</h3>
                    <p className="text-xl text-gray-200 font-medium leading-relaxed">
                      Switching apps or searching online for simple definitions wastes time and breaks flow.
                    </p>
                  </ScrollAnimate>
                </div>

                {/* Solution */}
                <div className="mb-12">
                  <ScrollAnimate>
                    <h3 className="text-2xl font-bold text-white mb-4">SOLUTION</h3>
                    <p className="text-xl text-white font-bold leading-relaxed mb-6">
                      Ask the AI directly within the app. Get context, meaning, and examples instantly.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white mr-4"></div>
                        <span className="text-lg font-medium text-gray-200">Built-in AI search for STEM topics</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white mr-4"></div>
                        <span className="text-lg font-medium text-gray-200">Instant definitions and concept summaries</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white mr-4"></div>
                        <span className="text-lg font-medium text-gray-200">Supports equations, terms, and code</span>
                      </div>
                    </div>
                  </ScrollAnimate>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="flex-1 pr-8">
              <ScrollAnimate>
                <div className="aspect-[4/5] relative">
                  <img
                    src="img/people-5.png"
                    alt="Hard-to-Find Definitions and Concepts"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 border-4 border-white"></div>
                </div>
              </ScrollAnimate>
            </div>
          </div>

          {/* Problem 5: Lack of Structure and Focus */}
          <div className="min-h-screen flex items-center border-b border-gray-800">
            {/* Content Side */}
            <div className="flex-1 pr-8">
              <div className="max-w-2xl">
                <div className="mb-12">
                  <ScrollAnimate>
                    <h2 className="text-5xl font-black text-white mb-8 leading-tight">
                      LACK OF STRUCTURE AND FOCUS
                    </h2>
                  </ScrollAnimate>
                </div>

                {/* Problem */}
                <div className="mb-12">
                  <ScrollAnimate>
                    <h3 className="text-2xl font-bold text-white mb-4">PROBLEM</h3>
                    <p className="text-xl text-gray-200 font-medium leading-relaxed">
                      Students often don't know what to review or where to start studying from.
                    </p>
                  </ScrollAnimate>
                </div>

                {/* Solution */}
                <div className="mb-12">
                  <ScrollAnimate>
                    <h3 className="text-2xl font-bold text-white mb-4">SOLUTION</h3>
                    <p className="text-xl text-white font-bold leading-relaxed mb-6">
                      SORTOF intelligently organizes and schedules what matters most.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white mr-4"></div>
                        <span className="text-lg font-medium text-gray-200">Deck and tag organization</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white mr-4"></div>
                        <span className="text-lg font-medium text-gray-200">Smart reminders and reviews</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white mr-4"></div>
                        <span className="text-lg font-medium text-gray-200">Minimal and focused design</span>
                      </div>
                    </div>
                  </ScrollAnimate>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="flex-1 pl-8">
              <ScrollAnimate>
                <div className="aspect-[4/5] relative">
                  <img
                    src="img/people-7.png"
                    alt="Lack of Structure and Focus"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 border-4 border-white"></div>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="waitlist" className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="max-w-4xl">
            <ScrollAnimate>
              <h2 className="text-6xl font-black mb-8 leading-none">
                READY TO<br />
                TRANSFORM?
              </h2>
              <p className="text-xl font-light mb-12 max-w-2xl">
                Stop managing problems. Start solving them.
              </p>
            </ScrollAnimate>
            <Link href="/waitlist">
              <button className="group bg-black text-white px-12 py-6 text-xl font-bold hover:bg-gray-800 transition-colors flex items-center">
                START NOW
                <div className="w-6 h-6 ml-4 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                  <span className="text-white text-xl">→</span>
                </div>
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
  </div>
    </div>
  );
}
