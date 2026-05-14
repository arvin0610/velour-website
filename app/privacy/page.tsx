import { PageStub } from "@/components/page-stub";

export const metadata = { title: "Privacy — Velour Research" };

export default function PrivacyPage() {
  return (
    <PageStub
      eyebrow="Legal · Privacy"
      title="Records kept,"
      italicTitle="carefully"
      intro="A short description of how Velour Research handles account data. The full policy applies at checkout."
      sections={[
        {
          heading: "What we collect",
          body: "Researcher name, institution, billing and shipping address, email, and order history. We collect this to fulfill orders, maintain lot traceability, and meet research-use compliance obligations.",
        },
        {
          heading: "How we use it",
          body: "Order fulfillment, COA delivery, lot recall notices, and occasional documentation updates if the researcher opts in. We do not sell or share customer lists with third parties.",
        },
        {
          heading: "Retention",
          body: "Order and lot records are retained for the life of the documentation library to support traceability. Email subscriptions can be cancelled at any time.",
        },
      ]}
    />
  );
}
