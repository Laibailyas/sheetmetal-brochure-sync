import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import skylineImg from "@/assets/skyline.jpg";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/Bits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Request a Quote — Spectrum Corporation FZ LLC" },
      {
        name: "description",
        content:
          "Send your steel, construction or marine specification to Spectrum Corporation FZ LLC in the UAE and receive a certified offer from our trading desk.",
      },
      { property: "og:title", content: "Contact Spectrum Corporation FZ LLC" },
      {
        property: "og:description",
        content:
          "Request a quote for steel coils and sheets, construction materials or marine equipment.",
      },
    ],
  }),
  component: Contact,
});

const divisions = ["Coils & Sheets", "Construction Materials", "Marine Equipment", "Other"];

function Contact() {
  const [division, setDivision] = useState(divisions[0]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Division: ${division}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:info@spectrumcorp.ae?subject=${encodeURIComponent(
      `Quote Request — ${division}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  const field =
    "w-full border border-border bg-surface-2 px-4 py-3.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <>
      <PageHero
        breadcrumb="Home / Contact"
        index="Trading Desk"
        title="Request a Quote"
        intro="Share your specification — grade, dimensions, quantity or equipment type — and our trading desk will respond with a certified offer."
        image={skylineImg}
        imageAlt="UAE skyline at dusk"
      />

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <Reveal>
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="label-mono mb-3 block" htmlFor="name">
                    Name
                  </label>
                  <input id="name" name="name" required className={field} placeholder="Full name" />
                </div>
                <div>
                  <label className="label-mono mb-3 block" htmlFor="company">
                    Company
                  </label>
                  <input id="company" name="company" className={field} placeholder="Company name" />
                </div>
                <div>
                  <label className="label-mono mb-3 block" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={field}
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="label-mono mb-3 block" htmlFor="phone">
                    Phone
                  </label>
                  <input id="phone" name="phone" className={field} placeholder="+971 —" />
                </div>
              </div>

              <div>
                <span className="label-mono mb-3 block">Division</span>
                <div className="flex flex-wrap gap-2">
                  {divisions.map((d) => (
                    <button
                      type="button"
                      key={d}
                      onClick={() => setDivision(d)}
                      className={`border px-4 py-2 font-mono text-[11px] tracking-wider uppercase transition-colors ${
                        division === d
                          ? "border-primary bg-primary/15 text-foreground"
                          : "border-border bg-surface-2 text-steel hover:border-primary/50"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="label-mono mb-3 block" htmlFor="message">
                  Specification / Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className={field}
                  placeholder="Grade, thickness, width, tonnage, delivery port and required date…"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 bg-primary px-7 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/85"
              >
                Send Request
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={140}>
            <div className="divide-y divide-border border border-border bg-surface">
              {[
                {
                  Icon: Mail,
                  k: "Email",
                  v: "info@spectrumcorp.ae",
                  href: "mailto:info@spectrumcorp.ae",
                },
                {
                  Icon: Phone,
                  k: "Phone",
                  v: "+971 58 584 5601",
                  href: "tel:+971585845601",
                },
                {
                  Icon: MapPin,
                  k: "Address",
                  v: "26th Floor, Amber Gem Tower, Ajman, UAE",
                },
                { Icon: Clock, k: "Trading Hours", v: "Sunday – Thursday, 9:00 – 18:00 GST" },
              ].map(({ Icon, k, v, href }) => (
                <div key={k} className="flex gap-4 p-7">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="label-mono">{k}</p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-2 block text-lg transition-colors hover:text-primary"
                      >
                        {v}
                      </a>
                    ) : (
                      <p className="mt-2 text-lg">{v}</p>
                    )}
                  </div>
                </div>
              ))}
              <div className="p-7">
                <p className="label-mono">Response Time</p>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Steel and marine enquiries are answered within 24 hours. Project supply plans
                  with staged delivery typically take 48 hours.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
