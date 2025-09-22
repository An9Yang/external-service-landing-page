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
    clientName: "TechFlow",
    projectType: "SaaS Platform",
    category: "Technology",
    deliverable: "B2B Dashboard",
    gradient: "from-blue-400 to-indigo-600",
    accentColor: "bg-blue-500",
    icon: BarChart3,
    status: 'live',
    mockup: (
      <div className="w-full h-full relative">
        {/* Dashboard mockup */}
        <div className="absolute inset-2 bg-white/10 backdrop-blur rounded-lg p-3">
          <div className="flex gap-2 mb-3">
            <div className="w-16 h-full bg-white/20 rounded"></div>
            <div className="flex-1 space-y-2">
              <div className="grid grid-cols-4 gap-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-14 bg-white/20 rounded"></div>
                ))}
              </div>
              <div className="h-32 bg-white/10 rounded flex items-end p-2">
                <div className="w-full flex items-end gap-1">
                  {[40, 60, 35, 80, 45, 70, 55].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/30 rounded-t" style={{height: `${h}%`}}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    clientName: "Bloom & Co",
    projectType: "E-commerce",
    category: "Retail",
    deliverable: "Online Store",
    gradient: "from-pink-400 to-rose-600",
    accentColor: "bg-pink-500",
    icon: ShoppingBag,
    status: 'featured',
    mockup: (
      <div className="w-full h-full relative">
        {/* E-commerce mockup */}
        <div className="absolute inset-2 bg-white/10 backdrop-blur rounded-lg p-3">
          <div className="h-6 bg-white/20 rounded mb-3"></div>
          <div className="grid grid-cols-2 gap-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="space-y-1">
                <div className="h-24 bg-white/20 rounded"></div>
                <div className="h-2 bg-white/30 rounded w-3/4"></div>
                <div className="h-2 bg-white/20 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    clientName: "EduBridge",
    projectType: "EdTech",
    category: "Education",
    deliverable: "Learning Portal",
    gradient: "from-green-400 to-emerald-600",
    accentColor: "bg-green-500",
    icon: GraduationCap,
    mockup: (
      <div className="w-full h-full relative">
        {/* Learning platform mockup */}
        <div className="absolute inset-2 bg-white/10 backdrop-blur rounded-lg p-3 flex gap-2">
          <div className="w-1/3 space-y-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="h-7 bg-white/20 rounded"></div>
            ))}
          </div>
          <div className="flex-1 space-y-2">
            <div className="h-24 bg-white/20 rounded"></div>
            <div className="h-2 bg-white/30 rounded-full"></div>
            <div className="space-y-1">
              <div className="h-2 bg-white/20 rounded"></div>
              <div className="h-2 bg-white/20 rounded w-4/5"></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    clientName: "HealthHub",
    projectType: "Healthcare",
    category: "Medical",
    deliverable: "Patient Portal",
    gradient: "from-red-400 to-pink-600",
    accentColor: "bg-red-500",
    icon: Heart,
    status: 'new',
    mockup: (
      <div className="w-full h-full relative">
        {/* Healthcare mockup */}
        <div className="absolute inset-2 bg-white/10 backdrop-blur rounded-lg p-3">
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[1,2,3].map(i => (
              <div key={i} className="h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white/30 rounded-full"></div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-white/15 rounded"></div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-12 bg-white/20 rounded"></div>
              <div className="h-12 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    clientName: "Creative X",
    projectType: "Portfolio",
    category: "Agency",
    deliverable: "Showcase Site",
    gradient: "from-purple-400 to-violet-600",
    accentColor: "bg-purple-500",
    icon: Palette,
    mockup: (
      <div className="w-full h-full relative">
        {/* Portfolio mockup */}
        <div className="absolute inset-2 bg-white/10 backdrop-blur rounded-lg p-3">
          <div className="grid grid-cols-2 gap-2">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="h-20 bg-white/20 rounded"></div>
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
    gradient: "from-orange-400 to-red-600",
    accentColor: "bg-orange-500",
    icon: Smartphone,
    status: 'live',
    mockup: (
      <div className="w-full h-full relative flex items-center justify-center">
        {/* Mobile app mockup */}
        <div className="w-24 h-40 bg-black/20 rounded-2xl p-1">
          <div className="w-full h-full bg-white/10 backdrop-blur rounded-2xl p-2">
            <div className="space-y-2">
              <div className="h-4 bg-white/30 rounded"></div>
              <div className="h-20 bg-white/20 rounded"></div>
              <div className="grid grid-cols-2 gap-1">
                <div className="h-8 bg-white/25 rounded"></div>
                <div className="h-8 bg-white/25 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    clientName: "Legal Pro",
    projectType: "Law Firm",
    category: "Legal",
    deliverable: "Corporate Site",
    gradient: "from-slate-500 to-gray-700",
    accentColor: "bg-slate-600",
    icon: Briefcase,
    mockup: (
      <div className="w-full h-full relative">
        {/* Corporate site mockup */}
        <div className="absolute inset-2 bg-white/10 backdrop-blur rounded-lg p-3">
          <div className="h-8 bg-white/20 rounded mb-3"></div>
          <div className="h-24 bg-white/15 rounded mb-3"></div>
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3].map(i => (
              <div key={i} className="h-12 bg-white/20 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    clientName: "DataFlow",
    projectType: "Analytics",
    category: "Tech",
    deliverable: "Dashboard",
    gradient: "from-cyan-400 to-blue-600",
    accentColor: "bg-cyan-500",
    icon: BarChart3,
    mockup: (
      <div className="w-full h-full relative">
        {/* Analytics mockup */}
        <div className="absolute inset-2 bg-white/10 backdrop-blur rounded-lg p-3">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="h-16 bg-white/20 rounded"></div>
            <div className="h-16 bg-white/20 rounded"></div>
          </div>
          <div className="h-24 bg-white/15 rounded p-2">
            <div className="h-full flex items-end gap-1">
              {[60, 40, 70, 45, 80, 55].map((h, i) => (
                <div key={i} className="flex-1 bg-white/30 rounded-t" style={{height: `${h}%`}}></div>
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
    projectType: "Travel Site",
    category: "Tourism",
    deliverable: "Booking Platform",
    gradient: "from-teal-400 to-blue-600",
    accentColor: "bg-teal-500",
    icon: Globe,
    status: 'live',
    mockup: (
      <div className="w-full h-full relative">
        {/* Travel site mockup */}
        <div className="absolute inset-2 bg-white/10 backdrop-blur rounded-lg p-3">
          <div className="h-20 bg-white/20 rounded mb-2"></div>
          <div className="flex gap-2 mb-2">
            <div className="flex-1 h-6 bg-white/25 rounded"></div>
            <div className="w-20 h-6 bg-white/30 rounded"></div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3].map(i => (
              <div key={i} className="h-16 bg-white/20 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 10,
    clientName: "SocialHub",
    projectType: "Community",
    category: "Social",
    deliverable: "Social Platform",
    gradient: "from-violet-400 to-purple-600",
    accentColor: "bg-violet-500",
    icon: Users,
    mockup: (
      <div className="w-full h-full relative">
        {/* Social platform mockup */}
        <div className="absolute inset-2 bg-white/10 backdrop-blur rounded-lg p-3">
          <div className="space-y-2">
            {[1,2,3].map(i => (
              <div key={i} className="flex gap-2">
                <div className="w-8 h-8 bg-white/25 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-3 bg-white/20 rounded w-1/3 mb-1"></div>
                  <div className="h-12 bg-white/15 rounded"></div>
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
                "animate-[infiniteScroll_40s_linear_infinite]"
              )}
              style={{
                width: `calc(${infiniteProjects.length} * 340px)`,
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
      className="flex-shrink-0 w-[320px] h-[400px] relative group cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Main Visual Card */}
      <div className={cn(
        "w-full h-full rounded-2xl overflow-hidden relative",
        "bg-gradient-to-br",
        project.gradient,
        "shadow-lg hover:shadow-2xl transition-all duration-300"
      )}>
        {/* Status Badge */}
        {project.status && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-4 right-4 z-20"
          >
            <Badge className="bg-white/90 backdrop-blur text-foreground border-0">
              {project.status === 'live' && '🚀 Live'}
              {project.status === 'new' && '✨ New'}
              {project.status === 'featured' && '⭐ Featured'}
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
          className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-sm"
        >
          <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
            {/* Client Name & Type */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-1">
                {project.clientName}
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-white/80 text-sm">{project.projectType}</span>
                <span className="text-white/40">•</span>
                <span className="text-white/80 text-sm">{project.category}</span>
              </div>
            </motion.div>

            {/* Key Deliverable */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", project.accentColor)}>
                  <project.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90 text-sm font-medium">
                  {project.deliverable}
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/60" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}