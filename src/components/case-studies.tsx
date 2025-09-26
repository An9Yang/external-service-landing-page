/**
 * Case Studies - Merged Social Proof Section
 * 整合案例展示和客户评价，减少重复
 */
import { motion } from "framer-motion";
import { Star, Quote, ExternalLink, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "独立咨询师",
    image: "/testimonial-1.jpg",
    rating: 5,
    quote: "2周内我的咨询网站就上线了，现在直接在 Notion 更新案例，网站自动同步。",
    site: "个人咨询站",
    url: "#"
  },
  {
    id: 2,
    name: "Michael Wang",
    role: "设计工作室创始人",
    image: "/testimonial-2.jpg",
    rating: 5,
    quote: "Airtable 做项目管理，客户直接看到进度。再也不用回复'项目怎么样了'的邮件。",
    site: "客户门户",
    url: "#"
  },
  {
    id: 3,
    name: "Emily Liu",
    role: "自由撰稿人",
    image: "/testimonial-3.jpg",
    rating: 5,
    quote: "作品集网站比我想象的还专业，Stripe 收款和 Calendly 预约都配置好了。",
    site: "作品集站",
    url: "#"
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="min-h-screen flex items-center py-20 bg-muted/20">
      <div className="container-width w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            看看我们为客户打造的成果
            <span className="block text-lg md:text-xl text-muted-foreground mt-2 font-normal">
              Loved by Creators & Consultants
            </span>
          </h2>

          {/* 统一的数据展示 */}
          <div className="flex items-center justify-center gap-8 mt-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-foreground font-semibold">40+ 项目交付</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              <span className="text-foreground font-semibold">4.9/5 满意度</span>
            </div>
          </div>
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold text-foreground">
                      {study.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{study.name}</p>
                      <p className="text-xs text-muted-foreground">{study.role}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {study.site}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative flex-grow">
                  <Quote className="absolute -top-1 -left-1 w-4 h-4 text-muted-foreground/30" />
                  <p className="text-sm text-muted-foreground pl-4">
                    {study.quote}
                  </p>
                </div>

                {/* View Site Link */}
                <div className="mt-4 pt-4 border-t border-border">
                  <a
                    href={study.url}
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    查看网站
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90"
            asChild
          >
            <a href="#plans">
              查看服务方案
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}