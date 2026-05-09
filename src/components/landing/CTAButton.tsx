import { trackCTA, type CTAChannel, type CTASource } from "@/lib/analytics";

type Props = {
  href: string;
  source: CTASource;
  channel: CTAChannel;
  variant?: "primary" | "glass";
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

export function CTAButton({
  href,
  source,
  channel,
  variant = "primary",
  size = "md",
  external = true,
  className = "",
  children,
  icon,
}: Props) {
  const sizing = size === "lg" ? "h-14 md:h-16 px-7 text-base md:text-lg" : "h-12 md:h-14 px-6 text-sm md:text-base";
  const cls = variant === "primary" ? "cta-gradient" : "cta-glass";
  const radius = variant === "primary" ? "rounded-2xl" : "rounded-xl";
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={() => trackCTA(source, channel)}
      className={`inline-flex items-center justify-center gap-2 font-semibold ${sizing} ${cls} ${radius} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}
