import Navigation from "@/components/navigation"
import CustomCursor from "@/components/customcursor";
export default function TermsPage() {
  return (
    <div id="app">
        
        <CustomCursor />
    <main className="min-h-screen bg-white text-black flex flex-col justify-between">
        <Navigation />
      <div className="py-20 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-extrabold mb-4">Terms of Service</h1>
        <p className="text-sm font-medium text-gray-600 mb-10">
          Last updated: June 19, 2025
        </p>

        <section className="space-y-10 text-lg font-medium leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold mb-2">1. Use of Service</h2>
            <p>
              SORTEDOF is designed to help users create notes, generate flashcards, and use AI tools for study purposes. By using our service, you agree to use it only for lawful and educational purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">2. User Accounts</h2>
            <p>
              You may need an account to access certain features. You are responsible for:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Keeping your login credentials secure</li>
              <li>Providing accurate and up-to-date information</li>
              <li>Not impersonating others or misrepresenting your identity</li>
            </ul>
            <p className="mt-2">Users must be at least 13 years old to use the app.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">3. Data Usage & Privacy</h2>
            <p>
              We only collect your email and username to provide access and updates. Your data is handled according to our{" "}
              <a href="/privacy-policy" className="underline text-blue-600">Privacy Policy</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">4. Acceptable Use</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Do not upload harmful or illegal content</li>
              <li>Do not attempt unauthorized access</li>
              <li>Do not use the app to spam, abuse, or disrupt the platform</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">5. Intellectual Property</h2>
            <p>
              All content and branding on SORTEDOF belong to us or are properly licensed. You may use the app for personal educational purposes only. Redistribution or commercial use is not allowed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">6. AI-Powered Tools</h2>
            <p>
              SORTEDOF includes experimental AI features to help with flashcard creation and learning. We do not guarantee perfect accuracy. Users should verify critical information independently.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">7. Changes to Service</h2>
            <p>
              We may modify, update, or remove features at any time. Some features may be temporarily or permanently discontinued.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">8. Limitation of Liability</h2>
            <p>
              We provide SORTEDOF “as is.” We are not responsible for damages, data loss, or interruptions resulting from the use of our service or AI-generated outputs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">9. Termination</h2>
            <p>
              We reserve the right to suspend or delete accounts that violate these terms. You may delete your account at any time by contacting us or through your profile settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">10. Changes to Terms</h2>
            <p>
              We may update these Terms periodically. Continued use of SORTEDOF after changes implies acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">11. Contact Us</h2>
            <p>
              If you have any questions about these Terms, contact us at:{" "}
              <span className="font-semibold">hello@sortedof.app</span>
            </p>
          </div>
        </section>
      </div>

      <footer className="text-center text-sm text-gray-500 mt-12 mb-6">
        &copy; {new Date().getFullYear()} SORTEDOF. All rights reserved.
      </footer>
    </main>
    </div>
  )
}
