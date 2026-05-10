type Props = { children: React.ReactNode; tone?: "brand" | "success" | "outline"; className?: string };

export function SectionPill({ children, tone = "brand", className = "" }: Props) {
  const styles =
    tone === "brand"
      ? { background: "var(--brand-500)", color: "var(--fg-on-brand)" }
      : tone === "success"
      ? { background: "rgba(63,221,120,0.16)", color: "var(--success-alt)", border: "1px solid rgba(63,221,120,0.4)" }
      : { background: "rgba(255,255,255,0.06)", color: "var(--fg-inverse)", border: "1px solid rgba(255,255,255,0.18)" };
  return (
    <span
      className={`mt-8 md:mt-10 max-w-xl text-on-dark-muted my-[20px] ${className}`}
      style={styles}
    >
      {children}
    </span>
  );
}
