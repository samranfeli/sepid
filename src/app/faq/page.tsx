import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd, faqPageSchema } from "@/components/JsonLd";
import { fullFaq } from "@/lib/faq";

export const metadata: Metadata = {
  title: "سوالات متداول",
  description: "پاسخ سوالات پرتکرار درباره ثبت شرکت، ثبت برند، هزینه‌ها، مدارک لازم و مدت زمان انجام کار.",
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageSchema([...fullFaq])} />

      <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "سوالات متداول" }]} />

      <section className="pb-16 pt-6 sm:pb-20">
        <Container>
          <span className="inline-flex items-center rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">
            سوالات متداول
          </span>
          <h1 className="mb-8 mt-4 max-w-[26ch] text-[28px] font-extrabold leading-tight sm:text-[40px]">
            پاسخ سوالات پرتکرار شما
          </h1>
          <FaqAccordion items={[...fullFaq]} defaultOpenIndex={0} />
        </Container>
      </section>

      <CtaBanner title="سوال دیگری دارید؟" description="همین حالا با یک کارشناس صحبت کنید — بدون هزینه و بدون تعهد." />
    </>
  );
}
