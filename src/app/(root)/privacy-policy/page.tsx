import Navigation from "@/components/navigation"
import CustomCursor from "@/components/customcursor";
export default function PrivacyPolicyPage() {
  return (
    <div id="app">
        
        <CustomCursor />
    <main className="min-h-screen bg-white text-black flex flex-col justify-between">
        <Navigation />
      <div className="py-20 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-extrabold mb-4">Privacy Policy</h1>
        <p className="text-sm font-medium text-gray-600 mb-10">
          Last updated: June 19, 2025
        </p>

        <section className="space-y-10 text-lg font-medium leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold mb-2">1. Information We Collect</h2>
            <p>
              We only collect the following information when you interact with our platform:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Email address</li>
              <li>Username or name</li>
            </ul>
            <p className="mt-2">
              This data is voluntarily provided by you when signing up for early access, joining our waitlist, or contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Inform you about SORTOF’s launch, features, and updates</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Improve our services and understand user interest</li>
            </ul>
            <p className="mt-2">We do <strong>not</strong> use your information for advertising or profiling.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">3. Information Sharing</h2>
            <p>We do <strong>not</strong> sell, rent, or share your personal information with third parties, except in the following cases:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our platform and its users from harm</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">4. Data Security</h2>
            <p>We take security seriously. Your data is stored securely using standard encryption and access control practices to prevent unauthorized access or disclosure.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">5. Your Rights</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Access or update your email and username</li>
              <li>Request deletion of your data at any time</li>
              <li>Withdraw consent for communication</li>
            </ul>
            <p className="mt-2">To make any of these requests, simply contact us using the information below.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">6. Cookies and Tracking</h2>
            <p>Currently, SORTOF does <strong>not use cookies or third-party tracking</strong>. If this changes in the future, we will update this policy and notify you accordingly.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">7. Updates to This Policy</h2>
            <p>We may update this Privacy Policy as our app evolves. If we make significant changes, we will update the “Last updated” date and notify users where appropriate.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">8. Contact Us</h2>
            <p>If you have any questions or concerns regarding your privacy, feel free to reach out:</p>
            <p className="mt-2 font-semibold">Email: hello@sortof.app</p>
          </div>
        </section>
      </div>

      <footer className="text-center text-sm text-gray-500 mt-12 mb-6">
        &copy; {new Date().getFullYear()} SORTOF. All rights reserved.
      </footer>
    </main>
    </div>
  );
}
