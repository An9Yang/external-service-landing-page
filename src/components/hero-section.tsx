/**
 * Step1 Hero Section - Professional Outsourcing Agency (English Only)
 */
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Clock,
  Code,
  Star,
  TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const features = [
    {
      icon: Clock,
      label: "7-14 Days Online",
      description: "Standardized process, fastest two-week delivery for personal portfolios or client portals",
      iconColor: "text-blue-500"
    },
    {
      icon: Code,
      label: "Zero-Code Maintenance",
      description: "Update content directly in Notion / Airtable after launch, instant sync",
      iconColor: "text-green-500"
    },
    {
      icon: TrendingUp,
      label: "Multi-Channel Integration",
      description: "Stripe payments, Calendly booking, automated reminders configured once",
      iconColor: "text-purple-500"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 bg-background">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.3]" />

      <div className="container-width relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-block"
          >
            <Badge variant="outline" className="px-4 py-1.5 border-border/60">
              <Star className="w-3.5 h-3.5 mr-1.5 fill-foreground/60 text-foreground/60" />
              Notion / Airtable Website Experts
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight"
            >
              Stop waiting for developers.
              <span className="block text-muted-foreground mt-2">
                Your website, your updates.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              We handle the setup and integration to seamlessly sync your Notion / Airtable content to your website. No coding required, maintain your site like editing a document.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 px-8"
              asChild
            >
              <a href="#case-studies">
                See Our Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-border px-8" asChild>
              <a href="#plans">View Service Plans</a>
            </Button>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 pt-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-xl bg-muted/20 border border-border/50 hover:border-border hover:shadow-md transition-all duration-300">
                  <feature.icon className={`w-8 h-8 ${feature.iconColor} mb-3`} />
                  <h3 className="font-semibold text-foreground mb-1">
                    {feature.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}