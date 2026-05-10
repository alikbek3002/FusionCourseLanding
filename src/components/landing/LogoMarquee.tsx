import { LogoChip } from "./LogoChip";

type Props = {
  ids: string[];
  speed?: number; // seconds per loop
  className?: string;
};

export function LogoMarquee({ ids, speed = 35, className = "" }: Props) {
  const row = [...ids, ...ids, ...ids];
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
      }}
    >
      <div
        className="flex w-max items-center gap-4"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {row.map((id, i) => (
          <LogoChip key={`${id}-${i}`} id={id} size="lg" />
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.3333%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="marquee"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}