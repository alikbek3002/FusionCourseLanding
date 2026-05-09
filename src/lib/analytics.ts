export type CTASource = "hero" | "final" | "outcomes" | "header";
export type CTAChannel = "telegram" | "phone" | "whatsapp" | "form";

export function trackCTA(source: CTASource, channel: CTAChannel) {
  // eslint-disable-next-line no-console
  console.log("[CTA]", { source, channel });
}
