import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { BokehOrb } from "@/components/landing/BokehOrb";
import { CTAButton } from "@/components/landing/CTAButton";
import { SectionPill } from "@/components/landing/SectionPill";
import { config } from "@/config";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const orbOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const title = "ИИнутый";
  const chars = title.split("");

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-24 md:px-6"
      style={{ background: "#05010F" }}
    >
      <BokehOrb size={620} className="-left-40 top-20" intensity={0.55} duration={11} />
      <BokehOrb size={520} className="-right-32 bottom-10" intensity={0.45} duration={13} />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 560,
          height: 560,
          background:
            "radial-gradient(circle at 50% 50%, rgba(232,212,255,0.9) 0%, #9A5FFA 25%, #6739FF 45%, #2C0B74 75%, transparent 100%)",
          filter: "blur(40px)",
          y: orbY,
          scale: orbScale,
          opacity: orbOpacity,
          boxShadow: "0 0 200px 60px rgba(154,95,250,0.35)",
        }}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <SectionPill tone="outline">
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--success-alt)" }} />
            14 уроков · офлайн · {config.LOCATION}
          </SectionPill>
        </motion.div>

        <h1
          className="mt-6 font-bold text-on-dark"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(56px, 12vw, 128px)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
          }}
        >
          <span aria-label={title}>
            {chars.map((c, i) => {
              const isAI = i < 2;
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={isAI ? "text-gradient inline-block" : "inline-block"}
                >
                  {c}
                </motion.span>
              );
            })}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mx-auto mt-6 text-on-dark-muted"
          style={{ fontSize: "clamp(18px, 2.4vw, 26px)", lineHeight: 1.4, maxWidth: 720 }}
        >
          Пока нормальные люди боятся ИИ — ИИнутые на нём зарабатывают.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <CTAButton
            href={config.TELEGRAM_URL}
            source="hero"
            channel="telegram"
            size="lg"
            icon={<ArrowRight size={18} />}
          >
            Записаться на курс
          </CTAButton>
          <CTAButton
            href="#program"
            source="hero"
            channel="form"
            external={false}
            variant="glass"
            size="lg"
            icon={<ArrowDown size={18} />}
          >
            Программа курса
          </CTAButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-4 text-left sm:grid-cols-3"
        >
          {[
            { big: "14 уроков", small: "Полная программа" },
            { big: "Офлайн", small: config.LOCATION },
            { big: `Осталось ${config.SEATS_LEFT} / ${config.SEATS_TOTAL}`, small: "Мест в потоке" },
          ].map((m, i) => (
            <div key={i} className="glass-card !p-4 md:!p-5">
              <div className="font-semibold text-on-dark">{m.big}</div>
              <div className="mt-1 text-sm text-on-dark-muted">{m.small}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
