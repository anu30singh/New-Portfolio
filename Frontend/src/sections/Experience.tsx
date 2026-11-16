
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Container from "../components/layout/Container";
import Reveal from "../components/ui/Reveal";

const experiences = [
  {
    number: "01",
    role: "Associate Software Engineer",
    company: "Dfy Graviti Technologies Pvt. Ltd.",
    period: "May 2025 — Present",
    type: "FULL-TIME",
    summary:
      "I build and improve software for a maritime data platform, from its databases and maps to its deployments.",
    highlights: [
      {
        title: "Faster database queries",
        description:
          "Made TimescaleDB queries for time-based data 80% faster.",
      },
      {
        title: "Faster vessel data",
        description:
          "Cut the time to show vessel tracking data in Vue.js from 15 minutes to about 30 seconds.",
      },
      {
        title: "Data workflows",
        description:
          "Kept Airflow jobs running to filter vessel data and update databases.",
      },
      {
        title: "Maps and file imports",
        description:
          "Built map features and import tools for KML, KMZ, Shapefile, and CSV files.",
      },
      {
        title: "Deployments and support",
        description:
          "Handled Docker and Linux releases and fixed issues found in production.",
      },
      {
        title: "Application plans",
        description:
          "Planned how to move an application to FastAPI and React.",
      },
    ],
    technologies: [
      "JavaScript",
      "Vue.js",
      "React",
      "FastAPI",
      "PostgreSQL",
      "TimescaleDB",
      "Python",
      "Airflow",
      "Docker",
      "Linux",
    ],
  },
  {
    number: "02",
    role: "Software Development Engineer Intern",
    company: "Dfy Graviti Technologies Pvt. Ltd.",
    period: "October 2024 — April 2025",
    type: "INTERNSHIP",
    summary:
      "I built parts of the interface and helped the team release updates.",
    highlights: [
      {
        title: "Frontend development",
        description:
          "Built reusable UI components using Vue.js and Tailwind CSS.",
      },
      {
        title: "Releases",
        description:
          "Helped the team share release files through AWS S3.",
      },
      {
        title: "Teamwork",
        description:
          "Worked with the Bangalore team to deliver features for clients.",
      },
    ],
    technologies: [
      "Vue.js",
      "Tailwind CSS",
      "JavaScript",
      "AWS S3",
      "Git",
    ],
  },


{
  number: "03",
  role: "Creative Designer Intern",
  company: "Vidyamandir Classes Pvt. Ltd.",
  period: "August 2023 — September 2023",
  type: "INTERNSHIP",
  summary:
    "I explored user experience and visual design, and helped shape clear, useful interfaces.",
  highlights: [
    {
      title: "User experience",
      description:
          "Looked for ways to make interfaces clearer and easier to use.",
    },
    {
      title: "Design and prototypes",
      description:
        "Made interface designs and prototypes with Figma.",
    },
  ],
  technologies: [
    "Figma",
    "User Experience (UX)",
    "Creative Design",
  ],
},

];

