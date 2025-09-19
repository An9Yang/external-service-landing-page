/**
 * Step1 Header Component - Notion-inspired Minimal Design
 */
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

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
          <nav className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 text-sm">
              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                <span>Community</span>
              </button>
              <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">
                Docs
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Copilot Plan
              </a>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-sm">
              Sign In
            </Button>
            <Button className="bg-foreground text-background hover:bg-foreground/90 text-sm px-4">
              Get Started
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
                  href="#community"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Community
                </a>
                <a
                  href="#docs"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Docs
                </a>
                <a
                  href="#pricing"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Copilot Plan
                </a>
                <div className="border-t pt-4 mt-2 space-y-3">
                  <Button variant="outline" className="w-full text-sm">
                    Sign In
                  </Button>
                  <Button className="w-full bg-foreground text-background hover:bg-foreground/90 text-sm">
                    Get Started
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