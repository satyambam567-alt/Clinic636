// Admin data store - manages all editable clinic content
// This uses localStorage for persistence in static frontend

export interface ClinicInfo {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  workingHours: string;
  about: string;
  mission: string;
  vision: string;
}

export interface Doctor {
  name: string;
  qualification: string;
  experience: string;
  specialization: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  message: string;
  rating: number;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface AdminData {
  clinicInfo: ClinicInfo;
  doctor: Doctor;
  services: Service[];
  blogPosts: BlogPost[];
  gallery: GalleryImage[];
  testimonials: Testimonial[];
  faqs: FAQ[];
}

// Default data
const defaultData: AdminData = {
  clinicInfo: {
    name: "Ayurveda Wellness Clinic",
    tagline: "Ancient Wisdom, Modern Care",
    address: "123 Healing Street, Wellness City, State 12345",
    phone: "+91-XXXXXXXXXX",
    email: "info@ayurvedaclinic.com",
    whatsapp: "+91-XXXXXXXXXX",
    workingHours: "Monday - Saturday: 9:00 AM - 6:00 PM, Sunday: Closed",
    about: "Welcome to our Ayurveda Wellness Clinic, where ancient healing traditions meet modern healthcare. We are committed to providing authentic Ayurvedic treatments and personalized wellness solutions.",
    mission: "To provide authentic, evidence-based Ayurvedic treatments that promote holistic health and wellness for all individuals.",
    vision: "To be a leading center of excellence in Ayurvedic medicine, recognized for our commitment to patient care and traditional healing practices.",
  },
  doctor: {
    name: "Dr. Priya Sharma",
    qualification: "BAMS (Bachelor of Ayurvedic Medicine and Surgery), MD (Ayurveda)",
    experience: "15+ years of clinical experience",
    specialization: "Panchakarma Therapy, Joint Pain Management, Skin Diseases",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/doctor-profile-V7AWp3z4sL38NMMNmqTqfU.webp",
  },
  services: [
    {
      id: "1",
      title: "Joint Pain",
      description: "Relief from arthritis, joint stiffness, and mobility issues",
      benefits: ["Reduces inflammation", "Improves mobility", "Strengthens joints"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/treatment-therapy-AGBzSy3sPZWFtDnYjKr9KN.webp",
    },
    {
      id: "2",
      title: "Sciatica",
      description: "Treatment for sciatic nerve pain and lower back issues",
      benefits: ["Nerve pain relief", "Improved flexibility", "Better posture"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/treatment-therapy-AGBzSy3sPZWFtDnYjKr9KN.webp",
    },
    {
      id: "3",
      title: "Cervical Pain",
      description: "Effective treatment for neck pain and cervical spondylosis",
      benefits: ["Neck pain relief", "Reduced stiffness", "Better mobility"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/treatment-therapy-AGBzSy3sPZWFtDnYjKr9KN.webp",
    },
    {
      id: "4",
      title: "Back Pain",
      description: "Comprehensive treatment for acute and chronic back pain",
      benefits: ["Pain relief", "Muscle relaxation", "Improved strength"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/treatment-therapy-AGBzSy3sPZWFtDnYjKr9KN.webp",
    },
    {
      id: "5",
      title: "Skin Diseases",
      description: "Natural treatment for various skin conditions and disorders",
      benefits: ["Clear skin", "Reduced inflammation", "Improved complexion"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/herbal-medicines-dUdoPT8TkZj3jQV4rUf8KZ.webp",
    },
    {
      id: "6",
      title: "Psoriasis",
      description: "Specialized Ayurvedic treatment for psoriasis management",
      benefits: ["Reduced scaling", "Less itching", "Skin healing"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/herbal-medicines-dUdoPT8TkZj3jQV4rUf8KZ.webp",
    },
    {
      id: "7",
      title: "Hair Fall",
      description: "Treatment to prevent hair loss and promote hair growth",
      benefits: ["Stronger hair", "Reduced hair fall", "Improved scalp health"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/herbal-medicines-dUdoPT8TkZj3jQV4rUf8KZ.webp",
    },
    {
      id: "8",
      title: "Weight Management",
      description: "Holistic approach to healthy weight loss and maintenance",
      benefits: ["Sustainable weight loss", "Better metabolism", "Improved energy"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/herbal-medicines-dUdoPT8TkZj3jQV4rUf8KZ.webp",
    },
    {
      id: "9",
      title: "Diabetes Support",
      description: "Supportive Ayurvedic therapies for diabetes management",
      benefits: ["Blood sugar balance", "Improved digestion", "Better energy"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/herbal-medicines-dUdoPT8TkZj3jQV4rUf8KZ.webp",
    },
    {
      id: "10",
      title: "Panchakarma Therapy",
      description: "Complete detoxification and rejuvenation therapy",
      benefits: ["Deep detox", "Rejuvenation", "Complete healing"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/treatment-therapy-AGBzSy3sPZWFtDnYjKr9KN.webp",
    },
  ],
  blogPosts: [
    {
      id: "1",
      title: "The Three Doshas: Understanding Your Ayurvedic Constitution",
      excerpt: "Learn about Vata, Pitta, and Kapha and how they influence your health and wellness.",
      content: "Ayurveda is based on the concept of three doshas - Vata, Pitta, and Kapha. Understanding your unique constitution is the first step towards achieving optimal health. Each dosha has specific characteristics and imbalances can lead to various health issues.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/herbal-medicines-dUdoPT8TkZj3jQV4rUf8KZ.webp",
      date: "2026-05-20",
      author: "Dr. Priya Sharma",
    },
    {
      id: "2",
      title: "Panchakarma: The Ancient Art of Detoxification",
      excerpt: "Discover the five therapeutic procedures that cleanse and rejuvenate your body.",
      content: "Panchakarma is a comprehensive detoxification and rejuvenation therapy that has been used for thousands of years. It consists of five main procedures designed to eliminate toxins and restore balance to the body.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/treatment-therapy-AGBzSy3sPZWFtDnYjKr9KN.webp",
      date: "2026-05-15",
      author: "Dr. Priya Sharma",
    },
  ],
  gallery: [
    {
      id: "1",
      title: "Reception Area",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/hero-clinic-M9wPbt36Fqw8P3nbqyhAFs.webp",
      category: "clinic",
    },
    {
      id: "2",
      title: "Treatment Room",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/treatment-therapy-AGBzSy3sPZWFtDnYjKr9KN.webp",
      category: "treatment",
    },
    {
      id: "3",
      title: "Herbal Medicines",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/herbal-medicines-dUdoPT8TkZj3jQV4rUf8KZ.webp",
      category: "herbs",
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "Rajesh Kumar",
      message: "Excellent treatment and very professional staff. My back pain has completely disappeared after the panchakarma therapy.",
      rating: 5,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/doctor-profile-V7AWp3z4sL38NMMNmqTqfU.webp",
    },
    {
      id: "2",
      name: "Priya Patel",
      message: "Dr. Sharma is very knowledgeable and caring. The treatment helped me with my skin issues significantly.",
      rating: 5,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663691146403/QwWyA7ncxwYbNQ4GVirktC/doctor-profile-V7AWp3z4sL38NMMNmqTqfU.webp",
    },
  ],
  faqs: [
    {
      id: "1",
      question: "What is Ayurveda?",
      answer: "Ayurveda is an ancient system of medicine that originated in India over 5,000 years ago. It focuses on balancing the three doshas to achieve optimal health and wellness.",
    },
    {
      id: "2",
      question: "How long does treatment take?",
      answer: "The duration of treatment depends on the condition and individual factors. Most treatments range from 2-4 weeks, though some may require longer periods.",
    },
    {
      id: "3",
      question: "Are there any side effects?",
      answer: "Ayurvedic treatments use natural herbs and therapies with minimal side effects. However, some individuals may experience mild detoxification symptoms initially.",
    },
  ],
};

// Admin store functions
export const adminStore = {
  // Get all data
  getData: (): AdminData => {
    const stored = localStorage.getItem("adminData");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error("Error parsing admin data:", e);
        return defaultData;
      }
    }
    return defaultData;
  },

  // Save all data
  saveData: (data: AdminData) => {
    localStorage.setItem("adminData", JSON.stringify(data));
  },

  // Reset to default
  resetToDefault: () => {
    localStorage.setItem("adminData", JSON.stringify(defaultData));
  },

  // Get specific sections
  getClinicInfo: (): ClinicInfo => {
    return adminStore.getData().clinicInfo;
  },

  getDoctor: (): Doctor => {
    return adminStore.getData().doctor;
  },

  getServices: (): Service[] => {
    return adminStore.getData().services;
  },

  getBlogPosts: (): BlogPost[] => {
    return adminStore.getData().blogPosts;
  },

  getGallery: (): GalleryImage[] => {
    return adminStore.getData().gallery;
  },

  getTestimonials: (): Testimonial[] => {
    return adminStore.getData().testimonials;
  },

  getFAQs: (): FAQ[] => {
    return adminStore.getData().faqs;
  },

  // Update specific sections
  updateClinicInfo: (info: ClinicInfo) => {
    const data = adminStore.getData();
    data.clinicInfo = info;
    adminStore.saveData(data);
  },

  updateDoctor: (doctor: Doctor) => {
    const data = adminStore.getData();
    data.doctor = doctor;
    adminStore.saveData(data);
  },

  updateServices: (services: Service[]) => {
    const data = adminStore.getData();
    data.services = services;
    adminStore.saveData(data);
  },

  updateBlogPosts: (posts: BlogPost[]) => {
    const data = adminStore.getData();
    data.blogPosts = posts;
    adminStore.saveData(data);
  },

  updateGallery: (gallery: GalleryImage[]) => {
    const data = adminStore.getData();
    data.gallery = gallery;
    adminStore.saveData(data);
  },

  updateTestimonials: (testimonials: Testimonial[]) => {
    const data = adminStore.getData();
    data.testimonials = testimonials;
    adminStore.saveData(data);
  },

  updateFAQs: (faqs: FAQ[]) => {
    const data = adminStore.getData();
    data.faqs = faqs;
    adminStore.saveData(data);
  },
};
