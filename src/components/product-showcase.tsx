/**
 * Step1 Product Showcase - Notion-style Minimal Carousel
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
  Sparkles,
  Folder,
  FileText,
  Palette,
  Database,
  Code2,
  Layers,
  BookOpen
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductTemplate {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  category: string;
  badge?: string;
  color: string;
}

const templates: ProductTemplate[] = [
  {
    id: 1,
    title: "Landing Page",
    description: "Beautiful landing pages that convert visitors into customers",
    icon: Globe,
    category: "Website",
    badge: "Popular",
    color: "text-green-600"
  },
  {
    id: 2,
    title: "Portfolio",
    description: "Showcase your work with stunning portfolio templates",
    icon: Folder,
    category: "Personal",
    color: "text-blue-600"
  },
  {
    id: 3,
    title: "Notion Blog",
    description: "Turn your Notion pages into a beautiful blog",
    icon: FileText,
    category: "Content",
    badge: "New",
    color: "text-orange-600"
  },
  {
    id: 4,
    title: "Dashboard",
    description: "Analytics and data visualization made simple",
    icon: BarChart3,
    category: "Analytics",
    color: "text-purple-600"
  },
  {
    id: 5,
    title: "Documentation",
    description: "Clear and organized documentation for your projects",
    icon: BookOpen,
    category: "Docs",
    color: "text-indigo-600"
  },
  {
    id: 6,
    title: "E-commerce",
    description: "Online store with payments and inventory management",
    icon: CreditCard,
    category: "Business",
    color: "text-pink-600"
  },
  {
    id: 7,
    title: "Database",
    description: "Structured data management with Notion as backend",
    icon: Database,
    category: "Data",
    color: "text-teal-600"
  },
  {
    id: 8,
    title: "Design System",
    description: "Component library and design tokens for consistency",
    icon: Layers,
    category: "Design",
    badge: "Pro",
    color: "text-rose-600"
  }
];

export function ProductShowcase() {
  const [isPaused, setIsPaused] = useState(false);
  const infiniteTemplates = [...templates, ...templates, ...templates];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Start with professionally designed templates and customize them to match your vision
          </p>
        </motion.div>

        {/* Infinite Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="relative">
            <div
              className={cn(
                "flex gap-4 py-4",
                isPaused ? "" : "animate-[infiniteScroll_50s_linear_infinite]"
              )}
              style={{
                width: `calc(${infiniteTemplates.length} * 280px)`,
              }}
            >
              {infiniteTemplates.map((template, index) => (
                <TemplateCard
                  key={`${template.id}-${Math.floor(index / templates.length)}`}
                  template={template}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Hover Hint */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground">
            {isPaused ? "Exploring templates" : "Hover to pause • Click to preview"}
          </p>
        </div>
      </div>
    </section>
  );
}

// Template Card Component
function TemplateCard({ template, index }: { template: ProductTemplate; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex-shrink-0 w-[260px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className={cn(
        "h-full bg-white border-border/50 transition-all duration-200 cursor-pointer",
        isHovered && "shadow-md border-border"
      )}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between mb-3">
            <div className={cn(
              "p-2 rounded-lg transition-colors",
              isHovered ? "bg-muted" : "bg-muted/50"
            )}>
              <template.icon className={cn("h-5 w-5", template.color)} />
            </div>
            {template.badge && (
              <Badge variant="secondary" className="text-xs">
                {template.badge}
              </Badge>
            )}
          </div>
          <CardTitle className="text-base font-medium text-foreground">
            {template.title}
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground line-clamp-2">
            {template.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {template.category}
            </span>
            <motion.div
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-1 text-xs text-primary"
            >
              <span>View</span>
              <motion.span
                animate={{ x: isHovered ? 2 : 0 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </motion.div>
          </div>

          {/* Mini Preview */}
          <div className="mt-3 p-3 bg-muted/30 rounded-lg">
            <div className="space-y-2">
              <div className="h-1.5 bg-muted rounded-full w-3/4" />
              <div className="h-1.5 bg-muted rounded-full w-1/2" />
              <div className="h-1.5 bg-muted rounded-full w-2/3" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}