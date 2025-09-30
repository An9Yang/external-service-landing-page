/**
 * Client Showcase - Horizontal Infinite Scrolling Carousel (English Only)
 */
import { motion } from "framer-motion";
import { ExternalLink, Star, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
  const [isPaused, setIsPaused] = useState(false);

  const clientProjects: ClientProject[] = [
    {
      id: 1,
      title: "Rahibul Haque",
      description: "Designer's personal portfolio website",
      category: "Personal Portfolio",
      imageUrl: "https://static.step1.dev/0650509f66dc71b1da83da5d2c2e6e55",
      demoUrl: "https://step1-i9iy7ta-dy7abs67pg33.deno.dev/",
      tags: ["Notion Sync", "Portfolio Showcase"],
      testimonial: "After launch, I just update content in Notion and the website syncs automatically.",
      clientName: "Rahibul",
      clientRole: "UI/UX Designer"
    },
    {
      id: 2,
      title: "Solar Energy Portal",
      description: "Solar company management system",
      category: "Client Portal",
      imageUrl: "https://static.step1.dev/5978a8cc582dbf8b132b87a0bae92db4",
      demoUrl: "https://step1-gpdqxzo-wkwp9y7pydha.deno.dev/",
      tags: ["Inventory Management", "Sales Tracking"],
      testimonial: "Inventory, sales, supplier management all integrated, 200% efficiency boost.",
      clientName: "Li Wei",
      clientRole: "Operations Manager"
    },
    {
      id: 3,
      title: "Alex - UX Designer",
      description: "Brand designer showcase platform",
      category: "Personal Portfolio",
      imageUrl: "https://static.step1.dev/3dfafd036d6f899e39861feac6f7ad8d",
      demoUrl: "https://step1-jmtt2j5-6jrhdkacbjtw.deno.dev/",
      tags: ["Brand Design", "Case Studies"],
      testimonial: "15 years of experience perfectly presented, 3x increase in client inquiries.",
      clientName: "Alex Chen",
      clientRole: "Brand Designer"
    },
    {
      id: 4,
      title: "Agency Dashboard",
      description: "Agency collaboration platform",
      category: "Client Portal",
      imageUrl: "https://static.step1.dev/78c455563329478e35494d944a04fbad",
      demoUrl: "https://step1-dh2tfox-wq70zafdmzs3.deno.dev/#/dashboard",
      tags: ["Project Management", "Team Collaboration"],
      testimonial: "Project progress, team collaboration, data analysis all in one solution.",
      clientName: "Alex Johnson",
      clientRole: "Agency Director"
    },
    {
      id: 5,
      title: "Independent Designer",
      description: "Independent creative studio",
      category: "Personal Portfolio",
      imageUrl: "https://static.step1.dev/b3080f6b9b8ee5b89deaf138d2e3662c",
      demoUrl: "https://step1-c0yhu52-qx57kx63hnhc.deno.dev/",
      tags: ["Creative Showcase", "Client Collaboration"],
      testimonial: "Perfectly showcases our brand personality, clients remember us.",
      clientName: "Studio Lead",
      clientRole: "Creative Director"
    },
    {
      id: 6,
      title: "Enterprise Portal",
      description: "Enterprise-level management platform",
      category: "Client Portal",
      imageUrl: "https://static.step1.dev/5e2c4638f041964e767ca2f0e8109a41",
      demoUrl: "https://step1-dh2tfox-3938e3dw9vzb.deno.dev/login",
      tags: ["Airtable Integration", "Access Control"],
      testimonial: "Seamless Airtable integration, team collaboration efficiency doubled.",
      clientName: "Enterprise Team",
      clientRole: "Product Manager"
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
            project.category === "Personal Portfolio"
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
              Live Demo
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
            See What We've Built for Clients
            <span className="block text-lg md:text-xl text-muted-foreground mt-2 font-normal">
              Loved by Creators & Consultants
            </span>
          </h2>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-foreground font-semibold">40+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              <span className="text-foreground font-semibold">4.9/5 Satisfaction</span>
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
            {isPaused ? "Paused - Click cards to view sites" : "Hover to pause scrolling"}
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90"
            asChild
          >
            <a href="#plans">
              Start Building Your Website
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}