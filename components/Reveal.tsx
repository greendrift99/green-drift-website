'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.165, 0.84, 0.44, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
