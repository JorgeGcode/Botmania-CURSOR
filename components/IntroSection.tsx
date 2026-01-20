"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Columna Izquierda - Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Pre-título */}
            <p className="tracking-widest uppercase text-xs text-gray-600 mb-4 font-medium">
              ESPECIALISTAS EN DISEÑO DE PÁGINAS WEB
            </p>

            {/* Título */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              BOTMANIA DISEÑO WEB
            </h2>

            {/* Párrafo */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              En BOTMANIA brindamos servicio de diseño web premium. Desarrollamos páginas web de alto impacto apuntadas a maximizar resultados.
            </p>

            {/* Botón */}
            <button className="border-2 border-orange-400 text-orange-400 px-8 py-3 rounded-full font-medium text-base md:text-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
              CONSULTANOS
            </button>
          </motion.div>

          {/* Columna Derecha - Imagen/Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Placeholder de monitores/celulares */}
            <div className="bg-gray-100 rounded-lg aspect-video p-8 flex items-center justify-center">
              {/* Simulación de dispositivos */}
              <div className="w-full max-w-md space-y-4">
                {/* Monitor grande */}
                <div className="bg-white rounded-lg shadow-lg p-4 mx-auto" style={{ width: "80%" }}>
                  <div className="bg-gray-200 rounded aspect-video mb-2"></div>
                  <div className="h-2 bg-gray-300 rounded w-1/3 mx-auto"></div>
                </div>
                {/* Celulares */}
                <div className="flex justify-center gap-4">
                  <div className="bg-white rounded-lg shadow-lg p-2" style={{ width: "20%" }}>
                    <div className="bg-gray-200 rounded aspect-[9/16]"></div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-2" style={{ width: "20%" }}>
                    <div className="bg-gray-200 rounded aspect-[9/16]"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
