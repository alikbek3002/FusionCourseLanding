import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Phone, MessageCircle } from "lucide-react";
import { BokehOrb } from "@/components/landing/BokehOrb";
import { CTAButton } from "@/components/landing/CTAButton";
import { CountUp } from "@/components/landing/CountUp";
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
    <section className="relative flex min-h-[80vh] items-center overflow-hidden px-5 py-24 md:px-6 md:py-32">
      <BokehOrb size={720} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" intensity={0.55} duration={14} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
          style={{ background: "rgba(63,221,120,0.12)", color: "var(--success-alt)", border: "1px solid rgba(63,221,120,0.3)" }}
        >
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--success-alt)" }} />
          Осталось <CountUp to={config.SEATS_LEFT} /> из {config.SEATS_TOTAL} мест
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="mt-7 text-on-dark"
          style={{ fontSize: "clamp(40px, 7vw, 88px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.02 }}
        >
          Запишись.
          <br />
          <span className="text-on-dark-muted" style={{ fontWeight: 600 }}>До старта курса осталось мало времени.</span>
        </motion.h2>

        <motion.p variants={fadeInUp} className="mx-auto mt-6 max-w-xl text-on-dark-muted" style={{ fontSize: 18, lineHeight: 1.5 }}>
          Напиши нам в Telegram — расскажем дату ближайшего потока, ответим на вопросы и забронируем место.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-9 flex flex-col items-center gap-4">
          <CTAButton
            href={config.TELEGRAM_URL}
            source="final"
            channel="telegram"
            size="lg"
            icon={<Send size={20} />}
            className="w-full sm:w-auto"
          >
            Написать в Telegram
          </CTAButton>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
            <CTAButton
              href={`tel:${config.PHONE_TEL}`}
              source="final"
              channel="phone"
              external={false}
              variant="glass"
              icon={<Phone size={16} />}
            >
              Позвонить {config.PHONE}
            </CTAButton>
            <CTAButton
              href={config.WHATSAPP_URL}
              source="final"
              channel="whatsapp"
              variant="glass"
              icon={<MessageCircle size={16} />}
            >
              WhatsApp
            </CTAButton>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-12">
          <p className="text-sm text-on-dark-muted">Не хочешь писать сам? Оставь телефон — позвоним</p>
          {sent ? (
            <div className="mx-auto mt-4 max-w-md rounded-2xl px-5 py-4 text-sm" style={{ background: "rgba(63,221,120,0.12)", color: "var(--success-alt)", border: "1px solid rgba(63,221,120,0.3)" }}>
              Спасибо. Свяжемся в ближайшее время.
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mx-auto mt-4 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                aria-label="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
                className="flex-1 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)", color: "var(--fg-inverse)" }}
              />
              <input
                aria-label="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Телефон"
                inputMode="tel"
                className="flex-1 rounded-xl px-4 py-3 text-sm outline-none"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)", color: "var(--fg-inverse)" }}
              />
              <button type="submit" className="cta-gradient rounded-xl px-5 py-3 text-sm font-semibold">
                Перезвонить мне
              </button>
            </form>
          )}
          <p className="mt-3 text-xs text-on-dark-muted">Никакого спама. Звоним только по записи на курс.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
