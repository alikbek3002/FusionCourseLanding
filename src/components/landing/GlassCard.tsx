import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type Props = HTMLMotionProps<"div"> & { className?: string };

export const GlassCard = forwardRef<HTMLDivElement, Props>(function GlassCard(
  { className = "", children, ...rest },
  ref,
) {
  return (
    <motion.div
      ref={ref}
      className={`glass-card p-6 md:p-8 ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
});
