import { PageStub } from "@/components/page-stub";

export const metadata = {
  title: "Quality standards — Velour Research",
  description:
    "HPLC purity floor, mass-spectrometry confirmation, cold-chain handling, and the documentation we keep for every lot.",
};

export default function QualityPage() {
  return (
    <PageStub
      eyebrow="Documentation · Quality standards"
      title="Every serious order"
      italicTitle="starts with records"
      intro="Velour Research prioritizes transparent product information, lot-level records, and clear research-use handling language. COAs and supporting documentation are organized for fast review before purchase."
      sections={[
        {
          heading: "Analytical standards",
          body: "≥99% HPLC purity floor on peptide records, paired with mass-spectrometry confirmation on each release lot. Reference standards stored in temperature-mapped freezers and audited quarterly. QC paperwork signed and filed against the lot ID.",
          meta: "§ QC · Last revision 2026-04",
        },
        {
          heading: "Cold-chain handling",
          body: "Cold-chain compounds dispatch in insulated mailers with phase-change gel packs validated under 12 °C for 48 hours. Each shipment includes a transit log; if a parcel arrives outside spec, the documentation desk replaces the lot.",
          meta: "§ Logistics",
        },
        {
          heading: "Lot traceability",
          body: "Every catalog entry resolves to a VRL- lot ID, an HPLC certificate, a mass-spec confirmation, and a handling sheet. The documentation library stays online for the life of the record.",
          meta: "§ Traceability",
        },
      ]}
      heroImage={{
        src: "/images/site/scientist-petri.jpg",
        alt: "Velour Research scientist dripping a reconstituted aliquot into a petri dish, lab vial in the foreground",
        caption: "Fig. — Analytical bench, 2026",
        aspect: "aspect-square",
      }}
    />
  );
}
