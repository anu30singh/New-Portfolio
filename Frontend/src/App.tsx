import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import useTheme from "./hooks/useTheme";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Community from "./sections/Community";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="overflow-x-clip">
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <Hero />
      <Projects />
      <About />
      <Experience />
      <Community />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;