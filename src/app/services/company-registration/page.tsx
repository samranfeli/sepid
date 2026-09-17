import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CtaBanner } from "@/components/CtaBanner";
import { ArrowIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { registrationTypes } from "@/lib/services";
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
        <Container>
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

      <CtaBanner title="آماده ثبت شرکت هستید؟" description="همین حالا با یک کارشناس صحبت کنید — بدون هزینه و بدون تعهد." />
    </>
  );
}
