import type { ServiceDetail } from "@/lib/services";
import { Container } from "./Container";
import { Breadcrumb } from "./Breadcrumb";
import { FaqAccordion } from "./FaqAccordion";
import { CtaBanner } from "./CtaBanner";
import { CheckIcon, DocIcon } from "./icons";
import { JsonLd, breadcrumbSchema, faqPageSchema } from "./JsonLd";
import { site } from "@/lib/site";

export function ServiceDetailTemplate({
  service,
  breadcrumbItems,
}: {
  service: ServiceDetail;
  breadcrumbItems: { label: string; href?: string }[];
}) {
  const schemaBreadcrumb = breadcrumbSchema(
    breadcrumbItems.map((b) => ({ label: b.label, href: b.href ?? "" })),
    site.url
  );
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: "IR",
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={schemaBreadcrumb} />
      <JsonLd data={faqPageSchema(service.faq)} />

      <Breadcrumb items={breadcrumbItems} />

      <section className="bg-sage-tint pb-14 pt-6 sm:pb-16">
        <Container>
          <span className="inline-flex items-center rounded-full bg-white px-3.5 py-1.5 text-[13px] font-semibold text-sage">
            {service.eyebrow}
          </span>
          <h1 className="mb-3 mt-4 max-w-[24ch] text-[28px] font-extrabold leading-tight sm:text-[42px]">{service.title}</h1>
          <p className="max-w-[60ch] text-[16.5px] leading-[1.9] text-ink-soft">{service.heroLead}</p>
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
        <Container className="grid items-start gap-11 lg:grid-cols-[1fr_320px]">
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="mb-6 text-[22px] font-extrabold">این نوع شرکت برای چه کسانی مناسب است؟</h2>
              <div className="grid gap-3.5 sm:grid-cols-2">
                {service.eligibility.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-4">
                    <CheckIcon className="mt-0.5 shrink-0 text-sage" />
                    <p className="text-[14.5px] leading-[1.75] text-ink">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-7 text-[22px] font-extrabold">مراحل {service.title}</h2>
              <div className="flex flex-col">
                {service.process.map((step, i) => (
                  <div key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
                    {i < service.process.length - 1 && (
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

            <div>
              <h2 className="mb-5 text-[22px] font-extrabold">مدارک مورد نیاز</h2>
              <div className="flex flex-col gap-2.5">
                {service.documents.map((doc) => (
                  <div key={doc} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4.5 py-3.5 text-[14.5px]">
                    <DocIcon className="shrink-0 text-terracotta-dark" />
                    {doc}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="sticky top-28 rounded-[22px] border border-line bg-surface p-6 shadow-[0_12px_30px_-18px_rgba(32,36,31,0.35)]">
            <h4 className="mb-4 text-base font-bold">خلاصه این خدمت</h4>
            {service.summary.map((row) => (
              <div key={row.label} className="flex justify-between border-b border-dashed border-line py-2.5 text-[14px] last:border-none">
                <span className="text-ink-soft">{row.label}</span>
                <b className="text-ink">{row.value}</b>
              </div>
            ))}
            <p className="my-4 text-[13px] leading-[1.8] text-ink-soft">
              هزینه نهایی بسته به سرمایه و موضوع فعالیت شرکت متفاوت است. برای دریافت برآورد دقیق و رایگان با ما در تماس باشید.
            </p>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-full bg-terracotta px-6 py-3 text-[15px] font-semibold text-[#2A1608] hover:bg-terracotta-dark"
            >
              مشاوره رایگان
            </a>
          </aside>
        </Container>
      </section>

      <section>
        <Container>
          <span className="inline-flex items-center rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">
            سوالات متداول
          </span>
          <h2 className="mb-7 mt-4 text-[22px] font-extrabold">سوالات درباره {service.title}</h2>
          <FaqAccordion items={service.faq} />
        </Container>
      </section>

      <div className="h-6" />
      <CtaBanner title="سوالی دارید؟" description="همین حالا با یک کارشناس صحبت کنید — بدون هزینه و بدون تعهد." />
    </>
  );
}
