import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "clip";
  as?: "div" | "section" | "li" | "span";
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);

    // Safety net: elements already in view on first paint sometimes miss the
    // observer's initial callback, so check geometry directly once.
    const t = window.setTimeout(() => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
        setVisible(true);
        io.unobserve(el);
      }
    }, 120);

    return () => {
      window.clearTimeout(t);
      io.disconnect();
    };
  }, []);

  if (variant === "clip") {
    // The clip-path itself zeroes the element's visible rect, which would stop
    // IntersectionObserver from ever firing — so observe an unclipped wrapper.
    return (
      <Tag
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        className={className}
      >
        <div
          style={{ ["--reveal-delay" as string]: `${delay}ms` }}
          className={cn("reveal-clip h-full", visible && "is-visible")}
        >
          {children}
        </div>
      </Tag>
    );
  }

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={cn("reveal", visible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}
