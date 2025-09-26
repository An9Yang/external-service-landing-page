/**
 * Step1 Client Work Showcase - Visual Portfolio Display
 */
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Users, Briefcase, Heart, Palette } from "lucide-react";

interface ClientProject {
  id: number;
  clientName: string;
  projectType: string;
  category: string;
  deliverable: string;
  gradient: string;
  accentColor: string;
  icon: React.ElementType;
  status?: 'live' | 'new' | 'featured';
  mockup: React.ReactNode;
  demoUrl: string;
}

const clientProjects: ClientProject[] = [
  {
    id: 1,
    clientName: "NotionFlow Studio",
    projectType: "个人作品集",
    category: "Notion",
    deliverable: "案例集 + 预约日历",
    gradient: "from-slate-100 to-zinc-200",
    accentColor: "bg-zinc-600",
    icon: Palette,
    status: 'featured',
    mockup: (
      <div className="w-full h-full relative">
        <div className="absolute inset-3 bg-white/60 backdrop-blur rounded-lg p-4 flex gap-3">
          <div className="w-20 bg-gray-200 rounded"></div>
          <div className="flex-1 space-y-3">
            <div className="grid grid-cols-4 gap-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="h-16 bg-gray-100 rounded border border-gray-200"></div>
              ))}
            </div>
            <div className="h-24 bg-gray-50 rounded border border-gray-200 flex items-end p-3">
              <div className="w-full flex items-end gap-2">
                {[40, 60, 35, 80, 45, 70, 55].map((h, i) => (
                  <div key={i} className="flex-1 bg-gray-300 rounded-t" style={{height: `${h}%`}}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    demoUrl: "https://step1.so/demo/notion-portfolio"
  },
  {
    id: 2,
    clientName: "Atlas Consulting",
    projectType: "客户门户",
    category: "Airtable",
    deliverable: "项目交付看板",
    gradient: "from-stone-100 to-gray-200",
    accentColor: "bg-gray-600",
    icon: Briefcase,
    status: 'live',
    mockup: (
      <div className="w-full h-full relative">
        <div className="absolute inset-3 bg-white/60 backdrop-blur rounded-lg p-4">
          <div className="h-8 bg-gray-100 rounded mb-3"></div>
          <div className="grid grid-cols-4 gap-3">
            {[1,2,3,4].map(i => (
              <div key={i} className="space-y-2">
                <div className="h-20 bg-gray-100 rounded border border-gray-200"></div>
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                <div className="h-2 bg-gray-150 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    demoUrl: "https://step1.so/demo/client-portal"
  },
  {
    id: 3,
    clientName: "Lumina UX Lab",
    projectType: "团队作品集",
    category: "Notion",
    deliverable: "成员案例矩阵",
    gradient: "from-zinc-100 to-stone-200",
    accentColor: "bg-zinc-600",
    icon: Users,
    mockup: (
      <div className="w-full h-full relative">
        <div className="absolute inset-3 bg-white/60 backdrop-blur rounded-lg p-4 flex gap-3">
          <div className="w-1/4 space-y-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="h-8 bg-gray-100 rounded border border-gray-200"></div>
            ))}
          </div>
          <div className="flex-1 space-y-3">
            <div className="h-24 bg-gray-900 rounded"></div>
            <div className="h-3 bg-gray-200 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-2 bg-gray-150 rounded"></div>
              <div className="h-2 bg-gray-150 rounded w-4/5"></div>
            </div>
          </div>
        </div>
      </div>
    ),
    demoUrl: "https://step1.so/demo/design-showcase"
  },
  {
    id: 4,
    clientName: "Healwell Clinic",
    projectType: "患者门户",
    category: "Airtable",
    deliverable: "疗程追踪 + 表单",
    gradient: "from-neutral-100 to-gray-200",
    accentColor: "bg-neutral-600",
    icon: Heart,
    status: 'new',
    mockup: (
      <div className="w-full h-full relative">
        <div className="absolute inset-3 bg-white/60 backdrop-blur rounded-lg p-4">
          <div className="grid grid-cols-4 gap-3 mb-3">
            {[1,2,3,4].map(i => (
              <div key={i} className="h-16 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <div className="h-20 bg-gray-100 rounded border border-gray-200"></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-12 bg-gray-100 rounded"></div>
              <div className="h-12 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    ),
    demoUrl: "https://step1.so/demo/patient-portal"
  }
];

export function ProductShowcase() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const infiniteProjects = [...clientProjects, ...clientProjects];

  return (
    <section id="case-studies" className="section-padding bg-muted/30">
      <div className="container-width">
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
          <p className="text-muted-foreground max-w-xl mx-auto">
            真实交付的 Notion / Airtable 站点，每个案例都包含可交互的在线 Demo
          </p>
        </motion.div>

        {/* Infinite Visual Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredProject(null);
          }}
        >
          {/* Enhanced Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fafaf9] via-[#fafaf9]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fafaf9] via-[#fafaf9]/80 to-transparent z-20 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="relative">
            <div
              className={cn(
                "flex gap-6 py-8",
                isPaused ? "[animation-play-state:paused]" : "[animation-play-state:running]",
                "animate-[infiniteScroll_45s_linear_infinite]"
              )}
              style={{
                width: `calc(${infiniteProjects.length} * 500px)`,
              }}
            >
              {infiniteProjects.map((project, index) => (
                <ProjectCard
                  key={`${project.id}-${Math.floor(index / clientProjects.length)}`}
                  project={project}
                  isHovered={hoveredProject === project.id}
                  isAnyHovered={hoveredProject !== null}
                  onHover={() => {
                    setHoveredProject(project.id);
                    setIsPaused(true);
                  }}
                  onLeave={() => {
                    setHoveredProject(null);
                    setTimeout(() => {
                      if (hoveredProject === null) {
                        setIsPaused(false);
                      }
                    }, 300);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Client Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { label: "Projects Delivered", value: "150+" },
            { label: "Happy Clients", value: "100+" },
            { label: "Industries Served", value: "20+" },
            { label: "Countries", value: "15+" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Visual Project Card Component
function ProjectCard({
  project,
  isHovered,
  isAnyHovered,
  onHover,
  onLeave
}: {
  project: ClientProject;
  isHovered: boolean;
  isAnyHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      className="flex-shrink-0 w-[480px] h-[280px] relative cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      animate={{
        scale: isHovered ? 1.25 : isAnyHovered ? 0.92 : 1,
        opacity: isHovered ? 1 : isAnyHovered ? 0.6 : 1,
        zIndex: isHovered ? 10 : 0,
      }}
      transition={{
        scale: {
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.4
        },
        opacity: {
          duration: 0.3,
          ease: "easeOut"
        }
      }}
      style={{
        transformOrigin: "center center",
        willChange: "transform"
      }}
    >
      {/* Main Visual Card */}
      <motion.div
        className={cn(
          "w-full h-full rounded-xl overflow-hidden relative",
          "bg-gradient-to-br",
          project.gradient,
        )}
        animate={{
          boxShadow: isHovered
            ? "0 35px 70px -15px rgba(0, 0, 0, 0.3)"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
        }}
        transition={{
          boxShadow: {
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1]
          }
        }}
      >
        {/* Status Badge */}
        {project.status && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
              x: 0
            }}
            transition={{
              duration: 0.25,
              delay: isHovered ? 0.1 : 0,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="absolute top-4 right-4 z-20"
          >
            <Badge
              variant="secondary"
              className="bg-white/95 backdrop-blur-md text-foreground border-0 shadow-lg"
            >
              {project.status === 'live' && '在线'}
              {project.status === 'new' && '最新'}
              {project.status === 'featured' && '精选'}
            </Badge>
          </motion.div>
        )}

        {/* Project Mockup Visual */}
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: isHovered ? 1.08 : 1
          }}
          transition={{
            scale: {
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1]
            }
          }}
        >
          {project.mockup}
        </motion.div>

        {/* Hover Overlay - Slides up from bottom */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{
            y: isHovered ? 0 : "100%",
          }}
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 28,
            mass: 0.8
          }}
          className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/85 via-black/65 to-transparent backdrop-blur-md"
        >
          <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
            {/* Client Name & Type */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 30,
              }}
              transition={{
                delay: isHovered ? 0.15 : 0,
                duration: 0.35,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <h3 className="text-2xl font-semibold text-white mb-1.5">
                {project.clientName}
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-white/80 text-sm font-medium">{project.projectType}</span>
                <span className="text-white/30">•</span>
                <span className="text-white/80 text-sm">{project.category}</span>
              </div>
            </motion.div>

            {/* Key Deliverable */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 30
              }}
              transition={{
                delay: isHovered ? 0.2 : 0,
                duration: 0.35,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="flex items-center justify-between"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2.5 gap-2">
                <motion.div
                  className={cn("w-8 h-8 rounded-lg flex items-center justify-center", project.accentColor)}
                  animate={{
                    rotate: isHovered ? 360 : 0
                  }}
                  transition={{
                    rotate: {
                      duration: 0.6,
                      ease: [0.4, 0, 0.2, 1]
                    }
                  }}
                >
                  <project.icon className="w-4 h-4 text-white" />
                </motion.div>
                <span className="text-white/90 text-sm font-medium">
                  {project.deliverable}
                </span>
              </div>
              <motion.div
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 10
                }}
                transition={{ duration: 0.3 }}
                className="sm:ml-auto"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/90 text-foreground border-0 hover:bg-white"
                  asChild
                >
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    查看站点 (View Live Demo)
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
