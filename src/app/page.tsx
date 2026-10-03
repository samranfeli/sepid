import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ArrowIcon, BrandIcon, BuildingIcon, ChangesIcon, ExperienceIcon, PriceIcon, SealIcon, SpeedIcon, StarIcon, SupportIcon } from "@/components/icons";
import { processSteps, site, trustStats, whyUs } from "@/lib/site";
import { homeFaq } from "@/lib/faq";
import { getSortedPosts } from "@/lib/blog";

const services = [
  {
    href: "/services/company-registration",
    icon: BuildingIcon,
    title: "ثبت شرکت",
    description: "ثبت شرکت با مسئولیت محدود، سهامی خاص، موسسه غیرتجاری و موضوعات نیازمند مجوز.",
  },
  {
    href: "/services/company-changes",
    icon: ChangesIcon,
    title: "تغییرات شرکت",
    description: "انتقال سهام، افزایش سرمایه، تغییر آدرس، اعضای هیئت‌مدیره و انحلال شرکت.",
  },
  {
    href: "/services/brand-registration",
    icon: BrandIcon,
    title: "ثبت برند",
    description: "ثبت نشان تجاری و علامت اختصاصی برای حفظ هویت و اعتبار کسب‌وکار شما.",
  },
  {
    href: "/services/legal-books-sealing",
    icon: SealIcon,
    title: "پلمپ دفاتر قانونی",
    description: "پلمپ دفتر کل و روزنامه شرکت، پیش از شروع سال مالی و تهیه اظهارنامه مالیاتی.",
  },
];

const whyIcons = [SpeedIcon, SupportIcon, ExperienceIcon, PriceIcon];

export default function HomePage() {
  const latestPosts = getSortedPosts().slice(0, 3);

  return (
    <>
      <section className="py-14 sm:py-20">
        <Container className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">
              <StarIcon />
              مشاوره اولیه کاملاً رایگان
            </span>
            <h1 className="mb-3.5 mt-4.5 text-[32px] font-extrabold leading-[1.22] sm:text-[50px]">
              ثبت شرکت و برند،
              <br />
              ساده و مطمئن
            </h1>
            <p className="mb-7 max-w-[46ch] text-[17px] leading-[1.9] text-ink-soft">
              از انتخاب نوع شرکت تا دریافت آگهی تاسیس رسمی، هر مرحله را همراه شما و با شفافیت کامل انجام می‌دهیم — بدون
              پیچیدگی و بدون سردرگمی.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6.5 py-3.5 text-[15px] font-semibold text-[#2A1608] hover:bg-terracotta-dark"
              >
                مشاوره رایگان در واتساپ
              </a>
              <Link
                href="/services/company-registration"
                className="inline-flex items-center rounded-full border border-sage px-6.5 py-3.5 text-[15px] font-semibold text-sage hover:bg-sage-tint"
              >
                مشاهده خدمات
              </Link>
            </div>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded-[28px] bg-sage-tint sm:aspect-square">
            <Image
              src="/images/office-towers.jpg"
              alt="ساختمان اداری مدرن"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-2xl bg-surface/95 p-4 shadow-[0_12px_30px_-18px_rgba(32,36,31,0.45)] backdrop-blur">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-terracotta-tint text-terracotta-dark">
                <StarIcon />
              </div>
              <div>
                <b className="block text-[15px] font-extrabold">+۲٬۴۰۰ شرکت ثبت‌شده</b>
                <span className="text-[12.5px] text-ink-soft">در سراسر ایران</span>
              </div>
            </div>
          </div>
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

      <section className="py-14 sm:py-20">
        <Container>
          <div className="mb-10 max-w-160">
            <span className="inline-flex rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">خدمات ما</span>
            <h2 className="mb-2.5 mt-3 text-[24px] font-extrabold sm:text-[34px]">هرچه برای شروع و توسعه کسب‌وکارتان لازم است</h2>
            <p className="text-[15.5px] leading-[1.8] text-ink-soft">
              از تاسیس شرکت تا تغییرات و ثبت برند، همه در یک مسیر مشخص و قابل پیگیری.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.href} className="flex flex-col gap-3.5 rounded-[22px] border border-line bg-surface p-7 shadow-[0_12px_30px_-18px_rgba(32,36,31,0.35)]">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-sage-tint text-sage">
                  <s.icon />
                </div>
                <h3 className="text-[19px] font-bold">{s.title}</h3>
                <p className="text-[14.5px] leading-[1.8] text-ink-soft">{s.description}</p>
                <Link href={s.href} className="mt-auto flex items-center gap-1.5 text-[14px] font-bold text-sage-dark">
                  مشاهده جزئیات
                  <ArrowIcon />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-soft py-14 sm:py-20">
        <Container>
          <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

          <div className="mb-10 max-w-160">
            <span className="inline-flex rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">چرا سپید ثبت</span>
            <h2 className="mb-2.5 mt-3 text-[24px] font-extrabold sm:text-[34px]">تفاوت ما در جزئیات است</h2>
          </div>
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

      <section className="py-14 sm:py-20">
        <Container>
          <div className="mb-10 max-w-160">
            <span className="inline-flex rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">سوالات متداول</span>
            <h2 className="mb-2.5 mt-3 text-[24px] font-extrabold sm:text-[34px]">پاسخ پرتکرارترین سوالات شما</h2>
          </div>
          <FaqAccordion items={[...homeFaq]} defaultOpenIndex={0} />
          <Link href="/faq" className="mt-6 inline-flex items-center gap-1.5 text-[14.5px] font-bold text-sage-dark">
            مشاهده همه سوالات
            <ArrowIcon />
          </Link>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="mb-10 max-w-160">
            <span className="inline-flex rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">وبلاگ</span>
            <h2 className="mb-2.5 mt-3 text-[24px] font-extrabold sm:text-[34px]">راهنماهای ثبت شرکت و برند</h2>
          </div>
          <div className="grid gap-5.5 sm:grid-cols-3">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="overflow-hidden rounded-[22px] border border-line bg-surface shadow-[0_12px_30px_-18px_rgba(32,36,31,0.35)]"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-sage-tint">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-5.5 pb-6 pt-5">
                  <span className="text-[12px] font-bold text-terracotta-dark">{post.tag}</span>
                  <h4 className="mt-2 text-[16.5px] font-bold leading-[1.6]">{post.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner title="آماده شروع هستید؟" description="همین حالا با یک کارشناس صحبت کنید — بدون هزینه و بدون تعهد." />
    </>
  );
}
