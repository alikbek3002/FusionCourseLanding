import { useEffect, useState } from "react";
import { v2Config } from "../config";
import { ArrowR, CTAButton } from "./primitives";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div>
      <nav className={"nav " + (scrolled ? "scrolled" : "")}>
        <div className="container nav__inner">
          <a href="#top" className="nav__logo">
            <img
              src="/v2/fusion-logo.png"
              alt="Fusion AI"
              style={{ height: 28, width: "auto", borderRadius: 6 }}
            />
            <span style={{ opacity: 0.4, fontWeight: 300 }}>·</span>
            <span>{v2Config.COURSE_NAME}</span>
          </a>
          <div className="nav__links nav__links--desktop">
            <a href="#program">Программа</a>
            <a href="#outcomes">Результат</a>
            <a href="#author">Автор</a>
            <a href="#format">Формат</a>
            <CTAButton
              source="hero"
              channel="telegram"
              href={v2Config.TELEGRAM_URL}
              variant="primary"
            >
              Записаться <ArrowR />
            </CTAButton>
          </div>
          <button
            className={"burger " + (open ? "open" : "")}
            aria-label="Меню"
            onClick={() => setOpen((o) => !o)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <div className={"mobile-menu " + (open ? "open" : "")}>
        <a onClick={() => setOpen(false)} href="#program">
          Программа
        </a>
        <a onClick={() => setOpen(false)} href="#outcomes">
          Результат
        </a>
        <a onClick={() => setOpen(false)} href="#author">
          Автор
        </a>
        <a onClick={() => setOpen(false)} href="#format">
          Формат
        </a>
        <CTAButton
          source="hero"
          channel="telegram"
          href={v2Config.TELEGRAM_URL}
          variant="primary"
          size="lg"
          onClickExtra={() => setOpen(false)}
        >
          Записаться в Telegram <ArrowR />
        </CTAButton>
      </div>
    </div>
  );
}
