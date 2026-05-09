import { motion } from "framer-motion";
import { BokehOrb } from "@/components/landing/BokehOrb";
import { GlassCard } from "@/components/landing/GlassCard";
import { SectionPill } from "@/components/landing/SectionPill";
import { fadeInUp, staggerSlow, viewportOnce } from "@/lib/motion";
import type { Lesson } from "@/data/lessons";

type Props = {
  blockNum: string;
  pillLabel: string;
  title: string;
  lead: string;
  lessons: Lesson[];
  mirror?: boolean;
  id?: string;
};

export function ProgramBlock({ blockNum, pillLabel, title, lead, lessons, mirror = false, id }: Props) {
  return (
    <section id={id} className="relative overflow-hidden px-5 py-20 md:px-6 md:py-28">
      <BokehOrb size={460} className={mirror ? "-right-24 top-10" : "-left-24 top-10"} intensity={0.32} duration={12} />

      <div className="relative z-10 mx-auto grid max-w-[1200px] gap-10 md:grid-cols-12 md:gap-12">
        <div className={`relative md:col-span-5 ${mirror ? "md:order-2 md:text-right" : ""}`}>
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 0.18, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute -top-10 select-none text-[160px] font-bold leading-none md:text-[220px]"
            style={{
              color: "var(--brand-500)",
              [mirror ? "right" : "left"]: "-12px",
            } as React.CSSProperties}
          >
            {blockNum}
          </motion.div>

          <div className="relative">
            <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeInUp}>
              <SectionPill>{pillLabel}</SectionPill>
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              className="mt-5 text-on-dark"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05 }}
            >
              {title}
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              className="mt-5 text-on-dark-muted"
              style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.5, maxWidth: 460, marginLeft: mirror ? "auto" : 0 }}
            >
              {lead}
            </motion.p>
          </div>
        </div>

        <motion.div
          className={`md:col-span-7 ${mirror ? "md:order-1" : ""}`}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerSlow}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {lessons.map((l) => (
              <GlassCard
                key={l.num}
                variants={fadeInUp}
                whileHover={{ y: -4, borderColor: "rgba(115,95,250,0.6)" }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="!p-6"
              >
                <div className="text-2xl font-bold" style={{ color: "var(--brand-400)" }}>{l.num}.</div>
                <div className="mt-3 h-px w-full" style={{ background: "rgba(255,255,255,0.1)" }} />
                <h4 className="mt-4 text-on-dark" style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.3 }}>
                  {l.title}
                </h4>
                <p className="mt-2 text-sm text-on-dark-muted" style={{ lineHeight: 1.55 }}>
                  {l.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
