import Image from "next/image";
import Navbar from "@/components/Navbar";
import IntroSection from "@/components/IntroSection";
import WordsSection from "@/components/WordsSection";

// 1. Importamos la imagen estáticamente. 
// Esto permite a Next.js leer sus dimensiones y crear un blurDataURL automático.
import heroBg from "@/assets/images/hero-opt.webp"; 

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden z-10">
        {/* Imagen de Fondo */}
        <div className="fixed inset-0 z-0">
          <Image
            src={heroBg} // Usamos el objeto importado
            alt="Fondo de diseño web estratégico Botmania" // SEO: Keywords relevantes en el ALT
            fill
            className="object-cover object-[center_30%]"
            priority // Esto es CRÍTICO para el LCP
            placeholder="blur" // Magia: muestra una versión borrosa instantánea mientras carga la HD
            quality={75} // 75 es el punto dulce entre calidad y velocidad para fondos oscuros
            sizes="100vw" // Le dice al navegador: "esta imagen ocupará todo el ancho"
          />
        </div>

        {/* Overlay con Gradiente */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

        <Navbar />

        {/* ... Resto de tu contenido ... */}
        <div className="relative z-20 h-full max-w-7xl mx-auto flex flex-col justify-center px-6 items-start text-left">
             {/* ... Tus textos ... */}
             {/* Nota rápida: Agregué 'priority' al botón si es vital, pero la imagen es lo que importa hoy */}
        </div>
      </div>
      
      <div className="relative z-20 bg-white">
        <IntroSection />
      </div>
      <WordsSection />
    </>
  );
}