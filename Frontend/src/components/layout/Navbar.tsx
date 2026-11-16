import { useState } from "react";
import Container from "./Container";
import Button from "../ui/Button";

type NavbarProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = [
    { href: "#work", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#community", label: "Community" },
    { href: "#blog", label: "Writing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <a
            href="#home"
            className="group inline-flex shrink-0 items-center gap-3"
            aria-label="Anushka Singh, home"
          >
            <svg
              aria-hidden="true"
              className="h-10 w-10 transition-transform duration-300 group-hover:-rotate-6"
              viewBox="0 0 40 40"
              fill="none"
            >
              <rect
                x="1"
                y="1"
                width="38"
                height="38"
                rx="13"
                fill="var(--surface)"
                stroke="var(--border)"
              />
              <path
                d="M11 28 20 10l9 18M14.5 21h11"
                stroke="var(--highlight)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="29" cy="11" r="2" fill="var(--accent)" />
            </svg>
            <span className="flex flex-col items-start">
              <span className="font-serif text-xl leading-none text-text-primary sm:text-2xl">
                Anushka
              </span>
              <span className="mt-1 hidden font-mono text-[9px] tracking-[0.16em] text-text-secondary sm:block">
                SOFTWARE ENGINEER
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="secondary" onClick={onToggleTheme}>
              {theme === "dark" ? "☼ Light" : "☾ Dark"}
            </Button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-primary transition-colors hover:bg-surface-secondary md:hidden"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              >
                {mobileMenuOpen ? (
                  <path d="m6 6 12 12M18 6 6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="grid gap-1 border-t border-border py-3 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-surface-secondary hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}

export default Navbar;