const journey = [
  {
    year: "2026",
    chapter: "Learning more about how systems work.",
    introduction:
      "I’m building my backend skills and learning how to monitor systems and release changes safely.",
    milestones: [
      "Learning more about backend development",
      "Exploring system monitoring and developer tools",
      "Learning DuckDB and Parquet for data analysis",
      "Using GitHub Actions to automate software releases",
    ],
  },
  {
    year: "2025",
    chapter: "From university to full-time work.",
    introduction:
      "After graduating, I started building software for real users. I learned that products need to be fast, reliable, and easy to use—not just functional.",
    milestones: [
      "Graduated with a B.Tech in Information Technology",
      "Started professional software development",
    ],
  },
  {
    year: "2024",
    chapter: "My first steps into shipping software.",
    introduction:
      "During my internship, I built interfaces and helped release updates. I learned how software moves from a developer’s computer to its users.",
    milestones: [
      "Joined Dfy Graviti Technologies as a Software Development Engineer Intern",
      "Built reusable interfaces and supported deployment workflows",
    ],
  },
  {
    year: "2023",
    chapter: "My first steps in design.",
    introduction:
      "A design internship taught me to think about how people use software. I still use that perspective in my engineering work.",
    milestones: [
      "Explored user experience, visual communication, and prototyping",
      "Started connecting thoughtful design with practical engineering",
    ],
  },
];

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 65%"],
  });
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      className="py-24 md:py-28"
    >
      <Container>

        {/* Heading */}
        <Reveal>
          <div className="mb-12">
            <p className="mb-4 font-mono text-xs tracking-[0.25em] text-[var(--highlight)]">
              04 / MY JOURNEY
            </p>

            <h2 className="max-w-3xl font-serif text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl">
              How I got
              <span className="italic text-[var(--accent)]">
                {" "}here
              </span>
              .
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-secondary)]">
              From my first design role to building software for real users.
            </p>
          </div>
        </Reveal>

        <div ref={timelineRef} className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[19px] top-7 w-px bg-[var(--border)]"
          />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-8 left-[19px] top-7 w-px origin-top bg-gradient-to-b from-[var(--highlight)] via-[var(--accent)] to-[var(--highlight)] shadow-[0_0_12px_var(--accent)]"
            style={{ scaleY: prefersReducedMotion ? 1 : timelineProgress }}
          />

          <div className="space-y-6">
            {journey.map((chapter, index) => (
              <Reveal key={chapter.year}>
                <motion.article
                  initial={
                    prefersReducedMotion
                      ? false
                      : {
                          opacity: 0,
                          x: index % 2 === 0 ? 48 : -48,
                          rotateY: index % 2 === 0 ? -5 : 5,
                        }
                  }
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 18,
                    delay: prefersReducedMotion ? 0 : index * 0.06,
                  }}
                  className="relative grid gap-5 pl-12 md:grid-cols-[112px_minmax(0,1fr)] md:gap-8 md:pl-0"
                >
                  <motion.div
                    className={`absolute left-3 top-2 z-10 flex h-4 w-4 items-center justify-center rounded-full border bg-[var(--background)] md:left-[13px] ${
                      index === 0
                        ? "border-[var(--highlight)] shadow-[0_0_16px_var(--highlight)]"
                        : "border-[var(--accent)]"
                    }`}
                    animate={
                      index === 0 && !prefersReducedMotion
                        ? { scale: [1, 1.18, 1], boxShadow: ["0 0 8px #C5E9A0", "0 0 20px #C5E9A0", "0 0 8px #C5E9A0"] }
                        : undefined
                    }
                    transition={
                      index === 0 && !prefersReducedMotion
                        ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                        : undefined
                    }
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--highlight)]" />
                  </motion.div>

                  <div className="pt-1 md:pl-12">
                    <span className="font-mono text-lg text-[var(--accent)]">
                      {chapter.year}
                    </span>
                    {index === 0 && (
                      <motion.span
                        className="ml-2 inline-flex rounded-full border border-[var(--highlight)]/30 bg-[var(--highlight)]/10 px-2 py-1 font-mono text-[9px] tracking-wider text-[var(--highlight)]"
                        animate={
                          prefersReducedMotion
                            ? undefined
                            : { opacity: [0.7, 1, 0.7] }
                        }
                        transition={
                          prefersReducedMotion
                            ? undefined
                            : { duration: 2.2, repeat: Infinity }
                        }
                      >
                        NOW
                      </motion.span>
                    )}
                  </div>

                  <div className="group/chapter relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 p-5 transition-colors hover:border-[var(--accent)]/70 sm:p-7 md:p-8">
                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--highlight)]/10 blur-3xl"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.08 }}
                    />
                    <h3 className="font-serif text-2xl text-[var(--text-primary)] sm:text-3xl">
                      {chapter.chapter}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                      {chapter.introduction}
                    </p>

                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {chapter.milestones.map((milestone) => (
                        <motion.li
                          key={milestone}
                          initial={
                            prefersReducedMotion
                              ? false
                              : { opacity: 0, y: 14, scale: 0.96 }
                          }
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 18,
                            delay: prefersReducedMotion ? 0 : index * 0.08,
                          }}
                          className="flex items-start gap-3 rounded-xl border border-[var(--border)]/70 bg-[var(--background)]/40 p-3 text-sm leading-6 text-[var(--text-primary)]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--highlight)]"
                          />
                          {milestone}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>

        <details className="group mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6">
            <span>
              <span className="block font-serif text-xl text-[var(--text-primary)]">
                Want more detail?
              </span>
              <span className="mt-1 block text-sm text-[var(--text-secondary)]">
                See what I worked on and the tools I used in each role.
              </span>
            </span>
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--accent)] transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>

          <div className="space-y-4 border-t border-[var(--border)] p-5 sm:p-6">
            {experiences.map((experience) => (
              <details
                key={experience.number}
                className="group/role rounded-xl border border-[var(--border)] bg-[var(--background)]/40"
              >
                <summary className="flex cursor-pointer list-none flex-col justify-between gap-3 p-4 sm:flex-row sm:items-center">
                  <span>
                    <span className="block font-serif text-lg text-[var(--text-primary)]">
                      {experience.role}
                    </span>
                    <span className="mt-1 block text-sm text-[var(--text-secondary)]">
                      {experience.company}
                    </span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[var(--accent)]">
                      {experience.period}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-[var(--accent)] transition-transform group-open/role:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>

                <div className="border-t border-[var(--border)] p-4">
                  <p className="text-sm leading-7 text-[var(--text-secondary)]">
                    {experience.summary}
                  </p>
                  <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                    {experience.highlights.map((item) => (
                      <li key={item.title}>
                        <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--text-primary)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </details>

      </Container>
    </section>
  );
}
