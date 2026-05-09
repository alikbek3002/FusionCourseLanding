import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { BokehOrb } from "@/components/landing/BokehOrb";
import { SectionPill } from "@/components/landing/SectionPill";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";
import { config } from "@/config";

export function Author() {
  return (
    <section id="author" className="relative overflow-hidden px-5 py-24 md:px-6 md:py-32">
      <BokehOrb size={420} className="-left-20 bottom-0" intensity={0.32} />
      <div className="relative z-10 mx-auto grid max-w-[1100px] items-center gap-12 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5"
        >
          <div className="relative mx-auto aspect-square max-w-[360px]">
            <div
              className="absolute inset-0 rounded-full blur-2xl"
              style={{ background: "var(--brand-gradient)", opacity: 0.5 }}
            />
            <div
              className="relative flex h-full w-full items-center justify-center rounded-full"
              style={{
                background: "var(--brand-gradient-radial)",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              <span className="text-white" style={{ fontSize: 96, fontWeight: 700, letterSpacing: "-0.04em" }}>
                РЖ
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-7"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.div variants={fadeInUp}>
            <SectionPill tone="outline">АВТОР</SectionPill>
          </motion.div>
          <motion.h3
            variants={fadeInUp}
            className="mt-5 text-on-dark"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Рамис Жолдошев
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="mt-5 text-on-dark-muted"
            style={{ fontSize: "clamp(16px, 1.8vw, 19px)", lineHeight: 1.55 }}
          >
            CEO и сооснователь Fusion AI — платформы для запуска ИИ-агентов в WhatsApp, Telegram и Instagram.
            Запустил больше 200 ИИ-агентов для бизнесов в СНГ и MENA. Курс — это всё то, что я делаю каждый день,
            упакованное в 14 уроков.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap gap-2">
            {["Fusion AI · CEO", "200+ ИИ-агентов", `${config.RAMIS_HANDLE} · 26K`].map((t) => (
              <span
                key={t}
                className="rounded-full px-3.5 py-1.5 text-xs font-semibold"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)", color: "var(--fg-inverse)" }}
              >
                {t}
              </span>
            ))}
          </motion.div>
          <motion.a
            variants={fadeInUp}
            href={config.RAMIS_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-on-dark-muted hover:text-white transition-colors"
          >
            instagram.com/zholdoshev.ramis <ExternalLink size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
