type Props = {
  size?: number;
  className?: string;
  label?: string;
  date?: string;
};

/**
 * Wax-seal-style circular stamp for the documentation desk.
 * Caps-spaced label runs around the circumference (top half and bottom half),
 * with a small VR monogram and a date in the centre.
 */
export function DocStamp({
  size = 120,
  className = "",
  label = "Velour Documentation · Indianapolis · Signed",
  date,
}: Props) {
  const id = label.replace(/\s+/g, "-").toLowerCase();
  const topId = `${id}-top`;
  const botId = `${id}-bot`;
  const half = Math.ceil(label.length / 2);
  const topText = label.slice(0, half);
  const botText = label.slice(half);

  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      role="img"
      aria-label="Velour documentation stamp"
      className={className}
    >
      {/* Outer ring */}
      <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
      {/* Inner ring */}
      <circle cx="60" cy="60" r="28" fill="none" stroke="currentColor" strokeWidth="0.6" />

      {/* Top half label path (clockwise from 9 o'clock to 3 o'clock through top) */}
      <defs>
        <path id={topId} d="M 14 60 A 46 46 0 0 1 106 60" fill="none" />
        <path id={botId} d="M 106 60 A 46 46 0 0 1 14 60" fill="none" />
      </defs>

      <text
        fontFamily="var(--font-jetbrains), monospace"
        fontSize="6.2"
        letterSpacing="2.2"
        fill="currentColor"
        textRendering="geometricPrecision"
      >
        <textPath href={`#${topId}`} startOffset="50%" textAnchor="middle">
          {topText.toUpperCase()}
        </textPath>
      </text>
      <text
        fontFamily="var(--font-jetbrains), monospace"
        fontSize="6.2"
        letterSpacing="2.2"
        fill="currentColor"
        textRendering="geometricPrecision"
      >
        <textPath href={`#${botId}`} startOffset="50%" textAnchor="middle">
          {botText.toUpperCase()}
        </textPath>
      </text>

      {/* Centre monogram */}
      <text
        x="60"
        y="60"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-fraunces), serif"
        fontSize="22"
        fontStyle="italic"
        fontWeight="350"
        fill="currentColor"
      >
        VR
      </text>

      {/* Date underneath monogram */}
      {date && (
        <text
          x="60"
          y="80"
          textAnchor="middle"
          fontFamily="var(--font-jetbrains), monospace"
          fontSize="5"
          letterSpacing="1.4"
          fill="currentColor"
          opacity="0.78"
        >
          {date.toUpperCase()}
        </text>
      )}

      {/* Small star marks at the 12, 3, 6, 9 positions */}
      {[
        { x: 60, y: 13 },
        { x: 107, y: 60 },
        { x: 60, y: 107 },
        { x: 13, y: 60 },
      ].map((p) => (
        <g key={`${p.x}-${p.y}`} fill="currentColor">
          <circle cx={p.x} cy={p.y} r="0.9" />
        </g>
      ))}
    </svg>
  );
}
