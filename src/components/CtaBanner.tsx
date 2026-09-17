import { site } from "@/lib/site";
import { PhoneIcon, TelegramIcon, WhatsAppIcon } from "./icons";
import { Container } from "./Container";

export function CtaBanner({ title, description }: { title: string; description: string }) {
  return (
    <section className="bg-sage py-16 text-center text-[#F3F1E9] sm:py-20">
      <Container>
        <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl">{title}</h2>
        <p className="mb-7 text-[15.5px] text-[#D6E2DC]">{description}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25B959] px-6 py-3 text-[15px] font-semibold text-[#0C2A15] transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon />
            چت در واتساپ
          </a>
          <a
            href={site.telegramHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#3AA0E0] px-6 py-3 text-[15px] font-semibold text-[#052033] transition-opacity hover:opacity-90"
          >
            <TelegramIcon />
            چت در تلگرام
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-[#F3F1E9] px-6 py-3 text-[15px] font-semibold text-sage-dark transition-opacity hover:opacity-90"
          >
            <PhoneIcon />
            تماس تلفنی
          </a>
        </div>
      </Container>
    </section>
  );
}
