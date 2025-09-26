/**
 * Value Prop Section - 核心价值阐述
 * 展示 Notion/Airtable 编辑 → 网站实时同步的核心功能
 */
import { motion } from "framer-motion";
import { ArrowRight, FileEdit, Globe, Zap, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";


export function ValueProp() {
  const { t } = useLanguage();

  const features = [
    {
      icon: FileEdit,
      title: t('valueProp.features.edit.title'),
      description: t('valueProp.features.edit.description')
    },
    {
      icon: Zap,
      title: t('valueProp.features.sync.title'),
      description: t('valueProp.features.sync.description')
    },
    {
      icon: Globe,
      title: t('valueProp.features.publish.title'),
      description: t('valueProp.features.publish.description')
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 bg-background">
      <div className="container-width w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('valueProp.title')}
            <span className="block text-lg md:text-xl text-muted-foreground mt-2 font-normal">
              {t('valueProp.subtitle')}
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('valueProp.description')}
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
              {/* Left: Notion/Airtable Editor Mock */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 max-w-lg"
              >
                <div className="rounded-xl border border-border bg-background shadow-xl overflow-hidden">
                  {/* Editor Header */}
                  <div className="bg-muted/30 px-4 py-3 border-b border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <span className="text-sm text-muted-foreground ml-2">{t('valueProp.notionEditor')}</span>
                    </div>
                  </div>

                  {/* Editor Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="h-6 bg-foreground/10 rounded w-3/4"></div>
                      <div className="h-4 bg-muted/50 rounded w-full"></div>
                      <div className="h-4 bg-muted/50 rounded w-5/6"></div>
                    </div>

                    {/* Simulated Editing */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                        times: [0, 0.2, 0.8, 1]
                      }}
                      className="space-y-2"
                    >
                      <div className="h-4 bg-blue-500/20 border-l-2 border-blue-500 rounded px-2 flex items-center">
                        <span className="text-xs text-blue-600">{t('valueProp.editing')}</span>
                      </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="h-20 bg-muted/30 rounded"></div>
                      <div className="h-20 bg-muted/30 rounded"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Center: Arrow Animation */}
              <motion.div
                className="hidden md:flex items-center justify-center px-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="relative">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="bg-foreground text-background rounded-full p-3 shadow-lg"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-foreground/20 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Right: Website Preview Mock */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex-1 max-w-lg"
              >
                <div className="rounded-xl border border-border bg-background shadow-xl overflow-hidden">
                  {/* Browser Header */}
                  <div className="bg-muted/30 px-4 py-3 border-b border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="ml-3 flex-1 h-6 bg-muted/50 rounded-md flex items-center px-2">
                        <Globe className="w-3 h-3 text-muted-foreground mr-2" />
                        <span className="text-xs text-muted-foreground">yoursite.com</span>
                      </div>
                    </div>
                  </div>

                  {/* Website Content */}
                  <div className="p-6 space-y-4">
                    <motion.div
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: [0.5, 1, 1, 0.5] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                        times: [0, 0.3, 0.7, 1],
                        delay: 1
                      }}
                      className="space-y-2"
                    >
                      <div className="h-6 bg-foreground/10 rounded w-3/4"></div>
                      <div className="h-4 bg-muted/50 rounded w-full"></div>
                      <div className="h-4 bg-muted/50 rounded w-5/6"></div>
                      <div className="h-4 bg-green-500/20 rounded w-4/6 border border-green-500/30">
                        <div className="text-xs text-green-600 px-2 py-0.5">{t('valueProp.synced')}</div>
                      </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded"></div>
                      <div className="h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Sync Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    times: [0, 0.3, 0.7, 1],
                    delay: 1.5
                  }}
                  className="absolute -top-2 -right-2"
                >
                  <div className="bg-green-500 text-white rounded-full p-2 shadow-lg">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </motion.div>
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