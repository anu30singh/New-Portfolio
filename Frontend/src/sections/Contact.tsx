
import { siGithub } from "simple-icons";
import Container from "../components/layout/Container";
import Reveal from "../components/ui/Reveal";

const contactEmail = "singh.anushka3007@gmail.com";

const contactLinks = [
  {
    label: "LINKEDIN",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/anushka30singh/",
    icon:
      "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 .001-4.123 2.062 2.062 0 0 1-.001 4.123ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z",
  },
  {
    label: "GITHUB",
    value: "See my projects",
    href: "https://github.com/anu30singh",
    icon: siGithub.path,
  },
];

export default function Contact() {
  return (
    <footer id="contact" className="pt-24 md:pt-28">
      <Container className="pb-8">

        {/* Main contact area */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-16">

            {/* Decorative detail */}
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[var(--accent)]/10" />
            <div className="pointer-events-none absolute -right-10 -top-14 h-52 w-52 rounded-full border border-[var(--accent)]/10" />

            <div className="relative z-10 max-w-4xl">
              <p className="mb-6 font-mono text-xs tracking-[0.25em] text-[var(--highlight)]">
                07 / CONTACT
              </p>

              <h2 className="max-w-3xl font-serif text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl">
                Have a project
                <br />
                or idea in mind?
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
                I&apos;m open to talking about software, interesting problems,
                and new opportunities. Get in touch.
              </p>

              <p className="mt-8">
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-sm text-[var(--text-secondary)] underline decoration-[var(--accent)] underline-offset-4 transition-colors hover:text-[var(--highlight)]"
                >
                  {contactEmail}
                </a>
              </p>
            </div>

            <div className="relative z-10 mt-20 grid gap-8 border-t border-[var(--border)] pt-8 sm:grid-cols-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-[var(--accent)]">
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={link.icon} />
                    </svg>
                    {link.label}
                  </p>

                  <div className="mt-3 flex items-center justify-start gap-3">
                    <span className="text-sm text-[var(--text-primary)] transition-colors group-hover:text-[var(--highlight)]">
                      {link.value}
                    </span>
                    <span className="text-[var(--text-secondary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bottom footer */}
        <div className="flex flex-col justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-6">
            <span className="font-mono text-[10px] tracking-wider text-[var(--text-secondary)]">
              BUILT WITH CARE BY ANUSHKA
            </span>

            <a
              href="#home"
              className="text-xs text-[var(--accent)] transition-colors hover:text-[var(--highlight)]"
            >
              Back to top ↑
            </a>
          </div>
        </div>

        <div className="border-t border-[var(--border)] py-5">
          <p className="text-center font-mono text-[10px] tracking-wider text-[var(--text-secondary)]">
            © {new Date().getFullYear()} · ALL RIGHTS RESERVED
          </p>
        </div>

      </Container>
    </footer>
  );
}
