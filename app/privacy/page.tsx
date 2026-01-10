export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for the TFS Volunteer Fire Department website.',
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-3 border-t pt-6">
      <h2 className="text-xl font-semibold tracking-tight text-gray-900">
        {title}
      </h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-gray-700">
        {children}
      </div>
    </section>
  )
}

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString()

  return (
    <div className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <header className="mb-10 space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            <strong className="text-gray-700">Last Updated:</strong> {lastUpdated}
          </p>
          <p className="text-[15px] leading-relaxed text-gray-700">
            This Privacy Policy explains how the TFS Volunteer Fire Department
            (“TFS,” “we,” “us,” or “our”) collects, uses, shares, and protects
            information when you visit or interact with our website. By using
            this website, you agree to the practices described in this policy.
          </p>
        </header>

        <div className="space-y-6">
          <Section title="1. Information We Collect">
            <p>
              We may collect information in the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Information you provide:</strong> such as your name,
                email address, phone number, mailing address, or messages you
                submit through contact forms or email.
              </li>
              <li>
                <strong>Donation-related information:</strong> if you donate
                through the website, our payment processor may collect billing
                details and payment information. TFS typically receives limited
                donation details (such as donor name, amount, and date), not
                full payment card numbers.
              </li>
              <li>
                <strong>Technical information:</strong> such as your IP address,
                browser type, device information, pages viewed, and approximate
                location derived from IP address (depending on your settings and
                the services we use).
              </li>
            </ul>
          </Section>

          <Section title="2. How We Use Information">
            <p>
              We use information we collect for purposes such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responding to inquiries and messages.</li>
              <li>Processing donations and providing donation receipts when applicable.</li>
              <li>Maintaining and improving website performance and security.</li>
              <li>Communicating about department-related updates when you request or opt in.</li>
              <li>Complying with legal obligations and recordkeeping requirements.</li>
            </ul>
          </Section>

          <Section title="3. Cookies and Analytics">
            <p>
              We may use cookies or similar technologies to help the website
              function, understand usage, and improve performance. Cookies are
              small text files stored on your device.
            </p>
            <p>
              If we use analytics tools, they may collect information such as
              pages visited, time on site, and general device/browser details.
              You can control cookies through your browser settings. Disabling
              cookies may affect website functionality.
            </p>
          </Section>

          <Section title="4. How We Share Information">
            <p>
              We do not sell your personal information. We may share information
              only as needed in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service providers:</strong> vendors that help operate the
                website (e.g., hosting, email delivery, analytics, donation
                processing). They may access information only to perform services
                for us.
              </li>
              <li>
                <strong>Legal and safety:</strong> if required by law or if
                necessary to protect the rights, safety, and security of TFS,
                our users, or the public.
              </li>
              <li>
                <strong>Organizational purposes:</strong> internal recordkeeping,
                reporting, auditing, or compliance where necessary.
              </li>
            </ul>
          </Section>

          <Section title="5. Donation Processors">
            <p>
              Donations may be processed through third-party payment processors.
              Your payment information is handled directly by the processor and
              is subject to their privacy policy and security practices. TFS does
              not store full payment card information on our servers.
            </p>
          </Section>

          <Section title="6. Email and Communication">
            <p>
              If you contact us by email or through website forms, we may retain
              your message and contact details to respond and for administrative
              recordkeeping. If you request updates or subscribe to
              communications, you may opt out at any time by following
              instructions in the message (if provided) or contacting us directly.
            </p>
          </Section>

          <Section title="7. Data Retention">
            <p>
              We retain information only as long as reasonably necessary for the
              purposes described in this policy, including recordkeeping,
              security, and legal compliance. Retention periods may vary
              depending on the nature of the information.
            </p>
          </Section>

          <Section title="8. Data Security">
            <p>
              We take reasonable administrative, technical, and physical measures
              to protect information from unauthorized access, loss, misuse, or
              alteration. However, no website or internet transmission can be
              guaranteed to be 100% secure.
            </p>
          </Section>

          <Section title="9. Children’s Privacy">
            <p>
              This website is not intended for children under 13, and we do not
              knowingly collect personal information from children under 13. If
              you believe a child has provided personal information through this
              website, please contact us so we can take appropriate steps.
            </p>
          </Section>

          <Section title="10. Your Choices">
            <p>
              Depending on how you interact with the website, you may have the
              ability to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Control cookies through your browser settings.</li>
              <li>Request corrections to inaccurate information you provided.</li>
              <li>Request that we delete certain information, subject to legal or operational requirements.</li>
              <li>Opt out of non-essential communications.</li>
            </ul>
          </Section>

          <Section title="11. External Links">
            <p>
              This website may contain links to third-party sites. We are not
              responsible for the content or privacy practices of those sites.
              We encourage you to review the privacy policies of any external
              websites you visit.
            </p>
          </Section>

          <Section title="12. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time. Updates are
              effective immediately upon posting to this page. Your continued use
              of the website after changes are posted constitutes acceptance of
              the revised policy.
            </p>
          </Section>

          <Section title="13. Contact Us">
            <p>
              If you have questions about this Privacy Policy or how we handle
              information, contact us at{' '}
              <a
                href="mailto:info@tfsfire.org"
                className="font-medium text-fire-red hover:underline"
              >
                info@tfsfire.org
              </a>
              .
            </p>
          </Section>
        </div>
      </div>
    </div>
  )
}
