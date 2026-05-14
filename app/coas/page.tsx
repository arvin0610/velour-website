import { PageStub } from "@/components/page-stub";

export const metadata = {
  title: "COA library — Velour Research",
  description:
    "Searchable certificates of analysis indexed by lot ID, SKU, and compound name.",
};

export default function CoasPage() {
  return (
    <PageStub
      eyebrow="Documentation · COA library"
      title="Certificates,"
      italicTitle="indexed by lot"
      intro="Every release lot in the Velour catalog resolves to a signed certificate of analysis with HPLC trace and mass-spectrometry confirmation. The library is searchable by lot ID, SKU, or compound and stays available for the life of the record."
      sections={[
        {
          heading: "Search by lot",
          body: "Lot identifiers begin with VRL- followed by a three-letter compound code and a four-digit lot number (e.g. VRL-BPC-2601). Type the full identifier or any compound prefix to see related records.",
          meta: "§ Index · VRL-prefix",
        },
        {
          heading: "Bulk COA bundles",
          body: "Institutional accounts can request a single sealed PDF bundle containing every COA tied to every lot on a procurement order. Useful for grant compliance, multi-site studies, and audit-ready filing.",
          meta: "§ Institutional · One bundle per PO",
        },
      ]}
      heroImage={{
        src: "/images/site/vials-hplc.jpg",
        alt: "Two Velour Research vials beside a laptop showing an HPLC chromatogram for the same lot",
        caption: "Fig. — Lot dossier, on the desk",
        aspect: "aspect-square",
      }}
    />
  );
}
