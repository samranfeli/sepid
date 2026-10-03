import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChangeDetailTemplate } from "@/components/ChangeDetailTemplate";
import { changeDetails, getChangeBySlug } from "@/lib/changes";

export function generateStaticParams() {
  return Object.keys(changeDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const change = getChangeBySlug(decodeURIComponent(slug));
  if (!change) return {};
  return {
    title: change.title,
    description: change.metaDescription,
  };
}

export default async function CompanyChangeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const change = getChangeBySlug(decodeURIComponent(slug));
  if (!change) notFound();

  return <ChangeDetailTemplate change={change} />;
}
