import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-black pt-20 pb-12 border-t border-black text-base md:text-lg">
      <div className="max-w-6xl mx-17 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Section */}
        <div id="quicklinks">
          <h2 className="text-3xl font-extrabold mb-6">SORTEDOF</h2>
          <p className="font-medium mb-6 leading-relaxed">
            SORTEDOF is an intelligent flashcard and note-taking app crafted for STEM learners. 
            Write notes naturally, and let AI transform them into flashcards instantly. 
            Search, revise, and master concepts — all in one powerful, minimal interface.
          </p>
          <h3 className="font-semibold mb-2 text-lg">What makes it different:</h3>
          <ul className="list-disc list-inside font-medium space-y-1">
            <li>Turn notes into flashcards with one tap</li>
            <li>Understand math, science, or code using AI</li>
            <li>Spaced repetition to enhance long-term memory</li>
            <li>Works offline, syncs when you&apos;re ready</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:text-right">
          <h3 className="font-bold text-xl mb-6">Quick Links</h3>
          <ul className="space-y-4 font-medium">
            <li>
              <Link href="/features" className="hover:underline">Features</Link>
            </li>
            <li>
              <Link href="/waitlist" className="hover:underline">Join Waitlist</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>

     {/* Bottom Divider + Copyright */}
<div className="w-full mt-10">
  <hr className="border-t border-black w-full" />

  <div className="max-w-6xl mx-auto px-6 md:px-12 mt-6 flex flex-col gap-2">
    <p className="text-sm text-gray-500 text-left">
      Created with{" "}
      <span className="text-red-600 font-semibold inline-block motion-preset-pulse ">
        🖤
      </span>{" "}
      by SORTEDOF
    </p>

    <p className="text-sm font-medium text-gray-600 text-left">
      &copy; {new Date().getFullYear()} SORTEDOF. All rights reserved.
    </p>
  </div>
</div>

    </footer>
  );
}
