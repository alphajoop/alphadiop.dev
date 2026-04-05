import styles from "./StatusBadge.module.css";

interface StatusBadgeProps {
  available?: boolean;
}

export function StatusBadge({ available = true }: StatusBadgeProps) {
  return (
    <span
      className={`${styles.badge} ${available ? styles.available : styles.unavailable}`}
    >
      <span className={styles.pulse} />
      <span className={styles.dot} />
      {available ? "Available for work" : "Not available"}
    </span>
  );
}
