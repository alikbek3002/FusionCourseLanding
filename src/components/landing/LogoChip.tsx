import { aiLogos } from "@/data/ai-logos";

type Props = {
  id: keyof typeof aiLogos | string;
  size?: "sm" | "md" | "lg";
  variant?: "chip" | "badge" | "tile";
  className?: string;
};

export function LogoChip({ id, size = "md", variant = "chip", className = "" }: Props) {
  const logo = aiLogos[id];
  if (!logo) return null;
  const isGradient = logo.bg.includes("gradient");
  const sz =
    size === "sm" ? { h: 22, font: 12, gap: 6, pad: "2px 8px 2px 2px", glyph: 18 }
    : size === "lg" ? { h: 44, font: 16, gap: 10, pad: "4px 16px 4px 4px", glyph: 36 }
    : { h: 32, font: 13, gap: 8, pad: "3px 12px 3px 3px", glyph: 26 };

  if (variant === "tile") {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl ${className}`}
        style={{
          width: 72, height: 72,
          background: isGradient ? logo.bg : logo.bg,
          color: logo.fg,
          fontWeight: 700,
          fontSize: 26,
          border: "1px solid rgba(255,255,255,0.08)",
        }}
        title={logo.name}
        aria-label={logo.name}
      >
        {logo.glyph}
      </div>
    );
  }

  return (
    <span
      className={`inline-flex items-center font-semibold ${className}`}
      style={{
        height: sz.h,
        gap: sz.gap,
        padding: sz.pad,
        borderRadius: 999,
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.14)",
        color: "var(--fg-inverse)",
        fontSize: sz.font,
        whiteSpace: "nowrap",
      }}
      title={logo.name}
    >
      <span
        aria-hidden
        className="inline-flex items-center justify-center rounded-full"
        style={{
          width: sz.glyph, height: sz.glyph,
          background: isGradient ? logo.bg : logo.bg,
          color: logo.fg,
          fontWeight: 800,
          fontSize: sz.glyph * 0.55,
        }}
      >
        {logo.glyph}
      </span>
      {logo.name}
    </span>
  );
}