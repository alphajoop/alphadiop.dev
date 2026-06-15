import {
  siBun,
  siExpress,
  siGit,
  siHono,
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
import { ProjectCard } from "./components/ProjectCard";
import { Section } from "./components/Section";
import { SectionHeader } from "./components/SectionHeader";
import {
  GitHubIcon,
  LinkedInIcon,
  OutlookIcon,
} from "./components/SocialIcons";
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

const featuredProjects = [
  {
    title: "Faktiir",
    description:
      "Simple and modern invoice management for freelancers and small businesses. Built with Next.js and TypeScript, featuring real-time invoice generation and payment tracking.",
    tags: ["Next.js", "Nest.js", "Tanstack", "Tailwind"],
    href: "https://github.com/alphajoop/faktiir",
  },
  {
    title: "Galsen Streak",
    description:
      "A GitHub-style streak tracker redesigned for Senegalese users. Focused on consistency, clean visuals, and a modern, minimal user experience.",
    tags: ["Hono", "TypeScript", "React"],
    href: "https://github.com/alphajoop/galsen-streak",
  },
  {
    title: "Open USSD SN",
    description:
      "Open database of USSD codes used across mobile services in Senegal. Simplifies access to Mobile Money and telecom interactions in a fragmented ecosystem.",
    tags: ["CSV", "Next.js", "TypeScript", "Tailwind"],
    href: "https://github.com/alphajoop/open-ussd-sn",
  },
  {
    title: "Cokkeer",
    description:
      "Ultra-fast, zero-dependency syntax highlighter optimized for Bun and TypeScript. Ideal for developers needing lightweight, performant code highlighting.",
    tags: ["Bun", "TypeScript", "CLI", "Performance"],
    href: "https://github.com/alphajoop/cokkeer",
  },
];

const experiments = [
  {
    title: "USB Prep",
    description:
      "A lightweight C++ tool that automates USB drive preparation on Windows using DiskPart. Simplifies formatting and setup through a fast, command-driven workflow.",
    tags: ["C++", "Windows", "CLI"],
    href: "https://github.com/alphajoop/usb-prep",
  },
  {
    title: "SnapZip",
    description:
      "A fast image compression tool for JPEG and PNG files, built with Rust. Optimizes images without losing quality, ideal for web and mobile projects.",
    tags: ["Rust", "JPEG", "PNG", "CLI"],
    href: "https://github.com/alphajoop/snapzip",
  },
];

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
      <Section priority stagger>
        <div className={styles.hero}>
          <div className={styles.heroIntro}>
            <Typography variant="h1" className={styles.heroTitle}>
              Alpha Diop
            </Typography>
            <p className={styles.heroRole}>Design Engineer</p>
          </div>

          <Typography
            variant="body"
            color="secondary"
            className={styles.heroTagline}
          >
            I build interfaces where craft and engineering share the same
            vocabulary — from pixel-level detail to the systems behind it.
          </Typography>

          <div className={styles.heroMeta}>
            <StatusBadge available />
            <Typography variant="small" color="tertiary">
              Dakar, Senegal
            </Typography>
          </div>

          <div className={styles.heroLinks}>
            <SocialLink
              href="https://github.com/alphajoop"
              label="GitHub"
              icon={<GitHubIcon />}
            />
            <SocialLink
              href="https://linkedin.com/in/alphajoop"
              label="LinkedIn"
              icon={<LinkedInIcon />}
            />
            <SocialLink
              href="mailto:alpha.diop@outlook.com"
              label="Outlook"
              icon={<OutlookIcon />}
            />
          </div>
        </div>
      </Section>

      <Divider spacing="sm" />

      {/* About */}
      <Section>
        <SectionHeader label="About" />
        <div className={styles.about}>
          <Typography variant="body" color="secondary">
            My background spans freelance client work, teaching web fundamentals
            at Linekode, and frontend roles across product teams in Senegal. I
            care as much about communicating clearly as about shipping clean
            code.
          </Typography>
          <Typography variant="body" color="secondary">
            I&apos;m looking for projects where polish is part of the product —
            not an afterthought. Currently open to freelance and full-time
            opportunities.
          </Typography>
        </div>
      </Section>

      <Divider spacing="sm" />

      {/* Selected Work */}
      <Section>
        <SectionHeader label="Selected Work" />
        <div className={styles.projects}>
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              href={project.href}
            />
          ))}
        </div>
      </Section>

      <Divider spacing="sm" />

      {/* Experiments */}
      <Section>
        <SectionHeader label="Experiments" />
        <div className={styles.projects}>
          {experiments.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              href={project.href}
            />
          ))}
        </div>
      </Section>

      <Divider spacing="sm" />

      {/* Experience */}
      <Section>
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

      {/* Technologies */}
      <Section>
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

      <Section>
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
      </Section>
    </main>
  );
}
