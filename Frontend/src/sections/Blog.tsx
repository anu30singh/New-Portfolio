import { motion, useReducedMotion } from "motion/react";
import Container from "../components/layout/Container";
import Reveal from "../components/ui/Reveal";

const articles = [
  {
    number: "01",
    category: "DATABASES · PERFORMANCE",
    title: "Tech with Lucifer | PostgreSQL Wasn’t Using Much CPU. So Why Did It Crash?",
    publication: "Tech With Lucifer",
    date: "Aug 15",
    href: "https://lucifer-intech.hashnode.dev/tech-with-lucifer-postgresql-wasn-t-using-much-cpu-so-why-did-it-crash",
  },
  {
    number: "02",
    category: "NODE.JS · PERFORMANCE",
    title: "Tech With Lucifer | Node.js Is Not Slow. You Are Thinking About It Wrong",
    publication: "Tech With Lucifer",
    date: "Jul 12",
    href: "https://lucifer-intech.hashnode.dev/node-js-is-not-slow-you-are-thinking-about-it-wrong",
  },
  {
    number: "03",
    category: "ALGORITHMS · DESIGN",
    title: "Asteroid Collision | DSA & Design with Lucifer",
    publication: "Tech With Lucifer",
    date: "Jun 14",
    href: "https://lucifer-intech.hashnode.dev/asteroid-collision-dsa-design-with-lucifer",
  },
  {
    number: "04",
    category: "BROWSER APIs · DESIGN",
    title: "Design Browser History | DSA & Design With Lucifer",
    publication: "Tech With Lucifer",
    date: "Jun 13",
    href: "https://lucifer-intech.hashnode.dev/design-browser-history-dsa-design-with-lucifer",
  },
  {
    number: "05",
    category: "GIT · VERSION CONTROL",
    title: "Branch Out with Git",
    publication: "Tech With Lucifer",
    date: "Nov 24, 2024",
    href: "https://lucifer-intech.hashnode.dev/branch-out-with-git",
  },
];

export default function Blog() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <section id="blog" className="py-24 md:py-28">
      <Container>
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 font-mono text-xs tracking-[0.25em] text-[var(--highlight)]">
                06 / WRITING
              </p>
              <h2 className="max-w-3xl font-serif text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl">
                Notes from
                <span className="italic text-[var(--accent)]">
                  {" "}what I learn.
                </span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-secondary)]">
                I write about software problems I have worked through and the
                lessons I picked up along the way.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-3">
          {articles.map((article, index) => (
            <motion.a
              key={article.number}
              href={article.href}
              target="_blank"
              rel="noreferrer"
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 22, filter: "blur(5px)" }
              }
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.55,
                delay: prefersReducedMotion ? 0 : index * 0.09,
                ease: "easeOut",
              }}
              whileHover={
                prefersReducedMotion ? undefined : { x: 8, y: -2 }
              }
              className="group relative grid grid-cols-[32px_minmax(0,1fr)_32px] items-center gap-4 rounded-2xl border border-transparent bg-[var(--surface)]/45 p-4 transition-colors hover:border-[var(--border)] hover:bg-[var(--surface)] sm:grid-cols-[40px_minmax(0,1fr)_auto_36px] sm:gap-5 sm:p-5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] font-mono text-[10px] text-[var(--accent)] transition-colors group-hover:border-[var(--highlight)] group-hover:text-[var(--highlight)] sm:h-9 sm:w-9">
                {article.number}
              </span>

              <div className="min-w-0">
                <p className="mb-1.5 font-mono text-[9px] tracking-[0.15em] text-[var(--accent)] sm:text-[10px]">
                  {article.category}
                </p>
                <h3 className="text-sm font-semibold leading-6 text-[var(--text-primary)] transition-colors group-hover:text-[var(--highlight)] sm:text-base md:text-lg">
                  {article.title}
                </h3>
                <p className="mt-1.5 text-xs text-[var(--text-secondary)] sm:hidden">
                  {article.publication} · {article.date}
                </p>
              </div>

              <span className="hidden whitespace-nowrap text-right text-xs text-[var(--text-secondary)] sm:block">
                {article.publication}
                <span className="mx-2 text-[var(--accent)]">·</span>
                {article.date}
              </span>

              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-sm text-[var(--text-secondary)] transition-all duration-300 group-hover:border-[var(--highlight)] group-hover:bg-[var(--highlight)] group-hover:text-[var(--background)] sm:h-9 sm:w-9"
              >
                ↗
              </span>
            </motion.a>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex justify-center">
            <a
              href="https://lucifer-intech.hashnode.dev/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2.5 font-mono text-xs text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--highlight)]"
            >
              Read all my posts
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-8 border-t border-[var(--border)] pt-6 font-serif text-lg italic text-[var(--text-secondary)]">
            I hope these notes help someone facing a similar problem.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
