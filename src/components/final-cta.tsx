/**
 * Step1 Final CTA Section
 * Call-to-action for outsourcing services
 */
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 主标题 */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Build Your Next Project?
        </h2>

        {/* 说明文字 */}
        <p className="text-lg sm:text-xl text-background/80 mb-10 max-w-2xl mx-auto">
          Let's turn your ideas into reality. Get started with our expert development team today.
        </p>

        {/* CTA 按钮 */}
        <Button className="bg-background text-foreground hover:bg-background/90 font-medium px-8 py-4 rounded-full border-0 text-lg h-auto">
          Start Your Project
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </section>
  );
}