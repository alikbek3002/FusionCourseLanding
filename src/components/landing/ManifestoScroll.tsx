import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const phrases = [
  "Пока нормальные люди боятся ИИ —",
  "ИИнутые на нём зарабатывают.",
  "Один человек = команда из пяти.",
  "Твой ИИ-сотрудник работает 24/7.",
];

export function ManifestoScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref} className="relative" style={{ height: `${phrases.length * 100}vh` }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-5">
        <div className="relative mx-auto w-full max-w-5xl text-center">
          {phrases.map((p, i) => {
            const start = i / phrases.length;
            const end = (i + 1) / phrases.length;
            const mid = (start + end) / 2;
            const opacity = useTransform(
              scrollYProgress,
              [start, mid - 0.04, mid + 0.04, end],
              [0, 1, 1, 0],
            );
            const y = useTransform(scrollYProgress, [start, end], [40, -40]);
            return (
              <motion.h2
                key={i}
                style={{ opacity, y }}
                className="absolute inset-0 m-auto flex items-center justify-center text-on-dark"
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(36px, 7vw, 96px)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.05,
                    background: i % 2 === 1
                      ? "var(--brand-gradient)"
                      : "linear-gradient(180deg,#fff,rgba(255,255,255,0.7))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {p}
                </span>
              </motion.h2>
            );
          })}
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(124,92,255,0.35), transparent 65%)",
            filter: "blur(80px)",
          }}
        />
      </div>
    </section>
  );
}