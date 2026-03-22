"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Clear hash when scrolled straight to top
      if (window.scrollY < 100 && window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Section Observer for URL Hash
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id && window.scrollY >= 100) {
              window.history.replaceState(null, "", `#${id}`);
            }
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 z-50 w-full transition-all duration-500 flex justify-center ${scrolled ? "pt-4 px-4" : "pt-0 px-0"}`}
      >
        <nav
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "w-full max-w-5xl rounded-full shadow-md py-3 px-10 bg-background/50 backdrop-blur-xl liquid-glass"
              : "w-full max-w-full rounded-none border-b border-transparent py-6 px-10 sm:px-36"
          }`}
        >
          <Logo />

          <div className="hidden md:flex items-center gap-10 pr-2">
            <Link
              href="#services"
              className="text-foreground/90 text-[15px] font-medium hover:text-primary transition-colors relative group py-2"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-[2px] rounded-full bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#about"
              className="text-foreground/90 text-[15px] font-medium hover:text-primary transition-colors relative group py-2"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[2px] rounded-full bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            {/* <Link href="#portfolio" className="text-foreground/90 text-[15px] font-medium hover:text-primary transition-colors relative group py-2">
            Portfolio
            <span className="absolute bottom-0 left-0 w-0 h-[2px] rounded-full bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link> */}
            <Link
              href="#contact"
              className="text-foreground/90 text-[15px] font-medium hover:text-primary transition-colors relative group py-2"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[2px] rounded-full bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-foreground/80 hover:text-white transition-colors cursor-pointer relative z-60"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
        <div
          className={`flex flex-col items-center gap-8 transition-all duration-500 delay-100 ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-3xl font-medium tracking-wide text-foreground/90 hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-3xl font-medium tracking-wide text-foreground/90 hover:text-primary transition-colors"
          >
            About
          </Link>
          {/* <Link
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="text-3xl font-medium tracking-wide text-foreground/90 hover:text-primary transition-colors"
          >
            Portfolio
          </Link> */}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-3xl font-medium tracking-wide text-foreground/90 hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
