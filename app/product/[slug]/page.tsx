import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  Tags,
  Check,
  FileCheck2,
  LockKeyhole,
  Snowflake,
  TriangleAlert,
  ShoppingBag,
  ArrowLeft,
  ArrowUpRight,
  Download,
  FlaskConical,
  ScrollText,
  Boxes,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductCard } from "@/components/product-card";
import { ProductDataRow } from "@/components/product-data-row";
import { HplcTrace } from "@/components/hplc-trace";
import { Masthead } from "@/components/masthead";
import { PRODUCTS, getProduct } from "@/lib/products";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return { title: "Material not found · Velour Research" };
  return {
    title: `${p.name} — ${p.categoryLabel} · Velour Research`,
    description: p.shortDesc,
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  ).slice(0, 3);

  const index =
    PRODUCTS.findIndex((p) => p.slug === product.slug) + 1;
  const altPrice =
    Math.round((product.fromPrice * 1.6) / 5) * 5;

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Crumb */}
        <div className="container-editorial pt-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[color:var(--graphite)] hover:text-[color:var(--champagne)]"
            >
              <ArrowLeft className="h-3 w-3" />
              Back to catalogue
            </Link>
            <Masthead volume={`Specimen Nº ${String(index).padStart(2, "0")}`} />
          </div>
        </div>

        <section className="container-editorial pt-8 pb-20">
          <div className="rise">
            <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr]">
              {/* Vial frame */}
              <div className="relative">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[18px] border border-[color:var(--line-dark)] bg-[#fbf4e7] shadow-[0_28px_70px_-54px_rgba(74,55,33,0.65)]">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(70% 52% at 50% 18%, rgba(255,255,255,0.80), transparent 68%), radial-gradient(70% 65% at 80% 85%, rgba(169,128,61,0.18), transparent 72%), linear-gradient(145deg, rgba(255,250,240,0.92), rgba(238,222,198,0.86))",
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-x-8 bottom-8 h-px bg-[color:var(--champagne)]/20"
                  />
                  <Image
                    src={product.image}
                    alt={`${product.name} research material vial`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain p-7 drop-shadow-[0_34px_52px_rgba(74,55,33,0.24)] md:p-10"
                  />
                  <div className="absolute right-4 top-4 rounded-full border border-[color:var(--line-dark)] bg-white/76 px-3 py-1 font-mono text-[0.58rem] uppercase tracking-wider text-[color:var(--champagne)] backdrop-blur-sm">
                    lot {product.lotId}
                  </div>
                  {/* Folio mark */}
                  <span className="absolute left-4 bottom-4 font-mono text-[0.52rem] uppercase tracking-[0.2em] text-[color:var(--graphite)]">
                    Fig. 01 · Specimen of record
                  </span>
                </div>
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--forest)] bg-[color:var(--bone)]/90 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-wider text-[color:var(--forest)] backdrop-blur">
                  <ShieldCheck className="h-3 w-3" />
                  {product.purityLabel} · RUO
                </div>

                {/* HPLC card under the vial */}
                <div className="mt-6 rounded-[18px] border border-[color:var(--line-dark)] bg-white/55 p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between font-mono text-[0.58rem] uppercase tracking-[0.18em] text-[color:var(--graphite)]">
                    <span className="inline-flex items-center gap-2 text-[color:var(--forest)]">
                      <FlaskConical className="h-3 w-3 text-[color:var(--champagne)]" />
                      HPLC trace · {product.lotId}
                    </span>
                    <span>Retention 8.42 min · 214 nm</span>
                  </div>
                  <div className="mt-3 text-[color:var(--champagne)]">
                    <HplcTrace className="block w-full h-[120px]" peakAt={32} opacity={0.85} />
                  </div>
                  <div className="mt-2 flex items-center justify-between font-mono text-[0.52rem] uppercase tracking-[0.18em] text-[color:var(--slate)]">
                    <span>t / min →</span>
                    <span>signed {product.signedOn ?? "—"}</span>
                  </div>
                </div>
              </div>

              {/* Detail column */}
              <div>
                <p className="eyebrow">{product.categoryLabel}</p>
                <h1 className="mt-4 font-display text-[3.5rem] leading-[0.95] tracking-tight text-[color:var(--forest)] lg:text-[4.5rem]">
                  {product.name}
                </h1>
                <p className="mt-2 font-display text-xl italic text-[color:var(--graphite)]">
                  {product.subtitle}
                </p>
                <ProductDataRow
                  product={product}
                  size="md"
                  className="mt-5 border-t border-[color:var(--line-soft)] pt-4"
                />

                <p className="mt-8 text-[1.02rem] leading-relaxed text-[color:var(--ink)] dropcap">
                  {product.shortDesc}
                </p>

                <hr className="hairline my-10" />

                <div className="mb-6 flex items-start gap-3 rounded-[10px] border border-[color:var(--signal)]/30 bg-[color:var(--signal)]/[0.08] p-4">
                  <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--signal)]" />
                  <p className="text-[0.82rem] leading-relaxed text-[color:var(--ink)]">
                    <span className="font-medium text-[color:var(--forest)]">
                      For laboratory research use only.
                    </span>{" "}
                    Not for human or animal consumption, not a drug, food,
                    cosmetic, or supplement. By adding to cart, the researcher
                    affirms compliance with all applicable regulations.
                  </p>
                </div>

                <div>
                  {/* Selected material card */}
                  <div className="rounded-[18px] border border-[color:var(--line)] bg-[color:var(--linen)]/55 p-5">
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[color:var(--graphite)]">
                      Selected research material
                    </p>
                    <div className="mt-3 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                      <div>
                        <p className="font-display text-[1.65rem] leading-none text-[color:var(--forest)]">
                          {product.name}
                        </p>
                        <p className="mt-2 text-sm text-[color:var(--graphite)]">
                          Vial · SKU {product.lotId.slice(0, 9)}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:justify-end">
                        <Pill icon={<Tags className="h-3 w-3" />}>
                          Lot {product.lotId}
                        </Pill>
                        <Pill icon={<Check className="h-3 w-3" />}>
                          {product.purityLabel}
                        </Pill>
                      </div>
                    </div>
                  </div>

                  <p className="mt-7 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[color:var(--graphite)]">
                    Choose vial size
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      className="rounded-[10px] border border-[color:var(--forest)] bg-[color:var(--forest)] px-4 py-4 text-left text-[color:var(--bone)] transition"
                    >
                      <p className="font-display text-2xl leading-none">Standard</p>
                      <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-wider text-[color:var(--sage)]">
                        ${product.fromPrice}
                      </p>
                    </button>
                    <button
                      type="button"
                      className="rounded-[10px] border border-[color:var(--line)] bg-[color:var(--bone)] px-4 py-4 text-left text-[color:var(--ink)] transition hover:border-[color:var(--moss)]"
                    >
                      <p className="font-display text-2xl leading-none">Double</p>
                      <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-wider text-[color:var(--graphite)]">
                        ${altPrice}
                      </p>
                    </button>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <InfoTile
                      icon={<FileCheck2 className="h-4 w-4 text-[color:var(--moss)]" strokeWidth={1.7} />}
                      label="COA record"
                      value={product.lotId}
                    />
                    <InfoTile
                      icon={<LockKeyhole className="h-4 w-4 text-[color:var(--moss)]" strokeWidth={1.7} />}
                      label="Secure checkout"
                      value="Waave"
                    />
                    <InfoTile
                      icon={<Snowflake className="h-4 w-4 text-[color:var(--moss)]" strokeWidth={1.7} />}
                      label="Fulfillment"
                      value="Cold-chain"
                    />
                  </div>

                  <div className="mt-8 flex items-end justify-between gap-6 border-t border-[color:var(--line)] pt-6">
                    <div>
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[color:var(--graphite)]">
                        Research price
                      </p>
                      <p className="mt-1 font-display text-[2.5rem] leading-none tabular text-[color:var(--forest)]">
                        ${product.fromPrice}
                      </p>
                    </div>
                    <button type="button" className="btn btn-primary">
                      <ShoppingBag className="h-4 w-4" />
                      Request the dossier
                    </button>
                  </div>
                  <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-wider text-[color:var(--graphite)]">
                    RUO only · Lot-matched documentation · Cold-chain handling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* § II Specifications — data sheet */}
        <section className="border-y border-[color:var(--line)] bg-[color:var(--linen)]">
          <div className="container-editorial py-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[color:var(--champagne)]">
                  § II — Analytical
                </p>
                <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-[0.95] text-[color:var(--porcelain)]">
                  Specifications.
                </h2>
              </div>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[color:var(--graphite)]">
                Data sheet · Velour Research / {product.lotId}
              </span>
            </div>

            <dl className="mt-10 grid gap-x-12 gap-y-6 font-mono text-[0.82rem] md:grid-cols-2 lg:grid-cols-3">
              <Spec label="CAS number" value={product.cas} />
              <Spec label="Molecular formula" value={product.formula} />
              <Spec label="Molecular weight" value={product.molecularWeight} />
              <Spec label="Sequence" value={product.sequence} />
              <Spec label="Residues" value={product.residues ? `${product.residues}` : undefined} />
              <Spec label="Purity (HPLC)" value={product.purityLabel} />
              <Spec label="Appearance" value={product.appearance ?? "White lyophilized powder"} />
              <Spec
                label="Storage"
                value={
                  product.storage ?? "Store lyophilized at −20 °C, protected from light and moisture"
                }
              />
              <Spec label="Latest lot" value={product.lotId} />
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={`/coas?lot=${product.lotId}&slug=${product.slug}`}
                className="btn btn-outline text-xs"
              >
                <Download className="h-3.5 w-3.5" />
                Request COA bundle for {product.lotId}
              </Link>
              <Link href="/quality" className="btn btn-outline text-xs">
                Read quality standards
              </Link>
            </div>
          </div>
        </section>

        {/* § III Handling */}
        <section className="container-editorial py-16">
          <div className="grid gap-10 lg:grid-cols-[0.4fr_1fr]">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[color:var(--champagne)]">
                § III — Handling
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.02] text-[color:var(--porcelain)]">
                Notes from the documentation desk.
              </h2>
            </div>
            <div className="space-y-6">
              <HandlingRow
                icon={<Boxes className="h-4 w-4 text-[color:var(--champagne)]" strokeWidth={1.6} />}
                label="On receipt"
                body="Inspect the cold-chain transit log included in the parcel. If the indicator shows a temperature excursion outside spec, photograph the log and email documentation@velour.research within 24 hours."
              />
              <HandlingRow
                icon={<FlaskConical className="h-4 w-4 text-[color:var(--champagne)]" strokeWidth={1.6} />}
                label="Reconstitution"
                body="Reconstitute in sterile diluent appropriate to the researcher's protocol. Use grade-appropriate water and a sterile environment. Do not introduce the vial to non-sterile fluid paths."
              />
              <HandlingRow
                icon={<Snowflake className="h-4 w-4 text-[color:var(--champagne)]" strokeWidth={1.6} />}
                label="Long-term storage"
                body="Store lyophilized material at −20 °C, protected from light and moisture. After reconstitution, follow the literature for the specific compound's stability profile."
              />
              <HandlingRow
                icon={<ScrollText className="h-4 w-4 text-[color:var(--champagne)]" strokeWidth={1.6} />}
                label="Chain of custody"
                body="Every lot leaves Velour Research with a signed COA, a mass-spec confirmation, and a handling sheet keyed to the lot ID. The documentation library stays online for the life of the record."
              />
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="container-editorial pb-24">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[color:var(--champagne)]">
                  § IV — Adjacent records
                </p>
                <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight text-[color:var(--porcelain)]">
                  Within {product.categoryLabel.toLowerCase()}.
                </h2>
              </div>
              <Link
                href={`/shop?cat=${product.category}`}
                className="btn btn-outline hidden md:inline-flex"
              >
                View all
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <ProductCard key={r.slug} product={r} index={i} />
              ))}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </>
  );
}

