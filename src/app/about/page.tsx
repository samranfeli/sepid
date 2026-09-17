import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CtaBanner } from "@/components/CtaBanner";
import { ExperienceIcon, PriceIcon, SpeedIcon, SupportIcon } from "@/components/icons";
import { processSteps, trustStats, whyUs } from "@/lib/site";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "سپید ثبت، تیمی متخصص در ثبت شرکت و برند با بیش از یک دهه سابقه فعالیت در سراسر ایران.",
};

const whyIcons = [SpeedIcon, SupportIcon, ExperienceIcon, PriceIcon];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "درباره ما" }]} />

      <section className="pb-14 pt-6 sm:pb-16">
        <Container>
          <span className="inline-flex items-center rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">
            درباره سپید ثبت
          </span>
          <h1 className="mb-4 mt-4 max-w-[26ch] text-[28px] font-extrabold leading-tight sm:text-[40px]">
            همراه شما در مسیر رسمی شدن کسب‌وکار
          </h1>
          <p className="max-w-[65ch] text-[16.5px] leading-[1.95] text-ink-soft">
            سپید ثبت با بیش از یک دهه فعالیت در حوزه ثبت شرکت، ثبت برند و تغییرات اداری، تا امروز همراه هزاران کارآفرین
            و صاحب کسب‌وکار در سراسر ایران بوده است. هدف ما ساده کردن فرآیندهای پیچیده اداری است؛ به‌گونه‌ای که شما
            بتوانید بدون سردرگمی و با اطمینان کامل، مسیر رسمی شدن کسب‌وکارتان را طی کنید.
          </p>
        </Container>
      </section>

      <div className="bg-sage-dark text-[#F3F1E9]">
        <Container className="grid grid-cols-2 gap-6 py-8 text-center sm:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.label}>
              <b className="block text-[22px] font-extrabold tabular-nums text-terracotta sm:text-[30px]">{stat.value}</b>
              <span className="mt-1 block text-[13.5px] text-[#D6DAD1]">{stat.label}</span>
            </div>
          ))}
        </Container>
      </div>

      <section className="py-14 sm:py-16">
        <Container>
          <h2 className="mb-7 text-[22px] font-extrabold">فرآیند کار ما</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.title}>
                <div className="mb-3.5 flex h-8.5 w-8.5 items-center justify-center rounded-full bg-terracotta-tint text-[14px] font-extrabold tabular-nums text-terracotta-dark">
                  {i + 1}
                </div>
                <h4 className="mb-1.5 text-[16px] font-bold">{step.title}</h4>
                <p className="text-[14px] leading-[1.75] text-ink-soft">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-soft py-14 sm:py-16">
        <Container>
          <h2 className="mb-7 text-[22px] font-extrabold">چرا کارآفرینان سپید ثبت را انتخاب می‌کنند</h2>
          <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <div key={item.title} className="rounded-2xl border border-line bg-surface p-6">
                  <div className="mb-3 text-sage">
                    <Icon />
                  </div>
                  <h4 className="mb-1.5 text-[15.5px] font-bold">{item.title}</h4>
                  <p className="text-[13.5px] leading-[1.75] text-ink-soft">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBanner title="آماده شروع هستید؟" description="همین حالا با یک کارشناس صحبت کنید — بدون هزینه و بدون تعهد." />
    </>
  );
}
