type Props = {
  volume?: string;
  year?: string;
  city?: string;
  className?: string;
};

/**
 * Editorial masthead: a thin rule with caps-spaced metadata across the top of a hero.
 * "Catalogue · Volume IV · MMXXVI · Indianapolis"
 */
export function Masthead({
  volume = "Volume IV",
  year = "MMXXVI",
  city = "Indianapolis",
  className = "",
}: Props) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-[color:var(--graphite)] ${className}`}
    >
      <span aria-hidden className="h-px w-8 bg-[color:var(--rule-strong,_#b8af97)]" />
      <span>Catalogue</span>
      <Dot />
      <span>{volume}</span>
      <Dot />
      <span>{year}</span>
      <Dot />
      <span>{city}</span>
      <span aria-hidden className="h-px flex-1 min-w-0 bg-[color:var(--line-soft)]" />
      <span className="text-[color:var(--champagne)]">Sealed</span>
    </div>
  );
}

function Dot() {
  return (
    <span
      aria-hidden
      className="inline-block h-1 w-1 rounded-full bg-[color:var(--graphite)] opacity-70"
    />
  );
}
