import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Container from "./Container";
import Button from "../ui/Button";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Projects" },
  { href: "#community", label: "Community" },
  { href: "#blog", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

type NavbarProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const activeSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              first.boundingClientRect.top - second.boundingClientRect.top
          )[0];

        if (activeSection) {
          setActiveLink(`#${activeSection.target.id}`);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="group relative rounded-full px-3 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {activeLink === link.href && (
                  <motion.span
                    layoutId="navbar-active-section"
                    className="absolute inset-0 rounded-full bg-surface-secondary"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-highlight transition-transform duration-300 group-hover:scale-x-100"
                />
              </motion.a>
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
                onClick={() => {
                  setActiveLink(link.href);
                  setMobileMenuOpen(false);
                }}
                className={`rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-surface-secondary hover:text-text-primary ${
                  activeLink === link.href
                    ? "bg-surface-secondary text-text-primary"
                    : "text-text-secondary"
                }`}
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