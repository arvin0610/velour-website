export type NavItem = { label: string; href: string };

export const PRIMARY_NAV: NavItem[] = [
  { label: "Catalog", href: "/shop" },
  { label: "Research Notes", href: "/research" },
  { label: "Documentation", href: "/quality" },
  { label: "Institutional", href: "/wholesale" },
  { label: "About", href: "/about" },
];

export const FOOTER_NAV: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Catalog",
    items: [
      { label: "All materials", href: "/shop" },
      { label: "Tissue pathways", href: "/shop?cat=repair" },
      { label: "Growth-hormone research", href: "/shop?cat=gh-axis" },
      { label: "Metabolic pathways", href: "/shop?cat=metabolic" },
      { label: "Aging biology", href: "/shop?cat=longevity" },
    ],
  },
  {
    heading: "Documentation",
    items: [
      { label: "Quality standards", href: "/quality" },
      { label: "COA library", href: "/coas" },
      { label: "Research notes", href: "/research" },
      { label: "About Velour", href: "/about" },
    ],
  },
  {
    heading: "Support",
    items: [
      { label: "Institutional", href: "/wholesale" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Shipping", href: "/shipping" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Research use disclaimer", href: "/disclaimer" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];
