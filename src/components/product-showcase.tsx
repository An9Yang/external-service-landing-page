/**
 * Payzo Enhanced Product Showcase Component
 * Infinite conveyor belt animation - Ouroboros style
 */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Zap
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Triple the templates for seamless infinite scroll
  const infiniteTemplates = [...templates, ...templates, ...templates];

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

        {/* Infinite Conveyor Belt Container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Masks for Smooth Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="relative">
            <div
              className={cn(
                "flex gap-6 py-4",
                isPaused ? "" : "animate-[infiniteScroll_40s_linear_infinite]"
              )}
              style={{
                width: `calc(${infiniteTemplates.length} * 312px)`,
              }}
            >
              {infiniteTemplates.map((template, index) => (
                <TemplateCard
                  key={`${template.id}-${Math.floor(index / templates.length)}-${index}`}
                  template={template}
                  index={index}
                  hoveredId={hoveredId}
                  setHoveredId={setHoveredId}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Interaction Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-3 mt-8"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <p className="text-sm text-muted-foreground">
              {isPaused ? "Scroll paused - Explore features" : "Hover to pause and explore"}
            </p>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-1.5 mt-4">
          {templates.map((_, idx) => (
            <motion.div
              key={idx}
              className="h-1 rounded-full bg-border overflow-hidden"
              initial={{ width: 6 }}
              animate={{ width: 6 }}
            >
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ x: "-100%" }}
                animate={{ x: isPaused ? "-100%" : "0%" }}
                transition={{
                  duration: 5,
                  delay: idx * (40 / templates.length),
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Separate component for template cards
function TemplateCard({
  template,
  index,
  hoveredId,
  setHoveredId,
}: {
  template: ProductTemplate;
  index: number;
  hoveredId: number | null;
  setHoveredId: (id: number | null) => void;
}) {
  const isHovered = hoveredId === template.id;

  return (
    <motion.div
      className="flex-shrink-0 w-[288px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 8) * 0.05 }}
      onMouseEnter={() => setHoveredId(template.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <Card className="h-full card-hover relative overflow-hidden group cursor-pointer">
        {/* Background Gradient Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
            template.gradient,
            isHovered && "opacity-5"
          )}
        />

        {/* Badge */}
        {template.badge && (
          <div className="absolute top-4 right-4 z-[5]">
            <Badge variant="secondary" className="text-xs shadow-sm">
              {template.badge}
            </Badge>
          </div>
        )}

        <CardHeader>
          {/* Icon */}
          <motion.div
            className="mb-4"
            animate={isHovered ? { scale: 1.1, rotate: 3 } : { scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className={cn(
              "w-12 h-12 rounded-lg bg-gradient-to-br p-2.5 text-white shadow-lg",
              template.gradient
            )}>
              <template.icon className="w-full h-full" />
            </div>
          </motion.div>

          <CardTitle className="text-lg line-clamp-1">{template.title}</CardTitle>
          <CardDescription className="text-sm line-clamp-2">
            {template.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Features */}
          <div className="space-y-2">
            {template.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0.7, x: 0 }}
                animate={{
                  opacity: isHovered ? 1 : 0.7,
                  x: isHovered ? 4 : 0
                }}
                transition={{ delay: idx * 0.05, duration: 0.2 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <div className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300",
                  isHovered ? "bg-primary scale-125" : "bg-border"
                )} />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <span>Learn more</span>
              <motion.span
                animate={isHovered ? { x: [0, 5, 0] } : { x: 0 }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </div>
          </motion.div>
        </CardContent>

        {/* Hover Border Effect */}
        <motion.div
          className="absolute inset-0 border-2 border-primary/30 rounded-lg pointer-events-none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.95
          }}
          transition={{ duration: 0.2 }}
        />
      </Card>
    </motion.div>
  );
}