import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import { BokehOrb } from "@/components/landing/BokehOrb";
import { Countdown } from "@/components/landing/Countdown";
import { config } from "@/config";
import { trackCTA } from "@/lib/analytics";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";

export function FinalCTA() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    trackCTA("final", "form");
    // eslint-disable-next-line no-console
    console.log("[form]", { name, phone });
    setSent(true);
  };

  return (
    <section id="signup" className="relative flex min-h-[80vh] items-center overflow-hidden px-5 py-24 md:px-6 md:py-32">
      <BokehOrb size={720} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" intensity={0.55} duration={14} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger}
        className="relative z-10 mx-auto w-full max-w-xl text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
          style={{ background: "rgba(63,221,120,0.16)", color: "var(--success-alt)", border: "1px solid rgba(63,221,120,0.4)" }}
        >
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--success-alt)" }} />
          Осталось {config.SEATS_LEFT} из {config.SEATS_TOTAL} мест
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="mt-6 text-on-dark"
          style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}
        >
          Забронируй место.
        </motion.h2>

        <motion.div variants={fadeInUp} className="mx-auto mt-7 max-w-sm">
          <Countdown to={config.START_DATE} />
        </motion.div>

        {sent ? (
          <motion.div
            variants={fadeInUp}
            className="mx-auto mt-8 rounded-2xl px-5 py-6 text-sm"
            style={{ background: "rgba(63,221,120,0.12)", color: "var(--success-alt)", border: "1px solid rgba(63,221,120,0.3)" }}
          >
            Спасибо. Свяжемся в ближайшее время.
          </motion.div>
        ) : (
          <motion.form
            variants={fadeInUp}
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex flex-col gap-3"
          >
            <input
              aria-label="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Имя"
              className="rounded-xl px-4 py-4 text-base outline-none focus:border-white/40 transition-colors"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)", color: "var(--fg-inverse)" }}
            />
            <input
              aria-label="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Телефон"
              inputMode="tel"
              className="rounded-xl px-4 py-4 text-base outline-none focus:border-white/40 transition-colors"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)", color: "var(--fg-inverse)" }}
            />
            <button
              type="submit"
              className="cta-gradient mt-2 inline-flex h-14 items-center justify-center rounded-2xl px-6 text-base font-semibold"
            >
              Записаться на курс
            </button>
          </motion.form>
        )}

        <motion.div variants={fadeInUp} className="mt-6 text-sm text-on-dark-muted">
          Или напиши{" "}
          <a
            href={config.TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTA("final", "telegram")}
            className="inline-flex items-center gap-1 text-white underline-offset-4 hover:underline"
          >
            <Send size={14} /> в Telegram
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
