export const v2Config = {
  ANALYTICS_ID: "",

  SEATS_TOTAL: 20,
  SEATS_LEFT: 8,

  TELEGRAM_URL: "https://t.me/kurbanova4774",
  TELEGRAM_HANDLE: "@kurbanova4774",
  PHONE: "+996 700 033 307",
  PHONE_TEL: "+996700033307",
  WHATSAPP_URL: "https://wa.me/996700033307",
  RAMIS_INSTAGRAM: "https://instagram.com/zholdoshev.ramis",
  COURSE_NAME: "ИИнутый",
  LOCATION: "Технопарк, Бишкек",

  COMPANY: "Fusion AI",
  CEO_NAME: "Рамис Жолдошев",
  START_DATE: "Старт потока — июнь 2026",
  DURATION: "14 уроков · 4 недели · офлайн",
} as const;

export function trackCTA(source: string, channel: string) {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.log("[trackCTA]", { source, channel, ts: Date.now() });
  }
}
