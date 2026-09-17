import type { Metadata } from "next";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/services";

const service = serviceDetails["brand-registration"];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function BrandRegistrationPage() {
  return (
    <ServiceDetailTemplate
      service={service}
      breadcrumbItems={[
        { label: "خانه", href: "/" },
        { label: "ثبت برند" },
      ]}
    />
  );
}
