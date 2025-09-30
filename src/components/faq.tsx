/**
 * FAQ Section - Address Common Concerns
 */
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long is the project delivery cycle?",
    answer: "Personal portfolios typically deliver in 7-10 days, client portals need 14-21 days. We provide detailed schedules and share Gantt charts before launch."
  },
  {
    question: "How to maintain after going live?",
    answer: "We provide launch training and 14-day accompaniment, delivering operation guides. You can directly edit content in Notion / Airtable, and the website will automatically sync."
  },
  {
    question: "Do you support payments, bookings and other third-party tools?",
    answer: "Yes. Common tools like Stripe, Calendly, Zapier, Slack, Gmail can all be integrated at once, costs are included in the plan."
  },
  {
    question: "What if I need more custom features?",
    answer: "You can add hourly or monthly cooperation, such as multi-language versions, complex automation processes, data visualization and other advanced needs."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="min-h-screen flex items-center py-20 bg-background">
      <div className="container-width w-full">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick Answers to Your Questions
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={faq.question} 
                value={`faq-${index}`} 
                className="border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}