import { Typography } from "../Typography";
import styles from "./ExperienceItem.module.css";

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
  isLast?: boolean;
}

export function ExperienceItem({
  role,
  company,
  period,
  description,
  isLast = false,
}: ExperienceItemProps) {
  return (
    <div className={`${styles.item} ${isLast ? styles.last : ""}`}>
      <div className={styles.timeline}>
        <div className={styles.dot} />
        {!isLast && <div className={styles.line} />}
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <Typography variant="h3" className={styles.role}>
            {role}
          </Typography>
          <Typography
            variant="caption"
            color="tertiary"
            className={styles.period}
          >
            {period}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="secondary"
          weight="medium"
          className={styles.company}
        >
          {company}
        </Typography>
        <Typography
          variant="small"
          color="secondary"
          className={styles.description}
        >
          {description}
        </Typography>
      </div>
    </div>
  );
}
