import { createFileRoute } from "@tanstack/react-router";
import portImg from "@/assets/port.jpg";
import valvesImg from "@/assets/valves.jpg";
import flangesImg from "@/assets/flanges.jpg";
import cablesImg from "@/assets/marine-cables.jpg";
import lightingImg from "@/assets/marine-lighting.jpg";
import hardwareImg from "@/assets/hardware-mro.jpg";
import chequeredImg from "@/assets/chequered.jpg";
import controlValvesImg from "@/assets/control-valves.jpg";
import asepticValveImg from "@/assets/aseptic-valve.jpg";
import trunionValveImg from "@/assets/trunion-valve.jpg";
import gateValveImg from "@/assets/gate-valve.jpg";
import globeValveImg from "@/assets/globe-valve.jpg";
import checkValveImg from "@/assets/check-valve.jpg";
import butterflyValveImg from "@/assets/butterfly-valve.jpg";
import powerCablesImg from "@/assets/power-cables.jpg";
import subseaCablesImg from "@/assets/subsea-cables.jpg";
import fiberCablesImg from "@/assets/fiber-cables.jpg";
import controlCablesImg from "@/assets/control-cables.jpg";
import carbonPipesImg from "@/assets/carbon-pipes.jpg";
import couplingsImg from "@/assets/couplings-fittings.jpg";
import steelPlatesImg from "@/assets/steel-plates.jpg";
import hrcCrcImg from "@/assets/hrc-crc.jpg";
import instrCablesImg from "@/assets/instrumentation-cables.jpg";
import tubularBulbImg from "@/assets/tubular-bulb.jpg";
import diffusersImg from "@/assets/diffusers.jpg";
import gasketsImg from "@/assets/gaskets.jpg";
import weldingImg from "@/assets/welding.jpg";
import handToolsImg from "@/assets/hand-tools.jpg";
import marineElectricalImg from "@/assets/marine-electrical.jpg";
import deckHardwareImg from "@/assets/deck-hardware.jpg";
import { Marquee } from "@/components/site/Marquee";
import { Reveal } from "@/components/site/Reveal";
import {
  PageHero,
  CategoryBand,
  SpecCard,
  ImageTile,
  BulletPanel,
  CTABand,
} from "@/components/site/Bits";

export const Route = createFileRoute("/marine")({
  head: () => ({
    meta: [
      { title: "Marine, Industrial & Steel Products — Valves, Cables, MRO | Spectrum" },
      {
        name: "description",
        content:
          "Industrial valves, marine power and instrumentation cables, flanges, fittings, marine lighting and diffusers, hardware and MRO supplies for vessels, shipyards and offshore projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Marine, Industrial & Steel Products — Spectrum" },
      {
        property: "og:description",
        content:
          "Ship chandling, on-board supply and SOLAS-compliant marine safety equipment, plus valves, cables, fittings and steel products.",
      },
    ],
  }),
  component: Marine,
});

const coreServices = [
  {
    title: "Ship Chandling",
    items: [
      "Port & vessel supply of provisions, spares and deck equipment across UAE ports — on time, every time.",
    ],
  },
  {
    title: "On-Board Supply",
    items: [
      "Pipes, valves, fittings, lubricants and MRO delivered directly to deck and engine room.",
    ],
  },
  {
    title: "Marine & Safety",
    items: ["Marine supplies and SOLAS-compliant safety equipment for vessels."],
  },
];

const valves = [
  {
    code: "IV - 001 · Featured",
    title: "Diaphragm Valve — Flanged",
    image: valvesImg,
    imageAlt: "Flanged diaphragm and control valves",
    rows: [
      { label: "Size Range", value: '½″ – 6″' },
      { label: "Pressure Rating", value: "PN10 – PN16" },
      { label: "Diaphragm", value: "PTFE / EPDM" },
      { label: "Media", value: "Suitable for corrosive & hygienic media" },
    ],
  },
  {
    code: "IV - 002",
    title: "Control Valves",
    image: controlValvesImg,
    imageAlt: "Pneumatic actuated control valves on industrial pipework",
    rows: [
      { label: "Valve Types", value: "Butterfly / Globe / Angle" },
      { label: "Actuation", value: "Pneumatic & motorized" },
      { label: "Application", value: "Flow regulation in industrial pipelines" },
    ],
  },
  {
    code: "IV - 003",
    title: "Aseptic Block Valve",
    image: asepticValveImg,
    imageAlt: "Hygienic stainless steel aseptic block valve",
    rows: [
      { label: "Design", value: "Zero dead-leg" },
      { label: "Actuation", value: "PN actuated" },
      { label: "Diaphragm", value: "PTFE / EPDM" },
      { label: "Application", value: "Pharmaceutical & food-grade pipelines" },
    ],
  },
  {
    code: "IV - 004",
    title: "Trunion Ball Valve",
    image: trunionValveImg,
    imageAlt: "Trunnion mounted flanged ball valve",
    rows: [
      { label: "Design", value: "Trunnion-mounted" },
      { label: "Actuation", value: "Pneumatic & motorized" },
      { label: "Operation", value: "High-cycle, low-torque" },
    ],
  },
];

