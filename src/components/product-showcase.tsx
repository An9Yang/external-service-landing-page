/**
 * Step1 Client Work Showcase - Outsourcing Portfolio Display
 */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import {
  Globe,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  Heart,
  Gamepad2,
  Music,
  Camera,
  Coffee,
  Home,
  Plane,
  BookOpen,
  Utensils,
  Dumbbell,
  Palette,
  Film
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ClientProject {
  id: number;
  clientName: string;
  projectType: string;
  description: string;
  icon: React.ElementType;
  industry: string;
  deliverables: string[];
  status?: string;
  color: string;
}

const clientProjects: ClientProject[] = [
  {
    id: 1,
    clientName: "TechFlow Solutions",
    projectType: "Corporate Website",
    description: "Modern B2B SaaS platform with interactive demos and customer portal",
    icon: Globe,
    industry: "Technology",
    deliverables: ["Landing Page", "Dashboard", "API Docs"],
    status: "Live",
    color: "text-blue-600"
  },
  {
    id: 2,
    clientName: "Bloom & Co",
    projectType: "E-commerce Platform",
    description: "Full-stack online boutique with inventory management and payment processing",
    icon: ShoppingBag,
    industry: "Retail",
    deliverables: ["Store Front", "Admin Panel", "Mobile App"],
    status: "Live",
    color: "text-pink-600"
  },
  {
    id: 3,
    clientName: "EduBridge Academy",
    projectType: "Learning Management System",
    description: "Online education platform with video courses and student progress tracking",
    icon: GraduationCap,
    industry: "Education",
    deliverables: ["Course Platform", "Student Portal", "Analytics"],
    color: "text-green-600"
  },
  {
    id: 4,
    clientName: "HealthHub Clinic",
    projectType: "Patient Portal",
    description: "Medical appointment booking system with patient records management",
    icon: Heart,
    industry: "Healthcare",
    deliverables: ["Booking System", "Patient Dashboard", "Doctor Portal"],
    status: "New",
    color: "text-red-600"
  },
  {
    id: 5,
    clientName: "Creative Studio X",
    projectType: "Portfolio Website",
    description: "Stunning portfolio showcase with dynamic galleries and client testimonials",
    icon: Camera,
    industry: "Creative",
    deliverables: ["Gallery", "Case Studies", "Contact Forms"],
    color: "text-purple-600"
  },
  {
    id: 6,
    clientName: "FitLife Pro",
    projectType: "Fitness App",
    description: "Workout tracking platform with nutrition planning and progress analytics",
    icon: Dumbbell,
    industry: "Fitness",
    deliverables: ["Web App", "Mobile App", "Coach Portal"],
    status: "Featured",
    color: "text-orange-600"
  },
  {
    id: 7,
    clientName: "Legal Associates",
    projectType: "Law Firm Website",
    description: "Professional legal services website with case management system",
    icon: Briefcase,
    industry: "Legal",
    deliverables: ["Corporate Site", "Client Portal", "Blog"],
    color: "text-indigo-600"
  },
  {
    id: 8,
    clientName: "Gourmet Kitchen",
    projectType: "Restaurant Platform",
    description: "Restaurant website with online ordering and table reservation system",
    icon: Utensils,
    industry: "Food & Beverage",
    deliverables: ["Website", "Ordering System", "Reservation App"],
    color: "text-yellow-600"
  },
  {
    id: 9,
    clientName: "TravelEase",
    projectType: "Travel Booking Site",
    description: "Travel agency platform with booking engine and itinerary management",
    icon: Plane,
    industry: "Travel",
    deliverables: ["Booking Platform", "User Dashboard", "Admin Tools"],
    status: "Live",
    color: "text-teal-600"
  },
  {
    id: 10,
    clientName: "GameZone Hub",
    projectType: "Gaming Community",
    description: "Gaming community platform with tournaments and social features",
    icon: Gamepad2,
    industry: "Gaming",
    deliverables: ["Community Site", "Tournament System", "Forums"],
    color: "text-violet-600"
  }
];

export function ProductShowcase() {
  const [isPaused, setIsPaused] = useState(false);
  const infiniteProjects = [...clientProjects, ...clientProjects, ...clientProjects];

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

        {/* Infinite Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="relative">
            <div
              className={cn(
                "flex gap-4 py-4",
                isPaused ? "" : "animate-[infiniteScroll_60s_linear_infinite]"
              )}
              style={{
                width: `calc(${infiniteProjects.length} * 320px)`,
              }}
            >
              {infiniteProjects.map((project, index) => (
                <ProjectCard
                  key={`${project.id}-${Math.floor(index / clientProjects.length)}`}
                  project={project}
                  index={index}
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

// Project Card Component
function ProjectCard({ project, index }: { project: ClientProject; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex-shrink-0 w-[300px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className={cn(
        "h-full bg-white border-border/50 transition-all duration-200 cursor-pointer",
        isHovered && "shadow-md border-border"
      )}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between mb-3">
            <div className={cn(
              "p-2 rounded-lg transition-colors",
              isHovered ? "bg-muted" : "bg-muted/50"
            )}>
              <project.icon className={cn("h-5 w-5", project.color)} />
            </div>
            {project.status && (
              <Badge variant="secondary" className="text-xs">
                {project.status}
              </Badge>
            )}
          </div>
          <CardTitle className="text-base font-medium text-foreground">
            {project.clientName}
          </CardTitle>
          <div className="text-xs text-primary font-medium">
            {project.projectType}
          </div>
          <CardDescription className="text-xs text-muted-foreground line-clamp-2 mt-1">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="mb-3">
            <div className="text-xs text-muted-foreground mb-2">Deliverables:</div>
            <div className="flex flex-wrap gap-1">
              {project.deliverables.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-0.5 bg-muted/50 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            <span className="text-xs text-muted-foreground">
              {project.industry}
            </span>
            <motion.div
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-1 text-xs text-primary"
            >
              <span>View Case Study</span>
              <motion.span
                animate={{ x: isHovered ? 2 : 0 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}