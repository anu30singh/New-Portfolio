import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <Hero />

      <section id="work" className="min-h-40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-sm text-accent">01 / WORK</p>
          <h2 className="mt-4 text-4xl">Selected projects</h2>
        </div>
      </section>

      <section id="about" className="min-h-40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-sm text-accent">02 / ABOUT</p>
          <h2 className="mt-4 text-4xl">A little about me</h2>
        </div>
      </section>

      <section id="experience" className="min-h-40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-sm text-accent">03 / EXPERIENCE</p>
          <h2 className="mt-4 text-4xl">Where I've worked</h2>
        </div>
      </section>

      <section id="contact" className="min-h-40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-sm text-accent">04 / CONTACT</p>
          <h2 className="mt-4 text-4xl">Let's connect.</h2>
        </div>
      </section>
    </>
  );
}

export default App;