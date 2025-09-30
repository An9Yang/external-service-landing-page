/**
 * Customer Testimonials Section - Three Column Vertical Scrolling (English Only)
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
  serviceType: string;
  rating: number;
}

export function Testimonials() {
  const realTestimonials: Testimonial[] = [
    {
      id: 1,
      content: "The client portal Step1 built for us has been a total game-changer. It's not just a tool; it's our new storefront. It makes our small agency look like a million-dollar firm and has completely streamlined how we collaborate with clients. No more chaotic email threads.",
      author: "David Chen",
      role: "Founder",
      company: "Marketing Agency",
      serviceType: "Client Portal",
      rating: 5
    },
    {
      id: 2,
      content: "The best part? If I can use Notion, I can run my own client portal. The fact that I can update project statuses and upload files for my clients just by editing a Notion page is pure magic. It saves me at least 5 hours a week on manual reporting.",
      author: "Sarah Jones",
      role: "Independent Business Consultant",
      company: "Consulting Services",
      serviceType: "Client Portal",
      rating: 5
    },
    {
      id: 3,
      content: "I needed a professional portfolio site, fast. For $9.9, I honestly didn't expect much, but the result blew me away. It's beautiful, easy for me to update with new work from Notion, and I genuinely believe it helped me land two new clients last month.",
      author: "Emily Carter",
      role: "Freelance Graphic Designer",
      company: "Creative Studio",
      serviceType: "Personal Portfolio",
      rating: 5
    },
    {
      id: 4,
      content: "I was hesitant about the $199 price at first, but it paid for itself with the very first new client I onboarded. The professional portal gave them so much confidence in our process. It's not an expense; it's an investment in client trust.",
      author: "Michael Rodriguez",
      role: "Founder",
      company: "Small Real Estate Agency",
      serviceType: "Client Portal",
      rating: 5
    },
    {
      id: 5,
      content: "The collaboration process with the Step1 team was incredibly smooth and professional. They didn't just build a website; they took the time to understand my business and my clients' needs. You can tell they genuinely care about your success.",
      author: "Chloe Dubois",
      role: "Startup Advisor",
      company: "Advisory Services",
      serviceType: "Client Portal",
      rating: 5
    }
  ];

  // Duplicate and mix testimonials to create more variety for the columns
  const testimonials: Testimonial[] = [
    ...realTestimonials,
    ...realTestimonials.map(t => ({ ...t, id: t.id + 5 })),
    ...realTestimonials.map(t => ({ ...t, id: t.id + 10 }))
  ];

  // Split testimonials into three columns
  const columns = [
    testimonials.filter((_, index) => index % 3 === 0),
    testimonials.filter((_, index) => index % 3 === 1),
    testimonials.filter((_, index) => index % 3 === 2)
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="bg-background rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
        ))}
      </div>

      <Quote className="w-8 h-8 text-muted-foreground/20 mb-3" />

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {testimonial.content}
      </p>

      <div className="pt-4 border-t border-border/50">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-foreground text-sm">
              {testimonial.author}
            </p>
            <p className="text-xs text-muted-foreground">
              {testimonial.role}
            </p>
            {testimonial.company && (
              <p className="text-xs text-muted-foreground">
                {testimonial.company}
              </p>
            )}
          </div>
          <span className={cn(
            "text-xs font-medium px-2 py-1 rounded-full",
            testimonial.serviceType === "Personal Portfolio"
              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
              : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
          )}>
            {testimonial.serviceType}
          </span>
        </div>
      </div>
    </div>
  );

  const ScrollColumn = ({
    testimonials,
    animationDuration,
    animationDelay
  }: {
    testimonials: Testimonial[]
    animationDuration: string
    animationDelay: string
  }) => {
    // Triple the testimonials for seamless loop
    const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

    return (
      <div className="relative h-[600px] overflow-hidden">
        {/* Gradient masks */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

        <div
          className="space-y-4 animate-[verticalScroll_var(--duration)_linear_infinite]"
          style={{
            '--duration': animationDuration,
            animationDelay: animationDelay,
          } as React.CSSProperties}
        >
          {infiniteTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-${Math.floor(index / testimonials.length)}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{`
        @keyframes verticalScroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(calc(-100% / 3));
          }
        }
      `}</style>

      <section className="min-h-screen flex items-center py-20 bg-muted/10">
        <div className="container-width w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Client Success Stories
              <span className="block text-lg md:text-xl text-muted-foreground mt-2 font-normal">
                Real Success Stories from Real Clients
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from entrepreneurs and business owners who achieved self-updating with Step1
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {columns.map((columnTestimonials, index) => (
              <ScrollColumn
                key={index}
                testimonials={columnTestimonials}
                animationDuration={`${30 + index * 5}s`}
                animationDelay={`${index * 2}s`}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}