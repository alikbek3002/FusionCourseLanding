import { useEffect, useState } from "react";

function diff(target: number) {
  const now = Date.now();
  const ms = Math.max(0, target - now);
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms % 86400000) / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return { d, h, m, s };
}

export function Countdown({ to }: { to: string }) {
  const target = new Date(to).getTime();
  const [mounted, setMounted] = useState(false);
  const [t, setT] = useState(() => diff(target));
  useEffect(() => {
    setMounted(true);
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cells: { v: number; l: string }[] = [
    { v: t.d, l: "дней" },
    { v: t.h, l: "часов" },
    { v: t.m, l: "минут" },
    { v: t.s, l: "секунд" },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {cells.map((c, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center rounded-2xl px-2 py-3 sm:py-4"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.10)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            className="font-bold tabular-nums text-on-dark"
            style={{
              fontFamily: "var(--font-mono, var(--font-display))",
              fontSize: "clamp(22px, 3.2vw, 36px)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            {mounted ? String(c.v).padStart(2, "0") : "--"}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-widest text-on-dark-muted sm:text-xs">{c.l}</div>
        </div>
      ))}
    </div>
  );
}