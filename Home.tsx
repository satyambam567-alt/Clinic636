import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { adminStore } from "@/lib/adminStore";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FAQ from "@/components/FAQ";
import { useSEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Phone, ArrowRight } from "lucide-react";

export default function Home() {
  const [, navigate] = useLocation();
  const { t } = useLanguage();
  const clinicInfo = adminStore.getClinicInfo();
  const services = adminStore.getServices().slice(0, 6);
  const testimonials = adminStore.getTestimonials();

  useSEO({
    title: "Home",
    description: "Experience authentic Ayurvedic healing and wellness treatments. Professional Ayurveda clinic offering traditional therapies and holistic health solutions.",
    keywords: "Ayurveda, Ayurvedic clinic, wellness, healing, traditional medicine, Panchakarma, Ayurvedic treatment",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden" role="banner">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/hero-clinic-M9wPbt36Fqw8P3nbqyhAFs.webp"
          alt="Ayurveda Clinic"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-2">
              {t("hero.tagline")}
            </p>
            <p className="text-lg text-white/80 mb-8">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => navigate("/appointment")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              >
                {t("hero.bookBtn")}
              </Button>
              <Button
                onClick={() => {
                  const tel = clinicInfo.phone;
                  window.location.href = `tel:${tel}`;
                }}
                variant="outline"
                className="bg-white/20 hover:bg-white/30 text-white border-white text-lg px-8 py-6"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t("hero.callBtn")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Ayurveda Section */}
      <section className="py-16 md:py-24 bg-muted/30" role="region" aria-label="About Ayurveda">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                {t("aboutAyurveda.title")}
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                {t("aboutAyurveda.description")}
              </p>
              <Button
                onClick={() => navigate("/about")}
                variant="outline"
                className="gap-2"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/herbal-medicines-dUdoPT8TkZj3jQV4rUf8KZ.webp"
              alt="Ayurvedic Herbs"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24" role="region" aria-label="Benefits of Ayurveda">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            {t("benefits.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {((t("benefits.items") as unknown) as any[]).map((benefit: any, index: number) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-shadow border-border/50"
              >
                <h3 className="text-xl font-bold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-foreground/70">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 md:py-24 bg-muted/30" role="region" aria-label="Featured Services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {t("services.title")}
            </h2>
            <p className="text-lg text-foreground/70">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <Card
                key={service.id}
                className="overflow-hidden hover:shadow-lg transition-shadow border-border/50"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    {service.description}
                  </p>
                  <Button
                    onClick={() => navigate("/services")}
                    variant="outline"
                    className="w-full"
                  >
                    {t("services.bookConsultation")}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => navigate("/services")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24" role="region" aria-label="Patient Testimonials">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            {t("testimonials.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="p-8 border-border/50"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">
                      {testimonial.name}
                    </h4>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-foreground/70 italic">
                  "{testimonial.message}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Healing Journey?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Schedule a consultation with our Ayurvedic experts today.
          </p>
          <Button
            onClick={() => navigate("/appointment")}
            className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-8 py-6 text-lg font-bold"
          >
            {t("nav.appointment")}
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
