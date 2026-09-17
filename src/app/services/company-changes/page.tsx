import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd, breadcrumbSchema, faqPageSchema } from "@/components/JsonLd";
import { companyChanges, companyChangesFaq } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "تغییرات شرکت",
  description: "انتقال سهام، افزایش و کاهش سرمایه، تغییر آدرس، اعضای هیئت‌مدیره، اصلاح اساسنامه و انحلال شرکت — با مشاوره رایگان سپید ثبت.",
};

export default function CompanyChangesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "خانه", href: "/" }, { label: "تغییرات شرکت", href: "/services/company-changes" }], site.url)} />
      <JsonLd data={faqPageSchema([...companyChangesFaq])} />

      <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "تغییرات شرکت" }]} />

      <section className="bg-sage-tint pb-14 pt-6 sm:pb-16">
        <Container>
          <span className="inline-flex items-center rounded-full bg-white px-3.5 py-1.5 text-[13px] font-semibold text-sage">
            تغییرات شرکت
          </span>
          <h1 className="mb-3 mt-4 max-w-[22ch] text-[28px] font-extrabold leading-tight sm:text-[42px]">
            هر تغییری در شرکت شما، رسمی و قانونی
          </h1>
          <p className="max-w-[62ch] text-[16.5px] leading-[1.9] text-ink-soft">
            از انتقال سهام گرفته تا انحلال شرکت، تمام تغییرات باید در صورت‌جلسه ثبت و به اداره ثبت شرکت‌ها اعلام شود. ما
            این فرآیند را برای شما ساده و سریع انجام می‌دهیم.
          </p>
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

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {companyChanges.map((change) => (
              <div key={change.title} className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="mb-2 text-[16.5px] font-bold">{change.title}</h3>
                <p className="text-[14px] leading-[1.8] text-ink-soft">{change.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-16">
        <Container>
          <span className="inline-flex rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">سوالات متداول</span>
          <h2 className="mb-7 mt-4 text-[22px] font-extrabold">سوالات درباره تغییرات شرکت</h2>
          <FaqAccordion items={[...companyChangesFaq]} />
        </Container>
      </section>

      <CtaBanner title="نیاز به یک تغییر در شرکتتان دارید؟" description="همین حالا با یک کارشناس صحبت کنید — بدون هزینه و بدون تعهد." />
    </>
  );
}
