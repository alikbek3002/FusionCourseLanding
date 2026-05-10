import { Play, ImageIcon } from "lucide-react";

type Props = {
  src?: string;
  poster?: string;
  type?: "video" | "image";
  label?: string;
  className?: string;
  rotate?: number;
};

/** 9:16 placeholder for user-supplied stories (video or image). */
export function StorySlot({ src, poster, type = "video", label = "Story slot", className = "", rotate = 0 }: Props) {
  const aspect = { aspectRatio: "9 / 16" } as React.CSSProperties;
  const wrap =
    "relative w-full overflow-hidden rounded-[28px] shadow-2xl";
  const frameStyle: React.CSSProperties = {
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
    background:
      "linear-gradient(160deg, rgba(154,95,250,0.20), rgba(35,18,80,0.40))",
    border: "1px solid rgba(255,255,255,0.14)",
  };

  return (
    <div className={`${wrap} ${className}`} style={{ ...aspect, ...frameStyle }}>
      {src ? (
        type === "video" ? (
          <video
            src={src}
            poster={poster}
            autoPlay muted loop playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <img src={src} alt={label} className="absolute inset-0 h-full w-full object-cover" />
        )
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full"
            style={{ background: "rgba(255,255,255,0.10)", border: "1px dashed rgba(255,255,255,0.35)" }}
          >
            {type === "video" ? <Play size={20} color="white" /> : <ImageIcon size={20} color="white" />}
          </div>
          <div className="text-xs uppercase tracking-widest text-white/60">{label}</div>
          <div className="text-sm text-white/80">Замени на свой<br/>рилс или картинку</div>
        </div>
      )}
      {/* phone-style notch */}
      <div
        aria-hidden
        className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full"
        style={{ width: 60, height: 6, background: "rgba(0,0,0,0.5)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[28px]"
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 -40px 80px rgba(0,0,0,0.4)" }}
      />
    </div>
  );
}