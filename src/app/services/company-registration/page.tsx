import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CtaBanner } from "@/components/CtaBanner";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { postRegistrationSteps, registrationBenefits, registrationTypes, unregisteredRisks } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "ثبت شرکت",
  description: "راهنمای انتخاب نوع شرکت مناسب برای کسب‌وکار شما — مسئولیت محدود، سهامی خاص، موسسه غیرتجاری و موضوعات نیازمند مجوز.",
};

export default function CompanyRegistrationPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "خانه", href: "/" }, { label: "ثبت شرکت", href: "/services/company-registration" }], site.url)} />

      <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "ثبت شرکت" }]} />

      <section className="bg-sage-tint pb-14 pt-6 sm:pb-16">
        <Container className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center rounded-full bg-white px-3.5 py-1.5 text-[13px] font-semibold text-sage">
              ثبت شرکت
            </span>
            <h1 className="mb-3 mt-4 max-w-[22ch] text-[28px] font-extrabold leading-tight sm:text-[42px]">
              کدام نوع شرکت برای شما مناسب است؟
            </h1>
            <p className="max-w-[62ch] text-[16.5px] leading-[1.9] text-ink-soft">
              هر کسب‌وکار متناسب با اندازه، تعداد شرکا و برنامه رشد خود، به نوع متفاوتی از شرکت نیاز دارد. در ادامه گزینه‌های
              رایج را با هم مقایسه می‌کنیم؛ برای دو نوع پرتقاضاتر، راهنمای کامل و اختصاصی هم آماده کرده‌ایم.
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

      <section className="py-14 sm:py-16">
        <Container>
          <div className="overflow-x-auto rounded-[22px] border border-line">
            <table className="w-full min-w-[720px] border-collapse text-right text-[14.5px]">
              <thead>
                <tr className="bg-surface-soft">
                  <th className="p-4.5 font-bold">نوع شرکت</th>
                  <th className="p-4.5 font-bold">مناسب برای</th>
                  <th className="p-4.5 font-bold">تعداد اعضا</th>
                  <th className="p-4.5 font-bold">نوع مسئولیت</th>
                  <th className="p-4.5 font-bold"></th>
                </tr>
              </thead>
              <tbody>
                {registrationTypes.map((type) => (
                  <tr key={type.slug} className="border-t border-line bg-surface">
                    <td className="p-4.5 font-bold">{type.title}</td>
                    <td className="p-4.5 text-ink-soft">{type.bestFor}</td>
                    <td className="p-4.5 text-ink-soft">{type.partners}</td>
                    <td className="p-4.5 text-ink-soft">{type.liability}</td>
                    <td className="p-4.5">
                      {type.href ? (
                        <Link href={type.href} className="inline-flex items-center gap-1.5 font-bold text-sage-dark">
                          راهنمای کامل
                          <ArrowIcon />
                        </Link>
                      ) : (
                        <a
                          href={site.whatsappHref}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 font-bold text-sage-dark"
                        >
                          مشاوره
                          <ArrowIcon />
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-2xl border border-line bg-surface-soft p-6 text-[14.5px] leading-[1.85] text-ink-soft">
            هنوز مطمئن نیستید کدام گزینه مناسب شماست؟ در مشاوره رایگان، با توجه به موضوع فعالیت، تعداد شرکا و برنامه‌های
            آینده کسب‌وکارتان، بهترین نوع شرکت را پیشنهاد می‌دهیم.
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="mb-10 max-w-160">
            <span className="inline-flex rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">
              چرا ثبت رسمی مهم است
            </span>
            <h2 className="mb-2.5 mt-3 text-[24px] font-extrabold sm:text-[34px]">اگر شرکت ثبت نشود چه اتفاقی می‌افتد؟</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="mb-4 text-[16px] font-bold text-terracotta-dark">عواقب فعالیت بدون ثبت رسمی</h3>
              <div className="flex flex-col gap-3">
                {unregisteredRisks.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                    <p className="text-[14px] leading-[1.8] text-ink-soft">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="mb-4 text-[16px] font-bold text-sage-dark">مزایای ثبت رسمی شرکت</h3>
              <div className="flex flex-col gap-3">
                {registrationBenefits.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 shrink-0 text-sage" />
                    <p className="text-[14px] leading-[1.8] text-ink-soft">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-soft py-14 sm:py-16">
        <Container>
          <div className="mb-10 max-w-160">
            <span className="inline-flex rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">
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
              <div key={step.title} className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="mb-2 text-[16.5px] font-bold">{step.title}</h3>
                <p className="mb-3 text-[14px] leading-[1.8] text-ink-soft">{step.description}</p>
                {"href" in step && step.href && (
                  <Link href={step.href} className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-sage-dark">
                    راهنمای کامل
                    <ArrowIcon />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner title="آماده ثبت شرکت هستید؟" description="همین حالا با یک کارشناس صحبت کنید — بدون هزینه و بدون تعهد." />
    </>
  );
}