const oilGasValves = [
  {
    img: gateValveImg,
    t: "Gate Valve",
    b: "Used for on/off control. Provides minimal flow resistance when fully open. Common in pipelines.",
  },
  {
    img: globeValveImg,
    t: "Globe Valve",
    b: "Used for flow regulation and throttling. Provides precise flow control.",
  },
  {
    img: checkValveImg,
    t: "Check Valve",
    b: "Allows flow in one direction only. Prevents backflow and protects equipment.",
  },
  {
    img: butterflyValveImg,
    t: "Butterfly Valve",
    b: "Lightweight and compact. Used in large diameter pipelines. Quick operation.",
  },
];

const oilGasCables = [
  {
    img: powerCablesImg,
    t: "Power Cables",
    b: "Used to transmit electrical power. Armoured for protection in harsh environments.",
  },
  {
    img: instrCablesImg,
    t: "Instrumentation Cables",
    b: "Transmit signals for monitoring and control systems. Shielded for EMI protection.",
  },
  {
    img: subseaCablesImg,
    t: "Subsea Cables",
    b: "Used in offshore and underwater applications. Designed to withstand extreme conditions.",
  },
  {
    img: fiberCablesImg,
    t: "Fiber Optic Cables",
    b: "High speed data transmission. Used for communication and system monitoring.",
  },
  {
    img: controlCablesImg,
    t: "Control Cables",
    b: "Used for control, automation and interconnection. Multi-core cables for various applications.",
  },
];

const pipesFlanges = [
  {
    code: "PF - 001",
    title: "Carbon Flanges",
    image: flangesImg,
    imageAlt: "Carbon steel flanges and forged fittings",
    rows: [
      { label: "Classes", value: "CL150, 300, 600" },
      { label: "Ratings", value: "PN10 – PN25" },
      { label: "Face Types", value: "RF / FF / RTJ" },
      { label: "Materials", value: "ASTM A105 / A182" },
    ],
  },
  {
    code: "PF - 002",
    title: "Carbon Steel Pipes",
    image: carbonPipesImg,
    imageAlt: "Seamless carbon steel pipes stacked in racks",
    rows: [
      { label: "Schedules", value: "40 & 80" },
      { label: "Construction", value: "Seamless ASTM A106 & ERW" },
      { label: "Lengths", value: "Standard & custom lengths" },
      { label: "Sizes", value: '½″ to 24″ NPS' },
    ],
  },
  {
    code: "PF - 003 · PF - 004",
    title: "Couplings, Connectors & Forged Fittings",
    image: couplingsImg,
    imageAlt: "Forged steel couplings, elbows, tees and connectors",
    rows: [
      {
        label: "Couplings",
        value: "Universal couplings, camlocks & flexible connectors; PN16 rated",
      },
      {
        label: "Forged Fittings",
        value: "High-pressure crosses, elbows, tees & unions — ANSI B16.11",
      },
      { label: "Materials", value: "Carbon & stainless steel" },
      { label: "Connections", value: "NPT / BSP / socket-weld" },
      { label: "Customization", value: "Custom fabrication available on request" },
    ],
  },
];

