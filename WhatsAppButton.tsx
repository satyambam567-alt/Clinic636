import { MessageCircle } from "lucide-react";
import { adminStore } from "@/lib/adminStore";

export default function WhatsAppButton() {
  const clinicInfo = adminStore.getClinicInfo();
  const whatsappNumber = clinicInfo.whatsapp.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Ayurveda%20Clinic%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 animate-bounce"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
