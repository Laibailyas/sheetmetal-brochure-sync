import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function ButtonLink({
  to,
  children,
  variant = "solid",
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      className={cn(
        "group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium transition-all duration-300",
        variant === "solid"
          ? "bg-primary text-primary-foreground hover:glow-ring hover:brightness-110"
          : "border border-border text-foreground hover:border-primary hover:bg-primary/10",
      )}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <Reveal>
        <p className="label-mono flex items-center gap-3">
          <span className="animate-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 text-4xl leading-[1.02] font-medium md:text-6xl">{title}</h2>
      </Reveal>
      {intro ? (
        <Reveal delay={160}>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function PageHero({
  breadcrumb,
  index,
  title,
  intro,
  image,
  imageAlt,
}: {
  breadcrumb: string;
  index: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover opacity-30"
          width={1400}
          height={1000}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="bg-grid absolute inset-0 opacity-50" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="label-mono">{breadcrumb}</p>
        </Reveal>
        <Reveal delay={60}>
          <p className="mt-8 font-mono text-xs tracking-[0.3em] text-primary uppercase">
            {index}
          </p>
        </Reveal>
        <Reveal delay={120} variant="clip">
          <h1 className="mt-4 text-5xl leading-[0.95] font-medium md:text-8xl">{title}</h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {intro}
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-9">
            <ButtonLink to="/contact">Request a Quote</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ProductRow({
  tag,
  title,
  body,
  specs,
  image,
  imageAlt,
  flip = false,
}: {
  tag: string;
  title: string;
  body: string;
  specs: string[];
  image: string;
  imageAlt: string;
  flip?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <Reveal
        className={cn("order-1", flip && "md:order-2")}
        variant="clip"
      >
        <div className="group relative overflow-hidden border border-border">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            width={1400}
            height={1000}
            className="aspect-[4/3] w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-primary/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </Reveal>

      <div className={cn("order-2", flip && "md:order-1")}>
        <Reveal>
          <p className="label-mono text-primary">{tag}</p>
        </Reveal>
        <Reveal delay={80}>
          <h3 className="mt-4 text-3xl leading-tight font-medium md:text-4xl">{title}</h3>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 leading-relaxed text-muted-foreground">{body}</p>
        </Reveal>
        <Reveal delay={200}>
          <ul className="mt-7 flex flex-wrap gap-2">
            {specs.map((s) => (
              <li
                key={s}
                className="border border-border bg-surface-2 px-3 py-1.5 font-mono text-[11px] tracking-wider text-steel uppercase"
              >
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}

export function CTABand({
  eyebrow,
  title,
  body,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: string;
  body: string;
  primary: { to: string; label: string };
  secondary?: { to: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[130px]" />
      <div className="relative mx-auto max-w-[1400px] px-5 text-center md:px-10">
        <Reveal>
          <p className="label-mono">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl leading-[1.02] font-medium md:text-6xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">{body}</p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink to={primary.to}>{primary.label}</ButtonLink>
            {secondary ? (
              <ButtonLink to={secondary.to} variant="ghost">
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --- Brochure-style building blocks --- */

export function SpecCard({
  code,
  title,
  subtitle,
  image,
  imageAlt,
  features,
  rows,
  delay = 0,
}: {
  code?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  features?: string[];
  rows?: { label: string; value: string }[];
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:border-primary/60 hover:shadow-[0_18px_50px_-30px_rgba(15,30,70,0.35)]">
        {image ? (
          <div className="relative overflow-hidden border-b border-border">
            <img
              src={image}
              alt={imageAlt ?? title}
              loading="lazy"
              width={1400}
              height={1000}
              className="aspect-[4/3] w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
          </div>
        ) : null}

        <div className="flex flex-1 flex-col p-7 md:p-8">
          {code ? <p className="label-mono text-primary">{code}</p> : null}
          <h3 className="mt-3 text-2xl leading-tight font-medium">{title}</h3>
          {subtitle ? (
            <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          ) : null}

          {features?.length ? (
            <ul className="mt-5 space-y-2.5">
              {features.map((f) => (
                <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {rows?.length ? (
            <dl className="mt-6 divide-y divide-border border-t border-border">
              {rows.map((r) => (
                <div key={r.label} className="grid gap-1 py-3 sm:grid-cols-[9rem_1fr] sm:gap-4">
                  <dt className="label-mono pt-0.5">{r.label}</dt>
                  <dd className="font-mono text-[13px] leading-relaxed text-foreground">
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}

export function CategoryBand({
  index,
  title,
  intro,
}: {
  index: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="border-b border-border pb-8">
      <Reveal>
        <p className="label-mono text-primary">{index}</p>
      </Reveal>
      <Reveal delay={70}>
        <h2 className="mt-4 text-3xl leading-[1.05] font-medium md:text-5xl">{title}</h2>
      </Reveal>
      {intro ? (
        <Reveal delay={130}>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{intro}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function ImageTile({
  image,
  imageAlt,
  kicker,
  title,
  body,
  delay = 0,
}: {
  image: string;
  imageAlt?: string;
  kicker?: string;
  title: string;
  body?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:border-primary/60">
        <div className="overflow-hidden border-b border-border">
          <img
            src={image}
            alt={imageAlt ?? title}
            loading="lazy"
            width={1024}
            height={768}
            className="aspect-[4/3] w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          {kicker ? <p className="label-mono text-primary">{kicker}</p> : null}
          <p className="mt-3 text-lg font-medium">{title}</p>
          {body ? (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}

export function BulletPanel({

  title,
  items,
  delay = 0,
}: {
  title: string;
  items: string[];
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="h-full border border-border bg-surface p-7 transition-colors duration-500 hover:bg-surface-2 md:p-8">
        <h3 className="text-xl font-medium">{title}</h3>
        <ul className="mt-5 space-y-2.5">
          {items.map((i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
