/**
 * Step1 Hero Section - Notion-inspired Minimal Design
 */
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Globe, Folder, FileText, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const features = [
  { icon: Globe, label: "Clone Website", color: "bg-gray-600" },
  { icon: Folder, label: "Create Portfolio", color: "bg-gray-700" },
  { icon: FileText, label: "Build Notion Blog", color: "bg-gray-500" }
];

export function HeroSection() {
  return (
    <section className="relative section-padding bg-background">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.4]" />

      <div className="container-width relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight"
            >
              <span className="text-foreground">Step1</span>{" "}
              <span className="text-muted-foreground">to your apps</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto"
            >
              Ideas to full-stack apps in seconds, with your Notion database.
            </motion.p>
          </div>

          {/* Input with AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative max-w-xl mx-auto"
          >
            <div className="relative bg-white rounded-2xl border border-border shadow-sm p-2">
              <Input
                type="text"
                placeholder="Ship with Step1 AI"
                className="border-0 bg-transparent text-lg px-4 py-6 pr-12 focus-visible:ring-0 placeholder:text-muted-foreground/50"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                </button>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="10" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </button>
                <div className="w-px h-6 bg-border" />
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <Sparkles className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {features.map((feature, index) => (
              <motion.button
                key={feature.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="group flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-border hover:border-muted-foreground/30 transition-all hover:shadow-sm"
              >
                <div className={`w-5 h-5 ${feature.color} rounded-md flex items-center justify-center`}>
                  <feature.icon className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {feature.label}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="pt-8"
          >
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-muted border-2 border-background"
                    />
                  ))}
                </div>
                <span>10k+ users</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div>Free to start</div>
              <div className="w-px h-4 bg-border" />
              <div>Ship in seconds</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}