import { PageStub } from "@/components/page-stub";

export const metadata = { title: "Research-use disclaimer — Velour Research" };

export default function DisclaimerPage() {
  return (
    <PageStub
      eyebrow="Legal · Research-use disclaimer"
      title="For laboratory"
      italicTitle="research use only"
      intro="All products sold by Velour Research are intended strictly for laboratory research use by qualified investigators. The following terms apply to every order."
      sections={[
        {
          heading: "Scope of use",
          body: "Products are not drugs, foods, dietary supplements, cosmetics, household products, or medical devices. They are not intended for diagnostic, therapeutic, cosmetic, or any in-vivo human or animal use.",
        },
        {
          heading: "Qualified purchasers",
          body: "Products are sold to qualified researchers and research institutions. By purchasing, the researcher affirms qualification and agrees to handle all materials in accordance with applicable safety and regulatory standards.",
        },
        {
          heading: "No representation outside research use",
          body: "Velour Research makes no representation, warranty, or recommendation regarding any non-research application of any catalog material.",
        },
      ]}
    />
  );
}
