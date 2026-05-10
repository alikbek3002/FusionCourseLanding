import { config } from "@/config";
import fusionMain from "@/assets/brand/fusion-main.png";

export function Footer() {
  return (
    <footer className="mt-16" style={{ background: "#000" }}>
      <div className="mx-auto max-w-[1200px] px-5 py-10 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <img src={fusionMain} alt="Fusion AI" className="h-12 w-auto rounded-lg" />
          <div className="text-sm text-on-dark-muted">
            <a href={config.TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">{config.TELEGRAM_HANDLE}</a>
            <span className="px-2 opacity-50">·</span>
            <a href={`tel:${config.PHONE_TEL}`} className="hover:text-white">{config.PHONE}</a>
          </div>
          <div className="text-sm text-on-dark-muted">
            <a href={config.RAMIS_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-white">{config.RAMIS_HANDLE}</a>
            <span className="px-2 opacity-50">·</span>
            <span>{config.LOCATION}</span>
          </div>
        </div>
        <div className="mt-6 border-t border-white/5 pt-6 text-xs text-on-dark-muted">
          © 2026 Fusion AI. Курс {config.COURSE_NAME}.
        </div>
      </div>
    </footer>
  );
}
