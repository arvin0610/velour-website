import type { Product } from "@/lib/products";

/**
 * Tight mono row showing the science: formula · MW · residues
 * Designed to slot under the product subtitle on cards and detail pages.
 */
export function ProductDataRow({
  product,
  size = "sm",
  className = "",
}: {
  product: Pick<Product, "formula" | "molecularWeight" | "residues" | "cas">;
  size?: "sm" | "md";
  className?: string;
}) {
  const bits: string[] = [];
  if (product.formula) bits.push(product.formula);
  if (product.molecularWeight) bits.push(product.molecularWeight);
  if (product.residues) bits.push(`${product.residues} aa`);
  if (!bits.length) return null;

  const sizing =
    size === "md"
      ? "text-[0.72rem] tracking-[0.05em]"
      : "text-[0.6rem] tracking-[0.04em]";

  return (
    <p
      className={`font-mono ${sizing} text-[color:var(--graphite)] ${className}`}
    >
      {bits.map((b, i) => (
        <span key={b}>
          {b}
          {i < bits.length - 1 && (
            <span aria-hidden className="mx-1.5 text-[color:var(--slate)]/70">·</span>
          )}
        </span>
      ))}
    </p>
  );
}
