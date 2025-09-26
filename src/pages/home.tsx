/**
 * Step1 外包建站服务介绍页
 * 保持原有视觉动效，仅更新内容结构和文案
 */
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ClientShowcase } from "@/components/client-showcase";
import { Testimonials } from "@/components/testimonials";
import { ValueProp } from "@/components/value-prop";
import { UseCases } from "@/components/use-cases";
import { FAQSection } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* 导航栏 */}
      <Header />

      {/* 主内容区域 */}
      <main>
        {/* Hero 区域 */}
        <HeroSection />

        {/* 客户案例展示 - Social Proof First */}
        <ClientShowcase />

        {/* 客户评价 - 三列垂直滚动 */}
        <Testimonials />

        {/* 核心价值阐述 */}
        <ValueProp />

        {/* 服务方案与定价 */}
        <UseCases />

        {/* 常见问题解答 */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
