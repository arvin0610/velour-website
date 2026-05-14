import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CategoryFilter } from "@/components/category-filter";
import { ProductCard } from "@/components/product-card";
import { Masthead } from "@/components/masthead";
import { CATEGORIES, type CategoryId } from "@/lib/categories";
import { productsInCategory } from "@/lib/products";

type SearchParams = Promise<{ cat?: string }>;

export const metadata = {
  title: "Catalog — research-use materials · Velour Research",
  description:
    "A structured catalog of research-use materials with sizing, SKU, and lot-documentation fields prepared for qualified procurement review.",
};

function resolveCategory(raw: string | undefined): CategoryId {
  const ids = CATEGORIES.map((c) => c.id);
  if (raw && (ids as string[]).includes(raw)) return raw as CategoryId;
  return "all";
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const active = resolveCategory(params.cat);
  const products = productsInCategory(active);

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[color:var(--line-dark)]">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 20% 15%,rgba(216,195,165,0.12),transparent 26rem),radial-gradient(circle at 78% 0%,rgba(110,31,63,0.28),transparent 28rem)",
            }}
          />
          <div className="container-editorial relative pt-12">
            <Masthead />
          </div>
          <div className="container-editorial relative pt-8 pb-20 lg:pb-24">
            <div className="rise">
              <p className="eyebrow">Catalog navigator</p>
              <div className="mt-6 grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-8">
                  <h1 className="font-display text-[clamp(3rem,9vw,6.8rem)] leading-[0.86] tracking-[-0.06em] text-[color:var(--porcelain)]">
                    All materials
                    <span className="text-[color:var(--champagne)]">.</span>
                  </h1>
                  <p className="mt-7 max-w-lg text-[color:var(--graphite)]">
                    A structured catalog of research-use materials with sizing,
                    SKU, and lot-documentation fields prepared for qualified
                    procurement review.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 font-mono text-[0.58rem] uppercase tracking-[0.13em] text-[color:var(--graphite)]">
                    {[
                      "Lot IDs visible",
                      "COA records linked",
                      "RUO checkout",
                      "Cold-chain handling",
                    ].map((b) => (
                      <span
                        key={b}
                        className="rounded-full border border-[color:var(--line-dark)] bg-white/58 px-3 py-1.5"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <figure className="lg:col-span-4">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] border border-[color:var(--line-dark)] shadow-[0_28px_70px_-50px_rgba(74,55,33,0.6)]">
                    <Image
                      src="/images/site/lab-architectural.jpg"
                      alt="Sunlit Velour Research lab in Indianapolis with a sculptural ceiling installation, a scientist at a microscope on the right, and a figure at the doorway on the left"
                      fill
                      priority
                      sizes="(min-width: 1024px) 28vw, 100vw"
                      className="object-cover"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-[color:var(--porcelain)]/40 px-3 py-1.5 font-mono text-[0.56rem] uppercase tracking-[0.18em] text-white backdrop-blur-md">
                      Catalog · 16 records
                    </span>
                  </div>
                  <figcaption className="mt-4 flex items-center gap-3 font-mono text-[0.58rem] uppercase tracking-[0.22em] text-[color:var(--graphite)]">
                    <span aria-hidden className="h-px w-6 bg-[color:var(--rule-strong,_#b8af97)]" />
                    Fig. — Working catalogue, lot-side
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <CategoryFilter active={active} />

        <section className="container-editorial py-20">
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>

          {/* End-of-catalogue colophon */}
          <div className="mt-20 flex flex-wrap items-center gap-6">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[color:var(--graphite)] whitespace-nowrap">
              End of records · {products.length} {products.length === 1 ? "specimen" : "specimens"}
            </span>
            <span aria-hidden className="h-px flex-1 bg-[color:var(--line-soft)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[color:var(--champagne)]">
              Sealed by the documentation desk
            </span>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
