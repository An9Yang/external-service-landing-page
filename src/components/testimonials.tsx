/**
 * Customer Testimonials Section - Vertical Scrolling Design
 */
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Step1 transformed our vision into reality in just 6 weeks. The team's expertise in modern web technologies helped us launch 3 months ahead of schedule.",
    author: "Sarah Chen",
    role: "Founder & CEO",
    company: "TechFlow Solutions",
    rating: 5
  },
  {
    id: 2,
    content: "Outstanding work! Delivered on time and exceeded expectations.",
    author: "Michael Rodriguez",
    role: "Head of Digital",
    company: "Bloom Boutique",
    rating: 5
  },
  {
    id: 3,
    content: "The dashboard they built for us is intuitive and powerful. Our team adopted it immediately with minimal training. Step1's UX understanding is exceptional.",
    author: "Emma Thompson",
    role: "Product Manager",
    company: "DataFlow Analytics",
    rating: 5
  },
  {
    id: 4,
    content: "Perfect execution. Highly recommend!",
    author: "David Kim",
    role: "CTO",
    company: "HealthHub Clinic",
    rating: 5
  },
  {
    id: 5,
    content: "The learning platform Step1 created for us is engaging and scalable. Student satisfaction scores are at an all-time high. Their attention to educational UX principles and gamification elements made all the difference.",
    author: "Dr. Jennifer Walsh",
    role: "Director of Education",
    company: "EduBridge Academy",
    rating: 5
  },
  {
    id: 6,
    content: "Step1's expertise in mobile development is outstanding.",
    author: "Alex Martinez",
    role: "Product Owner",
    company: "FitLife Pro",
    rating: 5
  },
  {
    id: 7,
    content: "The API integration work was flawless. Step1 handled complex third-party services with ease and delivered robust error handling that saved us countless hours of debugging.",
    author: "Lisa Wang",
    role: "Tech Lead",
    company: "PayFlow Systems",
    rating: 5
  },
  {
    id: 8,
    content: "World-class team and execution.",
    author: "Robert Johnson",
    role: "VP Engineering",
    company: "CloudScale Inc",
    rating: 5
  },
  {
    id: 9,
    content: "Step1 built our entire SaaS platform from scratch. The scalability and performance are exactly what we needed for growth. They also provided excellent documentation and knowledge transfer.",
    author: "Jessica Lee",
    role: "Co-founder",
    company: "DataSync Pro",
    rating: 5
  },
  {
    id: 10,
    content: "Exceptional attention to detail!",
    author: "Mark Thompson",
    role: "Product Designer",
    company: "DesignFlow",
    rating: 5
  },
  {
    id: 11,
    content: "Step1's modern tech stack recommendations saved us years of technical debt. They truly understand enterprise architecture and helped us build a future-proof solution.",
    author: "Anna Kowalski",
    role: "CTO",
    company: "FinTech Solutions",
    rating: 5
  },
  {
    id: 12,
    content: "Flawless real-time implementation!",
    author: "James Chen",
    role: "Lead Developer",
    company: "LiveStream Tech",
    rating: 5
  },
  {
    id: 13,
    content: "Step1 delivered a beautiful, functional e-commerce platform that increased our conversion rates by 45%. The checkout flow optimization alone was worth the investment.",
    author: "Rebecca Liu",
    role: "E-commerce Manager",
    company: "Style Haven",
    rating: 5
  },
  {
    id: 14,
    content: "Best development partner we've had!",
    author: "Thomas Anderson",
    role: "CEO",
    company: "Matrix Solutions",
    rating: 5
  },
  {
    id: 15,
    content: "The AI features they integrated into our platform are cutting-edge. Step1 helped us leverage machine learning in ways we never imagined possible.",
    author: "Dr. Kevin Park",
    role: "Head of Innovation",
    company: "AI Labs",
    rating: 5
  },
  {
    id: 16,
    content: "Incredible ROI on our investment.",
    author: "Michelle Davis",
    role: "CFO",
    company: "Growth Ventures",
    rating: 5
  }
];

export function Testimonials() {
  // Split testimonials into 4 columns for vertical scrolling
  const column1 = [testimonials[0], testimonials[4], testimonials[8], testimonials[12]];
  const column2 = [testimonials[1], testimonials[5], testimonials[9], testimonials[13]];
  const column3 = [testimonials[2], testimonials[6], testimonials[10], testimonials[14]];
  const column4 = [testimonials[3], testimonials[7], testimonials[11], testimonials[15]];

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className={cn(
      "py-8 px-6 rounded-xl",
      "bg-muted/20 hover:bg-muted/30",
      "border border-border/30 hover:border-border/50",
      "transition-all duration-500",
      "relative overflow-hidden",
      "group cursor-default"
    )}>
      {/* Subtle quote icon */}
      <div className="absolute -top-2 -right-2 opacity-5">
        <Quote className="w-24 h-24 text-foreground" />
      </div>

      <div className="relative space-y-5">
        {/* Stars */}
        <div className="flex gap-0.5">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-foreground/60 text-foreground/60" />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-[15px] text-muted-foreground leading-loose">
          "{testimonial.content}"
        </p>

        {/* Author Info */}
        <div className="pt-5 border-t border-border/30">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center shrink-0">
              <span className="text-sm font-medium text-muted-foreground">
                {testimonial.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>

            {/* Name & Role */}
            <div className="min-w-0">
              <h4 className="text-[15px] font-medium text-foreground truncate">
                {testimonial.author}
              </h4>
              <p className="text-[13px] text-muted-foreground truncate">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ScrollColumn = ({
    testimonials,
    direction = "up",
    duration = "30s",
    delay = "0s"
  }: {
    testimonials: Testimonial[],
    direction?: "up" | "down",
    duration?: string,
    delay?: string
  }) => (
    <div className="relative h-[850px] overflow-hidden">
      {/* Gradient masks for smooth fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/90 to-transparent z-10 pointer-events-none" />

      <div
        className={cn(
          "absolute inset-0 space-y-10",
          direction === "up" ? "animate-verticalScrollUp" : "animate-verticalScrollDown"
        )}
        style={{
          animationDuration: duration,
          animationDelay: delay,
          animationTimingFunction: "linear"
        }}
      >
        {/* Double the content for seamless loop */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes verticalScrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes verticalScrollDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-verticalScrollUp {
          animation: verticalScrollUp linear infinite;
          will-change: transform;
        }

        .animate-verticalScrollDown {
          animation: verticalScrollDown linear infinite;
          will-change: transform;
        }
      `}</style>

      <section className="section-padding bg-background overflow-hidden">
        <div className="container-width">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real feedback from companies we've partnered with to deliver exceptional results
            </p>
          </motion.div>

          {/* Vertical Scrolling Columns */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          >
            <ScrollColumn testimonials={column1} direction="up" duration="40s" delay="0s" />
            <ScrollColumn testimonials={column2} direction="down" duration="45s" delay="2s" />
            <ScrollColumn testimonials={column3} direction="up" duration="42s" delay="1s" />
            <ScrollColumn testimonials={column4} direction="down" duration="48s" delay="3s" />
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-foreground/60 text-foreground/60" />
                <span>4.9/5 Average Rating</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div>100+ Happy Clients</div>
              <div className="w-px h-4 bg-border" />
              <div>98% Project Success Rate</div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}