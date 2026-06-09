import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Trishulhub',
  description: 'Privacy Policy for Trishulhub digital services.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F5F2ED]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 gradient-text-shimmer">
          Privacy Policy
        </h1>
        <p className="text-[#8A8580] mb-12">Last updated: June 2026</p>

        <div className="space-y-8 text-[#8A8580] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[#F5F2ED] mb-3">1. Information We Collect</h2>
            <p className="mb-3">
              At Trishulhub, we collect information you voluntarily provide when using our services, including your name, email address, company name, and project details submitted through our contact forms. We also collect certain technical information automatically when you visit our website, such as your IP address, browser type, device information, and usage patterns through cookies and similar technologies.
            </p>
            <p>
              We use this information to provide and improve our services, communicate with you about your projects, send relevant updates about our offerings, and analyze website usage to enhance user experience. We are committed to being transparent about the data we collect and how it is used.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F5F2ED] mb-3">2. How We Use Your Information</h2>
            <p className="mb-3">
              The information we collect is used to deliver and maintain our services, respond to your inquiries and support requests, process transactions and send related information including confirmations and invoices, send technical notices, updates, security alerts, and administrative messages, and respond to your comments, questions, and requests.
            </p>
            <p>
              We may also use the information to communicate with you about products, services, offers, promotions, and events offered by Trishulhub, and provide news and information we think will be of interest to you. You can opt out of marketing communications at any time by following the unsubscribe instructions in any marketing email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F5F2ED] mb-3">3. Data Sharing and Disclosure</h2>
            <p className="mb-3">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our users, provided they agree to keep this information confidential.
            </p>
            <p>
              We may also disclose your information when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request. In the event of a merger, acquisition, or asset sale, your personal information may be transferred as part of that transaction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F5F2ED] mb-3">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information, including encryption in transit (TLS/SSL), secure data storage, access controls, and regular security audits. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security. We continuously review and update our security practices to address emerging threats and vulnerabilities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F5F2ED] mb-3">5. Cookies and Tracking</h2>
            <p className="mb-3">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand how visitors interact with our content. We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device until they expire or you delete them).
            </p>
            <p>
              You can control cookies through your browser settings and other tools. However, if you block certain cookies, you may not be able to use all the features of our website. We use Google Analytics to collect anonymized usage data, which helps us understand how our site is being used and improve our services accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F5F2ED] mb-3">6. Your Rights</h2>
            <p className="mb-3">
              You have the right to access, update, or delete your personal information at any time. You can request a copy of the data we hold about you, ask us to correct any inaccurate or incomplete data, request deletion of your personal data, object to or restrict our processing of your data, and request data portability.
            </p>
            <p>
              To exercise any of these rights, please contact us at hello@trishulhub.com. We will respond to your request within 30 days. We may need to verify your identity before processing certain requests to protect the security of your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F5F2ED] mb-3">7. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at hello@trishulhub.com. We are committed to addressing your concerns and ensuring that your privacy is protected. This policy may be updated from time to time, and we will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
