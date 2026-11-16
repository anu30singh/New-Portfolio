
import Container from "../components/layout/Container";
import Reveal from "../components/ui/Reveal";

const contactLinks = [
  {
    label: "LINKEDIN",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/anushka30singh/",
  },
  {
    label: "GITHUB",
    value: "See my projects",
    href: "https://github.com/anu30singh",
  },
  {
    label: "EMAIL",
    value: "Email me",
    href: "mailto:anushkasinghdev@outlook.com",
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

              <a
                href="mailto:anushkasinghdev@outlook.com"
                className="mt-10 inline-flex items-center gap-4 rounded-full bg-[var(--highlight)] px-7 py-4 text-sm font-semibold text-[#17211F] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Send me an email
                <span className="text-lg">↗</span>
              </a>
            </div>

            <div className="relative z-10 mt-20 grid gap-8 border-t border-[var(--border)] pt-8 sm:grid-cols-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "EMAIL" ? undefined : "_blank"}
                  rel={link.label === "EMAIL" ? undefined : "noreferrer"}
                  className="group"
                >
                  <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--accent)]">
                    {link.label}
                  </p>

                  <div className="mt-3 flex items-center justify-between gap-3">
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
          <div>
            <p className="font-serif text-xl text-[var(--text-primary)]">
              A.
            </p>
            
          </div>

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
