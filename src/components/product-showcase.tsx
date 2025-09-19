/**
 * Payzo Enhanced Product Showcase Component
 * Modern carousel with shadcn/ui Carousel component
 */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import {
  CreditCard,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Users,
  TrendingUp,
  Wallet,
  Lock,
  Zap
} from "lucide-react";
import { useState } from "react";

interface ProductTemplate {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  badge?: string;
  gradient: string;
}

const templates: ProductTemplate[] = [
  {
    id: 1,
    title: "Complete Dashboard",
    description: "Full-featured financial dashboard with real-time analytics",
    icon: BarChart3,
    features: ["Real-time data", "Custom widgets", "Dark mode"],
    badge: "Most Popular",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Payment Gateway",
    description: "Secure payment processing with multiple providers",
    icon: CreditCard,
    features: ["PCI compliant", "Multi-currency", "Fraud detection"],
    badge: "Enterprise",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Mobile Banking",
    description: "Complete mobile banking solution for iOS & Android",
    icon: Smartphone,
    features: ["Biometric auth", "Push notifications", "Offline mode"],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "International Transfers",
    description: "Global money transfers with competitive rates",
    icon: Globe,
    features: ["150+ countries", "Real-time rates", "Low fees"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Business Analytics",
    description: "Advanced analytics and reporting tools",
    icon: TrendingUp,
    features: ["AI insights", "Custom reports", "Data export"],
    badge: "New",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Digital Wallet",
    description: "Secure digital wallet with card management",
    icon: Wallet,
    features: ["Virtual cards", "Contactless pay", "Rewards"],
    gradient: "from-teal-500 to-green-500"
  },
  {
    id: 7,
    title: "KYC & Compliance",
    description: "Automated KYC and AML compliance tools",
    icon: Shield,
    features: ["ID verification", "Risk scoring", "Regulatory reports"],
    gradient: "from-red-500 to-pink-500"
  },
  {
    id: 8,
    title: "Team Management",
    description: "Multi-user access with role-based permissions",
    icon: Users,
    features: ["Role management", "Audit logs", "SSO support"],
    gradient: "from-blue-500 to-indigo-500"
  }
];

export function ProductShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gradient-to-b from-background to-accent/20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">
            <Zap className="w-3 h-3 mr-1" />
            Features
          </Badge>
          <h2 className="heading-2 text-foreground mb-4">
            Everything you need to build a
            <span className="text-gradient"> modern fintech</span>
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of pre-built templates and components
            designed specifically for financial applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {templates.map((template, index) => (
                <CarouselItem key={template.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredId(template.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="h-full"
                  >
                    <Card className="h-full card-hover relative overflow-hidden group">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                      {template.badge && (
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="text-xs">
                            {template.badge}
                          </Badge>
                        </div>
                      )}

                      <CardHeader>
                        <div className="mb-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${template.gradient} p-2.5 text-white shadow-lg transform transition-transform duration-300 ${hoveredId === template.id ? 'scale-110 rotate-3' : ''}`}>
                            <template.icon className="w-full h-full" />
                          </div>
                        </div>
                        <CardTitle className="text-lg">{template.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {template.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          {template.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{
                                opacity: hoveredId === template.id ? 1 : 0.7,
                                x: hoveredId === template.id ? 0 : -10
                              }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Interactive Element */}
                        <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex items-center gap-2 text-sm font-medium text-primary">
                            <span>Learn more</span>
                            <motion.div
                              animate={{ x: hoveredId === template.id ? [0, 5, 0] : 0 }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              →
                            </motion.div>
                          </div>
                        </div>
                      </CardContent>

                      {/* Animated Border */}
                      <motion.div
                        className="absolute inset-0 border-2 border-primary/20 rounded-lg pointer-events-none"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: hoveredId === template.id ? 1 : 0,
                          scale: hoveredId === template.id ? 1 : 0.8
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>

        {/* Mobile Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-2 mt-8 md:hidden"
        >
          <div className="text-sm text-muted-foreground">Swipe to explore</div>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            →
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}