function Pill({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--line)] bg-white px-3 py-1.5 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-[color:var(--forest)]">
      {icon}
      {children}
    </span>
  );
}

function InfoTile({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[12px] border border-[color:var(--line)] bg-white/70 p-3">
      {icon}
      <p className="mt-2 font-mono text-[0.56rem] uppercase tracking-[0.12em] text-[color:var(--graphite)]">
        {label}
      </p>
      <p className="mt-1 text-sm text-[color:var(--forest)]">{value}</p>
    </div>
  );
}

function Spec({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-dashed border-[color:var(--line)] pb-4">
      <dt className="text-[0.62rem] uppercase tracking-[0.14em] text-[color:var(--graphite)]">
        {label}
      </dt>
      <dd className="break-words text-[color:var(--forest)]">
        {value ?? "—"}
      </dd>
    </div>
  );
}

function HandlingRow({
  icon,
  label,
  body,
}: {
  icon: React.ReactNode;
  label: string;
  body: string;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-5 border-t border-[color:var(--line-soft)] pt-6 first:border-t-0 first:pt-0">
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--line-dark)] bg-white/70">
        {icon}
      </span>
      <div>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[color:var(--graphite)]">
          {label}
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--ink)]">
          {body}
        </p>
      </div>
    </div>
  );
}
