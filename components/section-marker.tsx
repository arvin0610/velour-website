/**
 * A roman-numeral § badge that sits on a section divider.
 * Pair with a parent that has `relative` + a top border.
 */
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

export function SectionMarker({
  n,
  tone = "champagne",
  className = "",
}: {
  n: number;
  tone?: "champagne" | "ink";
  className?: string;
}) {
  const value = ROMAN[n - 1] ?? String(n);
  const colors =
    tone === "ink"
      ? "bg-[color:var(--porcelain)] text-[color:var(--velvet)]"
      : "bg-[color:var(--velvet)] text-[color:var(--champagne)] border border-[color:var(--champagne)]/40";
  return (
    <span
      aria-hidden
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] ${colors} ${className}`}
    >
      <span className="inline-block h-[5px] w-[5px] rounded-full bg-current opacity-70" />
      § {value}
    </span>
  );
}
