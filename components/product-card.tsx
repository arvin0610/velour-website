import Link from "next/link";
import Image from "next/image";
import { Tags, FileCheck2, ShieldCheck, Snowflake } from "lucide-react";
import type { Product } from "@/lib/products";
import { ProductDataRow } from "./product-data-row";

export function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  return (
    <div className="rise">
      <Link href={`/product/${product.slug}`} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[18px]">
          <div className="relative overflow-hidden rounded-[18px] border border-[color:var(--line-dark)] bg-[#fbf4e7] shadow-[0_28px_70px_-54px_rgba(74,55,33,0.65)] h-full w-full">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(70% 52% at 50% 18%, rgba(255,255,255,0.80), transparent 68%), radial-gradient(70% 65% at 80% 85%, rgba(169,128,61,0.18), transparent 72%), linear-gradient(145deg, rgba(255,250,240,0.92), rgba(238,222,198,0.86))",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-8 bottom-8 h-px bg-[color:var(--champagne)]/20"
            />
            {/* Specimen folio mark, top-left */}
            <span className="absolute left-3 top-3 z-[1] font-mono text-[0.54rem] uppercase tracking-[0.18em] text-[color:var(--graphite)]">
              Specimen Nº {String(index + 1).padStart(2, "0")}
            </span>
            <div className="relative h-full w-full">
              <Image
                src={product.image}
                alt={`${product.name} research material vial`}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-contain p-7 drop-shadow-[0_34px_52px_rgba(74,55,33,0.24)] transition-transform duration-700 group-hover:scale-[1.015] md:p-10"
              />
            </div>
            <div className="absolute right-4 top-4 rounded-full border border-[color:var(--line-dark)] bg-white/76 px-3 py-1 font-mono text-[0.58rem] uppercase tracking-wider text-[color:var(--champagne)] backdrop-blur-sm">
              lot {product.lotId}
            </div>
            {/* Bottom caption: HPLC label + signed date */}
            <div className="absolute inset-x-5 bottom-4 flex items-end justify-between font-mono text-[0.5rem] uppercase tracking-[0.18em] text-[color:var(--graphite)]">
              <span>{product.purityLabel}</span>
              {product.signedOn && (
                <span className="text-[color:var(--champagne)]">
                  signed {product.signedOn}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[color:var(--champagne)]">
              {product.categoryLabel}
            </p>
            <h3 className="mt-1.5 font-display text-[1.55rem] leading-[1.05] text-[color:var(--porcelain)] transition-colors group-hover:text-[color:var(--champagne)]">
              {product.name}
            </h3>
            <p className="mt-0.5 text-[0.78rem] italic text-[color:var(--graphite)] font-display">
              {product.subtitle}
            </p>
            <ProductDataRow product={product} className="mt-2" />
          </div>
          <div className="shrink-0 text-right">
            <p className="font-mono text-[0.6rem] uppercase tracking-wider text-[color:var(--slate)]">
              from
            </p>
            <p className="font-display text-[1.35rem] tabular text-[color:var(--champagne)]">
              ${product.fromPrice}
            </p>
          </div>
        </div>

        <p className="mt-3 line-clamp-2 max-w-md text-[0.84rem] leading-relaxed text-[color:var(--graphite)]">
          {product.shortDesc}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <CardChip icon={<Tags className="h-3 w-3 text-[color:var(--champagne)]" />}>
            Lot {product.lotId}
          </CardChip>
          <CardChip icon={<FileCheck2 className="h-3 w-3 text-[color:var(--champagne)]" />}>
            COA record
          </CardChip>
          <CardChip icon={<ShieldCheck className="h-3 w-3 text-[color:var(--champagne)]" />}>
            RUO
          </CardChip>
          <CardChip icon={<Snowflake className="h-3 w-3 text-[color:var(--champagne)]" />}>
            Cold-chain
          </CardChip>
        </div>
      </Link>
    </div>
  );
}

function CardChip({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--line-dark)] bg-white/54 px-2.5 py-1 font-mono text-[0.55rem] uppercase tracking-[0.12em] text-[color:var(--graphite)] transition-colors group-hover:border-[color:var(--champagne)]/45 group-hover:text-[color:var(--porcelain)]">
      {icon}
      {children}
    </span>
  );
}
