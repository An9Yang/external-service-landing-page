/**
 * Step1 Hero Section - Notion-inspired Minimal Design
 */
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Globe, Folder, FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Globe, label: "Clone Website", color: "bg-green-500" },
  { icon: Folder, label: "Create Portfolio", color: "bg-blue-500" },
  { icon: FileText, label: "Build Notion Blog", color: "bg-orange-500" }
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
            <div className="relative bg-white rounded-2xl border border-border shadow-sm p-3">
              <Textarea
                placeholder="Describe your idea and let Step1 AI bring it to life..."
                className="border-0 bg-transparent text-lg px-4 py-3 pr-14 min-h-[100px] resize-none focus-visible:ring-0 placeholder:text-muted-foreground/50"
                rows={3}
              />
              <div className="absolute right-3 bottom-3">
                <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="AI-Powered">
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