import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, ShoppingBag } from "lucide-react";
import { PRIMARY_NAV } from "@/lib/nav";

export function SiteHeader() {
  return (
    <>
      {/* RUO bar */}
      <div className="w-full border-b border-[color:var(--line-dark)] bg-[#efe0c9]/80 text-[#6f4f22]">
        <div className="container-editorial flex items-center justify-center gap-3 py-2 text-[0.68rem] tracking-wide">
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--clinical)]"
          />
          <p className="font-mono uppercase">
            Research use only · Qualified purchasers only
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-40 w-full border-b border-[color:var(--line-dark)] bg-[#fffaf0]/92 shadow-[0_16px_50px_-42px_rgba(74,55,33,0.45)] backdrop-blur-xl">
        <div className="container-editorial flex h-[64px] items-center justify-between gap-4 md:h-[76px] md:gap-6">
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

          <nav className="hidden items-center gap-7 rounded-full border border-[color:var(--line-soft)] bg-white/42 px-5 py-2.5 shadow-[0_12px_45px_-40px_rgba(74,55,33,0.7)] md:flex">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-[0.875rem] text-[color:var(--porcelain)]/76 transition-colors hover:text-[color:var(--champagne)]"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px bg-[color:var(--champagne)] transition-all duration-500 w-0 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-2">
            <Link
              href="/shop"
              className="btn btn-primary hidden px-5 py-2.5 text-[0.8rem] md:inline-flex"
            >
              Shop catalog
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <button
              type="button"
              aria-label="Research cart"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-[color:var(--porcelain)] transition hover:border-[color:var(--line-soft)] hover:bg-white/58 hover:text-[color:var(--champagne)]"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
            </button>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded="false"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-[color:var(--porcelain)] transition hover:bg-[color:var(--champagne)]/10 hover:text-[color:var(--champagne)] md:hidden"
            >
              <Menu className="h-[20px] w-[20px]" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
