import { useLanguage } from "@/contexts/LanguageContext";
import { adminStore } from "@/lib/adminStore";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const clinicInfo = adminStore.getClinicInfo();

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">{clinicInfo.name}</h3>
            <p className="text-sm text-primary-foreground/80">
              {clinicInfo.about}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t("footer.about")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:underline">
                  {t("footer.blog")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href={`tel:${clinicInfo.phone}`} className="hover:underline">
                  {clinicInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href={`mailto:${clinicInfo.email}`} className="hover:underline">
                  {clinicInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{clinicInfo.address}</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t("contact.followUs")}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>{t("footer.copyright")}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:underline">
                {t("footer.privacy")}
              </a>
              <a href="#" className="hover:underline">
                {t("footer.terms")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
