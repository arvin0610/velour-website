import Link from "next/link";
import { CATEGORIES, type CategoryId } from "@/lib/categories";

export function CategoryFilter({ active }: { active: CategoryId }) {
  return (
    <section className="sticky top-[64px] z-30 border-b border-[color:var(--line-dark)] bg-[#fffaf0]/88 backdrop-blur-xl md:top-[72px]">
      <div className="container-editorial flex items-center gap-2 overflow-x-auto py-4 font-mono text-[0.66rem] uppercase tracking-[0.15em]">
        {CATEGORIES.map((c) => {
          const isActive = c.id === active;
          const href = c.id === "all" ? "/shop" : `/shop?cat=${c.id}`;
          return (
            <Link
              key={c.id}
              href={href}
              scroll={false}
              className={
                isActive
                  ? "shrink-0 rounded-full border px-4 py-2 transition border-[color:var(--champagne)] bg-[color:var(--champagne)] text-[color:var(--velvet)]"
                  : "shrink-0 rounded-full border px-4 py-2 transition border-[color:var(--line-dark)] text-[color:var(--graphite)] hover:border-[color:var(--champagne)] hover:text-[color:var(--champagne)]"
              }
            >
              {c.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
