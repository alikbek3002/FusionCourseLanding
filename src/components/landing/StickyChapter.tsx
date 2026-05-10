import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { LogoChip } from "./LogoChip";
import { StorySlot } from "./StorySlot";
import type { Chapter } from "@/data/chapters";

type Props = { chapter: Chapter; index: number };

function OutcomeRow({
  i, total, progress, accent, title, desc,
}: { i: number; total: number; progress: MotionValue<number>; accent: string; title: string; desc: string }) {
  const seg = 1 / total;
  const start = i * seg;
  const end = (i + 1) * seg;
  const a = Math.max(0, start - seg * 0.2);
  const b = Math.min(1, start + seg * 0.2);
  const c = Math.min(1, end);
  const d = 1;
  // Ensure strictly non-decreasing
  const stops = [a, Math.max(a, b), Math.max(a, b, c), Math.max(a, b, c, d)];
  const opacity = useTransform(progress, stops, [0.35, 1, 1, 0.55]);
  const x = useTransform(progress, [start, Math.min(1, start + 0.1)], [-20, 0]);
  return (
    <motion.li style={{ opacity, x }} className="flex items-start gap-4">
      <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ background: accent }}>
        <Check size={14} color="white" strokeWidth={3} />
      </span>
      <div>
        <div className="text-on-dark" style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.3 }}>{title}</div>
        <div className="text-on-dark-muted" style={{ fontSize: 15, lineHeight: 1.5 }}>{desc}</div>
      </div>
    </motion.li>
  );
}

export function StickyChapter({ chapter, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Story parallax offsets
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [320, 0]);
  const ys = [y1, y2, y3];
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.7, 0.2]);

  // Outcomes opacity steps based on scroll progress
  const totalOutcomes = chapter.outcomes.length;

  const mirror = index % 2 === 1;

  return (
    <section
      id={chapter.id}
      ref={ref}
      className="relative overflow-hidden md:[height:260vh]"
    >
      {/* Soft accent glow that pulses through the section */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle, ${chapter.accent}55 0%, transparent 65%)`,
          filter: "blur(80px)",
          opacity: glowOpacity,
        }}
      />
      <div
        className="relative py-20 md:sticky md:top-0 md:flex md:h-screen md:items-center md:overflow-hidden md:py-0"
        style={{
          paddingLeft: "max(20px, env(safe-area-inset-left))",
          paddingRight: "max(20px, env(safe-area-inset-right))",
        }}
      >
        <div className={`relative z-10 mx-auto grid w-full max-w-[1280px] items-center gap-10 md:grid-cols-12 md:gap-14 ${mirror ? "" : ""}`}>
          {/* Text column */}
          <div className={`md:col-span-6 ${mirror ? "md:order-2" : ""}`}>
            <div className="relative min-w-0">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-12 left-0 select-none text-[100px] font-bold leading-none sm:text-[140px] md:text-[200px]"
                style={{ color: chapter.accent, opacity: 0.15 }}
              >
                {chapter.num}
              </div>
              <div className="relative min-w-0">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider"
                  style={{ background: `${chapter.accent}26`, color: "#fff", border: `1px solid ${chapter.accent}66` }}
                >
                  {chapter.pill}
                </span>
                <h2
                  className="mt-5 text-on-dark break-words"
                  style={{ fontSize: "clamp(34px, 5vw, 64px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05 }}
                >
                  {chapter.title}
                </h2>
                <p
                  className="mt-5 text-on-dark-muted break-words"
                  style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.55, maxWidth: 520 }}
                >
                  {chapter.lead}
                </p>

                <ul className="mt-8 flex flex-col gap-4">
                  {chapter.outcomes.map((o, i) => (
                    <OutcomeRow
                      key={i}
                      i={i}
                      total={totalOutcomes}
                      progress={scrollYProgress}
                      accent={chapter.accent}
                      title={o.title}
                      desc={o.desc}
                    />
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2">
                  {chapter.tools.map((id) => (
                    <LogoChip key={id} id={id} size="sm" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stories column */}
          <div className={`mt-12 md:mt-0 md:col-span-6 ${mirror ? "md:order-1" : ""}`}>
            <div className="relative mx-auto h-[420px] w-full max-w-[360px] overflow-hidden sm:max-w-[520px] md:h-[600px] md:overflow-visible">
              {chapter.stories.slice(0, 3).map((s, i) => {
                const positions = [
                  { left: "2%",   top: "0%",  rotate: -6, w: 160, mdW: 220, z: 2 },
                  { left: "42%",  top: "12%", rotate:  4, w: 170, mdW: 240, z: 3 },
                  { left: "16%",  top: "32%", rotate: -2, w: 155, mdW: 210, z: 1 },
                ];
                const p = positions[i];
                return (
                  <motion.div
                    key={i}
                    className="w-[var(--w-mobile)] sm:w-[var(--w-desktop)]"
                    style={{
                      ["--w-mobile" as any]: `${p.w}px`,
                      ["--w-desktop" as any]: `${p.mdW}px`,
                      y: ys[i],
                      left: p.left,
                      top: p.top,
                      zIndex: p.z,
                      position: "absolute",
                    }}
                  >
                    <StorySlot type={s.type} label={s.label} src={s.src} rotate={p.rotate} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}