import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { adminStore, ClinicInfo, Doctor, Service, BlogPost, Testimonial, FAQ } from "@/lib/adminStore";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Plus, Trash2, Edit2 } from "lucide-react";

export default function Admin() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("clinic");
  const [clinicInfo, setClinicInfo] = useState(adminStore.getClinicInfo());
  const [doctor, setDoctor] = useState(adminStore.getDoctor());
  const [services, setServices] = useState(adminStore.getServices());
  const [blogPosts, setBlogPosts] = useState(adminStore.getBlogPosts());
  const [testimonials, setTestimonials] = useState(adminStore.getTestimonials());
  const [faqs, setFaqs] = useState(adminStore.getFAQs());

  const handleSaveClinicInfo = () => {
    adminStore.updateClinicInfo(clinicInfo);
    toast.success("Clinic information updated!");
  };

  const handleSaveDoctor = () => {
    adminStore.updateDoctor(doctor);
    toast.success("Doctor information updated!");
  };

  const handleSaveServices = () => {
    adminStore.updateServices(services);
    toast.success("Services updated!");
  };

  const handleSaveBlogPosts = () => {
    adminStore.updateBlogPosts(blogPosts);
    toast.success("Blog posts updated!");
  };

  const handleSaveTestimonials = () => {
    adminStore.updateTestimonials(testimonials);
    toast.success("Testimonials updated!");
  };

  const handleSaveFAQs = () => {
    adminStore.updateFAQs(faqs);
    toast.success("FAQs updated!");
  };

  const handleResetData = () => {
    if (window.confirm("Are you sure you want to reset all data to default?")) {
      adminStore.resetToDefault();
      setClinicInfo(adminStore.getClinicInfo());
      setDoctor(adminStore.getDoctor());
      setServices(adminStore.getServices());
      setBlogPosts(adminStore.getBlogPosts());
      setTestimonials(adminStore.getTestimonials());
      setFaqs(adminStore.getFAQs());
      toast.success("Data reset to default!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Admin Header */}
      <section className="py-8 md:py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Admin Portal</h1>
          <p className="text-primary-foreground/80">Manage your clinic content and information</p>
        </div>
      </section>

      {/* Admin Content */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
              <TabsTrigger value="clinic">Clinic</TabsTrigger>
              <TabsTrigger value="doctor">Doctor</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="blog">Blog</TabsTrigger>
              <TabsTrigger value="testimonials">Reviews</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
            </TabsList>

            {/* Clinic Info Tab */}
            <TabsContent value="clinic" className="space-y-6">
              <Card className="p-8 border-border/50">
                <h2 className="text-2xl font-bold text-primary mb-6">Clinic Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Clinic Name</label>
                    <Input
                      value={clinicInfo.name}
                      onChange={(e) =>
                        setClinicInfo({ ...clinicInfo, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Tagline</label>
                    <Input
                      value={clinicInfo.tagline}
                      onChange={(e) =>
                        setClinicInfo({ ...clinicInfo, tagline: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Address</label>
                    <Textarea
                      value={clinicInfo.address}
                      onChange={(e) =>
                        setClinicInfo({ ...clinicInfo, address: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        value={clinicInfo.phone}
                        onChange={(e) =>
                          setClinicInfo({ ...clinicInfo, phone: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        value={clinicInfo.email}
                        onChange={(e) =>
                          setClinicInfo({ ...clinicInfo, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">WhatsApp</label>
                    <Input
                      value={clinicInfo.whatsapp}
                      onChange={(e) =>
                        setClinicInfo({ ...clinicInfo, whatsapp: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Working Hours</label>
                    <Input
                      value={clinicInfo.workingHours}
                      onChange={(e) =>
                        setClinicInfo({ ...clinicInfo, workingHours: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">About</label>
                    <Textarea
                      value={clinicInfo.about}
                      onChange={(e) =>
                        setClinicInfo({ ...clinicInfo, about: e.target.value })
                      }
                      rows={4}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mission</label>
                    <Textarea
                      value={clinicInfo.mission}
                      onChange={(e) =>
                        setClinicInfo({ ...clinicInfo, mission: e.target.value })
                      }
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Vision</label>
                    <Textarea
                      value={clinicInfo.vision}
                      onChange={(e) =>
                        setClinicInfo({ ...clinicInfo, vision: e.target.value })
                      }
                      rows={3}
                    />
                  </div>
                </div>
                <Button
                  onClick={handleSaveClinicInfo}
                  className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Save Clinic Information
                </Button>
              </Card>
            </TabsContent>

            {/* Doctor Tab */}
            <TabsContent value="doctor" className="space-y-6">
              <Card className="p-8 border-border/50">
                <h2 className="text-2xl font-bold text-primary mb-6">Doctor Profile</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      value={doctor.name}
                      onChange={(e) => setDoctor({ ...doctor, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Qualification</label>
                    <Textarea
                      value={doctor.qualification}
                      onChange={(e) =>
                        setDoctor({ ...doctor, qualification: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Experience</label>
                    <Input
                      value={doctor.experience}
                      onChange={(e) =>
                        setDoctor({ ...doctor, experience: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Specialization</label>
                    <Textarea
                      value={doctor.specialization}
                      onChange={(e) =>
                        setDoctor({ ...doctor, specialization: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Image URL</label>
                    <Input
                      value={doctor.image}
                      onChange={(e) => setDoctor({ ...doctor, image: e.target.value })}
                    />
                  </div>
                </div>
                <Button
                  onClick={handleSaveDoctor}
                  className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Save Doctor Information
                </Button>
              </Card>
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services" className="space-y-6">
              <Card className="p-8 border-border/50">
                <h2 className="text-2xl font-bold text-primary mb-6">Services</h2>
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <Card key={service.id} className="p-6 border-border/50">
                      <div className="space-y-3">
                        <Input
                          value={service.title}
                          onChange={(e) => {
                            const updated = [...services];
                            updated[index].title = e.target.value;
                            setServices(updated);
                          }}
                          placeholder="Service Title"
                        />
                        <Textarea
                          value={service.description}
                          onChange={(e) => {
                            const updated = [...services];
                            updated[index].description = e.target.value;
                            setServices(updated);
                          }}
                          placeholder="Service Description"
                        />
                      </div>
                    </Card>
                  ))}
                </div>
                <Button
                  onClick={handleSaveServices}
                  className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Save Services
                </Button>
              </Card>
            </TabsContent>

            {/* Blog Tab */}
            <TabsContent value="blog" className="space-y-6">
              <Card className="p-8 border-border/50">
                <h2 className="text-2xl font-bold text-primary mb-6">Blog Posts</h2>
                <div className="space-y-6">
                  {blogPosts.map((post, index) => (
                    <Card key={post.id} className="p-6 border-border/50">
                      <div className="space-y-3">
                        <Input
                          value={post.title}
                          onChange={(e) => {
                            const updated = [...blogPosts];
                            updated[index].title = e.target.value;
                            setBlogPosts(updated);
                          }}
                          placeholder="Post Title"
                        />
                        <Textarea
                          value={post.excerpt}
                          onChange={(e) => {
                            const updated = [...blogPosts];
                            updated[index].excerpt = e.target.value;
                            setBlogPosts(updated);
                          }}
                          placeholder="Post Excerpt"
                        />
                      </div>
                    </Card>
                  ))}
                </div>
                <Button
                  onClick={handleSaveBlogPosts}
                  className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Save Blog Posts
                </Button>
              </Card>
            </TabsContent>

            {/* Testimonials Tab */}
            <TabsContent value="testimonials" className="space-y-6">
              <Card className="p-8 border-border/50">
                <h2 className="text-2xl font-bold text-primary mb-6">Testimonials</h2>
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <Card key={testimonial.id} className="p-6 border-border/50">
                      <div className="space-y-3">
                        <Input
                          value={testimonial.name}
                          onChange={(e) => {
                            const updated = [...testimonials];
                            updated[index].name = e.target.value;
                            setTestimonials(updated);
                          }}
                          placeholder="Patient Name"
                        />
                        <Textarea
                          value={testimonial.message}
                          onChange={(e) => {
                            const updated = [...testimonials];
                            updated[index].message = e.target.value;
                            setTestimonials(updated);
                          }}
                          placeholder="Testimonial Message"
                        />
                      </div>
                    </Card>
                  ))}
                </div>
                <Button
                  onClick={handleSaveTestimonials}
                  className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Save Testimonials
                </Button>
              </Card>
            </TabsContent>

            {/* FAQs Tab */}
            <TabsContent value="faqs" className="space-y-6">
              <Card className="p-8 border-border/50">
                <h2 className="text-2xl font-bold text-primary mb-6">FAQs</h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <Card key={faq.id} className="p-6 border-border/50">
                      <div className="space-y-3">
                        <Input
                          value={faq.question}
                          onChange={(e) => {
                            const updated = [...faqs];
                            updated[index].question = e.target.value;
                            setFaqs(updated);
                          }}
                          placeholder="Question"
                        />
                        <Textarea
                          value={faq.answer}
                          onChange={(e) => {
                            const updated = [...faqs];
                            updated[index].answer = e.target.value;
                            setFaqs(updated);
                          }}
                          placeholder="Answer"
                        />
                      </div>
                    </Card>
                  ))}
                </div>
                <Button
                  onClick={handleSaveFAQs}
                  className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Save FAQs
                </Button>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Reset Button */}
          <div className="mt-12 text-center">
            <Button
              onClick={handleResetData}
              variant="outline"
              className="border-destructive text-destructive hover:bg-destructive/10"
            >
              Reset All Data to Default
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
