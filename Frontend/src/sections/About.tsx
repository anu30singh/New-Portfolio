
import type { SimpleIcon } from "simple-icons";
import {
  siDjango,
  siCss,
  siClickhouse,
  siDocker,
  siExpress,
  siGit,
  siGithubactions,
  siHtml5,
  siJavascript,
  siLinux,
  siLaravel,
  siMongodb,
  siNginx,
  siNodedotjs,
  siOpenapiinitiative,
  siOpentelemetry,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siTimescale,
  siTailwindcss,
  siVuedotjs,
} from "simple-icons";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Container from "../components/layout/Container";
import Reveal from "../components/ui/Reveal";

const technologies = [
  { name: "Java", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "HTML", category: "Languages" },
  { name: "CSS", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "Node.js", category: "Frameworks" },
  { name: "Express.js", category: "Frameworks" },
  { name: "Django", category: "Frameworks" },
  { name: "Laravel", category: "Frameworks" },
  { name: "React", category: "Frameworks" },
  { name: "Vue.js", category: "Frameworks" },
  { name: "Tailwind CSS", category: "Frameworks" },
  { name: "PostgreSQL", category: "Data" },
  { name: "TimescaleDB", category: "Data" },
  { name: "MongoDB", category: "Data" },
  { name: "ClickHouse", category: "Data" },
  { name: "Redis", category: "Data" },
  { name: "REST APIs", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "Linux", category: "Tools" },
  { name: "Git", category: "Tools" },
  { name: "Nginx", category: "Tools" },
  { name: "GitHub Actions", category: "Tools" },
  { name: "OpenTelemetry", category: "Tools" },
] as const;

const skillCategories = [
  "All",
  "Languages",
  "Frameworks",
  "Data",
  "Tools",
] as const;

type SkillCategory = (typeof skillCategories)[number];

const technologyIcons: Record<string, Pick<SimpleIcon, "path" | "hex">> = {
  Java: {
    hex: "F89820",
    path: "M8.2 17.1c-1.6.7-2.1 1.5-.8 2.2 2.2 1.1 8.3 1.1 10.4-.2.5-.3.1-.8-.5-1.1 1.8.4 2.6 1.1 2.6 1.8 0 1.3-3.4 2.4-7.5 2.4s-7.5-1.1-7.5-2.4c0-1.1 1.2-2 3.3-2.7ZM7 14.7c-2.7.7-3.2 1.5-1.1 2.2 2.3.8 7.7.8 10.6-.1 1.1-.4 1.7-.9 1.5-1.4 2.7.8 3.3 1.9 1.1 2.8-3.7 1.5-12.4 1.5-15.5-.1-2.3-1.2-.5-2.6 3.4-3.4ZM9.7 2c2 2.5-2.1 3.8-1 5.7.5.8 1.5 1.2 2.3 1.7-4.3-1.2-5.3-2.8-3.6-4.7.8-.9 2.3-1.7 2.3-2.7ZM15.2 3c2.4 3-2.5 4.7-1.1 7 0 0 .4.6 1.2 1.2-3.4-1.3-4.6-3.1-3.2-5.1.7-1 2.7-2.1 3.1-3.1ZM5.2 10.6c-1.2.7-.6 1.5 1.8 1.8 2.8.4 6.7.2 8.9-.5.8-.3 1.3-.6 1.6-1 2.4.8 2.5 2-.1 2.8-3.3 1-9.4 1-12.5-.2-2.7-1-2.7-2.3.3-3.2Z",
  },
  "Node.js": siNodedotjs,
  "Express.js": siExpress,
  Python: siPython,
  Django: siDjango,
  Laravel: siLaravel,
  "REST APIs": siOpenapiinitiative,
  PostgreSQL: siPostgresql,
  TimescaleDB: siTimescale,
  MongoDB: siMongodb,
  ClickHouse: siClickhouse,
  Redis: siRedis,
  SQL: {
    hex: "7F9C75",
    path: "M12 2C6.5 2 2 3.8 2 6v12c0 2.2 4.5 4 10 4s10-1.8 10-4V6c0-2.2-4.5-4-10-4Zm0 2c4.8 0 8 .9 8 2s-3.2 2-8 2-8-.9-8-2 3.2-2 8-2ZM4 9.1c1.8 1 4.8 1.5 8 1.5s6.2-.5 8-1.5V12c0 1.1-3.2 2-8 2s-8-.9-8-2V9.1Zm0 6c1.8 1 4.8 1.5 8 1.5s6.2-.5 8-1.5V18c0 1.1-3.2 2-8 2s-8-.9-8-2v-2.9Z",
  },
  JavaScript: siJavascript,
  React: siReact,
  "Vue.js": siVuedotjs,
  HTML: siHtml5,
  CSS: siCss,
  "Tailwind CSS": siTailwindcss,
  Docker: siDocker,
  Linux: siLinux,
  Git: siGit,
  Nginx: siNginx,
  "GitHub Actions": siGithubactions,
  OpenTelemetry: siOpentelemetry,
};

