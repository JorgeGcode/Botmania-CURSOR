"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function WordsSection() {
  const words = useMemo(() => ["CREATIVAS", "NOVEDOSAS", "EFICIENTES"], []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 1800);
    return () => window.clearInterval(id);
  }, [words.length]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/2026.jpg')" }}
        aria-hidden="true"
      />

      {/* Soft aqua overlay */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-[#7EE7F2]/20 via-[#7EE7F2]/10 to-black/40"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col items-start text-left">
        <p className="text-white font-semibold text-2xl md:text-3xl leading-tight">
          Diseñamos páginas web
        </p>

        <div className="mt-4 h-[3.5rem] md:h-[5rem] overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.h3
              key={words[index]}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="uppercase font-bold text-white text-5xl md:text-6xl leading-none"
            >
              {words[index]}
            </motion.h3>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

