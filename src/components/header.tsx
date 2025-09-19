/**
 * Payzo 网站头部导航组件
 * 实现 100% 还原设计，包含 Logo、导航菜单和 CTA 按钮
 */
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-gradient-start rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
            </div>
            <span className="text-xl font-bold text-slate-900">payzo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-slate-700 hover:text-slate-900 cursor-pointer transition-colors">
              <span className="font-medium">Demo Page</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#features" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Pricing
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-gradient text-white font-medium px-6 py-2 rounded-full border-0">
              Get This Template
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700 hover:text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border-light bg-white">
            <nav className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-700 font-medium">Demo Page</span>
                <ChevronDown className="w-4 h-4 text-slate-700" />
              </div>
              <a href="#features" className="text-slate-700 font-medium">
                Features
              </a>
              <a href="#pricing" className="text-slate-700 font-medium">
                Pricing
              </a>
              <Button className="btn-gradient text-white font-medium px-6 py-2 rounded-full border-0 mt-4">
                Get This Template
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}