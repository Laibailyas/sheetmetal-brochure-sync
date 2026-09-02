import { createFileRoute } from "@tanstack/react-router";
import channelsImg from "@/assets/channels.jpg";
import anglesImg from "@/assets/angles.jpg";
import unequalAnglesImg from "@/assets/unequal-angles.jpg";
import pipesImg from "@/assets/pipes.jpg";
import erwImg from "@/assets/erw-seamless.jpg";
import galvPipeImg from "@/assets/galvanized-pipe.jpg";
import tubesImg from "@/assets/tubes.jpg";
import barsImg from "@/assets/bars.jpg";
import roundBarsImg from "@/assets/round-bars.jpg";
import squareBarsImg from "@/assets/square-bars.jpg";
import rebarImg from "@/assets/rebar.jpg";
import brightBarsImg from "@/assets/bright-bars.jpg";
import shaftingBarsImg from "@/assets/shafting-bars.jpg";
import beamsImg from "@/assets/beams.jpg";
import structuralImg from "@/assets/structural.jpg";
import gratingsImg from "@/assets/gratings.jpg";
import expandedMeshImg from "@/assets/expanded-mesh.jpg";
import { Marquee } from "@/components/site/Marquee";
import {
  PageHero,
  CategoryBand,
  SpecCard,
  ImageTile,
  CTABand,
} from "@/components/site/Bits";

export const Route = createFileRoute("/construction")({
  head: () => ({
    meta: [
      {
        title: "Structural Steel & Construction Materials — Angles, Pipes, Bars | Spectrum",
      },
      {
        name: "description",
        content:
          "MS & GI angles, channels, structural and seamless pipes, square and rectangular tubes, flat, round, square and deformed bars, universal beams, gratings and expanded mesh supplied across the UAE.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:title",
        content: "Structural Steel & Construction Materials — Spectrum",
      },
      {
        property: "og:description",
        content:
          "Angles, channels, pipes, tubes, bars, beams, gratings and mesh with full sizes, standards and steel grades.",
      },
    ],
  }),
  component: Construction,
});

const anglesChannels = [
  {
    code: "SC - 001",
    title: "Steel Channels",
    image: channelsImg,
    imageAlt: "Stacks of steel channels in a warehouse",
    rows: [
      {
        label: "Size",
        value: "JIS Channels: 75x40 – 380x100 · UPN 40 – UPN 400 · PFC 100x50 – 430x100",
      },
      {
        label: "Standard",
        value: "GB/T 706:2008, JIS G3192:2006, EN10279:2000, UNE-EN10025:1994",
      },
      {
        label: "Steel Grade",
        value: "Q235B, Q345B, SS400, S235JR/ST37-2, S355JR/ST52-3",
      },
    ],
  },
  {
    code: "SA - 002",
    title: "Steel Angles",
    image: anglesImg,
    imageAlt: "Bundles of equal steel angle bars",
    rows: [
      { label: "Size", value: "20mm x 20mm – 250mm x 250mm" },
      { label: "Standard", value: "GB/T 9787/88, JIS G 3192-2006, EN 10056" },
      {
        label: "Steel Grade",
        value: "Q235B, Q345B, SS400, SS490, S235JR/ST37-2, S355JR/ST52-3",
      },
    ],
  },
  {
    code: "SA - 003",
    title: "Steel Unequal Angles",
    image: unequalAnglesImg,
    imageAlt: "Stacks of steel unequal angle profiles",
    rows: [
      { label: "Size", value: "65mm x 50mm – 200mm x 150mm" },
      { label: "Standard", value: "GB/T 9787/88, JIS G 3192-2006, EN 10056" },
      {
        label: "Steel Grade",
        value: "Q235B, Q345B, SS400, SS490, S235JR/ST37-2, S355JR/ST52-3",
      },
    ],
  },
];