const steelProducts = [
  {
    code: "SP - 001",
    title: "Steel Plates",
    image: steelPlatesImg,
    imageAlt: "Stacked mild steel plates of varying thickness",
    rows: [
      { label: "Materials", value: "MS / SS / Alloy grades" },
      { label: "Standards", value: "A36 to 316SS" },
      { label: "Thickness", value: "3mm – 150mm" },
      { label: "Certification", value: "MTC certificates supplied" },
    ],
  },
  {
    code: "SP - 002",
    title: "Hot Rolled, Cold Rolled & Coils",
    image: hrcCrcImg,
    imageAlt: "Hot rolled and cold rolled steel coils in a mill warehouse",
    rows: [
      { label: "HRC", value: "Widths 600–2000mm, various grades" },
      { label: "CRC", value: "Smooth finish for precision applications" },
      { label: "GI Coil", value: "Zinc-coated for corrosion resistance" },
    ],
  },
  {
    code: "SP - 003",
    title: "Chequered (Anti-Slip) Plates",
    image: chequeredImg,
    imageAlt: "Chequered anti-slip steel plates stacked",
    rows: [
      { label: "Pattern", value: "Diamond / teardrop raised pattern for maximum grip" },
      { label: "Applications", value: "Flooring, ramps, walkways & ship decks" },
      { label: "Dimensions", value: "Standard, custom & cut-to-size" },
      { label: "Materials", value: "Mild Steel / Galvanised on request" },
    ],
  },
];

const marineCables = [
  {
    code: "CB - 001",
    title: "Marine Power Cables",
    image: cablesImg,
    imageAlt: "Armoured marine power cables on drums",
    features: [
      "Armoured multi-core construction",
      "Copper conductors, XLPE/EPR insulation",
      "IEC 60092 / BS 6883 certified",
      "DNV, BV & Lloyd's class approved",
    ],
  },
  {
    code: "CB - 002 / 003",
    title: "Instrumentation & Flexible Cables",
    image: instrCablesImg,
    imageAlt: "Drums of marine instrumentation and flexible cables",
    features: [
      "Marine-grade armoured instrumentation",
      "Steel wire / braid armour options",
      "Low smoke, zero halogen (LSZH)",
    ],
  },
];

const lighting = [
  {
    code: "LT - 001 · Marine Standard Bulb",
    title: "Standard Marine Bulb (A-Type)",
    image: lightingImg,
    imageAlt: "Marine light fittings with diffusers and bulbs",
    features: [
      "E27 base, 40W–100W variants",
      "Suitable for cabin & general deck lighting",
      "Rated for marine humidity environments",
      "Vibration-resistant filament construction",
    ],
  },
  {
    code: "LT - 002 · Marine Bulb (T-Type)",
    title: "Tubular Marine Bulb (T-Type)",
    image: tubularBulbImg,
    imageAlt: "Tubular T-type marine light bulbs",
    features: [
      "E27/E14 base, 15W–40W",
      "Ideal for navigation & instrument panels",
      "Compact tubular form for enclosed fittings",
      "High-vibration rated for engine rooms",
    ],
  },
];

const diffusers = [
  ["000001-000024", "PC Transparent, 2×20W-2×40W pendant types"],
  ["000025-000031", "Acrylic Transparent, 20W + Flanging variants"],
  ["000033", "Hook 720x200x40mm, Acrylic 2×20W"],
  ["000035", "Flat PC 660×240x32mm, 2x20W Milky"],
  ["000039-000048", "Flat ceiling, Acrylic, 530-1300mm range"],
  ["000049-000051", "Hook ceiling, Acrylic 660-1270mm"],
  ["000052-000065", "Convex shape, 14 variants"],
  ["000066-000069", "U-shape, 1275-1280mm"],
  ["000070-000084", "I-Shape, 15 variants, 630-1295mm"],
];

const hardware = [
  {
    code: "HW - 001",
    title: "Bearings & Lubricants",
    image: hardwareImg,
    imageAlt: "Bearings, gaskets and hand tools on a workbench",
    features: [
      "Industrial-grade bearings — ball, roller & plain",
      "Lubricants for marine & industrial applications",
      "Broad range stocked in Dubai warehouse",
    ],
  },
  {
    code: "HW - 002",
    title: "Gaskets & O-Rings",
    image: gasketsImg,
    imageAlt: "Spiral wound gaskets, PTFE gaskets and rubber O-rings",
    features: [
      "PTFE, rubber & spiral wound metal gaskets",
      "O-rings in NBR, EPDM, Viton",
      "Full range of pipe flange gaskets to ANSI / DIN standards",
    ],
  },
  {
    code: "HW - 003",
    title: "Welding Supplies",
    image: weldingImg,
    imageAlt: "Welding electrodes, wire spools, cutting discs and helmets",
    features: [
      "Electrodes, MIG/TIG wire, cutting discs, PPE & all welding consumables",
      "Lincoln, ESAB & equivalent brands stocked",
    ],
  },
  {
    code: "HW - 004",
    title: "Pipe Threading & Hand Tools",
    image: handToolsImg,
    imageAlt: "Pipe threading dies, socket sets and hand tools",
    features: [
      "Pipe threading dies, socket sets, hydraulic jacks",
      "Site equipment and hand tools for marine & industrial applications",
    ],
  },
  {
    code: "HW - 005",
    title: "Marine Electrical & Instrumentation",
    image: marineElectricalImg,
    imageAlt: "Marine electrical switchboard, connectors and instrumentation",
    features: [
      "Cables, connectors, switches, sensors and control systems",
      "For marine and industrial use — reliable and certified components",
    ],
  },
  {
    code: "HW - 006",
    title: "Deck & Hardware Supplies",
    image: deckHardwareImg,
    imageAlt: "Marine deck fittings, shackles and hardware accessories",
    features: [
      "Marine deck fittings, cleats, shackles, turnbuckles",
      "Hardware accessories for all vessel types — built for strength and durability",
    ],
  },
];

