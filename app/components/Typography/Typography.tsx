import type { ElementType, ReactNode } from "react";
import styles from "./Typography.module.css";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "label"
  | "body"
  | "small"
  | "mono"
  | "caption";

type Weight = "regular" | "medium" | "semibold";

interface TypographyProps {
  variant?: Variant;
  weight?: Weight;
  color?: "default" | "secondary" | "tertiary" | "accent";
  as?: ElementType;
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

const defaultTags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  label: "span",
  body: "p",
  small: "p",
  mono: "span",
  caption: "span",
};

export function Typography({
  variant = "body",
  weight,
  color = "default",
  as,
  className = "",
  children,
  style,
}: TypographyProps) {
  const Tag = as ?? defaultTags[variant];

  const classes = [
    styles.base,
    styles[variant],
    weight ? styles[weight] : "",
    styles[`color-${color}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} style={style}>
      {children}
    </Tag>
  );
}
