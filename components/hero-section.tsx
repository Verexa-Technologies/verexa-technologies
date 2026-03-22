"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;

      // Fade in over first 0.5 seconds
      if (currentTime < 0.5) {
        video.style.opacity = String((currentTime / 0.5) * 1);
      }
      // Fade out over last 0.5 seconds
      else if (currentTime > duration - 0.5) {
        video.style.opacity = String(
          (1 - (currentTime - (duration - 0.5)) / 0.5) * 1,
        );
      } else {
        video.style.opacity = "1";
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
      }, 100);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="relative z-20 flex flex-col items-center justify-center pt-40">
        <h1 className="text-[42px] sm:text-5xl lg:text-7xl font-normal leading-[1.05] bg-linear-to-b from-foreground from-20% to-muted-foreground sm:from-foreground sm:from-30% sm:to-muted-foreground to-100% bg-clip-text text-transparent text-center pb-4 max-w-5xl mx-auto tracking-tight">
          Code.Design.
          <br />
          Deploy.Support.
        </h1>

        <p className="text-center md:text-xl sm:leading-8 sm:max-w-2xl opacity-80 text-foreground/82">
          Innovative digital solutions for modern businesses. <br />
          Web, Mobile, Design, Infra and Support - all in one place.
        </p>

        <div className="mt-8 mb-[66px] flex gap-4">
          <Button
            variant="heroSecondary"
            className="px-[29px] py-[24px] rounded-full text-base font-semibold tracking-wide"
          >
            Explore Services
          </Button>
          <Button
            variant="heroSecondary"
            className="px-[29px] py-[24px] rounded-full text-base font-semibold tracking-wide"
          >
            Contact Us
          </Button>
        </div>
      </div>
      {/* Background Gradient to fade video at the bottom */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-linear-to-b from-transparent to-background pointer-events-none z-10" />

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="-mt-24 lg:-mt-48 w-full h-auto min-h-[60%] object-cover object-top opacity-0 pointer-events-none z-0"
        style={{ opacity: 0 }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
