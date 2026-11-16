import Container from "./Container";
import Button from "../ui/Button";

type NavbarProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <a
            href="#home"
            className="font-serif text-3xl font-semibold text-text-primary"
            aria-label="Anu home"
          >
            A.
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#work" className="text-sm text-text-secondary hover:text-accent">
              Work
            </a>
            <a href="#about" className="text-sm text-text-secondary hover:text-accent">
              About
            </a>
            <a href="#experience" className="text-sm text-text-secondary hover:text-accent">
              Experience
            </a>
            <a href="#contact" className="text-sm text-text-secondary hover:text-accent">
              Contact
            </a>
          </div>

          <Button variant="secondary" onClick={onToggleTheme}>
            {theme === "dark" ? "☼ Light" : "☾ Dark"}
          </Button>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;