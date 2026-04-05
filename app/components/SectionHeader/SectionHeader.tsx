import { Typography } from "../Typography";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  label: string;
}

export function SectionHeader({ label }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <Typography variant="label" color="tertiary">
        {label}
      </Typography>
    </div>
  );
}
