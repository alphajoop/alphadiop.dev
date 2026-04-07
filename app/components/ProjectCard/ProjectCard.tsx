import { ArrowUpRight } from "lucide-react";
import { Tag } from "../Tag";
import { Typography } from "../Typography";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  wip?: boolean;
}

export function ProjectCard({
  title,
  description,
  tags,
  href,
  wip = false,
}: ProjectCardProps) {
  const Tag_ = href ? "a" : "div";
  const linkProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag_
      className={styles.card}
      style={{ cursor: href ? undefined : "default" }}
      {...linkProps}
    >
      <div className={styles.left}>
        <div className={styles.titleRow}>
          <Typography variant="h3" className={styles.title}>
            {title}
          </Typography>
          {wip && (
            <Typography variant="label" className={styles.wip}>
              WIP
            </Typography>
          )}
        </div>
        <Typography
          variant="small"
          color="secondary"
          className={styles.description}
        >
          {description}
        </Typography>
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
      </div>

      {href && (
        <div className={styles.right}>
          <span className={styles.arrow}>
            <ArrowUpRight size={15} strokeWidth={1.75} />
          </span>
        </div>
      )}
    </Tag_>
  );
}
