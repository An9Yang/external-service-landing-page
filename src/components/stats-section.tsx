/**
 * Payzo 统计数据区域组件
 * 展示 17 Unique Pages, 38+ Sections & Blocks, Figma File Included
 */
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

interface StatItem {
  number: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const stats: StatItem[] = [
  {
    number: "17",
    title: "Unique Pages",
    description: "Ready to use pages to launch your website fast."
  },
  {
    number: "38+",
    title: "Sections & Blocks",
    description: "Build unique pages with simple drag and drop."
  },
  {
    number: "",
    title: "Figma File Included",
    description: "Send us an email to hello@framerbite.com with your purchase receipt, and we will send you the editable Figma file for our template.",
    icon: (
      <div className="w-12 h-12 mb-4">
        <div className="w-full h-full bg-orange-500 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-sm"></div>
        </div>
      </div>
    )
  }
];

export function StatsSection() {
  return (
    <section className="py-16 bg-surface border-y border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-left">
              {/* 数字和图标 */}
              <div className="mb-6">
                {stat.icon ? (
                  stat.icon
                ) : (
                  <div className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
                    {stat.number}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-slate-900">
                  {stat.title}
                </h3>
              </div>

              {/* 描述 */}
              <p className="text-foreground-secondary leading-relaxed">
                {stat.description}
              </p>

              {/* 邮件链接（仅 Figma 卡片） */}
              {stat.title === "Figma File Included" && (
                <div className="mt-4">
                  <a 
                    href="mailto:hello@framerbite.com" 
                    className="inline-flex items-center text-brand-primary hover:text-brand-gradient-end font-medium transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    hello@framerbite.com
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}