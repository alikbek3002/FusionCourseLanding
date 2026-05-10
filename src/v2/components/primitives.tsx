import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

const isBrowser = typeof window !== "undefined";
const useIsoLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

/* -------- 3D scroll engine -------- */
function useScrollProgress(
  ref: React.RefObject<HTMLElement | null>,
  { offset = 0 }: { offset?: number } = {},
) {
  const [p, setP] = useState(-1);
  useEffect(() => {
    if (!isBrowser || !ref.current) return;
    const el = ref.current;
    let raf = 0;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = r.top + r.height / 2;
      const prog = (vh / 2 - center) / (vh / 2 + r.height / 2);
      setP(Math.max(-1.2, Math.min(1.2, prog + offset)));
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, offset]);
  return p;
}

export function Scroll3D({
  children,
  intensity = 1,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  intensity?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const p = useScrollProgress(ref);

  const tilt =
    p < 0
      ? Math.max(-1, p) * 22 * intensity
      : Math.min(1, p) * -28 * intensity;
  const ty =
    p < 0
      ? Math.max(-1, p) * 60 * intensity
      : Math.min(1, p) * -120 * intensity;
  const op =
    p < 0
      ? Math.max(0, 1 - Math.abs(Math.max(-1, p)) * 0.9)
      : Math.max(0, 1 - Math.max(0, p - 0.2) * 1.4);
  const blur = p > 0.3 ? Math.min(8, (p - 0.3) * 18) : 0;

  return (
    <Tag ref={ref as never} className={"scroll3d " + className}>
      <span
        className="scroll3d__inner"
        style={{
          transform: `translate3d(0, ${ty}px, 0) rotateX(${tilt}deg)`,
          opacity: op,
          filter: blur ? `blur(${blur}px)` : "none",
        }}
      >
        {children}
      </span>
    </Tag>
  );
}

/* -------- WordFlip -------- */
export function WordFlip({
  text,
  className = "",
  delay = 0,
  gradient = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  gradient?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useIsoLayoutEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.split(" ");
  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => {
        const innerStyle: CSSProperties = {
          transform: visible
            ? "translateY(0) rotateX(0deg)"
            : "translateY(110%) rotateX(-70deg)",
          opacity: visible ? 1 : 0,
          transition: `transform 900ms var(--v2-ease-out) ${
            delay + i * 60
          }ms, opacity 600ms ease ${delay + i * 60}ms`,
          display: "inline-block",
          transformOrigin: "0% 100%",
          ...(gradient
            ? {
                background: "var(--v2-brand-gradient-text)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }
            : {}),
        };
        return (
          <span key={i} className="word-flip">
            <span
              className={"word-flip__inner" + (gradient ? " gradient" : "")}
              style={innerStyle}
            >
              {w}
              {i < words.length - 1 ? " " : ""}
            </span>
          </span>
        );
      })}
    </span>
  );
}

/* -------- Reveal -------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useIsoLayoutEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={"reveal " + (visible ? "in " : "") + className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

/* -------- ProgressBar -------- */
export function ProgressBar() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      el.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return <div ref={ref} className="progress-bar" />;
}

/* -------- CTAButton -------- */
export function CTAButton({
  source,
  channel,
  href,
  children,
  variant = "primary",
  size = "md",
  target = "_blank",
  className = "",
  onClickExtra,
}: {
  source: string;
  channel: string;
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  target?: "_blank" | "_self";
  className?: string;
  onClickExtra?: () => void;
}) {
  const onClick = useCallback(() => {
    // local import to avoid circular
    import("../config").then(({ trackCTA }) => trackCTA(source, channel));
    onClickExtra?.();
  }, [source, channel, onClickExtra]);
  const cls =
    `btn btn--${variant}` +
    (size === "lg" ? " btn--lg" : "") +
    " " +
    className;
  return (
    <a
      className={cls}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

/* -------- ArrowR -------- */
export function ArrowR() {
  return (
    <svg
      className="arrow"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

/* -------- SeatsMeter -------- */
export function SeatsMeter({
  total,
  left,
}: {
  total: number;
  left: number;
}) {
  const taken = total - left;
  const pct = (taken / total) * 100;
  return (
    <span className="seats-meter">
      <span className="seats-meter__bar">
        <span
          className="seats-meter__fill"
          style={{ width: pct + "%" }}
        />
      </span>
      <span>
        осталось <strong>{left}</strong> из {total} мест
      </span>
    </span>
  );
}

/* -------- Aurora -------- */
export function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora__orb aurora__orb--1" />
      <div className="aurora__orb aurora__orb--2" />
      <div className="aurora__orb aurora__orb--3" />
    </div>
  );
}
