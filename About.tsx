import { useLanguage } from "@/contexts/LanguageContext";
import { adminStore } from "@/lib/adminStore";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";

export default function About() {
  const { t } = useLanguage();
  const clinicInfo = adminStore.getClinicInfo();
  const doctor = adminStore.getDoctor();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary mb-4">
            {t("aboutPage.title")}
          </h1>
          <p className="text-xl text-foreground/70">
            Learn about our clinic, our mission, and our commitment to your wellness.
          </p>
        </div>
      </section>

      {/* Clinic History */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                {t("aboutPage.clinicHistory")}
              </h2>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                {clinicInfo.about}
              </p>
            </div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/hero-clinic-M9wPbt36Fqw8P3nbqyhAFs.webp"
              alt="Clinic"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Meet Our Expert
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="rounded-lg shadow-lg"
            />
            <div>
              <h3 className="text-3xl font-bold text-primary mb-4">
                {doctor.name}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    {t("aboutPage.qualifications")}
                  </h4>
                  <p className="text-foreground/70">{doctor.qualification}</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    {t("aboutPage.experience")}
                  </h4>
                  <p className="text-foreground/70">{doctor.experience}</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    {t("aboutPage.specialization")}
                  </h4>
                  <p className="text-foreground/70">{doctor.specialization}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-border/50">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {t("aboutPage.missionTitle")}
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {clinicInfo.mission}
              </p>
            </Card>
            <Card className="p-8 border-border/50">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {t("aboutPage.visionTitle")}
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {clinicInfo.vision}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            {t("aboutPage.whyChoose")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Experienced Practitioners", desc: "Over 15 years of clinical experience" },
              { title: "Authentic Treatments", desc: "Traditional Ayurvedic methods" },
              { title: "Personalized Care", desc: "Customized treatment plans" },
              { title: "Modern Facilities", desc: "State-of-the-art equipment" },
              { title: "Holistic Approach", desc: "Mind, body, and spirit wellness" },
              { title: "Patient Focused", desc: "Your health is our priority" },
            ].map((item, index) => (
              <Card key={index} className="p-6 border-border/50">
                <h4 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h4>
                <p className="text-foreground/70">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
