import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import coilsImg from "@/assets/gi-coils.jpg";
import channelsImg from "@/assets/channels.jpg";
import valvesImg from "@/assets/valves.jpg";
import skylineImg from "@/assets/skyline.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { Scene3D } from "@/components/site/Scene3D";
import { ButtonLink, SectionHeading, CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spectrum Corporation FZ LLC — Steel, Industrial & Marine Trading" },
      {
        name: "description",
        content:
          "Dubai-based trading company supplying industrial steel, metals, construction materials and marine equipment across the UAE, GCC, Middle East, Africa and international markets.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:title",
        content: "Spectrum Corporation FZ LLC — Industrial & Marine Trading",
      },
      {
        property: "og:description",
        content:
          "Steel coils & sheets, structural steel, pipes, bars, gratings and marine equipment — sourced, supplied and delivered to specification.",
      },
    ],
  }),
  component: Home,
});

const divisions = [
  {
    index: "01 / Coils & Sheets",
    title: "GI, PPGI, CRC, Aluminium & Stainless",
    body: "Galvanized, pre-painted and cold rolled coils and sheets, plus aluminium and stainless steel — supplied to ASTM, JIS, EN, DIN and GB/T standards in a full range of grades and thicknesses.",
    tags: ["GI Coils & Sheets", "PPGI", "CRC", "Aluminium & Stainless"],
    image: coilsImg,
    alt: "Galvanized steel coils stacked in a warehouse",
    to: "/coils-sheets",
    cta: "View Coils & Sheets",
  },
  {
    index: "02 / Structural & Construction",
    title: "Angles, Channels, Pipes, Tubes, Bars, Beams",
    body: "MS & GI angles and channels, structural, ERW, seamless and galvanized pipes, square and rectangular tubes, flat, round, square and deformed bars, universal beams, gratings and mesh.",
    tags: ["Angles & Channels", "Pipes & Tubes", "Bars", "Beams", "Gratings & Mesh"],
    image: channelsImg,
    alt: "Stacks of steel channels in a bright warehouse",
    to: "/construction",
    cta: "View Structural Steel",
  },
  {
    index: "03 / Marine & Industrial",
    title: "Valves, Cables, Fittings, Lighting & MRO",
    body: "Industrial valves, marine power and instrumentation cables, carbon flanges, pipes and forged fittings, marine lighting and diffusers, plus hardware, bearings, gaskets and welding supplies.",
    tags: ["Industrial Valves", "Marine Cables", "Flanges & Fittings", "Hardware & MRO"],
    image: valvesImg,
    alt: "Industrial flanged diaphragm and control valves",
    to: "/marine",
    cta: "View Marine & Industrial",
  },
];

const strengths = [
  { k: "01", t: "Quality", b: "Reliable products sourced through trusted supply channels." },
  {
    k: "02",
    t: "Availability",
    b: "Strong sourcing capabilities for both stock and project requirements.",
  },
  {
    k: "03",
    t: "Competitive Pricing",
    b: "Efficient procurement and supplier relationships to deliver value.",
  },
  {
    k: "04",
    t: "Responsiveness",
    b: "Fast communication and quotation support for urgent requirements.",
  },
  {
    k: "05",
    t: "Reliability",
    b: "Dependable coordination from sourcing through delivery.",
  },
  {
    k: "06",
    t: "Global Reach",
    b: "International sourcing, import, export and supply capabilities.",
  },
];

