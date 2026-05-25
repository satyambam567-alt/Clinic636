import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { adminStore } from "@/lib/adminStore";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Services() {
  const [, navigate] = useLocation();
  const { t } = useLanguage();
  const services = adminStore.getServices();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary mb-4">
            {t("services.title")}
          </h1>
          <p className="text-xl text-foreground/70">
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="overflow-hidden hover:shadow-lg transition-shadow border-border/50"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-foreground mb-3">
                      {t("services.benefits")}
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/70">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={() => navigate("/appointment")}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {t("services.bookConsultation")}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Not sure which treatment is right for you?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Schedule a free consultation with our experts to determine the best treatment plan for your needs.
          </p>
          <Button
            onClick={() => navigate("/appointment")}
            className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-8 py-6 text-lg font-bold"
          >
            Book Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
