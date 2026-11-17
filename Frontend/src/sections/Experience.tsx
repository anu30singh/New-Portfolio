
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
      "I build and improve software for a maritime data platform, working across data, maps, and production systems.",
    highlights: [
      {
        title: "Large-scale heatmaps",
        description:
          "Built heatmap visualizations for datasets with 10 million points.",
      },
      {
        title: "Parallel data processing",
        description:
          "Established distributed computing for parallel processing, reducing processing time by 80%.",
      },
      {
        title: "Data platform migration",
        description:
          "Contributed to a data platform migration involving ClickHouse, TimescaleDB, and MinIO.",
      },
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
        title: "Data and map workflows",
        description:
          "Maintained Airflow jobs and built import tools for KML, KMZ, Shapefile, and CSV data.",
      },
      {
        title: "Production systems",
        description:
          "Handled on-premises deployments, troubleshot production issues, and contributed to plans to move an application to FastAPI and React.",
      },
    ],
    technologies: [
      "JavaScript",
      "Vue.js",
      "React",
      "FastAPI",
      "PostgreSQL",
      "TimescaleDB",
      "ClickHouse",
      "MinIO",
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
      "My first engineering role: building interfaces with a team and helping ship updates.",
    highlights: [
      {
        title: "Frontend development",
        description:
          "Built reusable UI components using Vue.js and Tailwind CSS.",
      },
      {
        title: "Releases",
        description:
          "Deployed Docker images in offline Linux environments and shared release files through AWS S3.",
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
  "An early role creating interface concepts and prototypes.",
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
              03 / MY JOURNEY
            </p>

            <h2 className="max-w-3xl font-serif text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl">
              How I got
              <span className="italic text-[var(--accent)]">
                {" "}here
              </span>
              .
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-secondary)]">
              From my first engineering role to improving a live maritime data platform.
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

          <div className="space-y-5">
            {experiences.map((experience, index) => (
              <Reveal key={experience.number}>
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
                  className="relative grid gap-4 pl-12 md:grid-cols-[190px_minmax(0,1fr)] md:gap-8 md:pl-0"
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
                    <span className="font-mono text-xs leading-5 text-[var(--accent)] sm:text-sm">
                      {experience.period}
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
                        CURRENT
                      </motion.span>
                    )}
                  </div>

                  <div className="group/experience relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 p-5 transition-colors hover:border-[var(--accent)]/70 sm:p-7">
                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--highlight)]/10 blur-3xl"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.08 }}
                    />
                    <div className="relative flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-xl text-[var(--text-primary)] sm:text-2xl">
                          {experience.role}
                        </h3>
                        <p className="mt-1 text-sm text-[var(--text-secondary)]">
                          {experience.company}
                        </p>
                      </div>
                      <span className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[9px] tracking-[0.12em] text-[var(--text-secondary)]">
                        {experience.type}
                      </span>
                    </div>

                    <p className="relative mt-4 max-w-3xl text-sm leading-6 text-[var(--text-secondary)]">
                      {experience.summary}
                    </p>

                    <ul className="relative mt-5 grid gap-4 sm:grid-cols-2">
                      {experience.highlights.map((item) => (
                        <motion.li
                          key={item.title}
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
                          className="text-sm leading-6"
                        >
                          <h4 className="font-semibold text-[var(--text-primary)]">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-[var(--text-secondary)]">
                            {item.description}
                          </p>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="relative mt-5 flex flex-wrap gap-2 border-t border-[var(--border)] pt-4">
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
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
