import Image from "next/image";
import Navbar from "@/components/Navbar";
import IntroSection from "@/components/IntroSection";
import WordsSection from "@/components/WordsSection";

export default function Home() {
  return (
    <>
    <div className="relative h-screen w-full overflow-hidden z-10">
      {/* Imagen de Fondo */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-[center_30%]"
          priority
          quality={90}
        />
      </div>

      {/* Overlay con Gradiente */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      {/* Navbar */}
      <Navbar />

      {/* Contenido Hero - Alineado a la Izquierda */}
      <div className="relative z-20 h-full max-w-7xl mx-auto flex flex-col justify-center px-6 items-start text-left">
        {/* Pre-título */}
        <p className="tracking-widest uppercase text-sm text-white mb-4 font-medium">
          TU PRODUCTO, NUESTRA VISION ESTRATEGICA
        </p>

        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-bold leading-none text-white mb-4">
          DISEÑO WEB PREMIUM
        </h1>

        {/* Subtítulo con Gradiente */}
        <h2 className="text-5xl md:text-7xl font-bold leading-none mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
            RESULTADOS
          </span>
        </h2>

        {/* Botón CTA */}
        <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300 mt-8">
          CONOCÉ MÁS
        </button>
      </div>
    </div>
    {/* Envolvemos la Intro para darle fondo y altura */}
    <div className="relative z-20 bg-white">
    {/* Sección Intro */}
      <IntroSection />
    </div>
    <WordsSection />
    </>
  );
}
