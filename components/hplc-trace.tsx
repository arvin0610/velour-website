type Props = {
  className?: string;
  /** percentage of width where the main peak sits */
  peakAt?: number;
  /** opacity 0..1 */
  opacity?: number;
};

/**
 * Decorative HPLC-style chromatogram trace.
 * A flat baseline, a tall main peak, a small shoulder peak, and a couple of impurity bumps.
 * Drawn at viewBox 1000x140 — scale via className width.
 */
export function HplcTrace({
  className = "",
  peakAt = 38,
  opacity = 0.55,
}: Props) {
  const p = (peakAt / 100) * 1000;
  const d = `M0 130
    L${p - 220} 124
    Q${p - 200} 122, ${p - 160} 118
    Q${p - 120} 110, ${p - 80} 88
    Q${p - 40} 36, ${p} 12
    Q${p + 30} 38, ${p + 70} 92
    Q${p + 110} 116, ${p + 150} 122
    Q${p + 220} 128, ${p + 280} 124
    Q${p + 320} 118, ${p + 360} 120
    Q${p + 420} 126, ${p + 480} 128
    Q${p + 540} 124, 1000 128`;

  return (
    <svg
      viewBox="0 0 1000 140"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="hplc-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.18" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* baseline grid */}
      <g stroke="currentColor" strokeWidth="0.4" opacity="0.18">
        <line x1="0" y1="130" x2="1000" y2="130" />
        {[0, 25, 50, 75, 100].map((x) => (
          <line
            key={x}
            x1={(x / 100) * 1000}
            y1="124"
            x2={(x / 100) * 1000}
            y2="132"
          />
        ))}
      </g>
      {/* fill under curve */}
      <path d={`${d} L1000 140 L0 140 Z`} fill="url(#hplc-fill)" />
      {/* trace */}
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* peak retention-time tick */}
      <line
        x1={p}
        y1="6"
        x2={p}
        y2="14"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.7"
      />
    </svg>
  );
}
