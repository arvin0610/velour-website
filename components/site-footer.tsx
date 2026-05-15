import Link from "next/link";
import Image from "next/image";
import { FOOTER_NAV } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[color:var(--line-dark)] bg-[#f4e8d7]">
      {/* Footer background photo */}
      <Image
        src="/images/site/footer-helix.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Warm cream scrim — heavy enough to keep all the footer text & links legible */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg,rgba(244,232,215,0.88) 0%,rgba(244,232,215,0.78) 35%,rgba(244,232,215,0.82) 100%)",
        }}
      />
      {/* Faint editorial light bloom in the top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 88% 12%,rgba(255,255,255,0.55),transparent 28rem)",
        }}
      />

      <div className="container-editorial relative py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Link
              href="/"
              aria-label="Velour Research - home"
              className="group inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line-dark)] bg-white/70 shadow-[0_10px_30px_-20px_rgba(74,55,33,0.65)] p-1.5">
                <Image
                  src="/brand/velour-research-logo.png"
                  alt=""
                  width={44}
                  height={44}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                />
              </span>
              <span className="font-display text-[1.28rem] leading-none tracking-tight text-[color:var(--porcelain)] md:text-[1.55rem]">
                Velour Research
                <span className="text-[color:var(--champagne)]">.</span>
              </span>
            </Link>
            <p className="mt-7 max-w-md font-display text-[2.4rem] leading-[0.96] tracking-tight text-[color:var(--porcelain)]">
              Research materials, with a person watching the details.
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[color:var(--graphite)]">
              Velour Research keeps sourcing calm: clear lot IDs, searchable
              COA records, RUO guardrails, and support that can help you find
              the right documentation before an order is placed.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-[color:var(--line-dark)] bg-white/48 shadow-[0_24px_70px_-58px_rgba(74,55,33,0.55)] p-7">
            <p className="eyebrow">Careful catalog notes</p>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--graphite)]">
              Occasional documentation updates, new lot notices, and
              research-use catalog notes — written plainly, without consumer
              health claims.
            </p>
            <form className="mt-6 flex max-w-md items-center gap-2 rounded-full border border-[color:var(--line-dark)] bg-white/70 p-1.5 pl-5">
              <input
                type="email"
                placeholder="researcher@institution.edu"
                className="flex-1 bg-transparent text-sm text-[color:var(--porcelain)] placeholder:text-[color:var(--slate)] focus:outline-none"
              />
              <button
                type="submit"
                className="btn btn-primary text-[0.8rem]"
              >
                Keep me posted
              </button>
            </form>
          </div>
        </div>

        <hr className="hairline my-14" />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {FOOTER_NAV.map((group) => (
            <div key={group.heading}>
              <p className="eyebrow">{group.heading}</p>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[color:var(--graphite)] transition-colors hover:text-[color:var(--champagne)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="hairline my-14" />

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <p className="max-w-3xl text-[0.78rem] leading-relaxed text-[color:var(--graphite)]">
            All products sold by Velour Research are intended{" "}
            <span className="text-[color:var(--champagne)]">
              for laboratory research use only
            </span>
            . Not for human or animal consumption. Not for diagnostic,
            therapeutic, cosmetic, food, or supplement use. Products are sold
            to qualified researchers and research institutions. By purchasing,
            the researcher affirms their qualification and agrees to handle all
            materials in accordance with applicable safety and regulatory
            standards.
          </p>
          <p className="font-mono text-[0.7rem] uppercase tracking-wider text-[color:var(--slate)] lg:text-right">
            © {new Date().getFullYear()} Velour Research
            <br />
            Research-use materials
          </p>
        </div>
      </div>
    </footer>
  );
}
