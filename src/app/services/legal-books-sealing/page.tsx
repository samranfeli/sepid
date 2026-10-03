import type { Metadata } from "next";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/services";

const service = serviceDetails["legal-books-sealing"];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function LegalBooksSealingPage() {
  return (
    <ServiceDetailTemplate
      service={service}
      breadcrumbItems={[
        { label: "خانه", href: "/" },
        { label: "پلمپ دفاتر قانونی" },
      ]}
    />
  );
}
