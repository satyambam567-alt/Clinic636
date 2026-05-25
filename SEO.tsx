import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export function useSEO({
  title,
  description,
  keywords = "Ayurveda, Ayurvedic clinic, wellness, healing, traditional medicine",
  ogImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/hero-clinic-M9wPbt36Fqw8P3nbqyhAFs.webp",
  ogUrl = "https://ayurveda-clinic.manus.space",
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Ayurveda Wellness Clinic`;

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateOGTag("og:title", `${title} | Ayurveda Wellness Clinic`);
    updateOGTag("og:description", description);
    updateOGTag("og:image", ogImage);
    updateOGTag("og:url", ogUrl);
    updateOGTag("og:type", "website");
  }, [title, description, keywords, ogImage, ogUrl]);
}
