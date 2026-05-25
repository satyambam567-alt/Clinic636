import { useLanguage } from "@/contexts/LanguageContext";
import { adminStore } from "@/lib/adminStore";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();
  const clinicInfo = adminStore.getClinicInfo();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-foreground/70">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <Card className="p-6 border-border/50">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {t("contact.address")}
                    </h3>
                    <p className="text-foreground/70">{clinicInfo.address}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {t("contact.phone")}
                    </h3>
                    <a
                      href={`tel:${clinicInfo.phone}`}
                      className="text-primary hover:underline"
                    >
                      {clinicInfo.phone}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {t("contact.email")}
                    </h3>
                    <a
                      href={`mailto:${clinicInfo.email}`}
                      className="text-primary hover:underline"
                    >
                      {clinicInfo.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50">
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {t("contact.whatsapp")}
                    </h3>
            <a
              href={`https://wa.me/${clinicInfo.whatsapp.replace(/\D/g, "")}`}
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {typeof clinicInfo.whatsapp === "string" ? clinicInfo.whatsapp : "WhatsApp"}
            </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {t("contact.hours")}
                    </h3>
                    <p className="text-foreground/70">{clinicInfo.workingHours}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-lg overflow-hidden shadow-lg h-96 md:h-full min-h-96">
              <iframe
                width="100%"
                height="100%"
                frameBorder={0}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5921647253217!2d72.8479!3d19.0176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c1c1c1c1c1%3A0x1c1c1c1c1c1c1c1c!2sAyurveda%20Clinic!5e0!3m2!1sen!2sin!4v1234567890"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Have Questions? Get in Touch!
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Our team is ready to help you on your wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.href = `tel:${clinicInfo.phone}`}
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-8 py-6 text-lg font-bold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button
              onClick={() => {
                const whatsappNum = clinicInfo.whatsapp.replace(/\D/g, "");
                window.location.href = `https://wa.me/${whatsappNum}`;
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-bold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
