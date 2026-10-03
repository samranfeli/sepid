import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";
import { registrationTypeRoutes, serviceDetails } from "@/lib/services";

export function generateStaticParams() {
  return Object.keys(registrationTypeRoutes).map((slug) => ({ slug }));
}

function resolveService(slug: string) {
  const key = registrationTypeRoutes[decodeURIComponent(slug)];
  return key ? serviceDetails[key] : undefined;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = resolveService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function RegistrationTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = resolveService(slug);
  if (!service) notFound();

  return (
    <ServiceDetailTemplate
      service={service}
      breadcrumbItems={[
        { label: "خانه", href: "/" },
        { label: "ثبت شرکت", href: "/services/company-registration" },
        { label: service.title },
      ]}
    />
  );
}
