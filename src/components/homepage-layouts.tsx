/**
 * Payzo 主页布局展示组件
 * 展示 3 个 Homepage 布局预览
 */
import { Card } from "@/components/ui/card";

interface HomepageLayout {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  bgColor: string;
}

const layouts: HomepageLayout[] = [
  {
    id: 1,
    title: "Homepage 01",
    subtitle: "Banking made easy for busy professionals",
    imageUrl: "/api/placeholder/400/300",
    bgColor: "bg-teal-600"
  },
  {
    id: 2,
    title: "Homepage 02", 
    subtitle: "A complete payment getaway solution for your business",
    imageUrl: "/api/placeholder/400/300",
    bgColor: "bg-white"
  },
  {
    id: 3,
    title: "Homepage 03",
    subtitle: "Save and invest for your long-term retirement",
    imageUrl: "/api/placeholder/400/300", 
    bgColor: "bg-white"
  }
];

export function HomepageLayouts() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            3 Homepage Layouts
          </h2>
        </div>

        {/* 3个主页布局预览 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {layouts.map((layout, index) => (
            <Card key={layout.id} className="hover-lift cursor-pointer border border-border-light rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden bg-surface">
                {/* Layout 1 - Banking */}
                {index === 0 && (
                  <div className="p-6 h-full bg-teal-600 text-white flex flex-col">
                    <div className="text-lg font-semibold mb-4">
                      Banking made easy for busy professionals.
                    </div>
                    <div className="flex-1 bg-white/20 rounded-lg p-4 mb-4">
                      <div className="text-2xl font-bold mb-2">$52.49</div>
                      <div className="text-sm opacity-90">Goal: 75%+ 92+</div>
                    </div>
                    <div className="text-sm opacity-90">
                      Super convenient online banking
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="h-6 bg-white/20 rounded"></div>
                      <div className="h-6 bg-white/20 rounded"></div>
                      <div className="h-6 bg-white/20 rounded"></div>
                    </div>
                  </div>
                )}

                {/* Layout 2 - Payment Gateway */}
                {index === 1 && (
                  <div className="p-6 h-full bg-white">
                    <div className="text-lg font-semibold text-slate-900 mb-6">
                      A complete payment getaway solution for your business
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                      <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                      <div className="h-8 bg-brand-gradient-start/20 rounded border border-brand-gradient-start/30"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-12 bg-slate-50 rounded border"></div>
                      <div className="h-12 bg-slate-50 rounded border"></div>
                    </div>
                    <div className="mt-4 text-xs text-slate-500 flex items-center gap-2">
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

                {/* Layout 3 - Investment */}
                {index === 2 && (
                  <div className="p-6 h-full bg-white">
                    <div className="text-lg font-semibold text-slate-900 mb-6">
                      Save and invest for your long-term retirement.
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">20K+</div>
                        <div className="text-xs text-slate-500">Successful investors</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-500">7.5M+</div>
                        <div className="text-xs text-slate-500">Dollars invested</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-500">90+</div>
                        <div className="text-xs text-slate-500">App rating</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Explore methods for</div>
                      <div className="text-sm font-medium">Saving and Earning money</div>
                      <div className="text-sm font-medium">with clarity</div>
                    </div>
                    <div className="mt-4 space-y-1">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                        <span>Effective Transactions</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                        <span>Investments</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                        <span>Custom Credit Solutions</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 标题部分 */}
              <div className="p-6 border-t border-border-light">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {layout.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}