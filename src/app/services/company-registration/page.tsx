import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CtaBanner } from "@/components/CtaBanner";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd, breadcrumbSchema, faqPageSchema } from "@/components/JsonLd";
import {
  postRegistrationSteps,
  registrationBenefits,
  registrationDocuments,
  registrationFaq,
  registrationSteps,
  registrationWhyUs,
  unregisteredRisks,
} from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "ثبت شرکت",
  description: "راهنمای انتخاب نوع شرکت مناسب برای کسب‌وکار شما — مسئولیت محدود، سهامی خاص، موسسه غیرتجاری و موضوعات نیازمند مجوز.",
};

export default function CompanyRegistrationPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "خانه", href: "/" }, { label: "ثبت شرکت", href: "/services/company-registration" }], site.url)} />
      <JsonLd data={faqPageSchema([...registrationFaq])} />

      <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "ثبت شرکت" }]} />

      {/* Hero */}
      <section className="bg-sage-tint pb-14 pt-6 sm:pb-16">
        <Container className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center rounded-full bg-white px-3.5 py-1.5 text-[13px] font-semibold text-sage">
              ثبت شرکت
            </span>
            <h1 className="mb-3 mt-4 max-w-[22ch] text-[28px] font-extrabold leading-tight sm:text-[42px]">
              چرا شرکت ثبت کنیم؟
            </h1>
            <p className="max-w-[62ch] text-[16.5px] leading-[1.9] text-ink-soft">
              ثبت شرکت، اولین قدم برای تبدیل یک فعالیت حرفه‌ای به یک کسب‌وکار رسمی و قابل اعتماد است. با ثبت شرکت، فعالیت
              شما چارچوب قانونی پیدا می‌کند، امکان عقد قراردادهای رسمی، شرکت در مناقصات و مزایده‌ها، دریافت مجوزها،
              ایجاد حساب بانکی شرکتی و توسعه فعالیت‌های تجاری فراهم می‌شود. اما ثبت شرکت فقط تکمیل چند فرم و دریافت یک
              آگهی نیست؛ انتخاب نوع شرکت، موضوع فعالیت، نام شرکت و تنظیم صحیح مدارک، تأثیر مستقیمی بر مسیر آینده
              کسب‌وکار شما دارد.
              <br />
              ما در کنار شما هستیم تا فرآیند ثبت شرکت و امور ثبتی را از مشاوره و بررسی مدارک تا ثبت نهایی و تحویل
              مستندات، دقیق و حرفه‌ای انجام دهید.
              <br />
              <span className="font-semibold text-ink">از تصمیم برای شروع کسب‌وکار تا ثبت رسمی آن، همراه شما هستیم.</span>
            </p>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-[22px] shadow-[0_18px_40px_-20px_rgba(32,36,31,0.4)] sm:aspect-16/11">
            <Image
              src="/images/legal-contract-signature.jpg"
              alt="تنظیم مدارک ثبت شرکت"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      {/* Process: sticky intro + vertical timeline */}
      <section className="py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="inline-flex rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">
              مراحل کار
            </span>
            <h2 className="mb-3 mt-3 text-[24px] font-extrabold sm:text-[34px]">مراحل ثبت شرکت</h2>
            <p className="text-[15px] leading-[1.9] text-ink-soft">
              ثبت شرکت فقط به معنای تکمیل فرم‌های سامانه نیست؛ انتخاب صحیح نوع شرکت، موضوع فعالیت، نام، سرمایه و ساختار
              مدیریتی می‌تواند در مسیر آینده کسب‌وکار شما تأثیرگذار باشد. ما از مشاوره و بررسی شرایط اولیه تا ثبت
              درخواست در سامانه کاتب، پیگیری پرونده و دریافت آگهی تأسیس در کنار شما هستیم.
            </p>
          </div>
          <ol className="relative flex flex-col gap-4">
            <span aria-hidden className="absolute bottom-6 right-5 top-6 w-px bg-line" />
            {registrationSteps.map((step, index) => (
              <li key={step.title} className="relative flex gap-4">
                <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage text-[15px] font-extrabold text-white ring-4 ring-white">
                  {(index + 1).toLocaleString("fa-IR")}
                </span>
                <div className="flex-1 rounded-2xl border border-line bg-surface p-5">
                  <h3 className="mb-1.5 text-[16.5px] font-bold">{step.title}</h3>
                  <p className="text-[14px] leading-[1.8] text-ink-soft">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Documents + why us */}
      <section className="bg-surface-soft py-14 sm:py-16">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <span className="inline-flex rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">
              پیش‌نیازها
            </span>
            <h2 className="mb-2 mt-3 text-[22px] font-extrabold sm:text-[28px]">مدارک و اطلاعات مورد نیاز</h2>
            <p className="mb-5 text-[14.5px] leading-[1.8] text-ink-soft">
              برای شروع فرآیند، معمولاً اطلاعات و مدارک زیر مورد نیاز است:
            </p>
            <ul className="flex flex-col gap-3">
              {registrationDocuments.map((item) => (
                <li key={item} className="flex items-start gap-2.5 border-b border-line pb-3 last:border-0 last:pb-0">
                  <CheckIcon className="mt-1 shrink-0 text-sage" />
                  <span className="text-[14px] leading-[1.8] text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-sage-tint p-6 sm:p-8">
            <span className="inline-flex rounded-full bg-white px-3.5 py-1.5 text-[13px] font-semibold text-sage">
              مزایای همکاری
            </span>
            <h2 className="mb-5 mt-3 text-[22px] font-extrabold sm:text-[28px]">چرا ثبت شرکت را به ما بسپارید؟</h2>
            <ul className="flex flex-col gap-4">
              {registrationWhyUs.map((item) => (
                <li key={item.title} className="flex items-start gap-3 rounded-xl bg-white/70 p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage">
                    <CheckIcon className="text-white" />
                  </span>
                  <div>
                    <h3 className="text-[15.5px] font-bold">{item.title}</h3>
                    <p className="text-[13.5px] leading-[1.8] text-ink-soft">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Why register */}
      <section className="py-14 sm:py-16">
        <Container>
          <div className="mb-10 max-w-160">
            <span className="inline-flex rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">
              چرا ثبت رسمی مهم است
            </span>
            <h2 className="mb-2.5 mt-3 text-[24px] font-extrabold sm:text-[34px]">اگر شرکت ثبت نشود چه اتفاقی می‌افتد؟</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-terracotta/30 bg-surface p-6">
              <h3 className="mb-4 text-[16px] font-bold text-terracotta-dark">عواقب فعالیت بدون ثبت رسمی</h3>
              <div className="flex flex-col gap-3">
                {unregisteredRisks.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                    <p className="text-[14px] leading-[1.8] text-ink-soft">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-sage/30 bg-surface p-6">
              <h3 className="mb-4 text-[16px] font-bold text-sage-dark">مزایای ثبت رسمی شرکت</h3>
              <div className="flex flex-col gap-3">
                {registrationBenefits.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckIcon className="mt-1 shrink-0 text-sage" />
                    <p className="text-[14px] leading-[1.8] text-ink-soft">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* After registration */}
      <section className="bg-surface-soft py-14 sm:py-16">
        <Container>
          <div className="mb-10 max-w-160">
            <span className="inline-flex rounded-full bg-white px-3.5 py-1.5 text-[13px] font-semibold text-sage">
              مرحله بعد از ثبت
            </span>
            <h2 className="mb-2.5 mt-3 text-[24px] font-extrabold sm:text-[34px]">تعهدات شرکت پس از ثبت</h2>
            <p className="text-[15.5px] leading-[1.8] text-ink-soft">
              دریافت آگهی تاسیس پایان کار نیست؛ برای شروع رسمی فعالیت و جلوگیری از جریمه‌های مالیاتی، چند مرحله اداری
              دیگر هم باید طی شود.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {postRegistrationSteps.map((step) => (
              <div key={step.title} className="flex flex-col rounded-2xl border border-line bg-surface p-6">
                <h3 className="mb-2 text-[16.5px] font-bold">{step.title}</h3>
                <p className="mb-3 text-[14px] leading-[1.8] text-ink-soft">{step.description}</p>
                {"href" in step && step.href && (
                  <Link href={step.href} className="mt-auto inline-flex items-center gap-1.5 text-[13.5px] font-bold text-sage-dark">
                    راهنمای کامل
                    <ArrowIcon />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="inline-flex rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">سوالات متداول</span>
            <h2 className="mb-3 mt-4 text-[24px] font-extrabold sm:text-[30px]">سوالات متداول تأسیس شرکت و مؤسسات</h2>
          </div>
          <FaqAccordion items={[...registrationFaq]} />
        </Container>
      </section>

      <CtaBanner title="آماده ثبت شرکت هستید؟" description="همین حالا با یک کارشناس صحبت کنید — بدون هزینه و بدون تعهد." />
    </>
  );
}
