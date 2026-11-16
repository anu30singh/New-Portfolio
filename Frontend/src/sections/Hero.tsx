import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

const nodes = [
  { label: "APIs", x: "18%", y: "25%" },
  { label: "Databases", x: "75%", y: "18%" },
  { label: "Maps", x: "82%", y: "70%" },
  { label: "Systems", x: "45%", y: "50%" },
  { label: "Users", x: "18%", y: "78%" },
];

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Hero copy */}
          <div className="relative z-10">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Software Engineer · India
            </p>

            <h1 className="max-w-2xl text-5xl leading-tight md:text-7xl">
              Building useful software,
              <span className="text-accent"> one problem at a time.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-text-secondary md:text-lg">
              I build web applications, APIs, and data systems, and enjoy
              turning complex real-world problems into simple, usable products.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button onClick={() => {
                document.getElementById("work")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}>
                View my work →
              </Button>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm text-text-primary transition-colors hover:bg-surface-secondary"
              >
                Download resume ↓
              </a>
            </div>

            <p className="mt-10 font-mono text-xs text-text-secondary">
              Good code. Good coffee. Better problems.
            </p>
          </div>

          {/* Living System Graph — static first version */}
          <div className="relative mx-auto aspect-square w-full max-w-[480px]">
            <div className="absolute inset-0 rounded-full border border-border opacity-50" />
            <div className="absolute inset-[12%] rounded-full border border-border opacity-50" />
            <div className="absolute inset-[25%] rounded-full border border-border opacity-50" />

            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <g
                stroke="var(--accent)"
                strokeWidth="1.2"
                strokeOpacity="0.6"
                fill="none"
              >
                <path d="M72 100 L180 200 L300 72" />
                <path d="M180 200 L328 280" />
                <path d="M180 200 L72 312" />
                <path d="M72 100 L72 312" />
                <path d="M300 72 L328 280" />
              </g>
            </svg>

            {nodes.map((node) => (
              <div
                key={node.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: node.x, top: node.y }}
              >
                <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="whitespace-nowrap font-mono text-xs text-text-primary">
                    {node.label}
                  </span>
                </div>
              </div>
            ))}

            <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent bg-surface text-2xl font-serif text-highlight shadow-xl">
              A.
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;
