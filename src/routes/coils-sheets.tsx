import { createFileRoute } from "@tanstack/react-router";
import giImg from "@/assets/gi-coils.jpg";
import ppgiImg from "@/assets/ppgi.jpg";
import crcImg from "@/assets/crc.jpg";
import aluImg from "@/assets/aluminium.jpg";
import { Marquee } from "@/components/site/Marquee";
import { Reveal } from "@/components/site/Reveal";
import {
  PageHero,
  SectionHeading,
  SpecCard,
  CTABand,
} from "@/components/site/Bits";

export const Route = createFileRoute("/coils-sheets")({
  head: () => ({
    meta: [
      { title: "GI, PPGI, CRC, Aluminium & Stainless Coils & Sheets | Spectrum" },
      {
        name: "description",
        content:
          "Trusted supplier of GI, PPGI, CRC, aluminium and stainless steel coils and sheets across the UAE — full sizes, standards and steel grades from 0.28mm to 4.00mm.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Coils & Sheets — Spectrum Corporation FZ LLC" },
      {
        property: "og:description",
        content:
          "GI, PPGI, CRC, aluminium and stainless steel coils and sheets to ASTM, JIS, EN, DIN and GB/T standards.",
      },
    ],
  }),
  component: CoilsSheets,
});

const products = [
  {
    code: "01 / Galvanized",
    title: "GI Coils & Sheets",
    subtitle: "Zero, Regular & Minimum Spangle",
    image: giImg,
    imageAlt: "Galvanized steel coils stacked in a warehouse",
    features: [
      "Superior zinc coating for enhanced corrosion resistance",
      "Smooth surface finish and consistent thickness",
      "Available in multiple grades, sizes and specifications",
      "Excellent durability, including demanding coastal environments",
    ],
    rows: [
      { label: "Size", value: "0.30 mm – 4.00 mm" },
      {
        label: "Standard",
        value: "ASTM A653(M), JIS G3302, EN1348, EN10326, EN10327, DIN17162",
      },
      {
        label: "Steel Grade",
        value:
          "SGCC, SGCD1, SGC340, SGC570, A36, CS(A,B,C), FS(A,B), Grade 33-80, ST012 – ST052",
      },
    ],
  },
  {
    code: "02 / Pre-Painted",
    title: "PPGI Coils & Sheets",
    subtitle: "Pre-painted galvanized steel for finished surfaces",
    image: ppgiImg,
    imageAlt: "Stacks of colour-coated PPGI steel coils",
    features: [
      "Roofing & Cladding",
      "Sandwich Panels",
      "Decorative & Industrial Structures",
      "Commercial Buildings",
    ],
    rows: [
      { label: "Size", value: "Thickness 0.28 – 1.5 mm" },
      { label: "Standard", value: "JIS G3312, ASTM A653M, EN10327, GB/T12754" },
      {
        label: "Steel Grade",
        value: "CGCC, CS(A,B,C), DX51D, 5250-550GD, CGICC",
      },
    ],
  },
  {
    code: "03 / Cold Rolled",
    title: "CRC Coils & Sheets",
    subtitle: "Cold rolled coils and cut lengths",
    image: crcImg,
    imageAlt: "Cold rolled steel coils with a smooth bright finish",
    features: [
      "Smooth and clean surface finish",
      "Tight dimensional tolerance",
      "High tensile strength",
      "Available in coils and cut lengths",
    ],
    rows: [
      { label: "Size", value: "0.30 mm – 3.00 mm" },
      {
        label: "Standard",
        value: "ASTM A653(M), JIS G3302, EN1348, EN10326, EN10327, DIN17162",
      },
      {
        label: "Steel Grade",
        value:
          "SGCC, SGCD1, SGC340, SGC570, A36, CS(A,B,C), FS(A,B), Grade 33-80, ST012 – ST052",
      },
    ],
  },
  {
    code: "04 / Non-Ferrous & Stainless",
    title: "Aluminium & Stainless Steel Coils & Sheets",
    subtitle: "Lightweight. Durable. Built to Last.",
    image: aluImg,
    imageAlt: "Aluminium and stainless steel sheets with brushed finish",
    features: [
      "Excellent corrosion and temperature resistance",
      "Smooth, brushed, matte and mirror finishes available",
      "Various thicknesses, grades and dimensions",
      "Lightweight yet strong and durable",
      "Ideal for decorative, architectural and heavy-duty applications",
    ],
    rows: [
      { label: "Size", value: "Thickness 0.28 – 1.5 mm" },
      { label: "Standard", value: "JIS G3312, ASTM A653M, EN10327, GB/T12754" },
      {
        label: "Steel Grade",
        value: "CGCC, CS(A,B,C), DX51D, 5250-550GD, CGICC",
      },
    ],
  },
];

function CoilsSheets() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Coils & Sheets"
        index="01 — Coils & Sheets"
        title="Steel that shapes progress."
        intro="A trusted supplier of GI, PPGI, CRC, Aluminium & Stainless Steel Coils and Sheets across the UAE and beyond."
        image={giImg}
        imageAlt="Galvanized steel coils in a stockyard"
      />

      <Marquee
        items={[
          "GI Coils & Sheets",
          "PPGI Coils & Sheets",
          "CRC Coils & Sheets",
          "Aluminium Coils & Sheets",
          "Stainless Steel Coils & Sheets",
        ]}
      />

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <SectionHeading
          eyebrow="Product Range"
          title="Every coil and sheet, with its full specification."
          intro="Sizes, standards and steel grades exactly as supplied — in coils or cut sheets, from stock or sourced to project requirement."
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {products.map((p, i) => (
            <SpecCard key={p.title} {...p} delay={i * 80} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-medium md:text-4xl">Our Core Products</h2>
            <p className="label-mono">Coils &amp; Sheets Division</p>
          </div>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              "GI Coils & Sheets",
              "PPGI Coils & Sheets",
              "CRC Coils & Sheets",
              "Aluminium & Stainless Steel Coils & Sheets",
            ].map((k, i) => (
              <Reveal key={k} delay={i * 80} className="bg-background p-7">
                <p className="label-mono text-primary">0{i + 1}</p>
                <p className="mt-3 font-display text-xl leading-snug">{k}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Ready to Order"
        title="Send grade, thickness, width and tonnage."
        body="Our desk will confirm availability, pricing and lead time for your coil and sheet requirement."
        primary={{ to: "/contact", label: "Request a Quote" }}
        secondary={{ to: "/construction", label: "Structural Steel Range" }}
      />
    </>
  );
}
