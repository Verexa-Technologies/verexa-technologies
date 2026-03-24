"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { Code2, Globe, Zap } from "lucide-react";

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

          {/* Right Visual Graphics */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end py-12 lg:py-0 min-h-[500px]">
            {/* Elegant backdrop glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Central Main Card */}
            <div className="relative w-[280px] sm:w-[320px] xl:w-[380px] aspect-square rounded-3xl bg-card/40 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col items-center justify-center group z-20">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/10 to-transparent opacity-50"></div>
              
              {/* Animated Rings */}
              <div className="absolute w-[75%] h-[75%] rounded-full border border-primary/20 border-t-primary/60 animate-[spin_10s_linear_infinite]" />
              <div className="absolute w-[55%] h-[55%] rounded-full border border-white/10 border-b-white/50 animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Logo/Center Icon */}
              <div className="w-24 h-24 rounded-2xl bg-background/80 backdrop-blur-2xl border border-white/20 flex items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.3)] z-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700">
                <Image src="/logo.png" alt="Verexa" width={60} height={60} className="object-contain drop-shadow-md" />
              </div>

              {/* Badges/Tags */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 px-6">
                <span className="px-4 py-1.5 rounded-full bg-background/50 backdrop-blur-md border border-white/10 text-[10px] text-white/90 font-medium tracking-widest uppercase shadow-lg">Innovation</span>
                <span className="px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-[10px] text-primary-foreground font-medium tracking-widest uppercase shadow-lg">Future</span>
              </div>
            </div>

            {/* Floating Card 1 - Top Left */}
            <div className="absolute top-[5%] left-[5%] xl:-left-[10%] w-52 p-4 rounded-2xl bg-background/60 backdrop-blur-2xl border border-white/10 shadow-2xl z-30 transform transition-transform duration-500 hover:scale-105 hover:-translate-y-2 cursor-default" style={{ animation: "float 6s ease-in-out infinite" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/20 shadow-inner">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white tracking-wide">Digital Craft</div>
                  <div className="text-[9px] text-muted-foreground uppercase tracking-widest mt-0.5">Development</div>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%] rounded-full shadow-[0_0_10px_hsl(var(--primary))]"></div>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary/60 w-[60%] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 - Bottom Right */}
            <div className="absolute bottom-[5%] right-[0%] xl:-right-[10%] w-60 p-5 rounded-2xl bg-card/80 backdrop-blur-2xl border border-white/10 shadow-2xl z-30 transform transition-transform duration-500 hover:scale-105 hover:-translate-y-2 cursor-default" style={{ animation: "float 7s ease-in-out infinite 1s" }}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-[10px] text-primary uppercase tracking-widest mb-1 font-semibold">Global Reach</div>
                  <div className="text-white font-medium text-sm">Toronto Base</div>
                </div>
                <div className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white text-[10px] font-bold">100%</div>
              </div>
              <div className="flex -space-x-3 mt-2">
                <div className="w-10 h-10 rounded-full border-2 border-card bg-primary/20 flex items-center justify-center z-30 backdrop-blur-md shadow-md"><Globe className="w-4 h-4 text-primary" /></div>
                <div className="w-10 h-10 rounded-full border-2 border-card bg-accent/20 flex items-center justify-center z-20 backdrop-blur-md shadow-md"><Zap className="w-4 h-4 text-white" /></div>
                <div className="w-10 h-10 rounded-full border-2 border-card bg-white/10 flex items-center justify-center z-10 backdrop-blur-md shadow-md"><span className="text-xs text-white font-bold tracking-tighter">10+</span></div>
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
