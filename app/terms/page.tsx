import { PageStub } from "@/components/page-stub";

export const metadata = { title: "Terms — Velour Research" };

export default function TermsPage() {
  return (
    <PageStub
      eyebrow="Legal · Terms"
      title="Terms of"
      italicTitle="research-use sale"
      intro="A plain summary of how purchases work. Full terms apply at checkout."
      sections={[
        {
          heading: "Eligibility",
          body: "Purchases are limited to qualified researchers and research institutions. By placing an order, the buyer affirms qualification and agrees that the materials are for in vitro research use only.",
        },
        {
          heading: "Payment and shipping",
          body: "Prepayment in USD for individual research accounts; Net-30 available on approved institutional accounts. Cold-chain compounds dispatch Monday–Wednesday from Indianapolis, IN.",
        },
        {
          heading: "Returns",
          body: "Research materials are not returnable once dispatched. If a lot arrives outside cold-chain spec, Velour Research replaces the lot at no charge upon notification within 24 hours.",
        },
      ]}
    />
  );
}
