/**
 * Project Showcase - Real Client Projects
 */
import { motion } from "framer-motion";
import { ExternalLink, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  demoUrl: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Rahibul Haque",
    description: "设计师个人作品集网站，展示创意作品和专业能力",
    category: "Personal Portfolio",
    imageUrl: "/projects/portfolio-1.png",
    demoUrl: "https://step1-i9iy7ta-dy7abs67pg33.deno.dev/",
    tags: ["Notion同步", "作品展示", "预约系统"]
  },
  {
    id: 2,
    title: "Alex - UX Designer",
    description: "UI/UX设计师作品集，15年经验展示平台",
    category: "Personal Portfolio",
    imageUrl: "/projects/portfolio-2.png",
    demoUrl: "https://step1-jmtt2j5-6jrhdkacbjtw.deno.dev/",
    tags: ["品牌设计", "案例展示", "联系表单"]
  },
  {
    id: 3,
    title: "Independent Designer",
    description: "独立设计师与开发者的数字体验展示",
    category: "Personal Portfolio",
    imageUrl: "/projects/portfolio-3.png",
    demoUrl: "https://step1-c0yhu52-qx57kx63hnhc.deno.dev/",
    tags: ["创意展示", "服务介绍", "客户合作"]
  },
  {
    id: 4,
    title: "Enterprise Client Portal",
    description: "企业级客户协作平台，实时项目管理",
    category: "Client Portal",
    imageUrl: "/projects/client-portal-1.png",
    demoUrl: "https://step1-dh2tfox-3938e3dw9vzb.deno.dev/login",
    tags: ["Airtable集成", "权限管理", "实时更新"]
  },
  {
    id: 5,
    title: "Solar Energy Dashboard",
    description: "太阳能公司库存与销售管理系统",
    category: "Client Portal",
    imageUrl: "/projects/client-portal-2.png",
    demoUrl: "https://step1-gpdqxzo-wkwp9y7pydha.deno.dev/",
    tags: ["库存管理", "销售追踪", "供应商系统"]
  },
  {
    id: 6,
    title: "Agency Client Portal",
    description: "代理公司项目管理与团队协作平台",
    category: "Client Portal",
    imageUrl: "/projects/client-portal-3.png",
    demoUrl: "https://step1-dh2tfox-wq70zafdmzs3.deno.dev/#/dashboard",
    tags: ["项目进度", "团队协作", "数据分析"]
  }
];

export function ProjectShowcase() {
  return (
    <section id="case-studies" className="min-h-screen flex items-center py-20 bg-muted/20">
      <div className="container-width w-full">
        {/* Section Header */}
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

          {/* Stats */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-xl overflow-hidden border border-border/50 hover:border-border transition-all duration-300 hover:shadow-xl">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10" />

                  {/* Project Image - using object-cover to handle different aspect ratios */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm text-foreground rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Live Demo Button */}
                  <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-background/90 backdrop-blur-sm text-foreground hover:bg-background"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1.5" />
                        查看站点
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Demo Link */}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors group/link"
                  >
                    View Live Demo
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            这些都是真实交付的客户项目，点击查看完整的网站体验
          </p>
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90"
            asChild
          >
            <a href="#plans">
              开始打造您的网站
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}