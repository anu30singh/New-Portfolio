
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

const skillGroups = [
  {
    number: "01",
    title: "Backend & APIs",
    icon: "backend",
    description: "Building the services behind apps.",
    skills: ["Java", "Node.js", "Express.js", "Python", "Django", "Laravel", "REST APIs"],
  },
  {
    number: "02",
    title: "Data Systems",
    icon: "database",
    description: "Storing and working with data.",
    skills: ["PostgreSQL", "TimescaleDB", "MongoDB", "ClickHouse", "Redis", "SQL"],
  },
  {
    number: "03",
    title: "Frontend & Product",
    icon: "frontend",
    description: "Designing clear, easy-to-use screens.",
    skills: ["JavaScript", "React", "Vue.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    number: "04",
    title: "Tools & Infrastructure",
    icon: "tools",
    description: "Testing, fixing, and releasing software.",
    skills: ["Docker", "Linux", "Git", "Nginx", "GitHub Actions", "OpenTelemetry"],
  },
] as const;

const skillGroupIcons = {
  backend: "M8 6 3 12l5 6m8-12 5 6-5 6m-5 2 2-16",
  database:
    "M12 3c-4.4 0-8 1.3-8 3s3.6 3 8 3 8-1.3 8-3-3.6-3-8-3Zm-8 3v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6m-16 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6",
  frontend: "M3 4h18v13H3zM8 21h8m-4-4v4M7 8h4m-4 3h7",
  tools:
    "m14.7 6.3 3-3a6 6 0 0 1-7.9 7.9L5 21l-2-2 9.8-4.8a6 6 0 0 1 7.9-7.9l-3 3-3-3Z",
} as const;

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

function SkillGroupIcon({ name }: { name: keyof typeof skillGroupIcons }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 text-[var(--highlight)]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={skillGroupIcons[name]} />
    </svg>
  );
}

export default function About() {
  const [activeSkillGroup, setActiveSkillGroup] = useState(0);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const activeGroup = skillGroups[activeSkillGroup];

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
              03 / ABOUT
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

        {/* Introduction */}
        <div className="grid max-w-3xl gap-14">

          <Reveal>
            <div>
              <p className="text-xl leading-9 text-[var(--text-primary)] md:text-2xl">
                My path into tech started with design, not code.
              </p>

              <p className="mt-7 leading-8 text-[var(--text-secondary)]">
                I began with UI/UX and product design. While thinking about how
                people use an app, I became curious about how it works behind
                the screen. That curiosity led me from designing interfaces to
                building them.
              </p>

              <p className="mt-5 leading-8 text-[var(--text-secondary)]">
                Now I&apos;m especially interested in backend and distributed
                systems, data platforms, and software for complex real-world
                problems. My design background still shapes how I build: I
                want things to work well and feel clear to use.
              </p>

              <p className="mt-5 leading-8 text-[var(--text-secondary)]">
                Working with different teams has taught me to communicate
                clearly and take responsibility. Outside work, I enjoy learning
                new things, building side projects, and looking for good pizza.
              </p>
            </div>
          </Reveal>

        </div>

        <section
          aria-labelledby="toolkit-heading"
          className="mt-24 border-t border-[var(--border)] pt-12 md:pt-16"
        >
          <Reveal>
            <div className="mb-9 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[var(--highlight)]">
                  TOOLS I USE
                </p>

                <h3
                  id="toolkit-heading"
                  className="font-serif text-3xl text-[var(--text-primary)] md:text-4xl"
                >
                  Tools I use.
                </h3>
              </div>

              <p className="max-w-sm text-sm leading-6 text-[var(--text-secondary)]">
                Tools for building apps, working with data, and releasing software.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-[minmax(240px,0.72fr)_minmax(0,1.8fr)]">
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
              {skillGroups.map((group, index) => {
                const isActive = activeSkillGroup === index;

                return (
                  <button
                    key={group.number}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveSkillGroup(index)}
                    className={`group flex min-h-[86px] items-center gap-3 rounded-xl border p-3 text-left transition-colors sm:p-4 ${
                      isActive
                        ? "border-[var(--accent)] bg-[var(--surface)]"
                        : "border-[var(--border)] bg-transparent hover:border-[var(--accent)]/60 hover:bg-[var(--surface)]/50"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                        isActive
                          ? "border-[var(--accent)]/50 bg-[var(--accent)]/10"
                          : "border-[var(--border)] bg-[var(--surface)]"
                      }`}
                    >
                      <SkillGroupIcon name={group.icon} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-serif text-sm leading-tight text-[var(--text-primary)] sm:text-base">
                        {group.title}
                      </span>
                      <span className="mt-1 block font-mono text-[10px] text-[var(--text-secondary)]">
                        {group.skills.length} tools
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`hidden font-mono text-[10px] sm:block ${
                        isActive ? "text-[var(--highlight)]" : "text-[var(--accent)]"
                      }`}
                    >
                      {group.number}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              className="min-h-[320px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]/45 p-5 sm:p-7"
              aria-live="polite"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeGroup.number}
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { opacity: 0, x: 14 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  exit={
                    prefersReducedMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: -10 }
                  }
                  transition={{ duration: prefersReducedMotion ? 0.01 : 0.22 }}
                >
                  <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--border)] pb-5">
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.18em] text-[var(--highlight)]">
                        TOOLS / {activeGroup.number}
                      </p>
                      <h4 className="mt-2 font-serif text-2xl text-[var(--text-primary)] sm:text-3xl">
                        {activeGroup.title}
                      </h4>
                    </div>
                    <p className="max-w-xs text-xs leading-5 text-[var(--text-secondary)] sm:text-sm">
                      {activeGroup.description}
                    </p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                    {activeGroup.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={
                          prefersReducedMotion ? undefined : { y: -3, scale: 1.025 }
                        }
                        transition={{ duration: 0.16 }}
                        className="flex min-h-[106px] flex-col items-center justify-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)]/65 p-4 text-center transition-colors hover:border-[var(--accent)] hover:bg-[var(--surface-secondary)]"
                      >
                        <TechnologyIcon name={skill} className="h-8 w-8" />
                        <span className="text-xs font-medium text-[var(--text-primary)] sm:text-sm">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

      </Container>
    </section>
  );
}
