/**
 * Payzo 产品展示区域组件
 * 展示 5 个网站模板预览 - 真正的衔尾蛇无限轮播效果
 */
import { Card } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";

interface ProductTemplate {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  bgColor: string;
}

const templates: ProductTemplate[] = [
  {
    id: 1,
    title: "All",
    description: "Complete website template",
    imageUrl: "/api/placeholder/300/400",
    bgColor: "bg-slate-50"
  },
  {
    id: 2,
    title: "Integrate with 100+ tools",
    description: "Integration dashboard",
    imageUrl: "/api/placeholder/300/400",
    bgColor: "bg-white"
  },
  {
    id: 3,
    title: "We're An Award Winning Finance Company",
    description: "About page template",
    imageUrl: "/api/placeholder/300/400",
    bgColor: "bg-white"
  },
  {
    id: 4,
    title: "Banking made easy for busy professionals",
    description: "Hero section template",
    imageUrl: "/api/placeholder/300/400",
    bgColor: "bg-teal-600"
  },
  {
    id: 5,
    title: "A complete payment gateway solution for your business",
    description: "Payment template",
    imageUrl: "/api/placeholder/300/400",
    bgColor: "bg-white"
  }
];

export function ProductShowcase() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 创建无限循环的卡片数组：原始序列重复多次，确保无缝循环
  const infiniteTemplates = [...templates, ...templates, ...templates];
  
  const cardWidth = 280; // 卡片宽度 + 间距
  const totalOriginalWidth = templates.length * cardWidth;
  
  // 衔尾蛇无限滚动效果
  useEffect(() => {
    if (isHovered) return; // 鼠标悬停时暂停
    
    const interval = setInterval(() => {
      setCurrentPosition(prev => {
        const newPosition = prev + 1; // 每次移动1px，丝滑滚动
        
        // 当滚动超过第一个完整序列时，重置到开始位置
        // 这样就实现了真正的无缝循环
        if (newPosition >= totalOriginalWidth) {
          return 0;
        }
        
        return newPosition;
      });
    }, 16); // 60fps
    
    return () => clearInterval(interval);
  }, [isHovered, totalOriginalWidth]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 产品模板轮播容器 */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={containerRef}
            className="flex gap-4 will-change-transform"
            style={{
              transform: `translateX(-${currentPosition}px)`,
              width: `${infiniteTemplates.length * cardWidth}px`
            }}
          >
            {infiniteTemplates.map((template, index) => (
              <Card 
                key={`${template.id}-${Math.floor(index / templates.length)}-${index}`}
                className="hover-lift cursor-pointer border border-border-light rounded-2xl overflow-hidden flex-shrink-0 w-64 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className={`aspect-[3/4] ${template.bgColor} relative overflow-hidden p-4`}>
                  {/* Card 1 - All */}
                  {template.id === 1 && (
                    <div className="h-full flex flex-col items-center justify-center text-center">
                      <div className="text-lg font-semibold text-slate-900 mb-8">All</div>
                      <div className="w-16 h-16 bg-slate-300 rounded-lg mb-8 flex items-center justify-center">
                        <div className="w-8 h-8 bg-slate-500 rounded"></div>
                      </div>
                      <div className="text-2xl font-bold text-slate-900">$59</div>
                    </div>
                  )}

                  {/* Card 2 - Integration */}
                  {template.id === 2 && (
                    <div className="h-full p-4">
                      <div className="text-base font-semibold text-slate-900 mb-6">
                        Integrate with 100+ tools
                      </div>
                      
                      {/* Tool icons row */}
                      <div className="flex gap-2 mb-6">
                        <div className="w-6 h-6 bg-blue-500 rounded"></div>
                        <div className="w-6 h-6 bg-red-500 rounded"></div>
                        <div className="w-6 h-6 bg-orange-500 rounded"></div>
                        <div className="w-6 h-6 bg-purple-500 rounded"></div>
                      </div>

                      {/* Integration grid */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="h-10 bg-slate-100 rounded border flex items-center justify-center">
                            <div className="w-4 h-4 bg-slate-400 rounded"></div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="text-xs text-slate-600 text-center">
                        Have more questions?<br />
                        Don't hesitate to reach us
                      </div>
                    </div>
                  )}

                  {/* Card 3 - About */}
                  {template.id === 3 && (
                    <div className="h-full flex flex-col">
                      <div className="text-base font-semibold text-slate-900 mb-4 text-center">
                        We're An Award Winning Finance Company
                      </div>
                      
                      {/* Team image placeholder */}
                      <div className="flex-1 bg-slate-200 rounded-lg mb-3 relative overflow-hidden">
                        {/* 模拟团队照片 */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400"></div>
                        <div className="absolute bottom-0 left-0 right-0 bg-teal-600 text-white p-2 text-xs text-center">
                          The numbers reflect our reputation.
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Card 4 - Banking */}
                  {template.id === 4 && (
                    <div className="h-full bg-teal-600 text-white p-4 flex flex-col">
                      <div className="text-base font-semibold mb-6">
                        Banking made easy for busy professionals.
                      </div>
                      
                      {/* Banking card */}
                      <div className="bg-white/20 rounded-lg p-4 mb-4 backdrop-blur-sm">
                        <div className="text-xl font-bold mb-1">$52.49</div>
                        <div className="text-xs opacity-90">Goal: 75%+ 92+</div>
                      </div>
                      
                      <div className="text-xs opacity-90 mb-4">
                        Super convenient online banking
                      </div>
                      
                      {/* Feature icons */}
                      <div className="grid grid-cols-3 gap-2 mt-auto">
                        <div className="h-8 bg-white/20 rounded flex items-center justify-center">
                          <div className="w-4 h-4 bg-white/60 rounded"></div>
                        </div>
                        <div className="h-8 bg-white/20 rounded flex items-center justify-center">
                          <div className="w-4 h-4 bg-white/60 rounded"></div>
                        </div>
                        <div className="h-8 bg-white/20 rounded flex items-center justify-center">
                          <div className="w-4 h-4 bg-white/60 rounded"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Card 5 - Payment Gateway */}
                  {template.id === 5 && (
                    <div className="h-full p-4">
                      <div className="text-base font-semibold text-slate-900 mb-6">
                        A complete payment getaway solution for your business
                      </div>
                      
                      {/* Payment form simulation */}
                      <div className="space-y-3 mb-6">
                        <div className="h-8 bg-slate-100 rounded border"></div>
                        <div className="h-8 bg-slate-100 rounded border"></div>
                        <div className="h-8 bg-brand-gradient-start text-white rounded flex items-center justify-center text-sm font-medium">
                          Submit Payment
                        </div>
                      </div>
                      
                      {/* Stats */}
                      <div className="text-xs text-slate-600 flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        </div>
                        <span>We've worked with 200+ projects with 500+ clients</span>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}