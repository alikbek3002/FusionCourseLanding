import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Bot, Video, Code2, TrendingUp } from "lucide-react";
import { BokehOrb } from "@/components/landing/BokehOrb";
import { CTAButton } from "@/components/landing/CTAButton";
import { SectionPill } from "@/components/landing/SectionPill";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";
import { outcomes } from "@/data/lessons";
import { config } from "@/config";

const icons = [Sparkles, Bot, Video, Code2, TrendingUp];

export function Outcomes() {
  return (
    <section id="outcomes" className="relative overflow-hidden px-5 py-24 md:px-6 md:py-32">
      <BokehOrb size={500} className="-right-32 top-20" intensity={0.4} />
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div variants={fadeInUp}>
            <SectionPill tone="outline">РЕЗУЛЬТАТ</SectionPill>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mt-5 text-on-dark"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05 }}
          >
            После курса ты:
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {outcomes.map((o, i) => {
            const Icon = icons[i] ?? Sparkles;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="glass-card !p-7"
              >
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: "var(--brand-gradient)" }}
                >
                  <Icon size={22} color="white" />
                </div>
                <h4 className="mt-5 text-on-dark" style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.25 }}>
                  {o.title}
                </h4>
                <p className="mt-2 text-on-dark-muted" style={{ fontSize: 15, lineHeight: 1.55 }}>{o.desc}</p>
              </motion.div>
            );
          })}

          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-3xl p-7"
            style={{ background: "var(--brand-gradient-deep)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.3), transparent 70%)", filter: "blur(30px)" }}
            />
            <h4 className="text-white" style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.2 }}>
              Готов вписаться?
            </h4>
            <p className="mt-2 text-white/80" style={{ fontSize: 15, lineHeight: 1.5 }}>
              Места ограничены — пиши сейчас.
            </p>
            <div className="mt-5">
              <CTAButton
                href={config.TELEGRAM_URL}
                source="outcomes"
                channel="telegram"
                variant="glass"
                icon={<ArrowRight size={16} />}
              >
                Записаться в Telegram
              </CTAButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