function Home() {
  return (
    <>
      {/* HERO — inverted band */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-background text-foreground">
        <video
          className="absolute inset-0 h-full w-full object-cover brightness-125 contrast-105 saturate-110"
          src="/hero.mp4"
          poster="/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/15" />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <div className="relative mx-auto w-full max-w-[1400px] px-5 pt-40 pb-16 md:px-10 md:pb-20">
          <Reveal>
            <p className="label-mono flex items-center gap-3">
              <span className="animate-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              Spectrum Corporation FZ LLC — Ajman, United Arab Emirates
            </p>
          </Reveal>

          <Reveal delay={100} variant="clip">
            <h1 className="mt-6 text-[3rem] leading-[0.9] font-medium tracking-tighter sm:text-7xl lg:text-[8.5rem]">
              Steel that shapes
            </h1>
          </Reveal>
          <Reveal delay={220} variant="clip">
            <h1 className="text-[3rem] leading-[0.9] font-medium tracking-tighter sm:text-7xl lg:text-[8.5rem]">
              <span className="text-gradient-blue">progress.</span>
            </h1>
          </Reveal>

          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal delay={320}>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Stocking, sourcing, import, export and distribution of industrial steel,
                metals, construction materials and marine equipment — for contractors,
                fabricators, shipyards and industrial buyers across the UAE and beyond.
              </p>
            </Reveal>
            <Reveal delay={420}>
              <div className="flex flex-wrap gap-3">
                <ButtonLink to="/contact">Request a Quote</ButtonLink>
                <ButtonLink to="/coils-sheets" variant="ghost">
                  View Product Range
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={520}>
            <div className="mt-14 flex items-center gap-3 text-muted-foreground">
              <ArrowDown className="h-4 w-4 animate-bounce" />
              <span className="label-mono">Scroll</span>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee
        items={[
          "GI & PPGI Coils",
          "CRC Coils & Sheets",
          "Angles & Channels",
          "Pipes & Tubes",
          "Bars & Beams",
          "Gratings & Mesh",
          "Industrial Valves",
          "Marine Cables",
          "Ship Chandling",
        ]}
      />

      {/* INTRO + 3D */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute top-1/3 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 px-5 md:px-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Who We Are"
            title="Industrial materials. Marine equipment. Reliable supply."
            intro="Spectrum Corporation FZ LLC is a Dubai-based trading company specializing in the stocking, sourcing, supply, import, export and distribution of industrial steel, metals, construction materials, industrial products and marine equipment — serving customers across the UAE, GCC, Middle East, Africa, Asia and Europe."
          />
          <Scene3D className="h-[340px] w-full md:h-[480px]" />
        </div>
      </section>

      {/* PRODUCT DIVISIONS */}
      <section className="mx-auto max-w-[1400px] space-y-6 px-5 pb-24 md:px-10 md:pb-32">
        {divisions.map((d, i) => (
          <Reveal key={d.title} delay={i * 60}>
            <article className="group relative grid items-stretch gap-0 overflow-hidden border border-border bg-card transition-colors duration-500 hover:border-primary/50 lg:grid-cols-[1.1fr_1fr]">
              <div className="relative order-2 min-h-[260px] overflow-hidden lg:order-none lg:min-h-[420px]">
                <img
                  src={d.image}
                  alt={d.alt}
                  loading="lazy"
                  width={1400}
                  height={1000}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="animate-scan pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100" />
              </div>

              <div className="order-1 flex flex-col justify-center p-8 md:p-14 lg:order-none">
                <p className="label-mono text-primary">{d.index}</p>
                <h3 className="mt-5 text-3xl leading-tight font-medium md:text-4xl">
                  {d.title}
                </h3>
                <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">{d.body}</p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {d.tags.map((t) => (
                    <li
                      key={t}
                      className="border border-border bg-surface-2 px-3 py-1.5 font-mono text-[11px] tracking-wider text-steel uppercase"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <Link
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  to={d.to as any}
                  className="mt-9 inline-flex w-fit items-center gap-2 border-b border-primary pb-1 text-base font-medium text-foreground transition-colors hover:text-primary"
                >
                  {d.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* WHY SPECTRUM */}
      <section className="relative overflow-hidden border-y border-border bg-surface">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <SectionHeading
            eyebrow="Why Spectrum"
            title="Built on quality, availability and dependable service."
          />
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((c, i) => (
              <Reveal
                key={c.k}
                delay={i * 90}
                className="group bg-background p-8 transition-colors duration-500 hover:bg-surface-2 md:p-10"
              >
                <span className="font-mono text-base text-primary">{c.k}</span>
                <h3 className="mt-6 text-2xl font-medium">{c.t}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{c.b}</p>
                <span className="mt-8 block h-px w-10 bg-primary transition-all duration-500 group-hover:w-24" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative overflow-hidden">
        <img
          src={skylineImg}
          alt="Gulf skyline under construction"
          loading="lazy"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="From site to shipyard."
            intro="We supply materials and equipment to a diverse range of industries across the UAE, GCC and international markets."
          />
          <div className="mt-12 flex flex-wrap gap-2">
            {[
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
            ].map((t, i) => (
              <Reveal key={t} delay={i * 35}>
                <span className="inline-block border border-border bg-card px-4 py-2 text-base text-muted-foreground transition-colors hover:border-primary hover:text-foreground">
                  {t}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Start a Trade"
        title="Tell us the specification. We'll handle the supply."
        body="Share your grade, dimensions, quantity or equipment type and our team will respond with availability, pricing and lead times."
        primary={{ to: "/contact", label: "Request a Quote" }}
        secondary={{ to: "/about", label: "About Spectrum" }}
      />
    </>
  );
}
