import { useState } from "react";
import Container from "../components/layout/Container";
import Reveal from "../components/ui/Reveal";

const communities = [
  {
    number: "01",
    role: "President",
    name: "The NAMESPACE Community",
    period: "Sep 2023 — May 2024",
    type: "STUDENT TECH COMMUNITY",
    description:
      "I led a campus tech community of 350+ members. We learned and built together through workshops, coding sessions, and hackathons. I also mentored members in software development and new technologies.",
    stats: [
      { value: "350+", label: "Community members" },
      { value: "9 months", label: "As president" },
      { value: "Events", label: "Workshops and hackathons" },
    ],
    photo: {
      src: "/community/namespace.jpeg",
      alt: "NAMESPACE community event",
      caption: "Ideas into action",
    },
  },
  {
    number: "02",
    role: "Core Team",
    name: "Reskilll",
    period: "Mar — Apr 2023",
    type: "CLOUD LEARNING PROGRAM",
    description:
      "I helped run Cohort 1.0, where 150+ women learned Microsoft Azure and workplace skills. I coordinated activities, supported learners, and helped promote the program.",
    stats: [
      { value: "150+", label: "Women supported" },
      { value: "2 months", label: "On the core team" },
      { value: "Azure", label: "Cloud skills" },
    ],
    photo: {
      src: "/community/reskilll.jpeg",
      alt: "Reskilll cloud learning community",
      caption: "Learning in community",
    },
  },
];

function CommunityPhoto({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <figure
      className="relative w-full max-w-[300px] -rotate-3 bg-[#f3f0e7] p-2 pb-10 shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:z-10 hover:rotate-0 hover:scale-[1.04] sm:p-2.5 sm:pb-11"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#dfe5d8]">
        {!imageFailed ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_75%_25%,#e8c99e,transparent_28%),linear-gradient(145deg,#aebda0,#566d5e)] p-3 text-center">
            <svg
              aria-hidden="true"
              className="h-8 w-8 text-white/85"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <circle cx="8.5" cy="9" r="1.5" />
              <path d="m21 15-5-5L5 20" />
            </svg>
            <span className="mt-2 font-mono text-[9px] text-white">
              Add photo
            </span>
            <span className="mt-1 max-w-full break-all font-mono text-[8px] text-white/75">
              {src.replace("/community/", "")}
            </span>
          </div>
        )}
      </div>
      <figcaption className="absolute inset-x-2 bottom-2 truncate text-center font-serif text-xs italic text-[#344139] sm:bottom-2.5">
        {caption}
      </figcaption>
      <span className="absolute -top-2 left-1/2 h-5 w-12 -translate-x-1/2 rotate-[-5deg] bg-[#d7d4c8]/70" />
    </figure>
  );
}

export default function Community() {
  return (
    <section id="community" className="py-24 md:py-28">
      <Container>
        <Reveal>
          <div className="mb-12">
            <p className="mb-4 font-mono text-xs tracking-[0.25em] text-[var(--highlight)]">
              05 / COMMUNITY
            </p>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl">
              Learning and building together.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-secondary)]">
              I have helped students and early-career learners grow their skills and confidence.
            </p>
          </div>
        </Reveal>

        <div className="space-y-7">
          {communities.map((community) => (
            <Reveal key={community.number}>
              <article className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
                <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="font-mono text-[10px] tracking-[0.18em] text-[var(--accent)]">
                        {community.type} / {community.number}
                      </p>
                      <span className="rounded-full border border-[var(--border)] px-3 py-1.5 font-mono text-[10px] text-[var(--text-secondary)]">
                        {community.period}
                      </span>
                    </div>

                    <h3 className="mt-5 font-serif text-3xl text-[var(--text-primary)] sm:text-4xl">
                      {community.name}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--highlight)]">
                      {community.role}
                    </p>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
                      {community.description}
                    </p>

                    <div className="mt-7 grid grid-cols-3 border-t border-[var(--border)] pt-5">
                      {community.stats.map((stat) => (
                        <div key={stat.label} className="pr-2">
                          <p className="font-serif text-2xl text-[var(--accent)] sm:text-3xl">
                            {stat.value}
                          </p>
                          <p className="mt-1 text-[10px] leading-4 text-[var(--text-secondary)] sm:text-xs">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex min-h-[250px] items-center justify-center overflow-hidden border-t border-[var(--border)] bg-[var(--background)]/45 px-8 py-10 lg:border-l lg:border-t-0">
                    <CommunityPhoto {...community.photo} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
