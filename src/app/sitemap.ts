import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { blogPosts } from "@/lib/blog";
import { changeDetails } from "@/lib/changes";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/faq",
    "/blog",
    "/services/company-registration",
    "/services/company-registration/مسئولیت-محدود",
    "/services/company-registration/سهامی-خاص",
    "/services/company-registration/موسسه-غیرتجاری",
    "/services/company-registration/موضوعات-نیازمند-مجوز",
    "/services/company-changes",
    "/services/brand-registration",
    "/services/legal-books-sealing",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const changeRoutes = Object.keys(changeDetails).map((slug) => ({
    url: `${site.url}/services/company-changes/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...blogRoutes, ...changeRoutes];
}
