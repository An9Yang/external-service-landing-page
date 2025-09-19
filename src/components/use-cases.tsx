/**
 * Step1 Use Cases - Service Capabilities Showcase
 */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import {
  Rocket,
  Building2,
  ShoppingCart,
  GraduationCap,
  Heart,
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface UseCase {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  targetAudience: string;
  timeframe: string;
  gradient: string;
  popular?: boolean;
}

const useCases: UseCase[] = [
  {
    id: 1,
    title: "Startup MVP Launch",
    subtitle: "From idea to market in 4 weeks",
    description: "Perfect for entrepreneurs looking to validate their ideas quickly with a professional web presence",
    icon: Rocket,
    features: [
      "Landing page design",
      "Product showcase",
      "User authentication",
      "Payment integration"
    ],
    targetAudience: "Startups & Founders",
    timeframe: "4-6 weeks",
    gradient: "from-gray-50 to-slate-50",
    popular: true
  },
  {
    id: 2,
    title: "Enterprise Digital Transformation",
    subtitle: "Modernize your business infrastructure",
    description: "Complete digital overhaul for established businesses ready to embrace modern technology",
    icon: Building2,
    features: [
      "Legacy system migration",
      "Custom dashboard",
      "API development",
      "Cloud deployment"
    ],
    targetAudience: "Large Corporations",
    timeframe: "3-6 months",
    gradient: "from-gray-50 to-zinc-50"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    subtitle: "Launch your online store",
    description: "Full-featured online shopping experience with inventory management and analytics",
    icon: ShoppingCart,
    features: [
      "Product catalog",
      "Shopping cart",
      "Payment processing",
      "Order management"
    ],
    targetAudience: "Retail Businesses",
    timeframe: "6-8 weeks",
    gradient: "from-gray-50 to-neutral-50"
  },
  {
    id: 4,
    title: "Educational Platform",
    subtitle: "Build your online academy",
    description: "Comprehensive learning management system for educators and training organizations",
    icon: GraduationCap,
    features: [
      "Course creation tools",
      "Student portal",
      "Video streaming",
      "Progress tracking"
    ],
    targetAudience: "Educators & Trainers",
    timeframe: "8-10 weeks",
    gradient: "from-gray-50 to-stone-50"
  },
  {
    id: 5,
    title: "Healthcare Solutions",
    subtitle: "Digital health made simple",
    description: "HIPAA-compliant platforms for healthcare providers and medical practices",
    icon: Heart,
    features: [
      "Patient portal",
      "Appointment booking",
      "Telemedicine features",
      "Medical records"
    ],
    targetAudience: "Healthcare Providers",
    timeframe: "10-12 weeks",
    gradient: "from-gray-50 to-slate-50"
  },
  {
    id: 6,
    title: "Community Platform",
    subtitle: "Connect and engage your audience",
    description: "Social features and community tools to build and manage your online community",
    icon: Users,
    features: [
      "User profiles",
      "Forums & discussions",
      "Event management",
      "Content sharing"
    ],
    targetAudience: "Organizations & Groups",
    timeframe: "6-8 weeks",
    gradient: "from-gray-50 to-zinc-50"
  }
];

export function UseCases() {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Use Cases
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're a startup, enterprise, or anywhere in between,
            we have the expertise to bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={cn(
                "h-full hover:shadow-lg transition-all duration-300 cursor-pointer group relative overflow-hidden",
                "hover:-translate-y-1"
              )}>
                {useCase.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="outline" className="border-primary text-primary">
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Background Gradient */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-30",
                  useCase.gradient
                )} />

                <CardHeader className="relative">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-white shadow-sm rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <useCase.icon className="h-6 w-6 text-foreground/70" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">
                    {useCase.subtitle}
                  </p>
                  <CardDescription className="mt-2">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  {/* Features */}
                  <div>
                    <h4 className="text-xs font-medium text-muted-foreground mb-2">
                      What's Included:
                    </h4>
                    <ul className="space-y-1">
                      {useCase.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-3.5 w-3.5 text-foreground/40 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meta Info */}
                  <div className="pt-4 border-t border-border/50 grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-muted-foreground">For</div>
                      <div className="text-sm font-medium">{useCase.targetAudience}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Timeline</div>
                      <div className="text-sm font-medium">{useCase.timeframe}</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-muted"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
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
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Don't see your use case? We offer custom solutions for unique requirements.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" className="border-border">
              View All Solutions
            </Button>
            <Button className="bg-foreground text-background hover:bg-foreground/90">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}