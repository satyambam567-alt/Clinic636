import { useLanguage } from "@/contexts/LanguageContext";
import { adminStore } from "@/lib/adminStore";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

export default function Blog() {
  const { t } = useLanguage();
  const blogPosts = adminStore.getBlogPosts();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary mb-4">
            {t("blog.title")}
          </h1>
          <p className="text-xl text-foreground/70">
            {t("blog.subtitle")}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-shadow border-border/50"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-foreground/60 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    {post.excerpt}
                  </p>
                  <Button variant="outline" className="w-full">
                    {t("blog.readMore")}
                  </Button>
                </div>
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
