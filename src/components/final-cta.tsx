/**
 * Final CTA Section - Pure Conversion Component (English Only)
 */
import { Button } from "@/components/ui/button";
import { Mail, CalendarClock } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-foreground text-background">
      <div className="container-width w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make Your Website Self-Updating?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute consultation. We'll review your Notion / Airtable structure
            and provide the best delivery plan and timeline.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 px-8 h-12"
              asChild
            >
              <a href="https://calendly.com/step1/discovery" target="_blank" rel="noreferrer">
                <CalendarClock className="w-5 h-5 mr-2" />
                Book 30-Min Free Consultation
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background text-background hover:bg-background hover:text-foreground px-8 h-12"
              asChild
            >
              <a href="mailto:outsourcing@step1.so">
                <Mail className="w-5 h-5 mr-2" />
                Send Project Request
              </a>
            </Button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}