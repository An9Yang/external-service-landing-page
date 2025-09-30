/**
 * Value Prop Section - Core Value Proposition (English Only)
 * Shows Notion/Airtable editing → real-time website sync functionality
 */
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, FileEdit, Globe, Zap, CheckCircle, FileText, Image as ImageIcon, BarChart } from "lucide-react";
import { useEffect, useState } from "react";

export function ValueProp() {
  const [displayText, setDisplayText] = useState("Summer Collection 2024");
  const [showCursor, setShowCursor] = useState(false);
  const [syncProgress, setSyncProgress] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const oldText = "Summer Collection";
  const newText = "New Product Launch";
  const animationDuration = 7000; // 7 seconds total cycle

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      // Reset to initial state
      setDisplayText(oldText);
      setSyncProgress(0);
      setShowCursor(false);
      setIsDeleting(false);

      // Stage 1: Show old content (0-1s)
      setTimeout(() => {
        setShowCursor(true);
      }, 1000);

      // Stage 2: Cursor blinks, then delete old content (1s-1.8s)
      setTimeout(() => {
        setIsDeleting(true);
        let deleteIndex = oldText.length;
        const deleteInterval = setInterval(() => {
          if (deleteIndex > 0) {
            setDisplayText(oldText.slice(0, deleteIndex));
            deleteIndex--;
          } else {
            clearInterval(deleteInterval);
            setIsDeleting(false);

            // Stage 3: Type new content (1.8s-3.5s)
            setTimeout(() => {
              let typeIndex = 0;
              const typeInterval = setInterval(() => {
                if (typeIndex <= newText.length) {
                  setDisplayText(newText.slice(0, typeIndex));
                  typeIndex++;
                } else {
                  clearInterval(typeInterval);
                  setShowCursor(false);

                  // Stage 4: Pause before sync (3.5s-4s)
                  setTimeout(() => {
                    // Stage 5: Sync progress (4s-6.5s)
                    let progress = 0;
                    const progressInterval = setInterval(() => {
                      progress += 4;
                      setSyncProgress(Math.min(progress, 100));
                      if (progress >= 100) {
                        clearInterval(progressInterval);
                      }
                    }, 25);
                  }, 500);
                }
              }, 70);
            }, 100);
          }
        }, 30);
      }, 1300);
    }, animationDuration);

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(cycleInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const features = [
    {
      icon: FileEdit,
      title: "Edit in Notion",
      description: "Update content like writing docs"
    },
    {
      icon: Zap,
      title: "Real-time Sync",
      description: "Auto-sync to website"
    },
    {
      icon: Globe,
      title: "Instant Publish",
      description: "Visitors see updates instantly"
    }
  ];

  return (
    <section id="value" className="min-h-screen flex items-center py-20 bg-background">
      <div className="container-width w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Effortless Updates, Total Control
            <span className="block text-lg md:text-xl text-muted-foreground mt-2 font-normal">
              Simple as Editing a Document
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No code required. Update your website like editing a document. We handle the complex tech, you simply manage content like editing a Notion doc.
          </p>
        </motion.div>

        {/* Visual Demo Area */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Container */}
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              {/* Left: Notion Editor Mock */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 max-w-lg"
              >
                <div className="rounded-xl border border-border bg-background shadow-xl overflow-hidden h-[380px] flex flex-col">
                  {/* Editor Header */}
                  <div className="bg-muted/30 px-4 py-3 border-b border-border flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <span className="text-sm text-muted-foreground ml-2">Notion Editor</span>
                    </div>
                  </div>

                  {/* Editor Content - Vertical, Note-style layout */}
                  <div className="p-6 space-y-6 flex-1 overflow-hidden">
                    {/* Page Title Section */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <FileText className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wide">Document</span>
                      </div>

                      {/* Typing Animation - Fixed height to prevent jank */}
                      <div className="relative h-16">
                        <h2 className="text-2xl font-bold text-foreground leading-tight">
                          {displayText}
                          {showCursor && (
                            <span className="inline-block w-0.5 h-6 bg-foreground ml-0.5 align-middle animate-pulse" />
                          )}
                        </h2>
                      </div>
                    </div>

                    {/* Content blocks - Vertical stacking like notes */}
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <div className="h-3 bg-muted/30 rounded w-full"></div>
                        <div className="h-3 bg-muted/30 rounded w-[95%]"></div>
                        <div className="h-3 bg-muted/30 rounded w-[90%]"></div>
                      </div>

                      <div className="h-px bg-border"></div>

                      {/* Bullet list style */}
                      <div className="space-y-2 pl-4">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40"></div>
                          <div className="h-2.5 bg-muted/25 rounded w-32"></div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40"></div>
                          <div className="h-2.5 bg-muted/25 rounded w-40"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Center: Sync Stage - Consolidated UI */}
              <motion.div
                className="hidden md:flex flex-col items-center justify-center gap-3 relative w-40"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {/* Stage 2: Syncing - Only shows when typing is done */}
                {displayText === newText && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-3"
                  >
                    {/* Arrow with pulse during sync */}
                    <motion.div
                      className="bg-foreground text-background rounded-full p-3 shadow-lg"
                      animate={
                        syncProgress > 0 && syncProgress < 100
                          ? { scale: [1, 1.12, 1] }
                          : syncProgress === 100
                          ? { scale: [1, 1.1, 1] }
                          : { scale: 1 }
                      }
                      transition={
                        syncProgress === 100
                          ? { duration: 0.4, times: [0, 0.5, 1] }
                          : {
                              duration: 1.2,
                              repeat: syncProgress > 0 && syncProgress < 100 ? Infinity : 0,
                              ease: "easeInOut"
                            }
                      }
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>

                    {/* Status UI - Grouped together */}
                    <div className="flex flex-col items-center gap-2 min-h-[44px]">
                      {syncProgress > 0 && syncProgress < 100 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex flex-col items-center gap-2"
                        >
                          <div className="flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5 text-muted-foreground animate-pulse" />
                            <span className="text-xs text-muted-foreground font-medium">
                              Syncing
                            </span>
                          </div>
                          <div className="w-24 h-1 bg-muted/30 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-foreground rounded-full"
                              style={{ width: `${syncProgress}%` }}
                              transition={{ duration: 0.1 }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground tabular-nums">
                            {syncProgress}%
                          </span>
                        </motion.div>
                      )}

                      {syncProgress === 100 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="flex items-center gap-1.5 text-foreground"
                        >
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm font-medium">Synced</span>
                        </motion.div>
                      )}

                      {syncProgress === 0 && (
                        <div className="h-11"></div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Waiting state - Before typing completes */}
                {displayText !== newText && (
                  <div className="flex flex-col items-center gap-3 opacity-30">
                    <div className="bg-muted text-muted-foreground rounded-full p-3">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                    <div className="h-11"></div>
                  </div>
                )}
              </motion.div>

              {/* Right: Website Preview Mock */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex-1 max-w-lg"
              >
                <div className="rounded-xl border border-border bg-background shadow-xl overflow-hidden h-[380px] flex flex-col">
                  {/* Browser Header */}
                  <div className="bg-muted/30 px-4 py-3 border-b border-border flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-2 w-full">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="ml-3 flex-1 h-6 bg-muted/50 rounded-md flex items-center px-3 max-w-xs">
                        <Globe className="w-3 h-3 text-muted-foreground mr-2 shrink-0" />
                        <span className="text-xs text-muted-foreground">yoursite.com</span>
                      </div>
                    </div>
                  </div>

                  {/* Website Content - Horizontal, Page-style layout */}
                  <div className="p-8 flex-1 overflow-hidden flex flex-col justify-between">
                    {/* Hero section style */}
                    <div className="space-y-4 text-center">
                      {/* Title with update animation - Fixed height */}
                      <div className="h-24">
                        <motion.div
                          animate={
                            syncProgress >= 60
                              ? { scale: [1, 1.02, 1] }
                              : {}
                          }
                          transition={{ duration: 0.6 }}
                          className="rounded-lg"
                        >
                          <h1 className="text-3xl font-bold text-foreground mb-3">
                            {syncProgress >= 60 ? newText : "Summer Collection"}
                          </h1>
                          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                            {syncProgress >= 60 ? "Explore our latest innovations" : "Discover our seasonal products"}
                          </p>
                        </motion.div>
                      </div>

                      {/* CTA Button placeholder */}
                      <div className="flex justify-center">
                        <div className="h-10 w-32 bg-foreground/10 rounded-lg"></div>
                      </div>
                    </div>

                    {/* Content grid - Horizontal cards */}
                    <div className="grid grid-cols-3 gap-3">
                      <motion.div
                        animate={
                          syncProgress >= 60
                            ? { opacity: [0.5, 1], y: [5, 0] }
                            : {}
                        }
                        transition={{ duration: 0.5 }}
                        className="h-20 bg-muted/20 rounded-lg border border-border/50 flex items-center justify-center"
                      >
                        <ImageIcon className="w-6 h-6 text-muted-foreground/40" />
                      </motion.div>
                      <motion.div
                        animate={
                          syncProgress >= 60
                            ? { opacity: [0.5, 1], y: [5, 0] }
                            : {}
                        }
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="h-20 bg-muted/20 rounded-lg border border-border/50 flex items-center justify-center"
                      >
                        <BarChart className="w-6 h-6 text-muted-foreground/40" />
                      </motion.div>
                      <motion.div
                        animate={
                          syncProgress >= 60
                            ? { opacity: [0.5, 1], y: [5, 0] }
                            : {}
                        }
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-20 bg-muted/20 rounded-lg border border-border/50 flex items-center justify-center"
                      >
                        <FileText className="w-6 h-6 text-muted-foreground/40" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Feature Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 mt-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mb-3">
                    <feature.icon className="w-6 h-6 text-foreground/70" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}