/**
 * Step1 Client Work Showcase - Visual Portfolio Display
 */
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  ShoppingBag,
  Smartphone,
  Globe,
  BarChart3,
  Users,
  Briefcase,
  Heart,
  GraduationCap,
  Palette
} from "lucide-react";

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
}

const clientProjects: ClientProject[] = [
  {
    id: 1,
    clientName: "TechFlow Solutions",
    projectType: "SaaS Platform",
    category: "Technology",
    deliverable: "B2B Dashboard",
    gradient: "from-gray-100 to-slate-200",
    accentColor: "bg-slate-600",
    icon: BarChart3,
    status: 'live',
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
    )
  },
  {
    id: 2,
    clientName: "Bloom Boutique",
    projectType: "E-commerce",
    category: "Retail",
    deliverable: "Online Store",
    gradient: "from-stone-100 to-gray-200",
    accentColor: "bg-gray-600",
    icon: ShoppingBag,
    status: 'featured',
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
    )
  },
  {
    id: 3,
    clientName: "EduBridge Academy",
    projectType: "EdTech Platform",
    category: "Education",
    deliverable: "Learning Portal",
    gradient: "from-zinc-100 to-stone-200",
    accentColor: "bg-zinc-600",
    icon: GraduationCap,
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
    )
  },
  {
    id: 4,
    clientName: "HealthHub Clinic",
    projectType: "Healthcare",
    category: "Medical",
    deliverable: "Patient Portal",
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
    )
  },
  {
    id: 5,
    clientName: "Creative Studio",
    projectType: "Portfolio",
    category: "Agency",
    deliverable: "Showcase Site",
    gradient: "from-slate-100 to-zinc-200",
    accentColor: "bg-gray-700",
    icon: Palette,
    mockup: (
      <div className="w-full h-full relative">
        <div className="absolute inset-3 bg-white/60 backdrop-blur rounded-lg p-4">
          <div className="h-8 bg-gray-900 rounded mb-3"></div>
          <div className="grid grid-cols-3 gap-3">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="h-16 bg-gray-100 rounded border border-gray-200"></div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    clientName: "FitLife Pro",
    projectType: "Fitness App",
    category: "Health",
    deliverable: "Mobile App",
    gradient: "from-gray-100 to-neutral-200",
    accentColor: "bg-gray-600",
    icon: Smartphone,
    status: 'live',
    mockup: (
      <div className="w-full h-full relative flex items-center justify-center">
        <div className="flex gap-4">
          {[1,2].map(i => (
            <div key={i} className="w-24 h-40 bg-gray-900 rounded-2xl p-1">
              <div className="w-full h-full bg-white rounded-2xl p-2">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-20 bg-gray-100 rounded"></div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="h-8 bg-gray-150 rounded"></div>
                    <div className="h-8 bg-gray-150 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 7,
    clientName: "Legal Associates",
    projectType: "Law Firm",
    category: "Legal",
    deliverable: "Corporate Site",
    gradient: "from-stone-100 to-neutral-200",
    accentColor: "bg-stone-700",
    icon: Briefcase,
    mockup: (
      <div className="w-full h-full relative">
        <div className="absolute inset-3 bg-white/60 backdrop-blur rounded-lg p-4">
          <div className="h-10 bg-gray-900 rounded mb-3"></div>
          <div className="h-24 bg-gray-50 rounded border border-gray-200 mb-3"></div>
          <div className="grid grid-cols-4 gap-3">
            {[1,2,3,4].map(i => (
              <div key={i} className="h-12 bg-gray-100 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    clientName: "DataFlow Analytics",
    projectType: "Analytics Tool",
    category: "Tech",
    deliverable: "Dashboard",
    gradient: "from-zinc-100 to-gray-200",
    accentColor: "bg-zinc-700",
    icon: BarChart3,
    mockup: (
      <div className="w-full h-full relative">
        <div className="absolute inset-3 bg-white/60 backdrop-blur rounded-lg p-4">
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className="h-16 bg-gray-100 rounded border border-gray-200"></div>
            <div className="h-16 bg-gray-100 rounded border border-gray-200"></div>
            <div className="h-16 bg-gray-100 rounded border border-gray-200"></div>
          </div>
          <div className="h-24 bg-gray-50 rounded border border-gray-200 p-3">
            <div className="h-full flex items-end gap-2">
              {[60, 40, 70, 45, 80, 55, 65].map((h, i) => (
                <div key={i} className="flex-1 bg-gray-300 rounded-t" style={{height: `${h}%`}}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    clientName: "TravelEase",
    projectType: "Travel Platform",
    category: "Tourism",
    deliverable: "Booking System",
    gradient: "from-neutral-100 to-stone-200",
    accentColor: "bg-neutral-700",
    icon: Globe,
    status: 'live',
    mockup: (
      <div className="w-full h-full relative">
        <div className="absolute inset-3 bg-white/60 backdrop-blur rounded-lg p-4">
          <div className="h-20 bg-gray-100 rounded border border-gray-200 mb-3"></div>
          <div className="flex gap-3 mb-3">
            <div className="flex-1 h-8 bg-gray-150 rounded"></div>
            <div className="w-24 h-8 bg-gray-200 rounded"></div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[1,2,3,4].map(i => (
              <div key={i} className="h-16 bg-gray-100 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 10,
    clientName: "Community Hub",
    projectType: "Social Platform",
    category: "Social",
    deliverable: "Community Portal",
    gradient: "from-gray-100 to-zinc-200",
    accentColor: "bg-gray-700",
    icon: Users,
    mockup: (
      <div className="w-full h-full relative">
        <div className="absolute inset-3 bg-white/60 backdrop-blur rounded-lg p-4">
          <div className="space-y-3">
            {[1,2,3].map(i => (
              <div key={i} className="flex gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-3 bg-gray-150 rounded w-1/3 mb-2"></div>
                  <div className="h-14 bg-gray-100 rounded border border-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
];

export function ProductShowcase() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const infiniteProjects = [...clientProjects, ...clientProjects];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Client Showcase
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Trusted by businesses worldwide to bring their digital visions to life
          </p>
        </motion.div>

        {/* Infinite Visual Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Enhanced Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fafaf9] via-[#fafaf9]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fafaf9] via-[#fafaf9]/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="relative">
            <div
              className={cn(
                "flex gap-6 py-4",
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
                  onHover={() => setHoveredProject(project.id)}
                  onLeave={() => setHoveredProject(null)}
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
  onHover,
  onLeave
}: {
  project: ClientProject;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      className="flex-shrink-0 w-[480px] h-[280px] relative group cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      {/* Main Visual Card */}
      <div className={cn(
        "w-full h-full rounded-xl overflow-hidden relative",
        "bg-gradient-to-br",
        project.gradient,
        "shadow-lg hover:shadow-xl transition-all duration-300"
      )}>
        {/* Status Badge */}
        {project.status && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-4 right-4 z-20"
          >
            <Badge variant="secondary" className="bg-white/90 backdrop-blur text-foreground border-0">
              {project.status === 'live' && 'LIVE'}
              {project.status === 'new' && 'NEW'}
              {project.status === 'featured' && 'FEATURED'}
            </Badge>
          </motion.div>
        )}

        {/* Project Mockup Visual */}
        <div className="absolute inset-0">
          {project.mockup}
        </div>

        {/* Hover Overlay - Slides up from bottom */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? 0 : "100%" }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30
          }}
          className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/80 via-black/60 to-transparent backdrop-blur-sm"
        >
          <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
            {/* Client Name & Type */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-1">
                {project.clientName}
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-white/70 text-sm">{project.projectType}</span>
                <span className="text-white/30">•</span>
                <span className="text-white/70 text-sm">{project.category}</span>
              </div>
            </motion.div>

            {/* Key Deliverable */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ delay: 0.15 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className={cn("w-7 h-7 rounded-md flex items-center justify-center", project.accentColor)}>
                  <project.icon className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-white/80 text-sm">
                  {project.deliverable}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/50" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}