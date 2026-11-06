import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ArrowIcon, DocIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema, faqPageSchema } from "@/components/JsonLd";
import { companyChanges, companyChangesFaq } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "تغییرات شرکت",
  description: "انتقال سهام، افزایش و کاهش سرمایه، تغییر آدرس، اعضای هیئت‌مدیره، اصلاح اساسنامه و انحلال شرکت — با مشاوره رایگان سپید ثبت.",
};

const changeSteps = [
  {
    title: "بررسی نوع تغییر و ارائه مشاوره",
    description: "بررسی درخواست متقاضی و تعیین مجمع و تشریفات قانونی متناسب با نوع تغییر موردنظر."    
  },
  {
    title: "برگزاری مجمع یا جلسه مربوطه",
    description: "برگزاری مجمع عمومی یا جلسه هیئت‌مدیره متناسب با نوع تغییر و اتخاذ تصمیمات لازم توسط اعضا و سهامداران."    
  },
  {
    title: "تنظیم و امضای صورتجلسه",
    description: "تنظیم صورتجلسه رسمی مطابق مقررات و اخذ امضای اعضا، سهامداران یا اشخاص ذی‌صلاح."    
  },
  {
    title: "ثبت اطلاعات در سامانه ثبت شرکت‌ها",
    description: "ورود دقیق اطلاعات و تصمیمات اتخاذشده در سامانه ثبت شرکت‌ها و تکمیل فرآیند پذیرش درخواست."    
  },
  {
    title: "ارسال مدارک و پیگیری پرونده",
    description: "ارسال مدارک و مستندات موردنیاز به اداره ثبت شرکت‌ها و پیگیری پرونده تا بررسی و اعلام نتیجه توسط کارشناسان."    
  },
  {
    title: "دریافت آگهی و انتشار در روزنامه رسمی",
    description: "پس از تأیید نهایی، آگهی تغییرات دریافت شده و جهت انتشار در روزنامه رسمی ارسال می‌شود."    
  },
];

const requiredDocuments = [
  {
    title: "مدارک ثبتی شرکت یا مؤسسه",
    bullets: ["آگهی تأسیس", "آخرین آگهی تغییرات", "اساسنامه، شرکت‌نامه یا اظهارنامه، حسب مورد"],
  },
  {
    title: "تصویر مدارک هویتی اعضا، مدیران و سهامداران",
    description: "تصویر کارت ملی و شناسنامه اعضای هیئت‌مدیره، مدیرعامل، شرکا یا سهامداران، حسب نوع شرکت و نوع تغییر.",
  },
  {
    title: "اطلاعات و مستندات مربوط به تغییر موردنظر",
    description:
      "ارائه اطلاعات و مدارک مرتبط با موضوع تغییر؛ برای مثال مدارک مربوط به نقل‌وانتقال سهام، تغییر آدرس، افزایش سرمایه، تغییر موضوع فعالیت، تغییر مدیران و...",
  },
  {
    title: "مجوز فعالیت، در صورت نیاز",
    description: "در صورتی که تغییر موردنظر نیازمند مجوز باشد، ارائه مجوز یا موافقت مرجع ذی‌صلاح الزامی است.",
  },
  {
    title: "مدارک نماینده یا وکیل، در صورت وجود",
    description: "در صورت انجام فرآیند توسط وکیل یا نماینده، ارائه وکالت‌نامه یا مدارک نمایندگی قانونی موردنیاز.",
  },
];

export default function CompanyChangesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "خانه", href: "/" }, { label: "تغییرات شرکت", href: "/services/company-changes" }], site.url)} />
      <JsonLd data={faqPageSchema([...companyChangesFaq])} />

      <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "تغییرات شرکت" }]} />

      <section className="bg-sage-tint pb-14 pt-6 sm:pb-16">
        <Container className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center rounded-full bg-white px-3.5 py-1.5 text-[13px] font-semibold text-sage">
              تغییرات شرکت
            </span>
            <h1 className="mb-3 mt-4 max-w-[22ch] text-[28px] font-extrabold leading-tight sm:text-[42px]">
              هر تغییری در شرکت شما، رسمی و قانونی
            </h1>
            <p className="max-w-[62ch] text-[16.5px] leading-[1.9] text-ink-soft">
              از انتقال سهام گرفته تا انحلال شرکت، تمام تغییرات باید در صورتجلسه ثبت و به اداره ثبت شرکت‌ها اعلام شود. ما
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
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-[22px] shadow-[0_18px_40px_-20px_rgba(32,36,31,0.4)] sm:aspect-16/11">
            <Image
              src="/images/notebook-desk.jpg"
              alt="ثبت تغییرات شرکت"
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {companyChanges.map((change) => (
              <Link
                key={change.title}
                href={`/services/company-changes/${change.slug}`}
                className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-6 transition-transform hover:-translate-y-0.5"
              >
                <h3 className="text-[16.5px] font-bold">{change.title}</h3>
                <p className="text-[14px] leading-[1.8] text-ink-soft">{change.description}</p>
                <span className="mt-auto flex items-center gap-1.5 pt-2 text-[13.5px] font-bold text-sage-dark">
                  راهنمای کامل
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-soft py-14 sm:py-16">
        <Container>
          <div className="mb-10 max-w-160">
            <span className="inline-flex rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">
              مراحل کار
            </span>
            <h2 className="mb-2.5 mt-3 text-[24px] font-extrabold sm:text-[34px]">
              مراحل انجام تغییرات در شرکت‌ها و مؤسسات
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {changeSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-line bg-surface p-6">
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-sage-tint text-[15px] font-extrabold text-sage-dark">
                  {(index + 1).toLocaleString("fa-IR")}
                </span>
                <h3 className="mb-2 text-[16.5px] font-bold">{step.title}</h3>
                <p className="text-[14px] leading-[1.8] text-ink-soft">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-line bg-surface p-6 text-[14.5px] leading-[1.85] text-ink-soft">
            <span className="font-bold text-ink">نتیجه: </span>
            از تنظیم صورتجلسه تا ثبت نهایی تغییرات، تمامی مراحل به‌صورت تخصصی و منظم پیگیری می‌شود.
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="mb-8 max-w-160">
            <span className="inline-flex rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">
              مدارک مورد نیاز
            </span>
            <h2 className="mb-2.5 mt-3 text-[24px] font-extrabold sm:text-[34px]">
              مدارک مورد نیاز برای انجام تغییرات شرکت‌ها و مؤسسات
            </h2>
          </div>
          <div className="flex flex-col gap-2.5">
            {requiredDocuments.map((doc, i) => (
              <div key={doc.title} className="flex items-start gap-3 rounded-xl border border-line bg-surface px-4.5 py-3.5">
                <DocIcon className="mt-0.5 shrink-0 text-terracotta-dark" />
                <div>
                  <p className="text-[14.5px] font-semibold">
                    <span className="tabular-nums">{(i + 1).toLocaleString("fa-IR")}. </span>
                    {doc.title}
                  </p>
                  {doc.description && <p className="mt-1 text-[14px] leading-[1.8] text-ink-soft">{doc.description}</p>}
                  {doc.bullets && (
                    <ul className="mt-1.5 list-disc space-y-1 pr-5 text-[14px] leading-[1.8] text-ink-soft">
                      {doc.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}

            <p className="text-[13px] leading-[1.8] text-ink-soft">
              توجه: مدارک موردنیاز بر اساس نوع شرکت یا مؤسسه و نوع تغییر متفاوت است و پس از بررسی اولیه، مدارک دقیق به
              متقاضی اعلام می‌شود.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface-soft py-14 sm:py-16">
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
