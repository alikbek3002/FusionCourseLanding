import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { BokehOrb } from "@/components/landing/BokehOrb";
import { GlassCard } from "@/components/landing/GlassCard";
import { fadeInUp, scaleIn, stagger, viewportOnce } from "@/lib/motion";

const items = [
  "Слышал про ИИ, но не знаешь, с чего начать",
  "Тратишь часы на задачи, которые ИИ делает за минуты",
  "Хочешь делать контент, но нет времени и команды",
  "Думаешь про свой продукт, но программировать не умеешь",
  "Хочешь зарабатывать на ИИ-навыках",
];

export function ForWhom() {
  return (
    <section className="relative overflow-hidden px-5 py-24 md:px-6 md:py-32">
      <BokehOrb size={420} className="-left-20 top-20" intensity={0.35} />
      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="text-center text-on-dark"
          style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
        >
          Этот курс для тебя, если…
        </motion.h2>

        <GlassCard
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <ul className="flex flex-col gap-4">
            {items.map((t, i) => (
              <motion.li key={i} variants={fadeInUp} className="flex items-start gap-4">
                <motion.span
                  variants={scaleIn}
                  className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "var(--brand-gradient)" }}
                >
                  <Check size={16} color="white" strokeWidth={3} />
                </motion.span>
                <span className="text-on-dark" style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.5 }}>
                  {t}
                </span>
              </motion.li>
            ))}
          </ul>
        </GlassCard>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="mt-6 text-center text-sm text-on-dark-muted"
        >
          14 уроков. И всё это — реально.
        </motion.p>
      </div>
    </section>
  );
}
