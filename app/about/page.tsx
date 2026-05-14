import { PageStub } from "@/components/page-stub";

export const metadata = {
  title: "About — Velour Research",
  description:
    "Velour Research is a documentation-first catalog for qualified purchasers sourcing research-use peptides.",
};

export default function AboutPage() {
  return (
    <PageStub
      eyebrow="About Velour Research"
      title="Research materials,"
      italicTitle="with a person watching the details"
      intro="Velour Research is a documentation-first catalog for qualified purchasers sourcing research-use peptides. We were founded by investigators who wanted sourcing to feel less like a stock-and-flow distributor and more like a working laboratory record."
      sections={[
        {
          heading: "Who we serve",
          body: "Qualified purchasers — university labs, contract research organizations, private research groups, and independent investigators with appropriate institutional context. We do not sell to consumers and do not market materials for any non-research application.",
          meta: "§ Audience · Qualified purchasers only",
        },
        {
          heading: "How we work",
          body: "Every catalog record is a small dossier. Lot ID, HPLC certificate, mass-spectrometry confirmation, handling sheet, transit log. The documentation desk maintains the dossiers and answers questions before an order is placed, not after.",
          meta: "§ Practice · Documentation first",
        },
        {
          heading: "Research-use disclaimer",
          body: "All products sold by Velour Research are intended strictly for laboratory research use by qualified investigators. They are not drugs, foods, dietary supplements, cosmetics, household products, or medical devices, and are not intended for human or animal consumption.",
          meta: "§ Disclaimer · Read in full",
        },
      ]}
      rightRail={[
        { label: "Founded", value: "2024" },
        { label: "Catalog", value: "16 records" },
        { label: "Purity floor", value: "≥99% HPLC" },
        { label: "Maintained by", value: "Documentation desk" },
      ]}
      heroImage={{
        src: "/images/site/pipette-dish.jpg",
        alt: "Pipette delivering a reconstituted sample into a glass petri dish, with a Velour Research vial in soft focus on the bench",
        caption: "Fig. — Reconstitution, Indianapolis bench",
        aspect: "aspect-[5/4]",
      }}
    />
  );
}
