import { PageStub } from "@/components/page-stub";

export const metadata = { title: "FAQ — Velour Research" };

export default function FaqPage() {
  return (
    <PageStub
      eyebrow="Frequently asked"
      title="Plain answers,"
      italicTitle="written carefully"
      intro="Common questions about handling, reconstitution, lot reservation, and the boundaries of research-use language."
      sections={[
        {
          heading: "Who can purchase from Velour Research?",
          body: "Qualified researchers and research institutions only. By placing an order the researcher affirms qualification and agrees to handle all materials per applicable safety and regulatory standards. We do not sell to consumers.",
        },
        {
          heading: "Are these materials for human use?",
          body: "No. All products are intended strictly for laboratory research use. They are not drugs, foods, supplements, cosmetics, or medical devices, and are not intended for human or animal consumption.",
        },
        {
          heading: "How are lots shipped?",
          body: "Cold-chain compounds ship in insulated mailers with phase-change gel packs, signature-on-receipt. Ambient compounds ship standard ground or expedited per the order.",
        },
        {
          heading: "Do you offer institutional terms?",
          body: "Yes. Net-30 is available on approved institutional accounts. Onboarding takes about three business days.",
        },
      ]}
    />
  );
}
