import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, MapPin, Wifi, Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { BokehOrb } from "@/components/landing/BokehOrb";
import { CTAButton } from "@/components/landing/CTAButton";
import { SectionPill } from "@/components/landing/SectionPill";
import { config } from "@/config";
import ramisAvatar from "@/assets/ramis.png";

function ReelCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || visible) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-[340px] overflow-hidden rounded-[24px]"
      style={{
        background: "#000",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)",
      }}
    >
      {/* Custom Instagram-style header */}
      <div className="flex items-center justify-between px-3 py-2.5">
        <div className="flex items-center gap-2">
          <div
            className="rounded-full p-[2px]"
            style={{ background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" }}
          >
            <img
              src={ramisAvatar}
              alt="@zholdoshev.ramis"
              className="h-8 w-8 rounded-full border-2 border-black object-cover"
            />
          </div>
          <div className="text-sm font-semibold text-white">zholdoshev.ramis</div>
        </div>
        <MoreHorizontal size={18} className="text-white/70" />
      </div>

      {/* Reel video — IG embed cropped to hide IG chrome */}
      <div
        className="relative w-full overflow-hidden bg-black"
        style={{ aspectRatio: "9 / 16" }}
      >
        {visible ? (
          <iframe
            src="https://www.instagram.com/reel/DXY3TQZjYKM/embed/"
            title="Reels автора"
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            scrolling="no"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "-54px",
              width: "100%",
              height: "calc(100% + 220px)",
              border: 0,
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-10 w-10 animate-pulse rounded-full bg-white/10" />
          </div>
        )}
        {/* Mask bottom IG chrome */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px]"
          style={{ background: "transparent" }}
        />
      </div>

      {/* Custom action bar */}
      <div className="flex items-center justify-between px-3 py-2.5">
        <div className="flex items-center gap-3">
          <Heart size={22} className="text-white" />
          <MessageCircle size={22} className="text-white" />
          <Send size={22} className="text-white" />
        </div>
        <Bookmark size={22} className="text-white" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-36 md:px-6 md:pt-40"
      style={{ background: "#05010F" }}
    >
      <BokehOrb size={620} className="-left-40 top-10" intensity={0.55} duration={11} />
      <BokehOrb size={520} className="-right-32 bottom-10" intensity={0.45} duration={13} />

      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
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
              Старт 1 июня
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
            className="mt-12 md:mt-16 font-bold text-on-dark"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8.5vw, 104px)",
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
            }}
          >
            <span className="text-gradient">ИИ</span>нутый.
            <br />
            <span style={{ color: "rgba(255,255,255,0.85)" }}>Курс по ИИ.</span>
          </motion.h1>

          <p
            className="mt-8 md:mt-10 max-w-xl text-on-dark-muted my-[20px]"
            style={{ fontSize: "clamp(16px, 1.6vw, 20px)", lineHeight: 1.5 }}
          >
            14 уроков с @zholdoshev.ramis. Промпты, ИИ-агенты, контент и вайбкодинг.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          </div>

          <div className="mt-5 flex items-center gap-2 text-sm text-on-dark-muted">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full" style={{ background: "var(--success-alt)" }} />
            Осталось {config.SEATS_LEFT} из {config.SEATS_TOTAL} мест в потоке
          </div>
        </div>

        {/* RIGHT: Reels */}
        <div className="relative mx-auto w-full max-w-[360px]">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[40px]"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(154,95,250,0.45), transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <ReelCard />
        </div>
      </div>
    </section>
  );
}
