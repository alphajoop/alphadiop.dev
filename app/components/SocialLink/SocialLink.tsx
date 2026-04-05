import type { ReactNode } from "react";
import styles from "./SocialLink.module.css";

interface SocialLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
}

export function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
      aria-label={label}
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </a>
  );
}
