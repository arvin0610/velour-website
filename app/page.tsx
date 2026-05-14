import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  BadgeCheck,
  Boxes,
  FileCheck2,
  FlaskConical,
  LockKeyhole,
  Snowflake,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductCard } from "@/components/product-card";
import { Masthead } from "@/components/masthead";
import { ProductDataRow } from "@/components/product-data-row";
import { getProduct } from "@/lib/products";

const FEATURED_SLUGS = [
  "bpc-157",
  "repair-stack",
  "tb-500",
  "ghk-cu",
  "cjc-1295",
  "ipamorelin",
];

export default function HomePage() {
  const featured = FEATURED_SLUGS.map(getProduct).filter(
    (p): p is NonNullable<ReturnType<typeof getProduct>> => Boolean(p),
  );
  const hero = getProduct("bpc-157")!;

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden border-b border-[color:var(--line-dark)] bg-[#fffaf0]">
          {/* Background photograph */}
          <Image
            src="/images/site/hero-bubbles.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Cream scrim — softer than before since the photo is already light. Heavy enough on the left for headline legibility, almost transparent on the right so the molecular detail reads through. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg,rgba(255,250,240,0.78) 0%,rgba(255,250,240,0.62) 32%,rgba(255,250,240,0.32) 60%,rgba(255,250,240,0.1) 85%,rgba(255,250,240,0) 100%)",
            }}
          />
          {/* Vertical settle scrim */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg,rgba(255,250,240,0.35) 0%,rgba(255,250,240,0) 38%,rgba(255,250,240,0) 72%,rgba(255,250,240,0.5) 100%)",
            }}
          />
          {/* Existing radial accents */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 12% 8%,rgba(255,255,255,0.7),transparent 24rem),radial-gradient(circle at 78% 14%,rgba(169,128,61,0.18),transparent 30rem)",
            }}
          />
          <div className="container-editorial relative pt-8">
            <Masthead />
          </div>
          <div className="container-editorial relative grid min-h-[calc(100svh-64px)] items-center gap-8 py-10 sm:py-14 md:min-h-[calc(100vh-76px)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:py-16">
            <div>
              <div className="max-w-4xl">
                <div className="rise">
                  <p className="eyebrow">Velour Research · For qualified purchasers</p>
                </div>
                <div className="rise" style={{ animationDelay: "60ms" }}>
                  <h1 className="mt-5 max-w-5xl font-display text-[clamp(3.15rem,15vw,8.1rem)] font-light leading-[0.86] tracking-[-0.065em] text-[color:var(--porcelain)] sm:mt-7">
                    Research materials,
                    <br />
                    <span className="italic text-[#8f6b34]">with careful guidance.</span>
                  </h1>
                </div>
                <div className="rise" style={{ animationDelay: "120ms" }}>
                  <div className="mt-10 flex flex-col gap-3 min-[420px]:flex-row sm:mt-12 sm:flex-wrap sm:items-center sm:gap-4">
                    <Link
                      href="/shop"
                      className="btn btn-primary w-full min-[420px]:w-auto"
                    >
                      Shop research catalog
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/coas"
                      className="btn btn-outline w-full min-[420px]:w-auto"
                    >
                      View COA library
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero vial card */}
            <div>
              <div className="relative mx-auto mt-2 w-full max-w-[300px] sm:max-w-[390px] lg:max-w-[456px]">
                <div className="absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.92),transparent_56%),linear-gradient(135deg,rgba(238,224,201,0.76),rgba(255,250,240,0.92))] blur-xl" />
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-[color:var(--line-dark)] bg-[#fbf4e7] shadow-[0_28px_70px_-54px_rgba(74,55,33,0.65)]">
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
                    src={hero.image}
                    alt={`${hero.name} research material vial`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain p-7 drop-shadow-[0_34px_52px_rgba(74,55,33,0.24)] md:p-10"
                    priority
                  />
                  <div className="absolute right-4 top-4 rounded-full border border-[color:var(--line-dark)] bg-white/76 px-3 py-1 font-mono text-[0.58rem] uppercase tracking-wider text-[color:var(--champagne)] backdrop-blur-sm">
                    lot {hero.lotId}
                  </div>
                  <span className="absolute left-4 bottom-4 font-mono text-[0.52rem] uppercase tracking-[0.2em] text-[color:var(--graphite)]">
                    Specimen of record · 2026
                  </span>
                </div>
                <div className="absolute -bottom-3 left-1/2 w-[86%] -translate-x-1/2 rounded-2xl border border-[color:var(--line-dark)] bg-white/86 p-4 shadow-[0_24px_70px_-46px_rgba(74,55,33,0.58)] backdrop-blur-xl sm:-bottom-6 sm:-left-4 sm:w-auto sm:max-w-[280px] sm:translate-x-0 sm:p-5">
                  <p className="eyebrow">Featured material</p>
                  <p className="mt-2 font-display text-[1.55rem] leading-none text-[color:var(--porcelain)] sm:text-2xl">
                    {hero.name}
                  </p>
                  <ProductDataRow product={hero} className="mt-2" />
                  <p className="mt-2 font-mono text-[0.58rem] uppercase tracking-wider text-[color:var(--champagne)] sm:text-[0.62rem]">
                    Signed {hero.signedOn} · COA on file
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── ASSURANCES STRIP ───── */}
        <section className="border-b border-[color:var(--line-dark)] bg-[#f4e8d7]/60">
          <div className="container-editorial grid gap-px bg-[color:var(--line-dark)] py-px sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Boxes className="h-5 w-5" strokeWidth={1.45} />,
                title: "Lot traceability",
                blurb: "Documentation organized by SKU and lot",
              },
              {
                icon: <FileCheck2 className="h-5 w-5" strokeWidth={1.45} />,
                title: "Analytical records",
                blurb: "Current lot and archive records",
              },
              {
                icon: <Snowflake className="h-5 w-5" strokeWidth={1.45} />,
                title: "Cold-chain handling",
                blurb: "Temperature-conscious fulfillment",
              },
              {
                icon: <LockKeyhole className="h-5 w-5" strokeWidth={1.45} />,
                title: "Research-use controls",
                blurb: "Clear RUO language through checkout",
              },
            ].map((a) => (
              <div key={a.title} className="flex gap-4 bg-white/52 p-7 rise">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[color:var(--line-dark)] text-[color:var(--champagne)]">
                  {a.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-[color:var(--porcelain)]">
                    {a.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[color:var(--graphite)]">
                    {a.blurb}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ───── CATALOG NAVIGATOR ───── */}
        <section className="container-editorial py-24 lg:py-32">
          <div className="rise">
            <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line-dark)] bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(243,231,213,0.92))] shadow-[0_28px_80px_-62px_rgba(74,55,33,0.58)]">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[color:var(--champagne)]/14 blur-3xl" />
              <div className="relative grid items-stretch lg:grid-cols-[1.05fr_0.95fr]">
                <div className="p-9 md:p-14 lg:p-16">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-dark)] px-4 py-1.5 font-mono text-[0.68rem] uppercase tracking-wider text-[color:var(--champagne)]">
                    <FlaskConical className="h-3.5 w-3.5" />
                    Research catalog tool
                  </span>
                  <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4.2rem)] leading-[0.95] text-[color:var(--porcelain)]">
                    Start with the right context, not pressure.
                  </h2>
                  <p className="mt-5 max-w-xl text-[color:var(--graphite)]">
                    Filter by research category, material class, and documentation
                    status so your team can evaluate materials calmly, with the
                    records close at hand.
                  </p>
                  <Link href="/shop" className="btn btn-primary mt-8">
                    Open catalog navigator
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="relative min-h-[280px] lg:min-h-full">
                  <Image
                    src="/images/site/bpc-helix.jpg"
                    alt="BPC-157 Velour Research vial in the foreground with a DNA double-helix sculpture in soft focus behind"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── RESEARCH CONTEXTS ───── */}
        <section className="container-editorial pb-28">
          <div className="rise">
            <div className="flex flex-wrap items-end justify-between gap-10">
              <div className="max-w-2xl">
                <p className="eyebrow">Research contexts</p>
                <h2 className="mt-4 font-display text-[clamp(2.3rem,6vw,5rem)] leading-[0.92] text-[color:var(--porcelain)]">
                  Organized by literature area.
                </h2>
                <p className="mt-5 text-[color:var(--graphite)]">
                  Browse materials by the research contexts they are commonly
                  studied within.
                </p>
              </div>
              <Link href="/shop" className="btn btn-outline hidden md:inline-flex">
                View all
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-[color:var(--line-dark)] bg-[color:var(--line-dark)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "Tissue pathway research",
                blurb:
                  "Materials commonly discussed in cell migration, matrix biology, angiogenesis, and connective-tissue pathway literature.",
                href: "/shop?cat=repair",
              },
              {
                num: "02",
                title: "Growth-hormone research",
                blurb:
                  "GHRH analogs and ghrelin mimetics used to investigate pulsatile growth hormone release in research settings.",
                href: "/shop?cat=gh-axis",
              },
              {
                num: "03",
                title: "Metabolic pathway research",
                blurb:
                  "Incretin analogs and mitochondrial-derived materials used in metabolic pathway and receptor-model literature.",
                href: "/shop?cat=metabolic",
              },
              {
                num: "04",
                title: "Aging biology research",
                blurb:
                  "Short-peptide bioregulators and cellular-aging research tools from the published literature.",
                href: "/shop?cat=longevity",
              },
            ].map((c) => (
              <div key={c.num} className="rise">
                <Link
                  href={c.href}
                  className="group block h-full bg-white/58 p-8 transition-colors hover:bg-[#f3e7d5]"
                >
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[color:var(--champagne)]">
                    {c.num}
                  </p>
                  <h3 className="mt-8 font-display text-[2rem] leading-tight text-[color:var(--porcelain)]">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--graphite)]">
                    {c.blurb}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-1 font-mono text-[0.66rem] uppercase tracking-wider text-[color:var(--champagne)]">
                    Explore
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ───── DOCUMENTATION FIRST ───── */}
        <section className="border-y border-[color:var(--line-dark)] bg-[#fffdf8] text-[color:var(--charcoal)]">
          <div className="container-editorial grid gap-16 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rise">
              <figure className="relative overflow-hidden rounded-[2rem] border border-[rgba(43,43,49,0.12)] shadow-[0_36px_90px_-58px_rgba(9,9,11,0.55)]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/site/vials-on-desk.jpg"
                    alt="Five Velour Research vials arranged across a working desk beside a laptop showing analytical data and a hand-annotated notebook"
                    fill
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="object-cover"
                  />
                  {/* Floating annotation chip — keeps the data signal of the old card */}
                  <div className="absolute left-5 top-5 rounded-full border border-[color:var(--line-dark)] bg-white/86 px-3 py-1.5 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-[#6E1F3F] backdrop-blur-md">
                    <span className="inline-flex items-center gap-1.5">
                      <BadgeCheck className="h-3 w-3" />
                      Documentation library · Lot-indexed
                    </span>
                  </div>
                  {/* Bottom caption strip */}
                  <figcaption className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl border border-[color:var(--line-dark)] bg-white/86 px-4 py-3 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-[#626169] backdrop-blur-md">
                    <span>Fig. 02 — Records, desk-side</span>
                    <span className="text-[color:var(--champagne)]">
                      COA · Lot · Handling · Transit
                    </span>
                  </figcaption>
                </div>
              </figure>
            </div>
            <div className="rise" style={{ animationDelay: "100ms" }}>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[#6E1F3F]">
                Documentation-first
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.92] text-[#09090B]">
                Every serious order starts with records.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5d5960]">
                Velour Research prioritizes transparent product information,
                lot-level records, and clear research-use handling language. COAs
                and supporting documentation are organized for fast review before
                purchase.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/coas"
                  className="btn"
                  style={{
                    background: "#09090B",
                    color: "#F6F2EA",
                  }}
                >
                  Browse documentation
                </Link>
                <Link
                  href="/quality"
                  className="btn"
                  style={{
                    border: "1px solid rgba(9,9,11,0.2)",
                    color: "#09090B",
                  }}
                >
                  Read quality standards
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ───── FEATURED CATALOG ───── */}
        <section className="container-editorial py-28">
          <div className="rise">
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div>
                <p className="eyebrow">Featured catalog</p>
                <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.94] text-[color:var(--porcelain)]">
                  Featured catalog materials.
                </h2>
                <p className="mt-4 max-w-2xl text-[color:var(--graphite)]">
                  Selected research-use products with visible lot IDs, purity
                  notes, sizing, and COA access — presented clearly, without
                  consumer outcome claims.
                </p>
              </div>
              <Link href="/shop" className="btn btn-outline">
                View full catalog
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </section>

        {/* ───── RESEARCH NOTES CTA ───── */}
        <section className="border-y border-[color:var(--line-dark)] bg-[#fbf4e7]">
          <div className="container-editorial py-24 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <figure className="relative">
                <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[1.5rem] border border-[color:var(--line-dark)] shadow-[0_28px_70px_-50px_rgba(74,55,33,0.6)]">
                  <Image
                    src="/images/site/bbg70-stone.jpg"
                    alt="BBG70 Velour Research vial on a textured stone tray with a glass flask and a molecular model in the background"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </figure>
              <div>
                <p className="eyebrow">Research notes</p>
                <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.94] text-[color:var(--porcelain)]">
                  Research notes, not marketing claims.
                </h2>
                <p className="mt-5 max-w-xl text-[color:var(--graphite)]">
                  Literature-aware summaries, handling notes, and product
                  documentation written in a careful, research-only voice —
                  useful context, not consumer outcomes.
                </p>
                <div className="mt-8">
                  <Link href="/research" className="btn btn-outline">
                    Read research notes
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
