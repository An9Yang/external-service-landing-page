/**
 * Step1 Hero Section - Professional Outsourcing Agency
 */
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Code,
  Users,
  Star,
  TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Clock,
    label: "Fast Delivery",
    description: "2-8 weeks turnaround"
  },
  {
    icon: Code,
    label: "Expert Developers",
    description: "Senior engineers only"
  },
  {
    icon: TrendingUp,
    label: "Scalable Solutions",
    description: "Grow with your business"
  }
];

const services = [
  "Web Development",
  "E-commerce",
  "SaaS Platforms",
  "Mobile Apps",
  "API Development",
  "UI/UX Design"
];

export function HeroSection() {
  return (
    <section className="relative section-padding bg-background">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.3]" />

      <div className="container-width relative">
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
              Trusted by 100+ Companies Worldwide
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
              Your Trusted Partner for
              <span className="block text-muted-foreground mt-2">
                Professional Web Development
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              We're a specialized outsourcing agency that transforms your ideas into
              exceptional digital products. From startups to enterprises, we deliver
              custom web solutions that drive results.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8">
              View Our Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-border px-8">
              Get a Quote
            </Button>
          </motion.div>

          {/* Service Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {services.map((service, index) => (
              <motion.span
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="px-4 py-2 bg-muted/50 rounded-full text-sm text-muted-foreground border border-border/50"
              >
                {service}
              </motion.span>
            ))}
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
                <div className="p-6 rounded-xl bg-muted/20 border border-border/50 hover:border-border transition-all">
                  <feature.icon className="w-8 h-8 text-foreground/70 mb-3" />
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

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="pt-8 border-t border-border/50"
          >
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-muted-foreground">150+ Projects Delivered</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-foreground/60" />
                <span className="text-muted-foreground">50+ Active Clients</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-foreground/60 text-foreground/60" />
                <span className="text-muted-foreground">4.9/5 Rating</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}