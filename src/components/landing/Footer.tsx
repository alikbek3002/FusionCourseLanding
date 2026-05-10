import { config } from "@/config";

export function Footer() {
  return (
    <footer className="mt-10" style={{ background: "#000" }}>
      <div className="mx-auto max-w-[1200px] px-5 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-on-dark-muted md:flex-row">
          <div className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-gradient">ИИ</span>
            <span className="text-on-dark">нутый</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <a href={config.TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">{config.TELEGRAM_HANDLE}</a>
            <span className="opacity-40">·</span>
            <a href={`tel:${config.PHONE_TEL}`} className="hover:text-white">{config.PHONE}</a>
            <span className="opacity-40">·</span>
            <a href={config.RAMIS_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-white">{config.RAMIS_HANDLE}</a>
          </div>
          <div className="opacity-70">© 2026</div>
        </div>
      </div>
    </footer>
  );
}
