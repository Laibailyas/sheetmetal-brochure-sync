import { createFileRoute } from "@tanstack/react-router";
import portImg from "@/assets/port.jpg";
import skylineImg from "@/assets/skyline.jpg";
import structuralImg from "@/assets/structural.jpg";
import { Reveal } from "@/components/site/Reveal";
import {
  PageHero,
  SectionHeading,
  BulletPanel,
  CTABand,
} from "@/components/site/Bits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Spectrum Corporation FZ LLC — Dubai Industrial Trading Company" },
      {
        name: "description",
        content:
          "Spectrum Corporation FZ LLC is a Dubai-based trading company specializing in the stocking, sourcing, supply, import, export and distribution of industrial steel, metals, construction materials and marine equipment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "About Spectrum Corporation FZ LLC" },
      {
        property: "og:description",
        content:
          "Industrial steel, metals, construction materials and marine equipment trading across the UAE, GCC, Middle East, Africa and international markets.",
      },
    ],
  }),
  component: About,
});

const steelProducts = [
  "Mild Steel (MS) Products",
  "Galvanized Iron (GI) Products",
  "Stainless Steel Products",
  "Aluminium Products",
  "Steel Coils & Sheets",
  "HR & CR Coils and Sheets",
  "Chequered Plates",
  "Pipes & Tubes",
  "Angles & Channels",
  "Beams & Columns",
  "Round, Flat, Square & Deformed Bars",
  "Steel Gratings",
  "Expanded & Welded Mesh",
  "Structural Steel Products",
  "Industrial and Fabrication Materials",
];

const marineProducts = [
  "Marine Deck Equipment",
  "Mooring & Anchoring Equipment",
  "Marine Pipes, Fittings & Valves",
  "Marine Hardware",
  "Shipbuilding & Repair Materials",
  "Marine Safety Equipment",
  "Marine Tools & Consumables",
  "Marine Electrical & Mechanical Equipment",
  "Marine Maintenance Supplies",
  "General Ship & Vessel Supplies",
  "Offshore & Marine Industrial Products",
];

const sourcing = [
  "International Product Sourcing",
  "Import & Export",
  "Bulk Material Procurement",
  "Project-Based Procurement",
  "Stock Supply",
  "Customized Sourcing",
  "International Supplier Coordination",
  "Local & Regional Distribution",
];

const industries = [
  "Construction & Infrastructure",
  "Steel Fabrication",
  "Engineering & Manufacturing",
  "Oil & Gas",
  "Marine & Shipbuilding",
  "Ship Repair & Maintenance",
  "Offshore & Marine Services",
  "Industrial Maintenance",
  "Mechanical & Electrical Contracting",
  "Warehousing & Logistics",
  "Trading & Distribution",
  "General Contracting",
  "Industrial Projects",
  "Commercial & Infrastructure Development",
];

const why = [
  { t: "Quality", b: "Reliable products sourced through trusted supply channels." },
  {
    t: "Availability",
    b: "Strong sourcing capabilities for both stock and project requirements.",
  },
  {
    t: "Competitive Pricing",
    b: "Efficient procurement and supplier relationships to deliver value.",
  },
  {
    t: "Responsiveness",
    b: "Fast communication and quotation support for urgent requirements.",
  },
  { t: "Reliability", b: "Dependable coordination from sourcing through delivery." },
  {
    t: "Global Reach",
    b: "International sourcing, import, export and supply capabilities.",
  },
];