function Marine() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Marine, Industrial & Steel Products"
        index="03 — Marine & Industrial"
        title="Built for the sea. Ready for industry."
        intro="Reliable marine, industrial and steel products — sourced, supplied and delivered to specification for vessels, shipyards, offshore operators and industrial projects."
        image={portImg}
        imageAlt="Container port terminal with gantry cranes"
      />

      <Marquee
        items={[
          "Ship Chandling",
          "Industrial Valves",
          "Marine Cables",
          "Flanges & Fittings",
          "Steel Plates",
          "Chequered Plates",
          "Marine Lighting",
          "Bearings & Gaskets",
          "Welding Supplies",
          "Deck Hardware",
        ]}
      />

      {/* CORE SERVICES */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
        <CategoryBand
          index="A / Core Services"
          title="Core Services"
          intro="Supply support for vessels in port, at berth and under project procurement."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {coreServices.map((s, i) => (
            <BulletPanel key={s.title} {...s} delay={i * 90} />
          ))}
        </div>
      </section>

      {/* INDUSTRIAL VALVES */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
          <CategoryBand
            index="B / Industrial Valves"
            title="Industrial Valves"
            intro="Flanged diaphragm, control, aseptic and trunnion ball valves for industrial, hygienic and offshore pipelines."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {valves.map((p, i) => (
              <SpecCard key={p.title} {...p} delay={i * 80} />
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-medium md:text-3xl">
              Valves &amp; Cables — Oil &amp; Gas Reference Guide
            </h3>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {oilGasValves.map((v, i) => (
                <ImageTile
                  key={v.t}
                  delay={i * 70}
                  image={v.img}
                  kicker="Valve"
                  title={v.t}
                  body={v.b}
                />
              ))}
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {oilGasCables.map((v, i) => (
                <ImageTile
                  key={v.t}
                  delay={i * 70}
                  image={v.img}
                  kicker="Cable"
                  title={v.t}
                  body={v.b}
                />
              ))}
            </div>
            <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Safe & Reliable — Trusted Performance",
                "Built for Harsh Environments — Engineered to Last",
                "High Performance — Efficiency You Can Count On",
                "Supporting Oil & Gas Operations — Powering a Stronger Tomorrow",
              ].map((t, i) => (
                <Reveal
                  key={t}
                  delay={i * 70}
                  className="bg-background p-6 font-mono text-[11px] leading-relaxed tracking-wider uppercase text-muted-foreground"
                >
                  {t}
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">
                  Industrial Applications — Offshore &amp; Oil &amp; Gas:
                </span>{" "}
                offshore platform valve, pipe and cable installations; offshore operations
                gate valve and high-pressure control systems.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PIPES, FLANGES & FITTINGS */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
        <CategoryBand
          index="C / Pipes, Flanges & Fittings"
          title="Pipes, Flanges & Fittings"
          intro="Carbon flanges, seamless and ERW carbon steel pipes, couplings, connectors and forged fittings."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pipesFlanges.map((p, i) => (
            <SpecCard key={p.title} {...p} delay={i * 80} />
          ))}
        </div>
      </section>

      {/* STEEL PRODUCTS */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
          <CategoryBand
            index="D / Steel Products"
            title="Steel Products"
            intro="Sheets, coils, plates, pipes, tubes and structural steel — with cutting, sizing and project supply services."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {steelProducts.map((p, i) => (
              <SpecCard key={p.title} {...p} delay={i * 80} />
            ))}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <BulletPanel
              title="Sheets & Coils"
              items={["MS/GI Sheets", "MS/GI Chequered Sheets", "Coils (China, AGIS)"]}
            />
            <BulletPanel
              title="Pipes & Tubes"
              items={["MS/GI Pipes", "MS/GI Tubes"]}
              delay={80}
            />
            <BulletPanel
              title="Structural & Fabrication Steel"
              items={["Beams", "MS/GI Angles", "MS/GI Channels", "MS/GI Flat Bars"]}
              delay={160}
            />
            <BulletPanel
              title="Services"
              items={[
                "Stockist and project supply",
                "Global procurement & sourcing",
                "Advanced warehousing & logistics",
                "Material cutting & sizing",
                "Technical advisory & market insights",
              ]}
              delay={240}
            />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <BulletPanel
              title="MS/GI Beams"
              items={[
                "H-beam & I-beam profiles",
                "Standard structural grades",
                "Custom lengths available",
              ]}
            />
            <BulletPanel
              title="MS/GI Angles & Channels"
              items={[
                "Equal & unequal angle profiles",
                "C-channel sections",
                "Various thicknesses",
              ]}
              delay={80}
            />
            <BulletPanel
              title="MS/GI Flat Bars"
              items={["Mild steel & galvanised options", "Multiple width & thickness options"]}
              delay={160}
            />
          </div>
        </div>
      </section>

      {/* MARINE CABLES */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
        <CategoryBand
          index="E / Marine Cables"
          title="Full Marine Cable Range"
          intro="IEC / BS / DNV / BV / Lloyd's compliant. Power, instrumentation and flexible wiring for all vessel types."
        />
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Standards", "IEC · BS · DNV"],
            ["Certification", "BV · Lloyd's · GL"],
            ["Types", "Power · Instrumentation · Flex"],
            ["Delivery", "Custom lengths"],
          ].map(([k, v], i) => (
            <Reveal key={k} delay={i * 70} className="bg-surface p-7">
              <p className="label-mono">{k}</p>
              <p className="mt-3 font-display text-xl">{v}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {marineCables.map((p, i) => (
            <SpecCard key={p.title} {...p} delay={i * 80} />
          ))}
        </div>
      </section>

      {/* MARINE LIGHTING */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
          <CategoryBand
            index="F / Marine Lighting & Diffusers"
            title="Marine Bulbs Range"
            intro="Reliable lighting solutions for marine, offshore and industrial applications — marine grade, durable, high performance and energy efficient."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {lighting.map((p, i) => (
              <SpecCard key={p.title} {...p} delay={i * 80} />
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-12 border border-border bg-background p-7 md:p-9">
              <img
                src={diffusersImg}
                alt="Polycarbonate and acrylic marine light diffusers"
                loading="lazy"
                width={1024}
                height={768}
                className="mb-7 h-56 w-full object-cover"
              />
              <h3 className="text-2xl font-medium">PC &amp; Acrylic Marine Diffusers</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                84+ variants · Full range available · Custom sizes on request ·
                Documentation available · Transparent &amp; milky finish
              </p>
              <div className="mt-8 overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="label-mono py-3 pr-6">Code</th>
                      <th className="label-mono py-3">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {diffusers.map(([c, d]) => (
                      <tr key={c} className="border-b border-border/70">
                        <td className="py-3 pr-6 font-mono text-[13px] whitespace-nowrap text-primary">
                          {c}
                        </td>
                        <td className="py-3 text-muted-foreground">{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HARDWARE & MRO */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
        <CategoryBand
          index="G / Hardware & MRO"
          title="Hardware & MRO"
          intro="High quality standards · Durable & reliable · Engineered for marine excellence."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hardware.map((p, i) => (
            <SpecCard key={p.title} {...p} delay={i * 70} />
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-14 border border-primary/40 bg-primary/5 p-8 md:p-10">
            <p className="label-mono text-primary">Custom Orders &amp; Quotations</p>
            <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">
              All products available in standard and custom specifications. We provide mill
              test certificates (MTC), product documentation and technical support. Bulk
              orders are welcome. SOLAS-compliance documentation available. Contact our team
              for competitive pricing, lead times and technical specifications.
            </p>
          </div>
        </Reveal>
      </section>

      <CTABand
        eyebrow="Let's Build Your Next Project"
        title="Get in touch for availability, specs & quotations."
        body="Marine products, industrial products and steel products — sourced, supplied and delivered to specification."
        primary={{ to: "/contact", label: "Request a Quote" }}
        secondary={{ to: "/about", label: "About Spectrum" }}
      />
    </>
  );
}
