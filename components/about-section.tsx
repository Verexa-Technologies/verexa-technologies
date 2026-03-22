"use client";

import { ReactNode } from "react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-background pt-24 overflow-hidden relative border-t border-border/10 scroll-mt-24"
    >
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content Area */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent mb-6">
              Who We Are
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Verexa is a forward-thinking digital agency committed to crafting
              exceptional experiences. We blend cutting-edge technology with
              world-class design to help businesses scale, innovate, and
              dominate their industries.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Our team of visionary designers, expert engineers, and strategic
              thinkers work collaboratively to turn your most ambitious ideas
              into reality. We don't just build software; we build the future.
            </p>

            {/* Embedded Stats Row */}
            <div className="flex items-center justify-between gap-4 sm:gap-0 w-full mt-2">
              <div className="w-full text-center relative flex-1 min-w-0 group cursor-default p-2">
                <div className="absolute inset-0 rounded-2xl shadow-inner group-hover:bg-card/60 transition-colors"></div>
                <div className="relative z-10">
                  <h3 className="text-muted-foreground text-xs sm:text-[10px] md:text-sm font-medium mb-2 uppercase tracking-widest truncate">
                    Experience
                  </h3>
                  <div className="text-4xl lg:text-5xl tracking-tight font-medium text-white mb-2">
                    5+
                  </div>
                  <p className="text-muted-foreground/70 text-xs">
                    Years of excellence
                  </p>
                </div>
              </div>
              <div className="hidden sm:block h-16 w-px bg-white/10 mx-2"></div>
              <div className="w-full text-center relative flex-1 min-w-0 group cursor-default p-2">
                <div className="absolute inset-0 rounded-2xl shadow-inner group-hover:bg-card/60 transition-colors"></div>
                <div className="relative z-10">
                  <h3 className="text-muted-foreground text-xs sm:text-[10px] md:text-sm font-medium mb-2 uppercase tracking-widest truncate">
                    Projects
                  </h3>
                  <div className="text-4xl lg:text-5xl tracking-tight font-medium text-white mb-2">
                    10+
                  </div>
                  <p className="text-muted-foreground/70 text-xs">
                    Successfully delivered
                  </p>
                </div>
              </div>
              <div className="hidden sm:block h-16 w-px bg-white/10 mx-2"></div>
              <div className="w-full text-center relative flex-1 min-w-0 group cursor-default p-2">
                <div className="absolute inset-0 rounded-2xl shadow-inner group-hover:bg-card/60 transition-colors"></div>
                <div className="relative z-10">
                  <h3 className="text-muted-foreground text-xs sm:text-[10px] md:text-sm font-medium mb-2 uppercase tracking-widest truncate">
                    Satisfaction
                  </h3>
                  <div className="text-4xl lg:text-5xl tracking-tight font-medium text-white mb-2">
                    99%
                  </div>
                  <p className="text-muted-foreground/70 text-xs">
                    Happy clients
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Image Placeholder */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end py-12 lg:py-0">
            {/* Elegant backdrop glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Clean Photography Frame */}
            <div className="w-full max-w-[500px] aspect-4/5 rounded-4xl bg-card/10 backdrop-blur-xs relative overflow-hidden border border-white/10 shadow-2xl group flex flex-col justify-end">
              <Image
                src="/about.png"
                alt="About Image"
                fill
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* Minimalist Info Overlay */}
              <div className="relative z-10 m-6 p-6 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-between translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div>
                  <p className="text-white font-medium text-lg leading-tight">
                    Verexa Technologies Inc.
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Toronto, ON, Canada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/30 backdrop-blur-sm transition-colors hover:bg-card/50 cursor-default">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 shadow-inner">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-white tracking-tight">
          {value}
        </span>
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
    </div>
  );
}