function About() {
  return (
    <>
      <PageHero
        breadcrumb="Home / About Us"
        index="Company Profile"
        title="Spectrum Corporation FZ LLC"
        intro="Industrial Steel, Metals, Construction Materials & Marine Equipment Trading — a Dubai-based trading company specializing in the stocking, sourcing, supply, import, export and distribution of industrial products."
        image={skylineImg}
        imageAlt="Dubai skyline under construction"
      />

      {/* ABOUT US */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div className="max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <Reveal>
              <p>
                <span className="font-medium text-foreground">
                  Spectrum Corporation FZ LLC
                </span>{" "}
                is a Dubai-based trading company specializing in the stocking, sourcing,
                supply, import, export, and distribution of industrial steel, metals,
                construction materials, industrial products, and marine equipment.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p>
                We serve contractors, fabricators, construction companies, marine operators,
                shipyards, engineering companies, traders, manufacturers, and industrial
                buyers across the UAE, GCC, Middle East, Africa, and international markets.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p>
                With a strong focus on quality, availability, competitive pricing, and
                dependable service, Spectrum Corporation FZ LLC works to become a trusted
                supply partner for businesses requiring reliable access to industrial and
                marine products.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Our extensive product portfolio includes Mild Steel (MS), Galvanized Iron
                (GI), Stainless Steel, Aluminium, structural steel, pipes, tubes, sheets,
                coils, angles, channels, beams, bars, gratings, mesh, construction materials,
                industrial hardware, tools, and a wide range of marine equipment and related
                products.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p>
                We maintain strong supplier relationships and sourcing capabilities, enabling
                us to fulfill both immediate stock requirements and customized
                project-specific procurement needs.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} variant="clip">
            <img
              src={structuralImg}
              alt="Structural steel sections stacked in a supply yard"
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full border border-border object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* VISION */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
          <SectionHeading
            eyebrow="We Believe in Quality"
            title="Our Vision"
            intro="To provide dependable access to quality industrial materials and marine equipment through reliable sourcing, competitive solutions, and responsive service. At Spectrum Corporation FZ LLC, we understand the importance of getting the right product, at the right time, for every project. Whether it is an urgent requirement, bulk order, or specialized sourcing need, our team is committed to delivering reliable solutions you can count on."
          />
        </div>
      </section>

      {/* CORE STRENGTHS */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
        <SectionHeading
          eyebrow="Our Core Strengths"
          title="Industrial steel, metals & marine supply."
          intro="A comprehensive range of ferrous and non-ferrous metal products for construction, fabrication, engineering, manufacturing and industrial applications — alongside a dedicated marine division."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <BulletPanel title="Industrial Steel & Metals" items={steelProducts} />
          <BulletPanel title="Marine Equipment & Supplies" items={marineProducts} delay={90} />
        </div>
        <Reveal delay={140}>
          <p className="mt-8 max-w-4xl leading-relaxed text-muted-foreground">
            We support shipyards, marine contractors, vessel operators, offshore businesses,
            maintenance companies and marine engineering projects by sourcing and supplying
            equipment and materials according to project requirements. We can also assist
            with specialized sourcing and project-based procurement where specific marine
            products or technical specifications are required.
          </p>
        </Reveal>
      </section>

      {/* QUALITY / SOURCING / STOCK / CUSTOMER */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
          <div className="grid gap-px bg-border md:grid-cols-2">
            {[
              {
                t: "Quality Assurance",
                b: "Quality is an essential part of every supply we undertake. We work with established manufacturers, suppliers and international sourcing partners to ensure that products meet the required technical specifications, quality standards and project requirements. Our team carefully evaluates product specifications, dimensions, grades, quantities and applicable standards before supply.",
              },
              {
                t: "Global Sourcing, Import & Export",
                b: "Through our network of suppliers and trading partners, we source products from various international markets and coordinate supply according to customer requirements — from a single urgent item to regular stock replenishment or large-volume project procurement.",
              },
              {
                t: "Stock Availability & Fast Supply",
                b: "Industrial projects operate under strict deadlines. We maintain access to commonly required industrial products while leveraging our supplier network to source specialized and non-stock items quickly. Our supply approach supports immediate requirements, bulk orders, project procurement, regular supply contracts and customized sourcing.",
              },
              {
                t: "Customer Satisfaction",
                b: "Successful trading is built on trust, transparency, responsiveness, competitive pricing and consistent service. From quotation and sourcing to order processing and delivery, we strive to make every transaction efficient, professional and reliable.",
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 90} className="bg-background p-8 md:p-12">
                <h3 className="text-2xl font-medium md:text-3xl">{c.t}</h3>
                <p className="mt-5 leading-relaxed text-muted-foreground">{c.b}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <BulletPanel title="Sourcing & Distribution Capabilities" items={sourcing} />
          </div>
        </div>
      </section>

      {/* INDUSTRIES & MARKETS */}
      <section className="relative overflow-hidden">
        <img
          src={portImg}
          alt="Container terminal with gantry cranes"
          loading="lazy"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Supplying a diverse range of industries."
          />
          <div className="mt-12 flex flex-wrap gap-2">
            {industries.map((t, i) => (
              <Reveal key={t} delay={i * 35}>
                <span className="inline-block border border-border bg-card px-4 py-2 text-base text-muted-foreground transition-colors hover:border-primary hover:text-foreground">
                  {t}
                </span>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            <div>
              <Reveal>
                <h3 className="text-2xl font-medium md:text-3xl">Our Clients &amp; Markets</h3>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  We work with contractors, fabricators, manufacturers, traders, engineering
                  companies, marine businesses, shipyards, project developers, procurement
                  companies and industrial buyers. Our sourcing and supply network allows us
                  to serve customers across the UAE, GCC, Middle East, Africa, Asia, Europe
                  and other international markets.
                </p>
              </Reveal>
            </div>
            <div className="flex flex-wrap content-start gap-2">
              {[
                "Project Enquiries",
                "Stock Requirements",
                "Bulk Orders",
                "Marine Supply Requests",
                "Customized Sourcing",
                "Long-Term Supply Partnerships",
              ].map((t, i) => (
                <Reveal key={t} delay={i * 60}>
                  <span className="inline-block border border-primary/40 bg-primary/5 px-4 py-2 font-mono text-[11px] tracking-wider uppercase text-foreground">
                    {t}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY SPECTRUM */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
          <SectionHeading eyebrow="Why Spectrum?" title="Six reasons buyers stay with us." />
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {why.map((c, i) => (
              <Reveal
                key={c.t}
                delay={i * 80}
                className="group bg-background p-8 transition-colors duration-500 hover:bg-surface-2 md:p-10"
              >
                <span className="font-mono text-base text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl font-medium">{c.t}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{c.b}</p>
                <span className="mt-8 block h-px w-10 bg-primary transition-all duration-500 group-hover:w-24" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Spectrum Corporation FZ LLC"
        title="Industrial materials. Marine equipment. Reliable supply."
        body="Your trusted partner for steel, metals, construction materials and marine equipment."
        primary={{ to: "/contact", label: "Contact Our Team" }}
        secondary={{ to: "/coils-sheets", label: "View Product Range" }}
      />
    </>
  );
}
