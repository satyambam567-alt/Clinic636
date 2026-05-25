import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { adminStore } from "@/lib/adminStore";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const { t } = useLanguage();
  const faqs = adminStore.getFAQs();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">
          {t("faq.title")}
        </h2>
        <p className="text-lg text-foreground/70 text-center mb-12">
          {t("faq.subtitle")}
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <Card
              key={faq.id}
              className="border-border/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
              >
                <h3 className="text-lg font-bold text-foreground">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openId === faq.id && (
                <div className="px-6 pb-6 border-t border-border/50">
                  <p className="text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
