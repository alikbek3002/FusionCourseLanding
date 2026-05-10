import { motion } from "framer-motion";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";
import { SectionPill } from "@/components/landing/SectionPill";
import { chapters } from "@/data/chapters";

export function FullProgram() {
  return (
    <section className="relative px-5 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="text-center"
        >
          <motion.div variants={fadeInUp}>
            <SectionPill tone="outline">ПОЛНАЯ ПРОГРАММА · 14 УРОКОВ</SectionPill>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mt-5 text-on-dark"
            style={{ fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Хочешь увидеть все уроки?
          </motion.h2>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {chapters.map((ch) => (
            <motion.div
              key={ch.id}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={stagger}
              className="glass-card !p-6"
            >
              <motion.div variants={fadeInUp} className="text-2xl font-bold" style={{ color: ch.accent }}>
                {ch.num}
              </motion.div>
              <motion.h3 variants={fadeInUp} className="mt-2 text-on-dark" style={{ fontSize: 20, fontWeight: 700 }}>
                {ch.pill.split(" · ")[1]}
              </motion.h3>
              <motion.ul variants={stagger} className="mt-5 flex flex-col gap-3">
                {ch.lessons.map((l) => (
                  <motion.li key={l.num} variants={fadeInUp} className="flex gap-3">
                    <span className="text-sm font-mono" style={{ color: ch.accent }}>{l.num}</span>
                    <div>
                      <div className="text-on-dark" style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.3 }}>{l.title}</div>
                      <div className="text-on-dark-muted" style={{ fontSize: 13, lineHeight: 1.5 }}>{l.desc}</div>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}