import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/coils-sheets", label: "Coils & Sheets" },
  { to: "/construction", label: "Construction" },
  { to: "/marine", label: "Marine" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-background/85 backdrop-blur-xl transition-all duration-500",
        scrolled ? "border-border py-3" : "border-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src="/logo.png"
            alt="Spectrum Corporation industrial trading"
            className="h-7 w-auto md:h-9"
            width={840}
            height={200}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
              <span className="absolute bottom-1 left-4 h-px w-0 bg-primary transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="group hidden items-center gap-2 bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:glow-ring hover:brightness-110 sm:inline-flex"
          >
            Request Quote
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-0 -z-10 flex flex-col justify-center gap-2 bg-background px-8 transition-all duration-500 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0",
        )}
      >
        {links.map((l, i) => (
          <Link
            key={l.to}
            to={l.to}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: `${i * 40}ms` }}
            className="font-display text-3xl tracking-tight text-foreground/80 transition-colors hover:text-primary"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
