import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img
              src="/logo.png"
              alt="Spectrum Corporation industrial trading"
              className="h-9 w-auto"
              loading="lazy"
              width={840}
              height={200}
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Spectrum Corporation FZ LLC is a Dubai-based trading company supplying
              industrial steel, metals, construction materials and marine equipment across
              the UAE, GCC and international markets.
            </p>
          </div>

          <div>
            <p className="label-mono">Products</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/coils-sheets" className="text-muted-foreground hover:text-primary">
                  Coils &amp; Sheets
                </Link>
              </li>
              <li>
                <Link to="/construction" className="text-muted-foreground hover:text-primary">
                  Structural Steel &amp; Construction
                </Link>
              </li>
              <li>
                <Link to="/marine" className="text-muted-foreground hover:text-primary">
                  Marine &amp; Industrial
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="label-mono">Company</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">
                  About Spectrum
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://spectrumcorp.ae"
                  className="text-muted-foreground hover:text-primary"
                >
                  spectrumcorp.ae
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="label-mono">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:+971585845601" className="hover:text-primary">
                  +971 58 584 5601
                </a>
              </li>
              <li>
                <a href="mailto:info@spectrumcorp.ae" className="hover:text-primary">
                  info@spectrumcorp.ae
                </a>
              </li>
              <li>26th Floor, Amber Gem Tower, Ajman, UAE</li>
              <li>Sun – Thu, 9:00 – 18:00 GST</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-6 text-[11px] tracking-[0.18em] uppercase text-muted-foreground md:flex-row md:justify-between">
          <span>© 2026 Spectrum Corporation FZ LLC</span>
          <span>Industrial Materials. Marine Equipment. Reliable Supply.</span>
        </div>
      </div>
    </footer>
  );
}
