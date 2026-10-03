import type { ChangeDetail } from "@/lib/changes";
import { Container } from "./Container";
import { Breadcrumb } from "./Breadcrumb";
import { FaqAccordion } from "./FaqAccordion";
import { CtaBanner } from "./CtaBanner";
import { CheckIcon } from "./icons";
import { JsonLd, breadcrumbSchema, faqPageSchema } from "./JsonLd";
import { site } from "@/lib/site";

export function ChangeDetailTemplate({ change }: { change: ChangeDetail }) {
  const breadcrumbItems = [
    { label: "خانه", href: "/" },
    { label: "تغییرات شرکت", href: "/services/company-changes" },
    { label: change.title },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems.map((b) => ({ label: b.label, href: b.href ?? "" })), site.url)} />
      {change.faq && change.faq.length > 0 && <JsonLd data={faqPageSchema(change.faq)} />}

      <Breadcrumb items={breadcrumbItems} />

      <section className="bg-sage-tint pb-14 pt-6 sm:pb-16">
        <Container>
          <span className="inline-flex items-center rounded-full bg-white px-3.5 py-1.5 text-[13px] font-semibold text-sage">
            {change.eyebrow}
          </span>
          <h1 className="mb-3 mt-4 max-w-[24ch] text-[28px] font-extrabold leading-tight sm:text-[42px]">{change.title}</h1>
          <p className="max-w-[60ch] text-[16.5px] leading-[1.9] text-ink-soft">{change.heroLead}</p>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex rounded-full bg-terracotta px-7 py-3.5 text-[15px] font-semibold text-[#2A1608] hover:bg-terracotta-dark"
          >
            مشاوره رایگان همین حالا
          </a>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="flex flex-col gap-12">
          <div>
            <h2 className="mb-6 text-[22px] font-extrabold">نکات کلیدی</h2>
            <div className="grid gap-3.5 sm:grid-cols-2">
              {change.keyPoints.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-4">
                  <CheckIcon className="mt-0.5 shrink-0 text-sage" />
                  <p className="text-[14.5px] leading-[1.75] text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {change.process && change.process.length > 0 && (
            <div>
              <h2 className="mb-7 text-[22px] font-extrabold">مراحل انجام</h2>
              <div className="flex flex-col">
                {change.process.map((step, i) => (
                  <div key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
                    {i < change.process!.length - 1 && (
                      <span className="absolute right-5 top-10 bottom-0 w-0.5 bg-line" aria-hidden />
                    )}
                    <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage font-extrabold tabular-nums text-[#F3F1E9]">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="mb-1.5 text-[16.5px] font-bold">{step.title}</h4>
                      <p className="text-[14.5px] leading-[1.8] text-ink-soft">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {change.notes && change.notes.length > 0 && (
            <div>
              <h2 className="mb-5 text-[22px] font-extrabold">نکات تکمیلی</h2>
              <div className="flex flex-col gap-2.5">
                {change.notes.map((note) => (
                  <div key={note} className="rounded-xl border border-line bg-surface-soft px-4.5 py-3.5 text-[14px] leading-[1.8] text-ink-soft">
                    {note}
                  </div>
                ))}
              </div>
            </div>
          )}

          {change.faq && change.faq.length > 0 && (
            <div>
              <span className="inline-flex items-center rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">
                سوالات متداول
              </span>
              <h2 className="mb-7 mt-4 text-[22px] font-extrabold">سوالات درباره {change.title}</h2>
              <FaqAccordion items={change.faq} />
            </div>
          )}
        </Container>
      </section>

      <CtaBanner title="نیاز به مشاوره دارید؟" description="همین حالا با یک کارشناس صحبت کنید — بدون هزینه و بدون تعهد." />
    </>
  );
}
