import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { BokehOrb } from "@/components/landing/BokehOrb";

const items = [
  { emoji: "🤔", text: "Слышал про ИИ, но не знаешь, с чего начать" },
  { emoji: "⏳", text: "Тратишь часы на задачи, которые ИИ делает за минуты" },
  { emoji: "🎬", text: "Хочешь делать контент, но нет времени и команды" },
  { emoji: "💡", text: "Думаешь про свой продукт, но программировать не умеешь" },
  { emoji: "💸", text: "Хочешь зарабатывать на ИИ-навыках" },
  { emoji: "🚀", text: "Готов перестать смотреть, как другие рвут — и начать сам" },
];

function Item({
  i,
  total,
  progress,
  emoji,
  text,
}: {
  i: number;
  total: number;
  progress: MotionValue<number>;
  emoji: string;
  text: string;
}) {
  const seg = 1 / total;
  const start = i * seg;
  const peak = start + seg * 0.5;
  const end = start + seg;
  const opacity = useTransform(progress, [start, peak, end], [0.15, 1, 0.4]);
  const scale = useTransform(progress, [start, peak, end], [0.9, 1, 0.96]);
  const x = useTransform(progress, [start, peak], [-30, 0]);

  return (
    <motion.div
      style={{ opacity, scale, x }}
      className="flex items-center gap-5 md:gap-7"
    >
      <motion.span
        className="text-5xl md:text-7xl"
        animate={{ rotate: [0, -8, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
      >
        {emoji}
      </motion.span>
      <span
        className="text-on-dark"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(22px, 3.5vw, 44px)",
          fontWeight: 600,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
        }}
      >
        {text}
      </span>
    </motion.div>
  );
}

export function ForWhom() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref} id="forwhom" className="relative" style={{ height: `${items.length * 70 + 60}vh` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-5 md:px-6">
        <BokehOrb size={460} className="-left-20 top-10" intensity={0.4} />
        <BokehOrb size={400} className="-right-20 bottom-10" intensity={0.35} />

        <div className="relative z-10 mx-auto w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 md:mb-14"
          >
            <div className="text-xs uppercase tracking-widest text-on-dark-muted">04 · Для кого</div>
            <h2
              className="mt-3 text-on-dark"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 5vw, 64px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
              }}
            >
              Этот курс для тебя, <span className="text-gradient">если…</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-8 md:gap-10">
            {items.map((it, i) => (
              <Item key={i} i={i} total={items.length} progress={scrollYProgress} emoji={it.emoji} text={it.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
