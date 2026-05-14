export type CategoryId =
  | "all"
  | "repair"
  | "gh-axis"
  | "metabolic"
  | "longevity"
  | "sexual";

export type Category = {
  id: CategoryId;
  label: string;
  shortLabel: string;
  blurb: string;
};

export const CATEGORIES: Category[] = [
  {
    id: "all",
    label: "All",
    shortLabel: "All",
    blurb: "Complete catalog across every research context.",
  },
  {
    id: "repair",
    label: "Tissue pathway research",
    shortLabel: "Tissue pathway research",
    blurb:
      "Materials commonly discussed in cell migration, matrix biology, angiogenesis, and connective-tissue pathway literature.",
  },
  {
    id: "gh-axis",
    label: "Growth-hormone research",
    shortLabel: "Growth-hormone research",
    blurb:
      "GHRH analogs and ghrelin mimetics used to investigate pulsatile growth hormone release in research settings.",
  },
  {
    id: "metabolic",
    label: "Metabolic pathway research",
    shortLabel: "Metabolic",
    blurb:
      "Incretin analogs and mitochondrial-derived materials used in metabolic pathway and receptor-model literature.",
  },
  {
    id: "longevity",
    label: "Aging biology research",
    shortLabel: "Aging biology research",
    blurb:
      "Short-peptide bioregulators and cellular-aging research tools from the published literature.",
  },
  {
    id: "sexual",
    label: "Melanocortin research",
    shortLabel: "Melanocortin research",
    blurb:
      "Melanocortin receptor research tools studied across central signaling literature.",
  },
];

export function getCategory(id: CategoryId): Category {
  return CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[0];
}
