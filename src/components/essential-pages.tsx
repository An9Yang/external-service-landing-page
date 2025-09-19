/**
 * Payzo 基本页面展示组件
 * 展示 14 Ready to Use Essential Pages - 100% 按照设计图还原
 */
import { Card } from "@/components/ui/card";

interface EssentialPage {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  bgColor?: string;
}

// 完整的14个基本页面数据
const pages: EssentialPage[] = [
  {
    id: 1,
    title: "About",
    description: "We're An Award Winning Finance Company",
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 2,
    title: "Pricing & Plan", 
    description: "Simple pricing for all",
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 3,
    title: "Services",
    description: "Complete banking solution with great facility",
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 4,
    title: "Multiple Account",
    description: "Manage multiple accounts",
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 5,
    title: "Terms",
    description: "Terms & Conditions",
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 6,
    title: "404",
    description: "Oops! Something Wrong",
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 7,
    title: "Contact",
    description: "Get in touch with us",
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 8,
    title: "FAQ",
    description: "Frequently asked questions",
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 9,
    title: "Blog",
    description: "Latest news and insights",
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 10,
    title: "Team",
    description: "Meet our amazing team",
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 11,
    title: "Careers",
    description: "Join our growing team",
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 12,
    title: "Privacy Policy",
    description: "Your privacy matters to us",
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 13,
    title: "Help Center",
    description: "Get help when you need it",
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 14,
    title: "Security",
    description: "Bank-level security features",
    imageUrl: "/api/placeholder/400/300"
  }
];

export function EssentialPages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            14 Ready to Use Essential Pages
          </h2>
        </div>

        {/* 页面网格 - 重点展示前6个页面，其他的简化显示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* About Page */}
          <Card className="hover-lift cursor-pointer border border-border-light rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] bg-surface p-8 relative">
              <div className="text-xl font-semibold text-slate-900 mb-6 text-center">
                We're An Award Winning Finance Company
              </div>
              
              {/* 模拟团队照片 */}
              <div className="h-32 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-teal-600 rounded-full opacity-80"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-teal-600 text-white p-2 text-xs text-center">
                  The numbers reflect our reputation.
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                <div className="h-3 bg-slate-200 rounded w-1/2"></div>
              </div>
            </div>
            <div className="p-6 border-t border-border-light">
              <h3 className="text-xl font-semibold text-slate-900">About</h3>
            </div>
          </Card>

          {/* Pricing Page */}
          <Card className="hover-lift cursor-pointer border border-border-light rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] bg-surface p-8">
              <div className="text-xl font-semibold text-slate-900 mb-6 text-center">
                Simple pricing for all
              </div>
              
              {/* 价格卡片 */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center p-3 border border-border-light rounded-lg">
                  <div className="text-lg font-bold text-slate-900">$19</div>
                  <div className="text-xs text-slate-500">Basic</div>
                </div>
                <div className="text-center p-3 bg-brand-gradient-start text-white rounded-lg">
                  <div className="text-lg font-bold">$69</div>
                  <div className="text-xs">Professional</div>
                </div>
                <div className="text-center p-3 border border-border-light rounded-lg">
                  <div className="text-lg font-bold text-slate-900">$99</div>
                  <div className="text-xs text-slate-500">Enterprise</div>
                </div>
              </div>
              
              {/* 功能对比表 */}
              <div className="space-y-1">
                <div className="h-2 bg-slate-200 rounded w-full"></div>
                <div className="h-2 bg-slate-200 rounded w-2/3"></div>
                <div className="h-2 bg-slate-200 rounded w-3/4"></div>
              </div>
            </div>
            <div className="p-6 border-t border-border-light">
              <h3 className="text-xl font-semibold text-slate-900">Pricing & Plan</h3>
            </div>
          </Card>

          {/* Services Page */}
          <Card className="hover-lift cursor-pointer border border-border-light rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] bg-surface p-8">
              <div className="text-xl font-semibold text-slate-900 mb-6 text-center">
                Complete banking solution with great facility.
              </div>
              
              {/* 服务图标网格 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-gradient-start/20 p-4 rounded-lg text-center">
                  <div className="w-8 h-8 bg-green-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded"></div>
                  </div>
                  <div className="text-sm font-medium text-slate-900">Mobile Banking</div>
                </div>
                <div className="bg-brand-gradient-start/20 p-4 rounded-lg text-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-slate-900">Fund Transfer</div>
                </div>
                <div className="bg-brand-gradient-start/20 p-4 rounded-lg text-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded"></div>
                  </div>
                  <div className="text-sm font-medium text-slate-900">Bill Payments</div>
                </div>
                <div className="bg-brand-gradient-start/20 p-4 rounded-lg text-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-slate-900">Investment</div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-border-light">
              <h3 className="text-xl font-semibold text-slate-900">Services</h3>
            </div>
          </Card>

          {/* Multiple Account Page */}
          <Card className="hover-lift cursor-pointer border border-border-light rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] bg-surface p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl font-semibold text-slate-900 mb-6">
                  Multiple Account
                </div>
                
                {/* 账户图标 */}
                <div className="w-32 h-32 bg-brand-gradient-start rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V11L15 5V9H21Z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="text-sm text-slate-600">
                  Multiple Accounts for flexible banking
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-border-light">
              <h3 className="text-xl font-semibold text-slate-900">Multiple Account</h3>
            </div>
          </Card>

          {/* Terms Page */}
          <Card className="hover-lift cursor-pointer border border-border-light rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] bg-surface p-8">
              <div className="text-xl font-semibold text-slate-900 mb-6 text-center">
                Terms & Conditions
              </div>
              
              {/* 文档内容模拟 */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="h-3 bg-slate-200 rounded w-full"></div>
                  <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                  <div className="h-3 bg-slate-200 rounded w-4/6"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-slate-200 rounded w-full"></div>
                  <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                  <div className="h-3 bg-slate-200 rounded w-2/3"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-slate-200 rounded w-4/5"></div>
                  <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-border-light">
              <h3 className="text-xl font-semibold text-slate-900">Terms</h3>
            </div>
          </Card>

          {/* 404 Page */}
          <Card className="hover-lift cursor-pointer border border-border-light rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] bg-surface p-8 flex items-center justify-center">
              <div className="text-center">
                {/* 404 with emoji */}
                <div className="text-6xl font-bold text-teal-600 mb-4">
                  4<span className="text-4xl">😵</span>4
                </div>
                <div className="text-xl font-semibold text-slate-900 mb-4">
                  Oops! Something Wrong
                </div>
                
                {/* Action card */}
                <div className="bg-teal-600 text-white p-4 rounded-lg mb-4 max-w-sm mx-auto">
                  <div className="text-sm">
                    Open your account today and experience the next gen banking.
                  </div>
                </div>
                
                {/* Navigation links */}
                <div className="space-y-1">
                  <div className="h-2 bg-slate-200 rounded w-3/4 mx-auto"></div>
                  <div className="h-2 bg-slate-200 rounded w-1/2 mx-auto"></div>
                  <div className="h-2 bg-slate-200 rounded w-2/3 mx-auto"></div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-border-light">
              <h3 className="text-xl font-semibold text-slate-900">404</h3>
            </div>
          </Card>
        </div>

        {/* 其余8个页面的简化展示 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pages.slice(6).map((page) => (
            <Card key={page.id} className="hover-lift cursor-pointer border border-border-light rounded-xl overflow-hidden">
              <div className="aspect-square bg-surface p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-gradient-start/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <div className="w-6 h-6 bg-brand-gradient-start rounded"></div>
                  </div>
                  <div className="text-sm font-semibold text-slate-900">{page.title}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}