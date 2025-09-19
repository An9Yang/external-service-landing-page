/**
 * Payzo Enhanced Hero Section
 * Modern hero with animations and gradient effects
 */
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, PlayCircle, CheckCircle, Star } from "lucide-react";
import { motion } from "motion/react";

const features = [
  "No credit card required",
  "14-day free trial",
  "Cancel anytime"
];

export function HeroSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container-width relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <Badge variant="outline" className="px-4 py-1.5 border-primary/20 bg-primary/5">
              <Star className="w-3 h-3 mr-1 text-primary fill-primary" />
              <span className="text-sm font-medium">Trusted by 10,000+ businesses</span>
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-hero text-foreground"
          >
            Launch a fintech website in
            <br />
            <span className="text-gradient-animated">days, not weeks</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="body-large text-muted-foreground max-w-2xl mx-auto"
          >
            Build and ship your next fintech website super fast with our modern,
            secure, and scalable components. Perfect for startups and enterprises.
          </motion.p>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="btn-gradient text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl group min-w-[200px]"
            >
              <span className="relative z-10">Get Started Free</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-full hover:bg-accent border-2 group min-w-[200px]"
            >
              <PlayCircle className="mr-2 h-5 w-5 text-primary" />
              Watch Demo
              <div className="ml-2 text-muted-foreground">(2 min)</div>
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground ml-2">
                Join <span className="font-semibold text-foreground">2,450+</span> happy customers
              </span>
            </div>

            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                4.9/5 from 500+ reviews
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Optional: Hero Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Dashboard Preview Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
              <div className="relative p-8">
                {/* Mock Dashboard UI */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/50 backdrop-blur rounded-xl p-6 border border-border/50">
                    <div className="h-4 w-24 bg-primary/20 rounded mb-2" />
                    <div className="h-8 w-32 bg-primary/30 rounded" />
                  </div>
                  <div className="bg-white/50 backdrop-blur rounded-xl p-6 border border-border/50">
                    <div className="h-4 w-24 bg-secondary/20 rounded mb-2" />
                    <div className="h-8 w-32 bg-secondary/30 rounded" />
                  </div>
                  <div className="bg-white/50 backdrop-blur rounded-xl p-6 border border-border/50">
                    <div className="h-4 w-24 bg-primary/20 rounded mb-2" />
                    <div className="h-8 w-32 bg-primary/30 rounded" />
                  </div>
                </div>

                <div className="mt-6 bg-white/50 backdrop-blur rounded-xl p-6 border border-border/50">
                  <div className="h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-border/50"
            >
              <CheckCircle className="w-6 h-6 text-green-500 mb-2" />
              <div className="text-xs font-medium">Payment Successful</div>
              <div className="text-xs text-muted-foreground">$1,250.00</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-border/50"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full" />
                <div>
                  <div className="text-xs font-medium">New Customer</div>
                  <div className="text-xs text-muted-foreground">John Doe</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}