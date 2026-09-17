import type { Metadata } from "next";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/services";

const service = serviceDetails.llc;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function LlcPage() {
  return (
    <ServiceDetailTemplate
      service={service}
      breadcrumbItems={[
        { label: "خانه", href: "/" },
        { label: "ثبت شرکت", href: "/services/company-registration" },
        { label: "مسئولیت محدود" },
      ]}
    />
  );
}
