
import Reveal from "../components/ui/Reveal";
import Container from "../components/layout/Container";
import flexiWalletPreview from "../assets/projects/flexiwallet.png";
import ndviExplorerPreview from "../assets/projects/ndvi-explorer.png";
import fitnessAcademyPreview from "../assets/projects/fitness-academy.png";
import latLensPreview from "../assets/projects/latlens.png";
import paytmUxPreview from "../assets/projects/paytm-ux.png";
import foodBrandPreview from "../assets/projects/food-brand.png";

const projects = [
  {
    number: "01",
    type: "development",
    links: [
      {
        label: "View on GitHub",
        url: "https://github.com/anu30singh/Personal-Finance-Management",
      },
    ],
    image: flexiWalletPreview,
    imageAlt: "FlexiWallet personal finance dashboard preview",
    category: "FINTECH · PERSONAL PROJECT",
    title: "FlexiWallet",
    subtitle: "A simpler way to manage money",
    description:
      "Track income and spending, set savings goals, and see where your money goes with charts and AI-powered insights.",
    technologies: [
      "React",
      "Express.js",
      "PostgreSQL",
      "SQL Transactions",
      "Node.js",
    ],
  },
  {
    number: "02",
    type: "development",
    links: [  {
        label: "View on GitHub",
        url: "https://github.com/anu30singh/NDVIxplorer_X",
      },],
    image: ndviExplorerPreview,
    imageAlt: "NDVI Explorer satellite vegetation analysis preview",
    category: "GEOSPATIAL · DATA ANALYSIS",
    title: "NDVIExplorer",
    subtitle: "See plant health in satellite images",
    description:
      "Upload a GeoTIFF to measure vegetation with NDVI. The app shows the results on a map with clear statistics—no GIS experience needed.",
    technologies: [
      "Streamlit",
      "Python",
      "GIS",
      "Satellite Imagery",
      "NDVI",
    ],
  },
  {
    number: "03",
    type: "development",
    links: [  {
        label: "View on GitHub",
        url: "https://github.com/anu30singh/Mukta-Dance-Fitness-Academy-",
      },],
    image: fitnessAcademyPreview,
    imageAlt: "Dance academy website preview",
    category: "WEB DEVELOPMENT · CLIENT PROJECT",
    title: "Fitness Academy",
    subtitle: "A website for a dance academy",
    description:
      "A mobile-friendly site that helps people learn about classes and contact the academy through WhatsApp.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "WhatsApp Business API",
      "Responsive Design",
    ],
  },
  {
    number: "04",
    type: "development",
    links: [  {
        label: "View on GitHub",
        url: "https://github.com/anu30singh/LatLens",
      },],
    image: latLensPreview,
    imageAlt: "LatLens coordinate conversion browser extension preview",
    category: "GEOSPATIAL · BROWSER EXTENSION",
    title: "LatLens",
    subtitle: "A handy tool for map coordinates",
    description:
      "Convert coordinates between decimal degrees and degrees, minutes, and seconds. Preview locations on a map and keep your settings saved.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Chrome Storage API",
      "Geospatial",
    ],
  },

{
  number: "05",
  type: "design",
  links: [  {
        label: "View on Behance",
        url: "https://www.behance.net/gallery/226107833/UX-Case-Study-Paytm",
      },],
  image: paytmUxPreview,
  imageAlt: "Mobile payment app UX case study preview",
  category: "UX RESEARCH · CASE STUDY",
  title: "Paytm UX Case Study",
  subtitle: "Making common tasks easier to find",
  description:
    "A redesign that makes common tasks, like buying metro tickets, easier to find. I also reviewed the app's labels and navigation.",
  technologies: [
    "UX Research",
    "Information Architecture",
    "Heuristic Evaluation",
    "UI Redesign",
    "Figma",
  ],
},
{
  number: "06",
  type: "design",
  links: [  {
        label: "View on Figma",
        url: "https://www.figma.com/proto/yAz5l3gOs1lG4OYxQ9btjN/Animated-Landing-Page?node-id=2-48&p=f&t=xvYZ0GLuFRLb0bTh-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A48",
      },],
  image: foodBrandPreview,
  imageAlt: "Food brand website design preview",
  category: "PRODUCT DESIGN · WEB DESIGN",
  title: "Desktop UI for Food Brand",
  subtitle: "A website design and prototype",
  description:
    "A food brand website concept with a clear visual style, reusable elements, and a Figma prototype that is easy to explore.",
  technologies: [
    "Web Design",
    "Branding",
    "Figma",
    "Responsive Design",
    "Design System",
  ],
},

];

