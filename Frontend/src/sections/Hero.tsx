import { motion, useReducedMotion } from "motion/react";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import PortraitCard from "../components/ui/PortraitCard";
import Reveal from "../components/ui/Reveal";
import SystemGraph3D from "../components/graphics/SystemGraph3D";

const expertise = [
  { title: "Full Stack", detail: "Backend · Frontend · APIs", icon: "code" },
  { title: "Data", detail: "PostgreSQL · Analytics", icon: "database" },
  { title: "Design & tools", detail: "UI/UX · Docker · Linux", icon: "monitor" },
];

function ExpertiseIcon({ kind }: { kind: string }) {
  const paths: Record<string, string> = {
    code: "m8 8-4 4 4 4m8-8 4 4-4 4m-5 2 2-12",
    database: "M12 3c-4.4 0-8 1.3-8 3s3.6 3 8 3 8-1.3 8-3-3.6-3-8-3Zm-8 3v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6m-16 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6",
    pin: "M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Zm-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    monitor: "M3 5h18v13H3zM8 22h8m-4-4v4",
  };

  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-highlight"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[kind]} />
    </svg>
  );
}

function Hero() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const introduction =
    "I'm a software engineer with nearly 2 years of experience and a curiosity for how things work, from the systems behind an application to the experiences people interact with.";

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-7 pt-12 md:pb-9 md:pt-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 560"
          fill="none"
          preserveAspectRatio="none"
        >
          <g
            stroke="var(--accent)"
            strokeOpacity="0.12"
            strokeWidth="1"
          >
            <path d="M-80 265C-52 188 38 135 137 145c91 9 107 69 190 62 70-6 101-52 172-26 80 29 85 108 45 169" />
            <path d="M-46 267C-20 204 54 164 138 172c76 8 103 62 185 54 69-7 103-45 159-22 60 24 68 84 39 134" />
            <path d="M-9 268c24-49 83-77 148-71 65 6 94 52 173 46 64-5 100-38 145-18 43 19 52 63 29 101" />
            <path d="M29 270c22-35 66-54 116-50 55 5 87 43 158 37 58-5 94-30 132-13 29 13 38 43 22 70" />
            <path d="M73 272c18-23 51-34 88-31 45 4 78 34 140 29 50-4 86-22 116-8 17 8 25 23 19 41" />
          </g>
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-8 lg:min-h-[490px] lg:grid-cols-[1fr_1.1fr] lg:gap-5 xl:min-h-[510px]">
          <div className="relative z-10 py-4 lg:py-0">
            <Reveal>
              <h1 className="mb-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-highlight">
                01 / Hi, I&apos;m Anushka
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 4c-8 0-13 4-13 10a6 6 0 0 0 6 6c6 0 10-8 7-16Z" />
                  <path d="M4 21c3-6 7-9 12-12M10 15l-1-4m5 0 3 1" />
                </svg>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                aria-label={introduction}
                className="mt-5 max-w-[540px] text-sm leading-6 text-text-secondary md:text-base md:leading-7"
              >
                {introduction.split(" ").map((word, index) => (
                  <motion.span
                    key={`${word}-${index}`}
                    aria-hidden="true"
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, y: 8 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.24,
                      delay: prefersReducedMotion ? 0 : index * 0.025,
                      ease: "easeOut",
                    }}
                    className="mr-[0.25em] inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  onClick={() =>
                    document.getElementById("work")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  See my work
                  <span aria-hidden="true" className="ml-2 text-base">→</span>
                </Button>

                <a
                  href="/resume.pdf"
                  download="Anushka_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:bg-surface-secondary"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 text-highlight"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6m-10 5h4m-4 4h4" />
                  </svg>
                  Download resume
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative mx-auto aspect-[1.14/1] w-full max-w-[680px]">
              <div className="absolute inset-0">
                <SystemGraph3D compact />
              </div>

              <div className="absolute left-1/2 top-1/2 z-10 w-[44%] max-w-[300px] -translate-x-1/2 -translate-y-1/2">
                <PortraitCard />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-7 grid grid-cols-1 divide-y divide-border/80 border-y border-border/80 py-2 sm:grid-cols-3 sm:divide-y-0 md:mt-8 md:py-3">
          {expertise.map(({ title, detail, icon }, index) => (
            <div
              key={title}
              className={`flex min-w-0 items-center gap-3 px-3 py-3 sm:px-4 sm:py-2 sm:first:pl-0 ${
                index > 0 ? "sm:border-l sm:border-border" : ""
              }`}
            >
              <ExpertiseIcon kind={icon} />
              <div className="min-w-0">
                <h2 className="truncate text-xs font-semibold text-text-primary md:text-sm">
                  {title}
                </h2>
                <p className="mt-1 truncate text-[10px] text-text-secondary md:text-[11px]">
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Hero;
