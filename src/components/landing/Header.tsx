import { useState } from "react";
import { Menu, X } from "lucide-react";
import { config } from "@/config";
import { trackCTA } from "@/lib/analytics";
import fusionMedium from "@/assets/brand/fusion-medium.png";
import fusionMark from "@/assets/brand/fusion-mark.png";

const links = [
  { href: "#program", label: "Программа" },
  { href: "#outcomes", label: "Результат" },
  { href: "#author", label: "Автор" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/5 backdrop-blur-md" style={{ background: "rgba(14,12,21,0.6)" }}>
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 md:px-6">
        <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
          <img src={fusionMark} alt="Fusion AI" className="hidden h-8 w-8 rounded-lg object-cover sm:block" />
          <img src={fusionMedium} alt="Fusion" className="block h-7 sm:hidden" />
          <span className="hidden text-on-dark-muted sm:inline">/ {config.COURSE_NAME}</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-on-dark-muted hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={config.TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackCTA("header", "telegram")}
          className="hidden rounded-xl px-4 py-2 text-sm font-semibold cta-gradient md:inline-flex"
        >
          Записаться
        </a>
        <button
          aria-label="Меню"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 cta-glass"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 px-5 py-4" style={{ background: "rgba(14,12,21,0.95)" }}>
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base text-on-dark-muted">
                {l.label}
              </a>
            ))}
            <a
              href={config.TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { trackCTA("header", "telegram"); setOpen(false); }}
              className="inline-flex h-12 items-center justify-center rounded-xl font-semibold cta-gradient"
            >
              Записаться
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
