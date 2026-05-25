import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export default function Appointment() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    problem: "",
    date: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Store appointment in localStorage
      const appointments = JSON.parse(
        localStorage.getItem("appointments") || "[]"
      );
      appointments.push({
        ...formData,
        id: Date.now(),
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem("appointments", JSON.stringify(appointments));

      toast.success(t("appointment.success"));
      setFormData({ name: "", phone: "", email: "", problem: "", date: "" });
    } catch (error) {
      toast.error(t("appointment.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary mb-4">
            {t("appointment.title")}
          </h1>
          <p className="text-xl text-foreground/70">
            {t("appointment.subtitle")}
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("appointment.name")} *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("appointment.phone")} *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="+91-XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("appointment.email")}
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("appointment.problem")} *
                  </label>
                  <Textarea
                    name="problem"
                    value={formData.problem}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Describe your health concern or reason for consultation"
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("appointment.preferredDate")} *
                  </label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-bold"
                >
                  {isSubmitting ? "Submitting..." : t("appointment.submit")}
                </Button>
              </form>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <Card className="p-6 border-border/50 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  24/7
                </div>
                <p className="text-foreground/70">
                  Online appointment booking available anytime
                </p>
              </Card>
              <Card className="p-6 border-border/50 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  Quick Response
                </div>
                <p className="text-foreground/70">
                  We'll confirm your appointment within 2 hours
                </p>
              </Card>
              <Card className="p-6 border-border/50 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  Expert Care
                </div>
                <p className="text-foreground/70">
                  Personalized consultation with our specialists
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
