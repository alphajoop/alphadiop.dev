import {
  siBun,
  siExpress,
  siGit,
  siGithub,
  siGmail,
  siHono,
  siLogmein,
  siMongodb,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siReact,
  siShadcnui,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons";
import { Divider } from "./components/Divider";
import { ExperienceItem } from "./components/ExperienceItem";
import { Section } from "./components/Section";
import { SectionHeader } from "./components/SectionHeader";
import { SocialLink } from "./components/SocialLink";
import { StatusBadge } from "./components/StatusBadge";
import { Tag } from "./components/Tag";
import { Typography } from "./components/Typography";

import styles from "./page.module.css";

function BrandIcon({
  icon,
  size = 12,
}: {
  icon: typeof siReact;
  size?: number;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  );
}

function GitHubIcon() {
  return <BrandIcon icon={siGithub} size={14} />;
}

function LogmeinIcon() {
  return <BrandIcon icon={siLogmein} size={14} />;
}

function GmailIcon() {
  return <BrandIcon icon={siGmail} size={14} />;
}

const stack = {
  Frontend: [
    { label: "React", icon: siReact },
    { label: "Next.js", icon: siNextdotjs },
    { label: "TypeScript", icon: siTypescript },
    { label: "Tailwind", icon: siTailwindcss },
    { label: "Shadcn/ui", icon: siShadcnui },
  ],
  Backend: [
    { label: "Node.js", icon: siNodedotjs },
    { label: "Express.js", icon: siExpress },
    { label: "Nest.js", icon: siNestjs },
    { label: "Hono", icon: siHono },
  ],
  Databases: [
    { label: "MongoDB", icon: siMongodb },
    { label: "MySQL", icon: siMysql },
    { label: "PostgreSQL", icon: siPostgresql },
    { label: "Prisma", icon: siPrisma },
  ],
  Tooling: [
    { label: "Git", icon: siGit },
    { label: "Vercel", icon: siVercel },
    { label: "Bun", icon: siBun },
  ],
};

const experience = [
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "Aug 2025 — Present",
    description:
      "Providing web development services specializing in modern frontend technologies. Working with clients to deliver high-quality, responsive, and performant applications built with React, Next.js, and TypeScript.",
  },
  {
    role: "Frontend Developer",
    company: "Dexchange Transfert",
    period: "Feb 2025 — Aug 2025",
    description:
      "Developed and optimized modern user interfaces using React, Next.js, and TypeScript to deliver performant and scalable applications.",
  },
  {
    role: "Web Development Instructor",
    company: "Linekode",
    period: "2024 — 2025",
    description:
      "Mentored beginner students in web development fundamentals — HTML, CSS, JavaScript, Git — through a 100% hands-on teaching approach.",
  },
  {
    role: "Web Development Intern",
    company: "Inprocess SARL",
    period: "2023",
    description:
      "First professional experience contributing to websites and internal applications, strengthening JavaScript skills and experience with modern frameworks.",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <Section delay={0}>
        <div className={styles.hero}>
          <div>
            <Typography variant="h1">Alpha Diop</Typography>
            <div className={styles.heroMeta}>
              <StatusBadge available />
              <Typography variant="small" color="tertiary">
                Dakar, Senegal
              </Typography>
            </div>
          </div>

          <Typography variant="body" color="secondary">
            Design Engineer passionate about building modern, performant web
            applications. I work across the full frontend stack — React,
            Next.js, TypeScript — with a sharp focus on interface quality,
            developer experience, and the invisible details that make software
            feel right.
          </Typography>

          <div className={styles.heroLinks}>
            <SocialLink
              href="https://github.com/alphajoop"
              label="GitHub"
              icon={<GitHubIcon />}
            />
            <SocialLink
              href="https://linkedin.com/in/alphajoop"
              label="LinkedIn"
              icon={<LogmeinIcon />}
            />
            <SocialLink
              href="mailto:alpha.diop@outlook.com"
              label="alpha.diop@outlook.com"
              icon={<GmailIcon />}
            />
          </div>
        </div>
      </Section>

      <Divider spacing="sm" />

      {/* About */}
      <Section delay={80}>
        <SectionHeader label="About" />
        <div className={styles.about}>
          <Typography variant="body" color="secondary">
            I design and build interfaces where every detail compounds into
            something that feels right. My background spans frontend
            development, teaching, and freelance client work — which means I
            care equally about code quality and communicating clearly.
          </Typography>
          <Typography variant="body" color="secondary">
            I believe beauty is leverage in software. Fast, well-crafted
            interfaces are not a luxury — they are the product. I&apos;m always
            exploring the JavaScript ecosystem to find better ways to build for
            a web that keeps evolving.
          </Typography>
        </div>
      </Section>

      <Divider spacing="sm" />

      {/* Experience */}
      <Section delay={160}>
        <SectionHeader label="Experience" />
        <div className={styles.experience}>
          {experience.map((item, i) => (
            <ExperienceItem
              key={item.company}
              role={item.role}
              company={item.company}
              period={item.period}
              description={item.description}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </Section>

      <Divider spacing="sm" />

      {/* Tech Stack */}
      <Section delay={240}>
        <SectionHeader label="Technologies" />
        <div className={styles.stack}>
          {Object.entries(stack).map(([group, items]) => (
            <div key={group} className={styles.stackGroup}>
              <div className={styles.stackGroupLabel}>
                <Typography variant="caption" color="tertiary">
                  {group}
                </Typography>
              </div>
              <div className={styles.tags}>
                {items.map(({ label, icon }) => (
                  <Tag key={label} icon={<BrandIcon icon={icon} size={12} />}>
                    {label}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className={styles.footer}>
        <Typography variant="caption" color="tertiary">
          © {new Date().getFullYear()} Alpha Diop
        </Typography>
        <div className={styles.footerLinks}>
          <a
            href="https://github.com/alphajoop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Typography variant="caption" color="tertiary">
              GitHub
            </Typography>
          </a>
          <a href="mailto:alpha.diop@outlook.com" aria-label="Email">
            <Typography variant="caption" color="tertiary">
              Contact
            </Typography>
          </a>
        </div>
      </footer>
    </main>
  );
}
