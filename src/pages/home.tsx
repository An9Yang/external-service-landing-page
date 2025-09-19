/**
 * Payzo 网站主页 - 100% 还原设计
 * 实现完整的 Payzo 金融科技网站布局和功能
 */
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProductShowcase } from "@/components/product-showcase";
import { StatsSection } from "@/components/stats-section";
import { UseCases } from "@/components/use-cases";
import { FinalCTA } from "@/components/final-cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* 导航栏 */}
      <Header />

      {/* 主内容区域 */}
      <main>
        {/* Hero 区域 */}
        <HeroSection />

        {/* 产品展示区域 - 5个模板预览 */}
        <ProductShowcase />

        {/* 统计数据区域 */}
        <StatsSection />

        {/* Use Cases - 展示服务能力 */}
        <UseCases />

        {/* 最终 CTA 区域 */}
        <FinalCTA />
      </main>
    </div>
  );
}