function TechnologyIcon({
  name,
  className = "h-7 w-7",
}: {
  name: string;
  className?: string;
}) {
  const icon = technologyIcons[name];
  const color = icon.hex === "000000" ? "#F3F0E7" : `#${icon.hex}`;

  return (
    <svg
      aria-hidden="true"
      className={`shrink-0 ${className}`}
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d={icon.path} />
    </svg>
  );
}

export default function About() {
  const [activeSkillCategory, setActiveSkillCategory] =
    useState<SkillCategory>("All");
  const prefersReducedMotion = useReducedMotion() ?? false;
  const visibleTechnologies =
    activeSkillCategory === "All"
      ? technologies
      : technologies.filter(({ category }) => category === activeSkillCategory);

  return (
    <section
      id="about"
      className="py-24 md:py-28"
    >
      <Container>

        {/* Section heading */}
        <Reveal>
          <div className="mb-12">
            <p className="mb-4 font-mono text-xs tracking-[0.25em] text-[var(--highlight)]">
              02 / ABOUT
            </p>

            <h2 className="max-w-3xl font-serif text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl">
              A bit about
              <span className="italic text-[var(--accent)]">
                {" "}my path
              </span>
              {" "}in software.
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="max-w-5xl">
            <p className="max-w-3xl text-xl leading-8 text-[var(--text-primary)] md:text-2xl md:leading-9">
              I began with web development and grew into software engineering.
              Today, I focus on backend systems and data.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { number: "01", label: "Web development" },
                { number: "02", label: "Software engineering" },
                { number: "03", label: "Backend & data" },
              ].map((step) => (
                <div
                  key={step.number}
                  className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]/55 px-4 py-4"
                >
                  <span className="font-mono text-xs text-[var(--accent)]">
                    {step.number}
                  </span>
                  <span className="text-sm font-medium text-[var(--text-primary)] sm:text-base">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
              I enjoy solving real problems and building reliable software
              around them.
            </p>
          </div>
        </Reveal>

        <section
          aria-labelledby="toolkit-heading"
          className="mt-24 border-t border-[var(--border)] pt-12 md:pt-16"
        >
          <Reveal>
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[var(--highlight)]">
                  MY STACK / {technologies.length} TOOLS
                </p>

                <h3
                  id="toolkit-heading"
                  className="font-serif text-3xl text-[var(--text-primary)] md:text-4xl"
                >
                  A stack that works together.
                </h3>
              </div>

              <p className="max-w-sm text-sm leading-6 text-[var(--text-secondary)]">
                From the languages I write to the tools I use to ship software.
              </p>
            </div>
          </Reveal>

          <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]/55 p-4 sm:p-6 md:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-[var(--highlight)]/10 blur-3xl"
            />
            <div className="relative z-10">
              <div className="mb-6 flex flex-col gap-4 border-b border-[var(--border)] pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-[var(--text-secondary)]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--highlight)] opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--highlight)]" />
                  </span>
                  STACK MAP / {String(visibleTechnologies.length).padStart(2, "0")}{" "}
                  ITEMS
                </div>

                <div
                  aria-label="Filter technologies"
                  className="flex flex-wrap gap-2"
                >
                  {skillCategories.map((category) => {
                    const isActive = activeSkillCategory === category;

                    return (
                      <button
                        key={category}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setActiveSkillCategory(category)}
                        className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                          isActive
                            ? "border-[var(--highlight)] bg-[var(--highlight)] text-[var(--background)]"
                            : "border-[var(--border)] bg-[var(--background)]/60 text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div
                aria-live="polite"
                className="min-h-[280px]"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeSkillCategory}
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, y: 10 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    exit={
                      prefersReducedMotion ? undefined : { opacity: 0, y: -6 }
                    }
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.2,
                    }}
                    className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                  >
                    {visibleTechnologies.map(({ name, category }, index) => (
                      <motion.div
                        key={name}
                        whileHover={
                          prefersReducedMotion ? undefined : { y: -4, scale: 1.025 }
                        }
                        transition={{ duration: 0.18 }}
                        className="group relative flex min-h-[118px] flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)]/75 p-4 transition-colors hover:border-[var(--accent)] hover:bg-[var(--surface-secondary)]"
                      >
                        <span className="absolute -right-5 -top-5 h-16 w-16 rounded-full bg-[var(--highlight)]/0 blur-2xl transition-colors duration-300 group-hover:bg-[var(--highlight)]/20" />
                        <div className="relative flex items-center justify-between gap-2">
                          <TechnologyIcon name={name} className="h-8 w-8" />
                          <span className="font-mono text-[9px] text-[var(--text-secondary)]/70">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div className="relative mt-4">
                          <p className="text-sm font-medium text-[var(--text-primary)]">
                            {name}
                          </p>
                          <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--accent)]">
                            {category}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

      </Container>
    </section>
  );
}