const projectGroups = [
  {
    type: "development",
    title: "Development projects",
    description: "Apps, websites, and tools I built with code.",
  },
  {
    type: "design",
    title: "UI/UX design projects",
    description: "Design work focused on clear layouts and easy-to-use products.",
  },
] as const;

export default function Projects() {
  return (
    <section
      id="work"
      className="py-24 md:py-28"
    >
      <Container>

        <Reveal>
          <div className="mb-14">
            <p className="mb-4 font-mono text-xs tracking-[0.25em] text-[var(--highlight)]">
              04 / PROJECTS
            </p>

            <h2 className="max-w-3xl font-serif text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl">
              Things I&apos;ve
              <span className="italic text-[var(--accent)]">
                {" "}built.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-secondary)]">
              Explore my software projects and UI/UX design work.
            </p>
          </div>
        </Reveal>

        <div className="space-y-16">
          {projectGroups.map((group) => {
            const groupProjects = projects.filter(
              (project) => project.type === group.type,
            );

            return (
              <section key={group.type} aria-labelledby={`${group.type}-heading`}>
                <Reveal>
                  <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h3
                        id={`${group.type}-heading`}
                        className="font-serif text-2xl text-[var(--text-primary)] sm:text-3xl"
                      >
                        {group.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--text-secondary)]">
                        {group.description}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[var(--accent)]">
                      {groupProjects.length} projects
                    </span>
                  </div>
                </Reveal>

                <div className="grid gap-5 md:grid-cols-2">
                  {groupProjects.map((project) => (
                    <Reveal key={project.number}>
                      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]">
                        <div className="aspect-[16/8.5] overflow-hidden border-b border-[var(--border)] bg-[var(--surface-secondary)]">
                          <img
                            src={project.image}
                            alt={project.imageAlt}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        </div>

                        <div className="flex flex-1 flex-col p-6 md:p-8">
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--text-secondary)]">
                              {project.category}
                            </span>

                            <span className="font-mono text-sm text-[var(--accent)]">
                              {project.number}
                            </span>
                          </div>

                          <div className="mt-6">
                            <h4 className="font-serif text-3xl text-[var(--text-primary)] sm:text-4xl">
                              {project.title}
                            </h4>

                            <p className="mt-2 text-sm text-[var(--accent)]">
                              {project.subtitle}
                            </p>

                            <p className="mt-6 text-sm leading-7 text-[var(--text-secondary)]">
                              {project.description}
                            </p>
                          </div>

                          <div className="mt-auto pt-9">
                            <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-[var(--text-secondary)]">
                              {group.type === "development" ? "BUILT WITH" : "TOOLS"}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((technology) => (
                                <span
                                  key={technology}
                                  className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--text-primary)]"
                                >
                                  {technology}
                                </span>
                              ))}
                            </div>

                            <div className="mt-7 border-t border-[var(--border)] pt-4">
                              <div className="flex flex-wrap items-center justify-between gap-3">
                                <span className="font-mono text-xs text-[var(--text-secondary)]">
                                  PROJECT {project.number} OF 06
                                </span>
                                {project.links.map((link) => (
                                  <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-2 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--highlight)]"
                                  >
                                    {link.label}
                                    <span aria-hidden="true">↗</span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
