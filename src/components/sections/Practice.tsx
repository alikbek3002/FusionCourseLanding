import { motion } from "framer-motion";
import { SectionPill } from "@/components/landing/SectionPill";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";
import { practice } from "@/data/lessons";

export function Practice() {
  return (
    <section className="relative px-5 py-20 md:px-6 md:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger}
        className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[32px] p-8 md:p-14"
        style={{ background: "var(--brand-gradient-deep)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.25), transparent 70%)", filter: "blur(60px)" }}
        />
        <motion.div variants={fadeInUp}>
          <span
            className="mt-8 md:mt-10 max-w-xl text-on-dark-muted my-[20px]"
            style={{ background: "#3FDD78", color: "#0B1A12" }}
          >
            ПРАКТИКА
          </span>
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          className="mt-5"
          style={{ color: "#fff", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
        >
          Финал — это не теория.
        </motion.h2>

        <div className="relative mt-10 grid gap-5 md:grid-cols-2">
          {practice.map((l) => (
            <motion.div
              key={l.num}
              variants={fadeInUp}
              className="rounded-[20px] p-6 md:p-8"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", backdropFilter: "blur(10px)" }}
            >
              <div className="text-2xl font-bold" style={{ color: "rgba(255,255,255,0.92)" }}>{l.num}.</div>
              <h4 className="mt-3" style={{ color: "#fff", fontSize: 22, fontWeight: 600 }}>{l.title}</h4>
              <p className="mt-2" style={{ color: "rgba(255,255,255,0.82)", fontSize: 15, lineHeight: 1.55 }}>{l.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
