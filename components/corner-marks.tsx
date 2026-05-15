type Tone = "ink" | "champagne" | "rule";

/**
 * Four small L-shaped corner registration ticks, positioned absolutely
 * inside the nearest positioned parent. Inspired by scientific photo
 * registration marks and printer's crop marks — decorative only.
 */
export function CornerMarks({
  tone = "rule",
  inset = "1.5rem",
  size = "1.25rem",
  className = "",
}: {
  tone?: Tone;
  /** Distance from each edge (any CSS length) */
  inset?: string;
  /** Arm length of each tick (any CSS length) */
  size?: string;
  className?: string;
}) {
  const stroke =
    tone === "ink"
      ? "var(--porcelain)"
      : tone === "champagne"
        ? "var(--champagne)"
        : "var(--line-dark)";

  const base = {
    position: "absolute" as const,
    width: size,
    height: size,
    pointerEvents: "none" as const,
  };

  return (
    <div aria-hidden className={`pointer-events-none ${className}`}>
      <span
        style={{
          ...base,
          top: inset,
          left: inset,
          borderTop: `1px solid ${stroke}`,
          borderLeft: `1px solid ${stroke}`,
        }}
      />
      <span
        style={{
          ...base,
          top: inset,
          right: inset,
          borderTop: `1px solid ${stroke}`,
          borderRight: `1px solid ${stroke}`,
        }}
      />
      <span
        style={{
          ...base,
          bottom: inset,
          left: inset,
          borderBottom: `1px solid ${stroke}`,
          borderLeft: `1px solid ${stroke}`,
        }}
      />
      <span
        style={{
          ...base,
          bottom: inset,
          right: inset,
          borderBottom: `1px solid ${stroke}`,
          borderRight: `1px solid ${stroke}`,
        }}
      />
    </div>
  );
}
