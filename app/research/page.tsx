import { PageStub } from "@/components/page-stub";

export const metadata = {
  title: "Research Notes — Velour Research",
  description:
    "Literature-aware summaries, handling notes, and product documentation written in a careful, research-only voice.",
};

export default function ResearchPage() {
  return (
    <PageStub
      eyebrow="Research notes"
      title="Research notes,"
      italicTitle="not marketing claims"
      intro="Literature-aware summaries, handling notes, and product documentation written in a careful, research-only voice — useful context, not consumer outcomes."
      sections={[
        {
          heading: "How copper coordinates with GHK in dermal models",
          body: "A short tour of why the copper-bound tripeptide is studied separately from its uncomplexed parent, and what the literature is actually measuring across decorin, collagen and antioxidant pathways.",
          meta: "Tissue pathway · 4 min read · 2026-04-18",
        },
        {
          heading: "Reading incretin co-agonist purity claims",
          body: "Tirzepatide and retatrutide certificates often look alike on the page. A practical guide to comparing HPLC traces lot-to-lot, with notes on mass-spec confirmation of the dual- and triple-agonist scaffolds.",
          meta: "Metabolic · 6 min read · 2026-03-29",
        },
        {
          heading: "Why a COA isn't the whole story",
          body: "Certificates of analysis report what was measured at one moment, on one preparation. Handling and chain-of-custody report what happened next. Both belong in the same folder.",
          meta: "Quality · 3 min read · 2026-02-12",
        },
      ]}
      heroImage={{
        src: "/images/site/microscope-helix.jpg",
        alt: "Velour Research scientist at a microscope, with molecular-helix lab fixtures and a Velour vial in the frame",
        caption: "Fig. — Reading the literature, at the bench",
        aspect: "aspect-[5/4]",
      }}
    />
  );
}
