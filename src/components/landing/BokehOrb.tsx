import { motion } from "framer-motion";

type Props = {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  intensity?: number;
  duration?: number;
};

export function BokehOrb({ size = 520, className = "", style, intensity = 0.5, duration = 10 }: Props) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 35% 35%, #E8D4FF 0%, #9A5FFA 25%, #6739FF 50%, #2C0B74 80%, transparent 100%)",
        filter: "blur(80px)",
        opacity: intensity,
        zIndex: 0,
        ...style,
      }}
      animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
      transition={{ duration, ease: "easeInOut", repeat: Infinity }}
    />
  );
}
