import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { blogPosts, getPostBySlug, getSortedPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.date },
  };
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("fa-IR", { year: "numeric", month: "long", day: "numeric" }).format(new Date(iso));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getSortedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd
        data={breadcrumbSchema(
          [
            { label: "خانه", href: "/" },
            { label: "وبلاگ", href: "/blog" },
            { label: post.title, href: `/blog/${post.slug}` },
          ],
          site.url
        )}
      />

      <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "وبلاگ", href: "/blog" }, { label: post.title }]} />

      <article className="pb-16 pt-6 sm:pb-20">
        <Container>
          <div className="mx-auto max-w-[70ch]">
            <div className="flex items-center gap-2.5 text-[13px] text-ink-soft">
              <span className="font-bold text-terracotta-dark">{post.tag}</span>
              <span>·</span>
              <span>{formatDate(post.date)}</span>
            </div>
            <h1 className="mb-8 mt-3 text-[26px] font-extrabold leading-tight sm:text-[36px]">{post.title}</h1>

            <div className="relative mb-10 aspect-16/7 overflow-hidden rounded-[22px] bg-sage-tint">
              <Image src={post.image} alt={post.title} fill sizes="(min-width: 768px) 70ch, 100vw" className="object-cover" priority />
            </div>

            <div className="flex flex-col gap-8">
              {post.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="mb-3 text-[19px] font-bold">{section.heading}</h2>
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="text-[15.5px] leading-[1.95] text-ink-soft">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {related.length > 0 && (
              <div className="mt-14 border-t border-line pt-8">
                <h3 className="mb-4 text-[16px] font-bold">مقالات مرتبط</h3>
                <div className="flex flex-col gap-3">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} className="font-semibold text-sage-dark hover:underline">
                      {r.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </article>

      <CtaBanner title="سوالی درباره این موضوع دارید؟" description="همین حالا با یک کارشناس صحبت کنید — بدون هزینه و بدون تعهد." />
    </>
  );
}
