/**
 * Payzo 最终 CTA 区域组件
 * 深色背景的 "Get Payzo for Lifetime" 区域
 */
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 bg-teal-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 主标题 */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Get Payzo for Lifetime
        </h2>

        {/* 说明文字 */}
        <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          A single license includes lifetime free support + free lifetime updates.
        </p>

        {/* CTA 按钮 */}
        <Button className="btn-gradient text-white font-medium px-8 py-4 rounded-full border-0 text-lg h-auto">
          Get This Template
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </section>
  );
}