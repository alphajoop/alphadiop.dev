"use client";

import { useLayoutEffect, useRef, useState } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** Hero: reveal on first paint when already in viewport */
  priority?: boolean;
  /** Stagger direct children instead of animating the whole block */
  stagger?: boolean;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

export function Section({
  children,
  className = "",
  priority = false,
  stagger = false,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }

    if (priority && isInViewport(element)) {
      requestAnimationFrame(() => setVisible(true));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [priority]);

  const classes = [
    styles.section,
    stagger ? styles.stagger : styles.reveal,
    visible ? styles.visible : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section ref={ref} className={classes}>
      {children}
    </section>
  );
}
