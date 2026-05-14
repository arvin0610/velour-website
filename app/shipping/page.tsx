import { PageStub } from "@/components/page-stub";

export const metadata = { title: "Shipping — Velour Research" };

export default function ShippingPage() {
  return (
    <PageStub
      eyebrow="Shipping & cold-chain"
      title="Carried with"
      italicTitle="temperature in mind"
      intro="Cold-chain compounds dispatch in insulated mailers with phase-change gel packs validated to keep transit temperature under 12 °C for 48 hours. Each shipment includes a transit log."
      sections={[
        {
          heading: "Domestic transit",
          body: "US domestic orders ship from Indianapolis, IN, typically next business day after order confirmation. Cold-chain orders dispatch Monday through Wednesday only to avoid weekend transit.",
        },
        {
          heading: "International transit",
          body: "Select international destinations available through institutional accounts. Cold-chain freight is coordinated with the carrier to keep transit temperature within spec.",
        },
        {
          heading: "If a parcel arrives outside spec",
          body: "Photograph the transit log and email documentation@velour.research within 24 hours. The desk will replace the lot at no charge.",
        },
      ]}
    />
  );
}