const pipesTubes = [
  {
    code: "PT - 001",
    title: "Structural Steel Pipes",
    image: pipesImg,
    imageAlt: "Stacked structural steel pipes in a warehouse",
    rows: [
      { label: "Size", value: "OD 21.3mm – 609.6mm" },
      { label: "Standard", value: "ASTM A500, GB/T 3091" },
      { label: "Steel Grade", value: "GR-A, GR-B, Q195, Q235, Q345, Q420, Q460" },
    ],
  },
  {
    code: "PT - 002",
    title: "ERW & Seamless Pipes",
    image: erwImg,
    imageAlt: "Bundles of ERW and seamless carbon steel pipes",
    rows: [
      { label: "Size", value: '½" NB – 16" NB' },
      { label: "Standard", value: "API 5L, GB/T 9711" },
      {
        label: "Steel Grade",
        value:
          "ASTM A-53, A-135, A-500, A-513, A-523, A-847, A-984, API 5L, IS-1161, 1239, 1978, 3589, BS-1387, BS-1339 & DIN",
      },
    ],
  },
  {
    code: "PT - 003",
    title: "Galvanized Pipe",
    image: galvPipeImg,
    imageAlt: "Stack of galvanized steel pipes with zinc finish",
    rows: [
      { label: "Size", value: "OD 21.3mm – 609.6mm" },
      { label: "Standard", value: "IS 1239, BS 1387, ASTM A53" },
      { label: "Steel Grade", value: "GR-A, GR-B, Q195, Q235, Q345, Q420, Q460" },
    ],
  },
  {
    code: "PT - 004",
    title: "Square & Rectangular Tubes",
    image: tubesImg,
    imageAlt: "Galvanized square and rectangular hollow section tubes",
    rows: [
      { label: "Size", value: "SHS 12X12 – 250X250 · RHS 40X20 – 250X100" },
      { label: "Standard", value: "JIS G3466, S355 J2H EN 10025" },
      { label: "Steel Grade", value: "GR-A, GR-B, Q195, Q235, Q345, Q420, Q460" },
    ],
  },
];

const bars = [
  {
    code: "BR - 001",
    title: "Flat Bars",
    image: barsImg,
    imageAlt: "Bundles of steel flat bars in a stockyard",
    rows: [
      { label: "Size", value: "12X3 – 200X10" },
      { label: "Standard", value: "DIN EN 10058:2004" },
      { label: "Steel Grade", value: "EN10025 S275 JR / ASTM A36" },
    ],
  },
  {
    code: "BR - 002",
    title: "Round Bars",
    image: roundBarsImg,
    imageAlt: "Bundle of solid steel round bars",
    rows: [
      { label: "Size", value: "4mm – 100mm" },
      { label: "Standard", value: "DIN EN 10060:2004" },
      { label: "Steel Grade", value: "EN10025-1:2004 S275 JR / ASTM A36" },
    ],
  },
  {
    code: "BR - 003",
    title: "Square Bars",
    image: squareBarsImg,
    imageAlt: "Bundle of solid steel square bars",
    rows: [
      { label: "Size", value: "12x12 – 100x100" },
      { label: "Standard", value: "DIN EN 10059:2004" },
      { label: "Steel Grade", value: "EN10025:2004 S275 JR / ASTM A36" },
    ],
  },
  {
    code: "BR - 004",
    title: "Deformed Bars",
    image: rebarImg,
    imageAlt: "Bundles of deformed reinforcement bar",
    rows: [
      { label: "Size", value: "6mm – 36mm" },
      { label: "Standard", value: "BS4449/1997, 2005" },
      { label: "Steel Grade", value: "460B" },
    ],
  },
  {
    code: "BR - 005",
    title: "Prime Bright Bars",
    image: brightBarsImg,
    imageAlt: "Polished prime bright steel bars in a rack",
    rows: [
      { label: "Finish", value: "Cold drawn, ground & polished bright finish" },
      { label: "Sections", value: "Round, square & hexagonal" },
      { label: "Steel Grade", value: "EN1A, EN8, EN19, S275 JR / ASTM A36 equivalents" },
    ],
  },
  {
    code: "BR - 006",
    title: "Non-Alloy Shafting Bars",
    image: shaftingBarsImg,
    imageAlt: "Machined non-alloy steel shafting bars",
    rows: [
      { label: "Type", value: "Non-alloy carbon steel shafting" },
      { label: "Finish", value: "Machined, turned & smooth cylindrical surface" },
      { label: "Application", value: "Shafts, pins, machined components & general engineering" },
    ],
  },
];

