import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import PortraitCard from "../components/ui/PortraitCard";
import Reveal from "../components/ui/Reveal";
import SystemGraph3D from "../components/graphics/SystemGraph3D";

const expertise = [
  { title: "Software", detail: "Backend · Frontend · APIs", icon: "code" },
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
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-7 pt-12 md:pb-9 md:pt-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-24 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
      />

      <Container>
        <div className="grid items-center gap-8 lg:min-h-[490px] lg:grid-cols-[1fr_1.1fr] lg:gap-5 xl:min-h-[510px]">
          <div className="relative z-10 py-4 lg:py-0">
            <Reveal>
              <p className="mb-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-highlight">
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
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="max-w-[620px] text-[clamp(2.2rem,5.4vw,4.35rem)] leading-[1.04] tracking-tight">
                Software engineer
                <br />
                building <em className="font-normal text-highlight">useful</em>
                <br />
                things with data.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 max-w-[540px] text-sm leading-6 text-text-secondary md:text-base md:leading-7">
                I build web apps, APIs, and data systems. At Dfy Graviti
                Technologies, I help build a platform that helps people
                understand what&apos;s happening at sea.
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
                  download
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

        <div className="mt-7 grid grid-cols-2 border-y border-border/80 py-4 md:mt-8 md:grid-cols-3 md:py-5">
          {expertise.map(({ title, detail, icon }, index) => (
            <div
              key={title}
              className={`flex min-w-0 items-center gap-3 px-3 py-2 first:pl-0 md:px-4 ${
                index === expertise.length - 1 ? "col-span-2 md:col-span-1" : ""
              } ${
                index > 0 ? "md:border-l md:border-border" : ""
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
