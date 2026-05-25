import { useState } from "react";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, navigate] = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.gallery"), href: "/gallery" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
              आ
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary">Ayurveda</h1>
              <p className="text-xs text-muted-foreground">Wellness Clinic</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => navigate(item.href)}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {language === "en" ? "EN" : "HI"}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className={language === "en" ? "bg-primary/10" : ""}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("hi")}
                  className={language === "hi" ? "bg-primary/10" : ""}
                >
                  हिंदी
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Book Appointment Button */}
            <Button
              onClick={() => navigate("/appointment")}
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {t("nav.appointment")}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-2 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    navigate(item.href);
                    setIsOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  navigate("/appointment");
                  setIsOpen(false);
                }}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-2"
              >
                {t("nav.appointment")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
