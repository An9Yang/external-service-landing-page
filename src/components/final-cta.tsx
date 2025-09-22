/**
 * Step1 Combined CTA Section - Clean Horizontal Layout
 */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="py-20 bg-muted/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container-width"
      >
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Project CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Ready to start your project?
              </h2>
              <p className="text-muted-foreground">
                Let's build something extraordinary together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border"
              >
                Schedule a Call
              </Button>
            </div>
          </motion.div>

          {/* Right: Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Stay updated
              </h2>
              <p className="text-muted-foreground">
                Get insights and updates delivered to your inbox.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 h-11 border-border bg-background"
                />
              </div>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}