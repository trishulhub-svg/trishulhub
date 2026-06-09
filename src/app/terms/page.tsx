import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Trishulhub',
  description: 'Terms of Service for Trishulhub digital services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F5F2ED]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 gradient-text-shimmer">
          Terms of Service
        </h1>
        <p className="text-[#8A8580] mb-12">Last updated: June 2026</p>

        <div className="space-y-8 text-[#8A8580] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[#F5F2ED] mb-3">1. Acceptance of Terms</h2>
            <p className="mb-3">
              By accessing and using the Trishulhub website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, clients, and others who access or use our services.
            </p>
            <p>
              We reserve the right to modify these terms at any time. We will provide notice of significant changes by posting the updated terms on our website and updating the &quot;Last updated&quot; date. Your continued use of our services after any such changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F5F2ED] mb-3">2. Services Description</h2>
            <p className="mb-3">
              Trishulhub provides web development, digital marketing, social media management, UI/UX design, e-commerce solutions, and CRM solutions. The specific services, deliverables, timelines, and fees will be outlined in individual project proposals or contracts agreed upon by both parties.
            </p>
            <p>
              We strive to deliver high-quality services that meet your business objectives. However, we do not guarantee specific results such as search engine rankings, traffic levels, or revenue increases, as these depend on many factors outside our control including market conditions, competition, and algorithmic changes by third-party platforms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F5F2ED] mb-3">3. Client Responsibilities</h2>
            <p className="mb-3">
              As a client, you are responsible for providing accurate and complete information necessary for us to deliver our services, including content, branding assets, access credentials, and feedback in a timely manner. Delays in providing required materials may affect project timelines and deliverables.
            </p>
            <p>
              You agree to review and provide feedback on deliverables within the timeframes specified in your project agreement. Failure to provide timely feedback may result in project delays. You are also responsible for ensuring that any content you provide does not infringe on the intellectual property rights of any third party.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F5F2ED] mb-3">4. Payment Terms</h2>
            <p className="mb-3">
              Payment terms will be specified in individual project proposals or contracts. Unless otherwise agreed, a deposit of 50% is required before work begins, with the remaining balance due upon project completion. For ongoing services, invoices are issued monthly and payment is due within 15 days of the invoice date.
            </p>
            <p>
              Late payments may incur interest charges at a rate of 1.5% per month on the outstanding balance. We reserve the right to suspend services if payments are not received within 30 days of the due date. All fees are non-refundable once work has commenced, unless otherwise specified in the project agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F5F2ED] mb-3">5. Intellectual Property</h2>
            <p className="mb-3">
              Upon full payment, you will own the final deliverables created specifically for your project. Trishulhub retains ownership of all pre-existing intellectual property, including tools, frameworks, code libraries, and methodologies used in the creation of your deliverables. We also retain the right to showcase completed work in our portfolio unless a non-disclosure agreement is in place.
            </p>
            <p>
              You grant Trishulhub a limited, non-exclusive license to use your trademarks, logos, and other branding materials solely for the purpose of delivering the agreed services. Any proprietary tools or techniques developed by Trishulhub during the course of a project remain our intellectual property.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F5F2ED] mb-3">6. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of the engagement. This includes business strategies, technical specifications, financial data, and any other information designated as confidential. Confidentiality obligations survive the termination of the agreement for a period of two years.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F5F2ED] mb-3">7. Limitation of Liability</h2>
            <p className="mb-3">
              Trishulhub shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with our services, even if we have been advised of the possibility of such damages. Our total liability for any claim arising from our services shall not exceed the total fees paid by you for the specific project in question.
            </p>
            <p>
              We are not liable for any loss of data, revenue, or business opportunities resulting from the use of our services. We are also not responsible for the actions of third-party services, platforms, or tools that we integrate into your project as part of the agreed scope of work.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F5F2ED] mb-3">8. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in India. We encourage you to contact us first at hello@trishulhub.com to resolve any issues before pursuing legal action.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
