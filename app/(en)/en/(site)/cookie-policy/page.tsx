import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import LegalTranslationNote from "@/components/LegalTranslationNote";
import { href } from "@/lib/i18n/config";

// English translation of app/(ro)/(site)/politica-de-cookie-uri. The Romanian
// version prevails; keep the two in step when either changes.
export const metadata: Metadata = {
  ...pageMeta({
    lang: "en",
    title: "Cookie Policy",
    description: "How the Pensiunea Amonte website uses cookies.",
    path: href("en", "cookies"),
  }),
  robots: { index: false, follow: false },
};

const container = "mx-auto max-w-[850px] px-[clamp(20px,5vw,64px)] py-[clamp(48px,7vw,96px)]";

export default function CookiePolicyPage() {
  return (
    <article className={container}>
      <SectionHeading
        as="h1"
        eyebrow="Legal"
        title="Cookie Policy"
        className="mb-12"
      />

      <div className="text-[15px] leading-relaxed text-muted space-y-8 font-sans">
        <LegalTranslationNote lang="en" page="cookies" />

        <p className="text-sm italic text-muted-2 border-b border-line pb-4">
          Pensiunea Amonte, operated by Hostillo S.R.L. <br />
          Last updated: October 19, 2026
        </p>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">1. What are cookies?</h2>
          <p>
            A &quot;cookie&quot; is a small text file, made up of letters and numbers, that is stored on the computer, mobile device or other equipment a user accesses the internet from.
          </p>
          <p>
            A cookie is set when a web server sends a request to a browser (such as Chrome, Safari or Firefox) and is completely &quot;passive&quot;: it contains no software, viruses or spyware and cannot access information on the user&apos;s hard drive.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">2. What are cookies used for?</h2>
          <p>
            These files make it possible to recognize the user&apos;s device and to present content in a relevant way, adapted to the user&apos;s preferences.
          </p>
          <p>
            Cookies are used to compile anonymous, aggregated statistics that help us understand how visitors use our web pages, so we can improve their structure and content, without identifying anyone personally.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">3. Which cookies do we use?</h2>
          <p>We use two types of cookies: session cookies and persistent cookies.</p>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><strong>Session cookies</strong> are temporary files that stay on the user&apos;s device until the session ends or the application (web browser) is closed.</li>
            <li><strong>Persistent cookies</strong> stay on the user&apos;s device for a period set in the cookie&apos;s parameters, or until the user deletes them manually.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">4. Types of cookies used on this website</h2>
          <p>Our website uses cookies for the following purposes:</p>

          <div className="space-y-4 pt-2">
            <div className="bg-card border border-line rounded-lg p-5">
              <h3 className="font-semibold text-pine mb-2">4.1. Strictly necessary (functional) cookies</h3>
              <p className="text-sm">
                These are essential for the website to work properly, letting you browse and use basic features (such as contact forms or remembering your browsing choices). They do not collect information that can be used for marketing or to track your activity online. They do not require your prior consent.
              </p>
            </div>

            <div className="bg-card border border-line rounded-lg p-5">
              <h3 className="font-semibold text-pine mb-2">4.2. Analytics and statistics cookies</h3>
              <p className="text-sm">
                These help us understand how visitors interact with our website (for example, which pages are visited most and how people move around the site). We use <strong>Google Analytics 4</strong>, which is only activated if you consent through the cookie banner.
              </p>
              <p className="text-sm mt-3">
                We also use our hosting provider&apos;s built-in services, <strong>Vercel Analytics</strong> and <strong>Vercel Speed Insights</strong>, which anonymously measure the number of visits and how fast pages load. They do not use cookies, store nothing on your device and collect no data that can identify you, which is why they run without consent.
              </p>
            </div>

            <div className="bg-card border border-line rounded-lg p-5">
              <h3 className="font-semibold text-pine mb-2">4.3. Marketing and advertising cookies</h3>
              <p className="text-sm">
                These are used to track visitors across websites, with the aim of showing ads that are relevant and engaging for individual users (for example, through <strong>Google Ads</strong> campaigns). They are only active if you choose to accept them through our consent banner.
              </p>
              <p className="text-sm mt-3">
                We also use <strong>Meta Pixel</strong>, from Meta Platforms Ireland Ltd., to measure and show ads on Facebook and Instagram. The pixel sets the <code>_fbp</code> cookie (90 days) and, when you arrive from a Meta ad, <code>_fbc</code> (90 days). The same events (for example, a page view) may also be sent to Meta through the <strong>Conversions API</strong>. Meta Pixel only starts after you click “Accept all”.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">5. How can you block or delete cookies?</h2>
          <p>
            You can change the consent you gave on our website at any time, through the “Cookie settings” link at the bottom of every page, which reopens the banner, or by deleting cookies from your browser.
          </p>
          <p>
            In addition, the browser you use lets you limit or disable cookies by default. These settings are usually found in your browser&apos;s &quot;Options&quot; or &quot;Preferences&quot; menu:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener noreferrer" className="underline">Cookie settings in Google Chrome</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline">Cookie settings in Apple Safari</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer" className="underline">Cookie settings in Mozilla Firefox</a></li>
            <li><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="underline">Cookie settings in Microsoft Edge</a></li>
          </ul>
          <p className="pt-2 text-sm">
            Please note: disabling cookies completely may cause some sections or services of the website to work incorrectly or only partially.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">6. Security and privacy concerns</h2>
          <p>
            Cookies are NOT viruses! They use plain text formats. They are not made of pieces of code, so they cannot be executed and cannot run on their own. As a result, they cannot copy or replicate themselves onto other networks in order to run or replicate again.
          </p>
          <p>
            Because they can be used to store information about users&apos; preferences and browsing history, cookies can nonetheless be used as a form of spyware. Many anti-spyware products routinely flag cookies for deletion as part of their anti-virus or anti-spyware scans.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">7. Changes to this cookie policy</h2>
          <p>
            Hostillo S.R.L. reserves the right to change this Cookie Policy in line with legal requirements. Changes will be published on this page and marked by the update date at the top of the document.
          </p>
        </section>
      </div>
    </article>
  );
}
