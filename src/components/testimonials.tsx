/**
 * Customer Testimonials Section - Minimal Design
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
    content: "Step1 transformed our vision into reality in just 6 weeks. The team's expertise in modern web technologies helped us launch 3 months ahead of schedule. Their attention to detail and professional communication made the entire process seamless.",
    author: "Sarah Chen",
    role: "Founder & CEO",
    company: "TechFlow Solutions",
    rating: 5
  },
  {
    id: 2,
    content: "Working with Step1 was a game-changer for our e-commerce platform. They not only delivered a beautiful, high-converting site but also implemented features we hadn't even thought of. Sales increased by 40% within the first month.",
    author: "Michael Rodriguez",
    role: "Head of Digital",
    company: "Bloom Boutique",
    rating: 5
  },
  {
    id: 3,
    content: "The dashboard they built for us is intuitive and powerful. Our team adopted it immediately with minimal training. Step1's understanding of user experience is exceptional - they truly think from the end-user's perspective.",
    author: "Emma Thompson",
    role: "Product Manager",
    company: "DataFlow Analytics",
    rating: 5
  },
  {
    id: 4,
    content: "We needed a complete digital transformation, and Step1 delivered beyond expectations. From legacy system migration to modern cloud architecture, they handled everything professionally. Our operational efficiency improved by 60%.",
    author: "David Kim",
    role: "CTO",
    company: "HealthHub Clinic",
    rating: 5
  },
  {
    id: 5,
    content: "The learning platform Step1 created for us is engaging and scalable. Student satisfaction scores are at an all-time high. Their team understood our educational goals and translated them into technical excellence.",
    author: "Dr. Jennifer Walsh",
    role: "Director of Education",
    company: "EduBridge Academy",
    rating: 5
  },
  {
    id: 6,
    content: "Step1's expertise in mobile development is outstanding. Our fitness app has become the top-rated in its category. They delivered a pixel-perfect design with smooth animations and rock-solid performance.",
    author: "Alex Martinez",
    role: "Product Owner",
    company: "FitLife Pro",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="section-padding bg-background">
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
            Don't just take our word for it. Here's what industry leaders
            have to say about working with Step1.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={cn(
                "h-full p-8 rounded-2xl",
                "bg-muted/30 hover:bg-muted/50",
                "border border-border/50 hover:border-border",
                "transition-all duration-300",
                "relative overflow-hidden"
              )}>
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-foreground" />
                </div>

                {/* Content */}
                <div className="relative space-y-6">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-foreground/80 text-foreground/80" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground leading-relaxed line-clamp-5">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-lg font-semibold text-gray-600">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>

                    {/* Name & Role */}
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-muted-foreground/70">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
  );
}