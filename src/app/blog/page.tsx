import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ArticleIcon } from "@/components/icons";
import { getSortedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "وبلاگ",
  description: "راهنماهای عملی درباره ثبت شرکت، ثبت برند و تغییرات اداری کسب‌وکار در ایران.",
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("fa-IR", { year: "numeric", month: "long", day: "numeric" }).format(new Date(iso));
}

export default function BlogIndexPage() {
  const posts = getSortedPosts();

  return (
    <>
      <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "وبلاگ" }]} />

      <section className="pb-16 pt-6 sm:pb-20">
        <Container>
          <span className="inline-flex items-center rounded-full bg-sage-tint px-3.5 py-1.5 text-[13px] font-semibold text-sage">
            وبلاگ سپید ثبت
          </span>
          <h1 className="mb-10 mt-4 max-w-[26ch] text-[28px] font-extrabold leading-tight sm:text-[40px]">
            راهنماهای ثبت شرکت و برند
          </h1>

          <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="overflow-hidden rounded-[22px] border border-line bg-surface shadow-[0_12px_30px_-18px_rgba(32,36,31,0.35)]"
              >
                <div className="flex aspect-16/10 items-center justify-center bg-sage-tint text-sage">
                  <ArticleIcon />
                </div>
                <div className="px-5.5 pb-6 pt-5">
                  <div className="flex items-center gap-2.5 text-[12px] text-ink-soft">
                    <span className="font-bold text-terracotta-dark">{post.tag}</span>
                    <span>·</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h4 className="mt-2 text-[16.5px] font-bold leading-[1.6]">{post.title}</h4>
                  <p className="mt-2 text-[14px] leading-[1.75] text-ink-soft">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
