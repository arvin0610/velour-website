import { PageStub } from "@/components/page-stub";

export const metadata = {
  title: "Institutional procurement — Velour Research",
  description:
    "Lot reservations, COA bundles, cold-chain logistics, and Net-30 terms for academic groups, contract research organizations, and qualified private labs.",
};

export default function InstitutionalPage() {
  return (
    <PageStub
      eyebrow="Institutional procurement"
      title="Built for labs,"
      italicTitle="not for stock-and-flow"
      intro="Velour Research works with academic groups, contract research organizations, and qualified private labs on lot reservations, COA bundles, and cold-chain logistics. We don't move material faster than its paperwork can follow."
      sections={[
        {
          heading: "Lot reservation",
          body: "Reserve a specific lot of a research material against a current or future order. Reservations hold the lot for sixty days against a signed reservation memo, with COA and handling sheet bundled to the institutional account on dispatch.",
          meta: "§ Reservation · 60-day hold",
        },
        {
          heading: "COA bundles",
          body: "Submit a procurement order, receive every COA tied to every lot in a single sealed PDF bundle. Useful for grant compliance, multi-site studies, and audit-ready filing.",
          meta: "§ Bundle · One per PO",
        },
        {
          heading: "Net-30 terms",
          body: "Approved institutional accounts qualify for Net-30 invoicing. Onboarding asks for a current research-use attestation, an authorized signatory, and a billing contact.",
          meta: "§ Terms · Net-30 on approved accounts",
        },
      ]}
      rightRail={[
        { label: "Account type", value: "Institutional" },
        { label: "Onboarding", value: "≈ 3 business days" },
        { label: "Reservation", value: "60-day lot hold" },
        { label: "Terms", value: "Net-30 available" },
      ]}
      heroImage={{
        src: "/images/site/vials-counter.jpg",
        alt: "Two Velour Research vials on a clean stainless counter beside a syringe and folded linen",
        caption: "Fig. — Procurement-ready, signed lots",
        aspect: "aspect-square",
      }}
    />
  );
}
