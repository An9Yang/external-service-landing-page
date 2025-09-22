/**
 * Step1 Use Cases - Visual-First Service Showcase
 */
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Monitor,
  Smartphone,
  Layers,
  Zap,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface UseCase {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  mockupType: 'desktop' | 'mobile' | 'both';
  primaryColor: string;
  gradient: string;
  features: string[];
  timeframe: string;
  popular?: boolean;
  preview: React.ReactNode;
}

const useCases: UseCase[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    subtitle: "Modern online store with full shopping experience",
    category: "Retail",
    description: "Complete e-commerce solution with product catalog, cart, and checkout",
    mockupType: 'desktop',
    primaryColor: 'text-blue-600',
    gradient: 'from-blue-50 to-indigo-50',
    features: ["Product Catalog", "Shopping Cart", "Payment Integration", "Order Tracking"],
    timeframe: "6-8 weeks",
    popular: true,
    preview: (
      <div className="w-full h-full bg-white rounded-lg shadow-inner p-3">
        {/* Mock Browser Bar */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 h-5 bg-gray-100 rounded-md"></div>
        </div>
        {/* Mock E-commerce Layout */}
        <div className="space-y-2">
          <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-md"></div>
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3].map(i => (
              <div key={i} className="space-y-1">
                <div className="h-20 bg-gray-100 rounded"></div>
                <div className="h-2 bg-gray-200 rounded"></div>
                <div className="h-2 bg-blue-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    subtitle: "Analytics & management platform",
    category: "Business",
    description: "Professional dashboard with real-time data visualization",
    mockupType: 'desktop',
    primaryColor: 'text-green-600',
    gradient: 'from-green-50 to-emerald-50',
    features: ["Data Analytics", "User Management", "Reports", "API Access"],
    timeframe: "8-10 weeks",
    preview: (
      <div className="w-full h-full bg-white rounded-lg shadow-inner p-3">
        {/* Mock Browser Bar */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 h-5 bg-gray-100 rounded-md"></div>
        </div>
        {/* Mock Dashboard */}
        <div className="flex gap-2">
          <div className="w-12 bg-gray-900 rounded-md"></div>
          <div className="flex-1 space-y-2">
            <div className="grid grid-cols-4 gap-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded p-2">
                  <div className="h-1 bg-green-300 rounded mb-1"></div>
                  <div className="h-6 bg-green-200 rounded"></div>
                </div>
              ))}
            </div>
            <div className="h-32 bg-gray-50 rounded-md p-2">
              <div className="h-full bg-gradient-to-t from-green-200 to-transparent rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Mobile App Landing",
    subtitle: "App showcase with download links",
    category: "Mobile",
    description: "Beautiful landing page for your mobile application",
    mockupType: 'mobile',
    primaryColor: 'text-purple-600',
    gradient: 'from-purple-50 to-pink-50',
    features: ["App Preview", "Feature List", "Download Links", "Reviews"],
    timeframe: "3-4 weeks",
    preview: (
      <div className="w-full h-full bg-gradient-to-b from-purple-50 to-pink-50 rounded-2xl p-4 flex items-center justify-center">
        {/* Mock Phone */}
        <div className="w-24 h-44 bg-gray-900 rounded-2xl p-1">
          <div className="w-full h-full bg-white rounded-2xl p-2">
            <div className="space-y-2">
              <div className="h-4 bg-purple-200 rounded"></div>
              <div className="h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded"></div>
              <div className="space-y-1">
                <div className="h-2 bg-gray-200 rounded"></div>
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
              </div>
              <div className="h-6 bg-purple-500 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Corporate Website",
    subtitle: "Professional business presence",
    category: "Corporate",
    description: "Enterprise-grade website with modern design",
    mockupType: 'desktop',
    primaryColor: 'text-indigo-600',
    gradient: 'from-slate-50 to-gray-50',
    features: ["Company Info", "Services", "Team", "Contact"],
    timeframe: "4-6 weeks",
    preview: (
      <div className="w-full h-full bg-white rounded-lg shadow-inner p-3">
        {/* Mock Browser Bar */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 h-5 bg-gray-100 rounded-md"></div>
        </div>
        {/* Mock Corporate Site */}
        <div className="space-y-2">
          <div className="h-8 bg-gray-900 rounded-md"></div>
          <div className="h-32 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-md"></div>
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3].map(i => (
              <div key={i} className="h-16 bg-gray-50 rounded border border-gray-200"></div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Learning Platform",
    subtitle: "Online education system",
    category: "Education",
    description: "Complete LMS with video courses and progress tracking",
    mockupType: 'desktop',
    primaryColor: 'text-orange-600',
    gradient: 'from-orange-50 to-yellow-50',
    features: ["Course Library", "Video Player", "Progress Tracking", "Certificates"],
    timeframe: "10-12 weeks",
    preview: (
      <div className="w-full h-full bg-white rounded-lg shadow-inner p-3">
        {/* Mock Browser Bar */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 h-5 bg-gray-100 rounded-md"></div>
        </div>
        {/* Mock Learning Platform */}
        <div className="flex gap-2">
          <div className="w-1/3 space-y-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="h-8 bg-orange-100 rounded flex items-center px-2">
                <div className="w-4 h-4 bg-orange-300 rounded"></div>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <div className="h-32 bg-gray-900 rounded-md mb-2"></div>
            <div className="h-4 bg-orange-200 rounded-full"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Portfolio Showcase",
    subtitle: "Creative work presentation",
    category: "Creative",
    description: "Stunning portfolio to showcase your creative work",
    mockupType: 'desktop',
    primaryColor: 'text-pink-600',
    gradient: 'from-pink-50 to-rose-50',
    features: ["Project Gallery", "Case Studies", "About Section", "Contact Form"],
    timeframe: "2-3 weeks",
    preview: (
      <div className="w-full h-full bg-white rounded-lg shadow-inner p-3">
        {/* Mock Browser Bar */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 h-5 bg-gray-100 rounded-md"></div>
        </div>
        {/* Mock Portfolio */}
        <div className="space-y-2">
          <div className="h-6 bg-gray-900 rounded-md"></div>
          <div className="grid grid-cols-2 gap-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="h-24 bg-gradient-to-br from-pink-100 to-rose-100 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }
];

export function UseCases() {
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);

  return (
    <section className="section-padding bg-muted/20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            See What We Can Build Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore real examples of what your project could look like.
            Each solution is tailored to deliver results.
          </p>
        </motion.div>

        {/* Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCase(useCase.id)}
              onMouseLeave={() => setHoveredCase(null)}
              className="group"
            >
              <Card className={cn(
                "relative overflow-hidden transition-all duration-300",
                "hover:shadow-2xl hover:-translate-y-2",
                "bg-white border-border/50"
              )}>
                {/* Popular Badge */}
                {useCase.popular && (
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-foreground text-background">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}

                {/* Visual Preview Section */}
                <div className={cn(
                  "relative h-64 bg-gradient-to-br p-6 overflow-hidden",
                  useCase.gradient
                )}>
                  {/* Device Frame */}
                  <div className="absolute inset-4">
                    <motion.div
                      animate={{
                        scale: hoveredCase === useCase.id ? 1.05 : 1,
                        rotateY: hoveredCase === useCase.id ? -5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ perspective: 1000 }}
                      className="w-full h-full"
                    >
                      {useCase.preview}
                    </motion.div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{
                      y: hoveredCase === useCase.id ? -5 : 0,
                      opacity: hoveredCase === useCase.id ? 1 : 0
                    }}
                    className="absolute top-4 left-4"
                  >
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-lg">
                      <Monitor className="w-4 h-4 text-foreground/70" />
                      <span className="text-xs font-medium">{useCase.category}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {useCase.subtitle}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <div className={cn("w-1 h-1 rounded-full", useCase.primaryColor, "opacity-60")} />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{useCase.timeframe}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group-hover:bg-foreground group-hover:text-background"
                    >
                      View Details
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground mb-6">
            <Layers className="w-4 h-4" />
            <p>Every project is unique. Let's create something amazing together.</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="lg" className="border-border">
              Browse All Templates
            </Button>
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
              Start Building
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}