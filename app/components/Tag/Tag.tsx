import type { ReactNode } from "react";
import styles from "./Tag.module.css";

interface TagProps {
  children: ReactNode;
  icon?: ReactNode;
}

export function Tag({ children, icon }: TagProps) {
  return (
    <span className={styles.tag}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </span>
  );
}
