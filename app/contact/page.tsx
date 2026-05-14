import { PageStub } from "@/components/page-stub";

export const metadata = { title: "Contact — Velour Research" };

export default function ContactPage() {
  return (
    <PageStub
      eyebrow="Contact"
      title="Speak with"
      italicTitle="the documentation desk"
      intro="The desk replies within 24 hours on business days. Replies are written in plain language, without consumer health claims."
      sections={[
        {
          heading: "Catalog questions & COA requests",
          body: "Email documentation@velour.research with the lot ID or product slug. We can answer questions about purity, handling, lot history, or anything in the COA library.",
          meta: "documentation@velour.research",
        },
        {
          heading: "Institutional procurement",
          body: "For lot reservations, COA bundles, or Net-30 onboarding, email institutional@velour.research with your institution and the materials of interest.",
          meta: "institutional@velour.research",
        },
      ]}
    />
  );
}
