import type { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Section({ children, className = "", delay = 0 }: SectionProps) {
  return (
    <section
      className={`${styles.section} animate-fade-up ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}
