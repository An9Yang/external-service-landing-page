/**
 * Payzo Enhanced Header Component
 * Modern navigation with shadcn/ui NavigationMenu
 */
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X, ArrowRight, Sparkles, Shield, Zap, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const demoPages = [
  {
    title: "Dashboard",
    href: "#dashboard",
    description: "Complete financial dashboard with analytics and insights",
    icon: TrendingUp,
  },
  {
    title: "Payment Gateway",
    href: "#payment",
    description: "Secure payment processing and transaction management",
    icon: Shield,
  },
  {
    title: "Banking Portal",
    href: "#banking",
    description: "Modern online banking interface for customers",
    icon: Zap,
  },
  {
    title: "Mobile App",
    href: "#mobile",
    description: "Responsive mobile-first fintech application",
    icon: Sparkles,
  },
];

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
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "glass-effect shadow-lg" : "bg-white/95 border-b border-border"
    )}>
      <div className="container-width">
        <div className={cn(
          "flex items-center justify-between transition-all duration-300",
          isScrolled ? "h-14" : "h-16"
        )}>
          {/* Enhanced Logo with Animation */}
          <a href="/" className="flex items-center space-x-2 group">
            <div className="relative w-9 h-9 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <div className="w-4 h-4 bg-white rounded transform rotate-45"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold text-foreground">payzo</span>
          </a>

          {/* Desktop Navigation with NavigationMenu */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  <span className="font-medium">Demo Pages</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {demoPages.map((page) => (
                      <li key={page.title}>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                            href={page.href}
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                <page.icon className="h-4 w-4 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium leading-none mb-1">{page.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {page.description}
                                </p>
                              </div>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#features" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#pricing" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Enhanced CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">
              Sign In
            </Button>
            <Button className="btn-gradient text-white font-medium px-6 py-2 rounded-full border-0 shadow-lg hover:shadow-xl group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Mobile Menu with Sheet */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="px-2">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <div className="space-y-2">
                  <h3 className="font-medium text-sm text-muted-foreground px-2">Demo Pages</h3>
                  {demoPages.map((page) => (
                    <a
                      key={page.title}
                      href={page.href}
                      className="flex items-center gap-3 px-2 py-3 rounded-lg hover:bg-accent transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <page.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{page.title}</div>
                        <p className="text-xs text-muted-foreground">
                          {page.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="border-t pt-4 space-y-2">
                  <a
                    href="#features"
                    className="block px-2 py-2 text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Features
                  </a>
                  <a
                    href="#pricing"
                    className="block px-2 py-2 text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pricing
                  </a>
                </div>
                <div className="border-t pt-4 space-y-3">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                  <Button className="w-full btn-gradient text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
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