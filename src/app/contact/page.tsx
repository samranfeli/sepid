import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InstagramIcon, MailIcon, PhoneIcon, TelegramIcon, WhatsAppIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "تماس با ما",
  description: "راه‌های ارتباط با سپید ثبت — واتساپ، تلگرام، تماس تلفنی، ایمیل و اینستاگرام.",
};

const channels = [
  {
    icon: WhatsAppIcon,
    title: "واتساپ",
    value: "سریع‌ترین راه ارتباط با کارشناسان ما",
    href: site.whatsappHref,
    cta: "شروع گفتگو",
    accent: "bg-[#25B959] text-[#0C2A15]",
  },
  {
    icon: TelegramIcon,
    title: "تلگرام",
    value: "چت مستقیم و ارسال مدارک",
    href: site.telegramHref,
    cta: "شروع گفتگو",
    accent: "bg-[#3AA0E0] text-[#052033]",
  },
  {
    icon: PhoneIcon,
    title: "تماس تلفنی",
    value: site.phoneDisplay,
    href: site.phoneHref,
    cta: "تماس بگیرید",
    accent: "bg-sage text-[#F3F1E9]",
  },
  {
    icon: MailIcon,
    title: "ایمیل",
    value: site.email,
    href: `mailto:${site.email}`,
    cta: "ارسال ایمیل",
    accent: "bg-terracotta text-[#2A1608]",
  },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "تماس با ما" }]} />

      <section className="pb-16 pt-6 sm:pb-20">
        <Container>
          <span className="inline-flex items-center rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">
            تماس با ما
          </span>
          <h1 className="mb-4 mt-4 max-w-[24ch] text-[28px] font-extrabold leading-tight sm:text-[40px]">
            هر زمان آماده پاسخگویی به شما هستیم
          </h1>
          <p className="mb-12 max-w-[62ch] text-[16.5px] leading-[1.9] text-ink-soft">
            برای دریافت مشاوره رایگان یا پیگیری خدمات، از هر کدام از راه‌های زیر که برایتان راحت‌تر است با ما در تماس
            باشید.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex flex-col gap-4 rounded-[22px] border border-line bg-surface p-6 shadow-[0_12px_30px_-18px_rgba(32,36,31,0.35)] transition-transform hover:-translate-y-0.5"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-full ${c.accent}`}>
                  <c.icon />
                </div>
                <div>
                  <h3 className="mb-1 text-[16.5px] font-bold">{c.title}</h3>
                  <p dir="ltr" className="text-left text-[14px] text-ink-soft">
                    {c.value}
                  </p>
                </div>
                <span className="mt-auto text-[14px] font-bold text-sage-dark">{c.cta} ←</span>
              </a>
            ))}
          </div>

          <a
            href={site.instagramHref}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-[14.5px] font-semibold text-ink-soft hover:text-sage-dark"
          >
            <InstagramIcon />
            ما را در اینستاگرام دنبال کنید
          </a>
        </Container>
      </section>
    </>
  );
}
