import portrait from "../../assets/photo.webp";

function PortraitCard() {
  return (
    <div className="relative -rotate-3">
      <div className="absolute -top-3 left-1/2 z-10 h-7 w-16 -translate-x-1/2 rotate-[-7deg] bg-[#d7d4c8]/75 shadow-sm" />

      <div className="bg-[#f3f0e7] p-2.5 pb-3 shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:p-3 sm:pb-4">
        <img
          src={portrait}
          alt="Anu"
          className="block aspect-[4/3] w-full object-cover"
        />

        <div className="flex items-center justify-between gap-2 px-1 pt-2.5 sm:px-2 sm:pt-3">
          <svg
            aria-hidden="true"
            className="h-10 w-8 shrink-0 text-[#718966] sm:h-12 sm:w-9"
            viewBox="0 0 40 56"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M20 53V8m0 22C13 20 8 19 5 21c1 7 6 11 15 12m0-14c5-10 11-13 16-11-1 8-7 13-16 15m0 19c-6-8-11-9-15-6 2 6 7 9 15 9m0-12c6-8 11-9 15-6-2 6-7 9-15 9" />
          </svg>
          <div className="rotate-[-2deg] text-right font-serif text-[clamp(.65rem,1.3vw,.9rem)] italic leading-tight text-[#26312d]">
            <p>Always learning.</p>
            <p>Always building.</p>
            <p>
              Pizza, always.
              <span aria-hidden="true" className="ml-1 inline-block text-[0.75em] not-italic">
                🍕
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortraitCard;
