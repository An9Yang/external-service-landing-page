/**
 * Payzo 网站主 Hero 区域组件
 * 包含主标题、副标题、描述文字和双按钮布局
 */
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* 主标题 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Launch a fintech website in
            <br />
            <span className="text-slate-900">days, not weeks</span>
          </h1>

          {/* 副标题 */}
          <p className="text-lg sm:text-xl text-foreground-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Build and ship your next fintech website super fast inside Framer.
          </p>

          {/* 双按钮布局 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button className="btn-gradient text-white font-medium px-8 py-3 rounded-full border-0 text-lg h-auto">
              Get This Template
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-gradient font-medium px-8 py-3 rounded-full text-lg h-auto border-border-light text-slate-700"
            >
              Explore Demos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}