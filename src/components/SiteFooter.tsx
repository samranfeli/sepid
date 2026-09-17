import Link from "next/link";
import { Container } from "./Container";
import { footerCompanyLinks, footerServiceLinks, site } from "@/lib/site";
import { InstagramIcon, MailIcon, PhoneIcon, TelegramIcon, WhatsAppIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer className="bg-ink-dark text-[#C9CFC3]">
      <Container className="grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-lg font-extrabold text-[#F2EFE6]">
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none" className="shrink-0">
              <rect width="40" height="40" rx="12" fill="#D98E5B" />
              <path d="M12 21.5L17.5 27L28 14" stroke="#1B1E1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {site.name}
          </div>
          <p className="mt-4 max-w-[34ch] text-[13.5px] leading-[1.85] text-[#9CA394]">
            همراه شما در مسیر ثبت شرکت، ثبت برند و تمام تغییرات اداری کسب‌وکارتان.
          </p>
          <div className="mt-4 flex gap-3">
            <a href={site.instagramHref} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2A2E27]" aria-label="اینستاگرام">
              <InstagramIcon />
            </a>
            <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2A2E27]" aria-label="واتساپ">
              <WhatsAppIcon />
            </a>
            <a href={site.telegramHref} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2A2E27]" aria-label="تلگرام">
              <TelegramIcon />
            </a>
          </div>
        </div>

        <div>
          <h5 className="mb-4 text-[14.5px] font-bold text-[#F2EFE6]">خدمات</h5>
          <ul className="flex flex-col gap-2.5 text-[13.5px]">
            {footerServiceLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[#F2EFE6]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-4 text-[14.5px] font-bold text-[#F2EFE6]">شرکت</h5>
          <ul className="flex flex-col gap-2.5 text-[13.5px]">
            {footerCompanyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[#F2EFE6]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-4 text-[14.5px] font-bold text-[#F2EFE6]">ارتباط با ما</h5>
          <ul className="flex flex-col gap-2.5 text-[13.5px]">
            <li className="flex items-center gap-2">
              <PhoneIcon className="shrink-0" />
              <a href={site.phoneHref} dir="ltr" className="hover:text-[#F2EFE6]">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:text-[#F2EFE6]">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-[#2A2E27] py-4 text-center text-[12.5px] text-[#7C8375]">
        © {site.name} — تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}
