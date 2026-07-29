import { InquiryFormWizard } from "./InquiryFormWizard";

export default async function InquiryForm() {
  return (
    <section id="inquiry" className="section-shell scroll-mt-20 bg-ink-50">
      <div className="site-container">
        <InquiryFormWizard />
      </div>
    </section>
  );
}
