/**
 * Step1 Header Component - Clean Minimal Design with Glass Effect (English Only)
 */
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import GlassSurface from "@/components/GlassSurface";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 flex justify-center px-4">
      <GlassSurface
        width="auto"
        height={60}
        borderRadius={12}
        opacity={0.7}
        brightness={55}
        blur={12}
        backgroundOpacity={0.05}
        className="transition-all duration-300 [&]:!shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)]"
        style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)' }}
      >
        <div className="px-10">
          <div className="flex items-center gap-10 h-[60px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-7 h-7 bg-foreground rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-xs">S1</span>
            </div>
            <span className="text-base font-semibold text-foreground">Step1</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm">
            <a href="#case-studies" className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Cases
            </a>
            <a href="#value" className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              How It Works
            </a>
            <a href="#plans" className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Pricing
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              FAQ
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center shrink-0">
            <Button className="bg-foreground text-background hover:bg-foreground/90 text-xs px-3 h-8" asChild>
              <a href="https://calendly.com/step1/discovery" target="_blank" rel="noreferrer">
                Book a Call
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" className="px-2 h-8 shrink-0">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <nav className="flex flex-col gap-4 mt-8">
                <a
                  href="#case-studies"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Case Studies
                </a>
                <a
                  href="#value"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  How It Works
                </a>
                <a
                  href="#plans"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#faq"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </a>

                <div className="flex flex-col gap-3 mt-6 pt-6 border-t">
                  <Button className="w-full bg-foreground text-background hover:bg-foreground/90" asChild>
                    <a href="https://calendly.com/step1/discovery" target="_blank" rel="noreferrer">
                      Book a Call
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        </div>
      </GlassSurface>
    </header>
  );
}