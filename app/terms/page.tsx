export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for the TFS Volunteer Fire Department website.',
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

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString()

  return (
    <div className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <header className="mb-10 space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500">
            <strong className="text-gray-700">Last Updated:</strong> {lastUpdated}
          </p>
          <p className="text-[15px] leading-relaxed text-gray-700">
            These Terms of Service (“Terms”) govern your access to and use of the
            TFS Volunteer Fire Department website (“TFS,” “we,” “us,” or “our”).
            By accessing or using this website, you agree to be bound by these
            Terms. If you do not agree, do not use the website.
          </p>
        </header>

        <div className="space-y-6">
          <Section title="1. Use of Website">
            <p>
              You may use this website only for lawful purposes and in accordance
              with these Terms. You agree not to misuse the website, attempt
              unauthorized access, interfere with the website’s operation or
              security, or use the website in any manner that could harm TFS or
              other users.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Do not introduce malware, bots, or harmful code.</li>
              <li>Do not attempt to probe, scan, or test system vulnerabilities.</li>
              <li>Do not disrupt or overload the website or its services.</li>
              <li>Do not use the website to violate any applicable law.</li>
            </ul>
          </Section>

          <Section title="2. Emergency Services Disclaimer">
            <p>
              This website is provided for informational and administrative
              purposes only and is <strong>not</strong> monitored continuously.
              It is not a substitute for emergency services.
            </p>
            <p>
              In the event of an emergency, immediately dial <strong>9-1-1</strong>.
            </p>
            <p>
              Use of this website does not create any duty, obligation, or
              guarantee of response by TFS, its volunteers, officers, or agents.
            </p>
          </Section>

          <Section title="3. Informational Content & No Reliance">
            <p>
              We strive to keep website content accurate and current, but content
              may be incomplete, outdated, or contain errors. All content is
              provided on an <strong>“as-is”</strong> and <strong>“as-available”</strong> basis.
            </p>
            <p>
              You acknowledge that any reliance on information obtained through
              this website is at your own risk.
            </p>
          </Section>

          <Section title="4. Third-Party Links and Services">
            <p>
              This website may include links to third-party websites or services
              (for example, mapping tools or donation processors). TFS does not
              control and is not responsible for the content, security, privacy
              practices, availability, or actions of third parties.
            </p>
            <p>
              Your use of third-party services is governed by their terms and
              policies.
            </p>
          </Section>

          <Section title="5. Donations and Online Submissions">
            <p>
              Donations made through this website are voluntary. Unless otherwise
              required by law, donations are non-refundable.
            </p>
            <p>
              If you submit information through contact forms, applications, or
              other submissions, you represent that the information is accurate
              and that you have the legal right to provide it. You also
              understand that submission does not create an obligation for TFS to
              respond or take action.
            </p>
          </Section>

          <Section title="6. Intellectual Property">
            <p>
              All content on this website—including text, graphics, logos,
              images, documents, and design elements—is owned by TFS or its
              licensors and is protected by applicable intellectual property
              laws.
            </p>
            <p>
              You may not copy, reproduce, distribute, modify, create derivative
              works, publicly display, or commercially exploit any content from
              this website without prior written permission from TFS, except as
              permitted by law.
            </p>
          </Section>

          <Section title="7. Disclaimer of Warranties">
            <p>
              To the fullest extent permitted by law, TFS disclaims all
              warranties of any kind, whether express or implied, including but
              not limited to implied warranties of merchantability, fitness for a
              particular purpose, and non-infringement.
            </p>
            <p>
              We do not warrant that the website will be uninterrupted, secure,
              error-free, or free of viruses or other harmful components.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, TFS shall not be liable for
              any direct, indirect, incidental, consequential, special, or
              punitive damages arising out of or relating to your use of (or
              inability to use) the website, even if advised of the possibility
              of such damages.
            </p>
          </Section>

          <Section title="9. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless TFS Volunteer
              Fire Department, its volunteers, officers, agents, and affiliates
              from and against any claims, liabilities, damages, losses, and
              expenses (including reasonable attorneys’ fees) arising out of or
              related to your use of the website or your violation of these
              Terms.
            </p>
          </Section>

          <Section title="10. Website Availability & Force Majeure">
            <p>
              We do not guarantee that the website will be available at all
              times. The website may be unavailable due to maintenance, updates,
              technical issues, or events beyond our reasonable control,
              including natural disasters, fires, power outages, or network
              failures.
            </p>
          </Section>

          <Section title="11. Changes to These Terms">
            <p>
              We may update these Terms from time to time. Changes are effective
              immediately upon posting to this page. Your continued use of the
              website after any changes constitutes acceptance of the updated
              Terms.
            </p>
          </Section>

          <Section title="12. Governing Law & Venue">
            <p>
              These Terms are governed by the laws of the State in which TFS
              Volunteer Fire Department is organized, without regard to conflict
              of law principles.
            </p>
            <p>
              Any dispute arising out of or relating to these Terms or the
              website shall be brought in the appropriate state or county courts
              located within that jurisdiction, unless otherwise required by law.
            </p>
          </Section>

          <Section title="13. Severability">
            <p>
              If any provision of these Terms is determined to be invalid or
              unenforceable, the remaining provisions will remain in full force
              and effect.
            </p>
          </Section>

          <Section title="14. Contact Us">
            <p>
              If you have questions about these Terms of Service, please contact
              us at{' '}
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