const beams = [
  { title: "Universal Beams (UB)", image: beamUbImg },
  { title: "Universal Columns (UC)", image: beamUcImg },
  { title: "Universal Bearing Piles", image: beamPileImg },
  { title: "American Wide Flange Beams (W-Section)", image: beamWImg },
  { title: "European Flange Beams (HE-Section)", image: beamHeImg },
  { title: "European I Beams (IPE-Section)", image: beamIpeImg },
  { title: "European I Beams (IPN-Section)", image: beamIpnImg },
  { title: "Japanese Wide Flange Beams", image: beamJisImg },
];

const gratingsMesh = [
  {
    code: "GM - 001",
    title: "GI Gratings",
    image: gratingsImg,
    imageAlt: "Galvanized steel bar gratings stacked in a warehouse",
    rows: [
      { label: "Size", value: "905mm x 6000mm · Thickness 25x3 – 50x6" },
      { label: "Standard", value: "Available as per request" },
      { label: "Steel Grade", value: "Commercial" },
    ],
  },
  {
    code: "GM - 002",
    title: "Expanded Mesh",
    image: expandedMeshImg,
    imageAlt: "Stacked sheets of galvanized expanded metal mesh",
    rows: [
      { label: "Size", value: "1219mm x 2438mm · Thickness 1.8mm – 10mm" },
      { label: "Standard", value: "JIS" },
      { label: "Steel Grade", value: "JIS G3351" },
    ],
  },
];

function Construction() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Structural Steel & Construction Materials"
        index="02 — Structural & Construction"
        title="Structural steel & construction materials."
        intro="MS & GI angles and channels, pipes and tubes, bars, beams, gratings and mesh — supplied with full sizes, international standards and steel grades for construction, fabrication and industrial projects."
        image={channelsImg}
        imageAlt="Steel channels stacked in a bright warehouse"
      />

      <Marquee
        items={[
          "Steel Channels",
          "Steel Angles",
          "Unequal Angles",
          "Structural Pipes",
          "ERW & Seamless",
          "Galvanized Pipe",
          "SHS & RHS Tubes",
          "Flat / Round / Square Bars",
          "Deformed Bars",
          "Universal Beams",
          "GI Gratings",
          "Expanded Mesh",
        ]}
      />

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
        <CategoryBand
          index="A / MS & GI Angles & Channels"
          title="Angles & Channels"
          intro="Hot rolled channels, equal angles and unequal angles in mild steel and galvanized iron."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {anglesChannels.map((p, i) => (
            <SpecCard key={p.title} {...p} delay={i * 80} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
          <CategoryBand
            index="B / Pipes & Tubes"
            title="Pipes & Tubes"
            intro="Structural, ERW, seamless and galvanized pipes plus square and rectangular hollow sections."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {pipesTubes.map((p, i) => (
              <SpecCard key={p.title} {...p} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
        <CategoryBand
          index="C / Bars"
          title="Bars"
          intro="Flat, round, square and deformed bars — plus prime bright bars and non-alloy shafting bars."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {bars.map((p, i) => (
            <SpecCard key={p.title} {...p} delay={i * 80} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border">
        <img
          src={structuralImg}
          alt="Structural steel beams stacked in a yard"
          loading="lazy"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
          <CategoryBand
            index="D / Steel Beams"
            title="Steel Beams"
            intro="Full range of universal, wide flange and I-section beams and columns."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {beams.map((b, i) => (
              <ImageTile
                key={b}
                delay={i * 60}
                image={i % 2 === 0 ? beamsImg : structuralImg}
                imageAlt={`${b} steel sections stacked in a stockyard`}
                kicker={String(i + 1).padStart(2, "0")}
                title={b}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
        <CategoryBand
          index="E / Gratings & Mesh"
          title="Gratings & Mesh"
          intro="GI gratings and expanded mesh for walkways, platforms, drainage covers and fabrication."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {gratingsMesh.map((p, i) => (
            <SpecCard key={p.title} {...p} delay={i * 80} />
          ))}
        </div>
      </section>

      <CTABand
        eyebrow="Ready to Order"
        title="Send your sizes, grades and quantities."
        body="Share your bill of quantities or item list and our team will return availability, pricing and delivery schedule."
        primary={{ to: "/contact", label: "Request a Quote" }}
        secondary={{ to: "/marine", label: "Marine & Industrial Range" }}
      />
    </>
  );
}
