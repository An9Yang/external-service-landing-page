/**
 * Step1 Use Cases - Clean Pricing Cards
 */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Check, Star, Clock, Palette, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface UseCase {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  popular?: boolean;
  icon: React.ElementType;
  features: string[];
  timeframe: string;
  category: string;
  buyUrl: string;
  bookUrl: string;
}

const useCases: UseCase[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    subtitle: "For Creators & Freelancers",
    price: "$9.9",
    popular: true,
    icon: Palette,
    features: [
      "Real-time Notion content sync",
      "Portfolio showcase gallery", 
      "Stripe payment integration",
      "Calendly booking system",
      "Basic SEO optimization",
      "Responsive design"
    ],
    timeframe: "7-10 days delivery",
    category: "Powered by Notion",
    buyUrl: "https://buy.stripe.com/portfolio",
    bookUrl: "https://calendly.com/step1/portfolio"
  },
  {
    id: 2,
    title: "Client Portal",
    subtitle: "For Agencies & Consultants", 
    price: "$199",
    icon: Users,
    features: [
      "Multi-user access control",
      "Project progress boards",
      "Automated email reminders", 
      "Document library",
      "Invoice & billing management",
      "Third-party integrations"
    ],
    timeframe: "14-21 days delivery",
    category: "Powered by Airtable",
    buyUrl: "https://buy.stripe.com/portal",
    bookUrl: "https://calendly.com/step1/portal"
  }
];

export function UseCases() {
  return (
    <section id="pricing" className="min-h-screen flex items-center py-20 bg-background">
      <div className="container-width w-full">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-muted-foreground">
              Find the Perfect Solution for Your Needs
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300",
                useCase.popular && "ring-2 ring-primary/20 shadow-lg"
              )}
            >
              {useCase.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {useCase.subtitle}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {useCase.category}
                  </Badge>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-foreground">
                    {useCase.price}
                  </span>
                  {useCase.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {useCase.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {useCase.timeframe}
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {useCase.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90" 
                  asChild
                >
                  <a href={useCase.buyUrl} target="_blank" rel="noreferrer">
                    Buy Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  asChild
                >
                  <a href={useCase.bookUrl} target="_blank" rel="noreferrer">
                    Book a Call
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}