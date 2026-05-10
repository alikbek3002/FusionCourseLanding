import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, MapPin, Wifi } from "lucide-react";
import { BokehOrb } from "@/components/landing/BokehOrb";
import { CTAButton } from "@/components/landing/CTAButton";
import { SectionPill } from "@/components/landing/SectionPill";
import { Countdown } from "@/components/landing/Countdown";
import { StorySlot } from "@/components/landing/StorySlot";
import { config } from "@/config";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 md:px-6 md:pt-32"
      style={{ background: "#05010F" }}
    >
      <BokehOrb size={620} className="-left-40 top-10" intensity={0.55} duration={11} />
      <BokehOrb size={520} className="-right-32 bottom-10" intensity={0.45} duration={13} />

      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        {/* LEFT: text + countdown */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-2"
          >
            <SectionPill tone="outline">
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--success-alt)" }} />
              Старт 1 июня · поток №1
            </SectionPill>
            <SectionPill tone="outline">
              <MapPin size={12} /> Бишкек
              <span className="opacity-40">·</span>
              <Wifi size={12} /> Онлайн
            </SectionPill>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 font-bold text-on-dark"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8.5vw, 104px)",
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
            }}
          >
            <span className="text-gradient">ИИ</span>нутый.
            <br />
            <span style={{ color: "rgba(255,255,255,0.85)" }}>Курс по ИИ,</span>
            <br />
            <span className="text-on-dark-muted" style={{ fontWeight: 600 }}>после которого ты</span>
            <br />
            <span className="text-gradient">зарабатываешь.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-6 max-w-xl text-on-dark-muted"
            style={{ fontSize: "clamp(16px, 1.6vw, 20px)", lineHeight: 1.5 }}
          >
            14 уроков с @zholdoshev.ramis. Промпты, ИИ-агенты, контент-фабрика и вайбкодинг.
            Офлайн в Технопарке Бишкека или онлайн — из любой точки.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-8"
          >
            <div className="mb-2 text-xs uppercase tracking-widest text-on-dark-muted">До старта потока</div>
            <Countdown to={config.START_DATE} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <CTAButton
              href={config.TELEGRAM_URL}
              source="hero"
              channel="telegram"
              size="lg"
              icon={<ArrowRight size={18} />}
            >
              Забронировать место
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-5 flex items-center gap-2 text-sm text-on-dark-muted"
          >
            <span className="inline-block h-2 w-2 animate-pulse rounded-full" style={{ background: "var(--success-alt)" }} />
            Осталось {config.SEATS_LEFT} из {config.SEATS_TOTAL} мест в потоке
          </motion.div>
        </div>

        {/* RIGHT: Reels */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[360px] lg:max-w-[420px]"
        >
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[40px]"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(154,95,250,0.55), transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <StorySlot
            src={config.HERO_REEL_URL || undefined}
            poster={config.HERO_REEL_POSTER || undefined}
            type="video"
            label="Reels автора"
          />
        </motion.div>
      </div>
    </section>
  );
}
