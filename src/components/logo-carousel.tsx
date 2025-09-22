/**
 * Logo Carousel - Infinite scrolling logo showcase
 */
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const logos = [
  { id: 1, name: "Microsoft", svg: "M" },
  { id: 2, name: "Google", svg: "G" },
  { id: 3, name: "Apple", svg: "A" },
  { id: 4, name: "Amazon", svg: "Az" },
  { id: 5, name: "Meta", svg: "F" },
  { id: 6, name: "Tesla", svg: "T" },
  { id: 7, name: "Netflix", svg: "N" },
  { id: 8, name: "Spotify", svg: "S" },
  { id: 9, name: "Adobe", svg: "Ad" },
  { id: 10, name: "Oracle", svg: "O" },
  { id: 11, name: "IBM", svg: "IBM" },
  { id: 12, name: "Intel", svg: "I" },
];

export function LogoCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const infiniteLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-background">
      <div className="container-width">
        {/* Infinite Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Enhanced Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="relative">
            <div
              className={cn(
                "flex gap-12 items-center py-4",
                isPaused ? "[animation-play-state:paused]" : "[animation-play-state:running]",
                "animate-[infiniteScroll_30s_linear_infinite]"
              )}
              style={{
                width: `calc(${infiniteLogos.length} * 160px)`,
              }}
            >
              {infiniteLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${Math.floor(index / logos.length)}`}
                  className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
                >
                  <div className="w-24 h-12 bg-muted/30 rounded-lg flex items-center justify-center hover:bg-muted/50 transition-colors">
                    <span className="text-xl font-semibold text-muted-foreground/70">
                      {logo.svg}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}