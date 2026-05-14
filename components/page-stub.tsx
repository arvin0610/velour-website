import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

type Section = { heading: string; body: string; meta?: string };

type HeroImage = {
  src: string;
  alt: string;
  caption?: string;
  /** Aspect ratio for the image frame — Tailwind class. Default: aspect-[4/5] */
  aspect?: string;
};

type Props = {
  eyebrow: string;
  title: string;
  italicTitle?: string;
  intro: string;
  sections: Section[];
  rightRail?: { label: string; value: string }[];
  heroImage?: HeroImage;
};

export function PageStub({
  eyebrow,
  title,
  italicTitle,
  intro,
  sections,
  rightRail,
  heroImage,
}: Props) {
  const hasImage = Boolean(heroImage);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-[color:var(--line-dark)] bg-[linear-gradient(180deg,#fffaf0_0%,#f8efe0_58%,#fffaf4_100%)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 12% 8%,rgba(255,255,255,0.96),transparent 24rem),radial-gradient(circle at 78% 14%,rgba(169,128,61,0.15),transparent 30rem)",
            }}
          />
          <div className="container-editorial relative py-20 lg:py-28">
            <div
              className={
                hasImage
                  ? "grid items-center gap-12 lg:grid-cols-12 lg:gap-16"
                  : ""
              }
            >
              <div className={hasImage ? "lg:col-span-7" : ""}>
                <p className="eyebrow">{eyebrow}</p>
                <h1
                  className={`mt-6 font-display font-light leading-[0.92] tracking-[-0.05em] text-[color:var(--porcelain)] ${
                    hasImage
                      ? "text-[clamp(2.5rem,6vw,5rem)]"
                      : "max-w-5xl text-[clamp(3rem,9vw,6.8rem)]"
                  }`}
                >
                  {title}
                  {italicTitle && (
                    <>
                      <br />
                      <span className="italic text-[#8f6b34]">{italicTitle}</span>
                    </>
                  )}
                  <span className="text-[color:var(--champagne)]">.</span>
                </h1>
                <p className="mt-7 max-w-xl text-[1.02rem] leading-7 text-[color:var(--graphite)] sm:text-lg sm:leading-8">
                  {intro}
                </p>
              </div>

              {heroImage && (
                <figure className="lg:col-span-5">
                  <div
                    className={`relative w-full overflow-hidden rounded-[1.5rem] border border-[color:var(--line-dark)] shadow-[0_36px_90px_-58px_rgba(74,55,33,0.55)] ${
                      heroImage.aspect ?? "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={heroImage.src}
                      alt={heroImage.alt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-[color:var(--porcelain)]/40 px-3 py-1.5 font-mono text-[0.56rem] uppercase tracking-[0.18em] text-white backdrop-blur-md">
                      Velour Lab · Indianapolis
                    </span>
                  </div>
                  {heroImage.caption && (
                    <figcaption className="mt-4 flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[color:var(--graphite)]">
                      <span aria-hidden className="h-px w-6 bg-[color:var(--rule-strong,_#b8af97)]" />
                      <span>{heroImage.caption}</span>
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          </div>
        </section>

        <section className="container-editorial py-24">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.4fr]">
            <div className="space-y-12">
              {sections.map((s, i) => (
                <article
                  key={s.heading}
                  className="border-t border-[color:var(--line-dark)] pt-10"
                >
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[color:var(--champagne)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-tight text-[color:var(--porcelain)]">
                    {s.heading}
                  </h2>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[color:var(--graphite)]">
                    {s.body}
                  </p>
                  {s.meta && (
                    <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[color:var(--slate)]">
                      {s.meta}
                    </p>
                  )}
                </article>
              ))}
            </div>

            <aside>
              <div className="sticky top-28 rounded-[1.5rem] border border-[color:var(--line-dark)] bg-white/48 p-7 shadow-[0_24px_70px_-58px_rgba(74,55,33,0.55)]">
                <p className="eyebrow">At a glance</p>
                <dl className="mt-5 space-y-4">
                  {(rightRail ?? defaultRail).map((r) => (
                    <div
                      key={r.label}
                      className="flex items-baseline justify-between gap-4 border-b border-dashed border-[color:var(--line-dark)] pb-3 last:border-0 last:pb-0"
                    >
                      <dt className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[color:var(--graphite)]">
                        {r.label}
                      </dt>
                      <dd className="text-right text-sm text-[color:var(--porcelain)]">
                        {r.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="/shop"
                  className="mt-6 inline-flex items-center gap-1 font-mono text-[0.66rem] uppercase tracking-wider text-[color:var(--champagne)]"
                >
                  Back to catalog
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

const defaultRail = [
  { label: "Status", value: "Living document" },
  { label: "Audience", value: "Qualified purchasers" },
  { label: "Updated", value: "2026-05" },
  { label: "Maintainer", value: "Documentation desk" },
];
