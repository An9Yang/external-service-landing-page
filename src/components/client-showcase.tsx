/**
 * Client Showcase - Horizontal Infinite Scrolling Carousel
 * 横向无限滚动传送带展示真实客户项目
 */
import { motion } from "framer-motion";
import { ExternalLink, Star, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ClientProject {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  demoUrl: string;
  tags: string[];
  testimonial?: string;
  clientName?: string;
  clientRole?: string;
}


export function ClientShowcase() {
  const { t } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);

  // Get project data from translations
  const projectsData = t('clientShowcase.projects') as any[];
  const clientProjects: ClientProject[] = [
    {
      id: 1,
      title: projectsData[0]?.title || "Rahibul Haque",
      description: projectsData[0]?.description || "设计师个人作品集网站",
      category: t('clientShowcase.categories.portfolio'),
      imageUrl: "https://placehold.co/800x600/1e293b/e2e8f0?text=Rahibul+Haque",
      demoUrl: "https://step1-i9iy7ta-dy7abs67pg33.deno.dev/",
      tags: projectsData[0]?.tags || ["Notion同步", "作品展示"],
      testimonial: projectsData[0]?.testimonial,
      clientName: projectsData[0]?.clientName,
      clientRole: projectsData[0]?.clientRole
    },
    {
      id: 2,
      title: projectsData[1]?.title || "Solar Energy Portal",
      description: projectsData[1]?.description || "太阳能公司管理系统",
      category: t('clientShowcase.categories.portal'),
      imageUrl: "https://placehold.co/800x600/0f766e/e2e8f0?text=Solar+Energy+Portal",
      demoUrl: "https://step1-gpdqxzo-wkwp9y7pydha.deno.dev/",
      tags: projectsData[1]?.tags || ["库存管理", "销售追踪"],
      testimonial: projectsData[1]?.testimonial,
      clientName: projectsData[1]?.clientName,
      clientRole: projectsData[1]?.clientRole
    },
    {
      id: 3,
      title: projectsData[2]?.title || "Alex - UX Designer",
      description: projectsData[2]?.description || "品牌设计师展示平台",
      category: t('clientShowcase.categories.portfolio'),
      imageUrl: "https://placehold.co/800x600/1e293b/e2e8f0?text=Alex+UX+Designer",
      demoUrl: "https://step1-jmtt2j5-6jrhdkacbjtw.deno.dev/",
      tags: projectsData[2]?.tags || ["品牌设计", "案例展示"],
      testimonial: projectsData[2]?.testimonial,
      clientName: projectsData[2]?.clientName,
      clientRole: projectsData[2]?.clientRole
    },
    {
      id: 4,
      title: projectsData[3]?.title || "Agency Dashboard",
      description: projectsData[3]?.description || "代理公司协作平台",
      category: t('clientShowcase.categories.portal'),
      imageUrl: "https://placehold.co/800x600/0f766e/e2e8f0?text=Agency+Dashboard",
      demoUrl: "https://step1-dh2tfox-wq70zafdmzs3.deno.dev/#/dashboard",
      tags: projectsData[3]?.tags || ["项目管理", "团队协作"],
      testimonial: projectsData[3]?.testimonial,
      clientName: projectsData[3]?.clientName,
      clientRole: projectsData[3]?.clientRole
    },
    {
      id: 5,
      title: projectsData[4]?.title || "Independent Designer",
      description: projectsData[4]?.description || "独立创意工作室",
      category: t('clientShowcase.categories.portfolio'),
      imageUrl: "https://placehold.co/800x600/1e293b/e2e8f0?text=Independent+Designer",
      demoUrl: "https://step1-c0yhu52-qx57kx63hnhc.deno.dev/",
      tags: projectsData[4]?.tags || ["创意展示", "客户合作"],
      testimonial: projectsData[4]?.testimonial,
      clientName: projectsData[4]?.clientName,
      clientRole: projectsData[4]?.clientRole
    },
    {
      id: 6,
      title: projectsData[5]?.title || "Enterprise Portal",
      description: projectsData[5]?.description || "企业级管理平台",
      category: t('clientShowcase.categories.portal'),
      imageUrl: "https://placehold.co/800x600/0f766e/e2e8f0?text=Enterprise+Portal",
      demoUrl: "https://step1-dh2tfox-3938e3dw9vzb.deno.dev/login",
      tags: projectsData[5]?.tags || ["Airtable集成", "权限管理"],
      testimonial: projectsData[5]?.testimonial,
      clientName: projectsData[5]?.clientName,
      clientRole: projectsData[5]?.clientRole
    }
  ];

  // Triple the projects for seamless infinite scroll
  const infiniteProjects = [...clientProjects, ...clientProjects, ...clientProjects];

  const ProjectCard = ({ project }: { project: ClientProject }) => (
    <div
      className={cn(
        "flex-shrink-0 w-[400px]",
        "rounded-xl overflow-hidden",
        "bg-background border border-border/30 hover:border-border/50",
        "transition-all duration-500",
        "group cursor-pointer",
        "hover:shadow-xl"
      )}
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className={cn(
            "px-3 py-1.5 text-xs font-semibold rounded-full shadow-md",
            project.category === t('clientShowcase.categories.portfolio')
              ? "bg-blue-500 text-white"
              : "bg-emerald-500 text-white"
          )}>
            {project.category}
          </span>
        </div>

        {/* View Demo Button */}
        <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Button
            size="sm"
            variant="secondary"
            className="shadow-lg"
            asChild
          >
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="w-3 h-3 mr-1" />
              {t('clientShowcase.liveDemo')}
            </a>
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-semibold text-base text-foreground mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Testimonial */}
        {project.testimonial && (
          <div className="pt-3 border-t border-border/30">
            <p className="text-xs text-muted-foreground italic mb-2">
              "{project.testimonial}"
            </p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                <span className="text-xs font-medium text-muted-foreground">
                  {project.clientName?.[0]}
                </span>
              </div>
              <div className="text-xs">
                <span className="text-foreground font-medium">{project.clientName}</span>
                <span className="text-muted-foreground"> · {project.clientRole}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="case-studies" className="min-h-screen flex items-center py-20 bg-muted/20 overflow-hidden">
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
            {t('clientShowcase.title')}
            <span className="block text-lg md:text-xl text-muted-foreground mt-2 font-normal">
              {t('clientShowcase.subtitle')}
            </span>
          </h2>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-foreground font-semibold">{t('clientShowcase.stats.projects')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              <span className="text-foreground font-semibold">{t('clientShowcase.stats.satisfaction')}</span>
            </div>
          </div>
        </motion.div>

        {/* Horizontal Infinite Scrolling Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Scrolling Track */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Gradient Masks - 边缘渐变消失效果 */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[rgb(250,249,248)] dark:from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[rgb(250,249,248)] dark:from-background to-transparent z-10 pointer-events-none" />
            <div
              className="flex gap-6 animate-[infiniteScrollProjects_45s_linear_infinite]"
              style={{
                width: `calc(${infiniteProjects.length} * 424px)`, // 400px + 24px gap
                animationPlayState: isPaused ? "paused" : "running"
              }}
            >
              {infiniteProjects.map((project, index) => (
                <ProjectCard
                  key={`${project.id}-${Math.floor(index / clientProjects.length)}-${index}`}
                  project={project}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Interaction Hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground mb-6">
            {isPaused ? t('clientShowcase.pauseHint') : t('clientShowcase.scrollHint')}
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90"
            asChild
          >
            <a href="#plans">
              {t('clientShowcase.cta')}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}