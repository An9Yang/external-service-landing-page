/**
 * Payzo 固定侧边栏组件
 * 右侧固定的按钮组：Get This Template, Unlock Templates, Access Components, Made in Framer
 */
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Layers, ExternalLink } from "lucide-react";

export function FixedSidebar() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
      <div className="flex flex-col gap-3">
        {/* Get This Template */}
        <Button className="btn-gradient text-white font-medium px-4 py-3 rounded-full border-0 w-56 justify-start">
          <ArrowRight className="w-4 h-4 mr-2" />
          Get This Template
        </Button>

        {/* Unlock 160+ Templates */}
        <Button 
          variant="outline" 
          className="bg-slate-900 text-white border-slate-800 hover:bg-slate-800 font-medium px-4 py-3 rounded-full w-56 justify-start"
        >
          <Package className="w-4 h-4 mr-2" />
          Unlock 160+ Templates
        </Button>

        {/* Access 2000+ Components */}
        <Button 
          variant="outline" 
          className="bg-slate-900 text-white border-slate-800 hover:bg-slate-800 font-medium px-4 py-3 rounded-full w-56 justify-start"
        >
          <Layers className="w-4 h-4 mr-2" />
          Access 2000+ Components
        </Button>

        {/* Made in Framer */}
        <div className="flex items-center justify-center mt-4">
          <a 
            href="#" 
            className="flex items-center text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Made in Framer
          </a>
        </div>
      </div>
    </div>
  );
}