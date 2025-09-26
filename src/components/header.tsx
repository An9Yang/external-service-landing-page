/**
 * Step1 Header Component - Notion-inspired Minimal Design with Language Toggle
 */
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-200 bg-background/80 backdrop-blur-md",
      isScrolled && "border-b border-border"
    )}>
      <div className="container-width">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-sm">S1</span>
              </div>
            </div>
            <span className="text-lg font-semibold text-foreground">Step1</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('header.caseStudies')}
            </a>
            <a href="#value" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('header.howItWorks')}
            </a>
            <a href="#plans" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('header.pricing')}
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('header.faq')}
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{language === 'zh' ? 'EN' : '中文'}</span>
            </Button>

            <Button className="bg-foreground text-background hover:bg-foreground/90 text-sm px-4" asChild>
              <a href="https://calendly.com/step1/discovery" target="_blank" rel="noreferrer">
                {t('header.bookCall')}
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="px-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <nav className="flex flex-col gap-4 mt-8">
                <a
                  href="#case-studies"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('header.caseStudies')}
                </a>
                <a
                  href="#value"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('header.howItWorks')}
                </a>
                <a
                  href="#plans"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('header.pricing')}
                </a>
                <a
                  href="#faq"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('header.faq')}
                </a>

                <div className="border-t pt-4 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      toggleLanguage();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Globe className="h-4 w-4" />
                    <span className="text-sm font-medium">{language === 'zh' ? 'Switch to English' : '切换到中文'}</span>
                  </Button>
                </div>

                <div className="flex flex-col gap-3 mt-4">
                  <Button className="w-full bg-foreground text-background hover:bg-foreground/90" asChild>
                    <a href="https://calendly.com/step1/discovery" target="_blank" rel="noreferrer">
                      {t('header.bookCall')}
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}