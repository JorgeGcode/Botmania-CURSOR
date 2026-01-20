import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Izquierda */}
          <Link href="/" className="text-white font-bold tracking-tighter text-xl md:text-2xl">
            BOTMANIA.
          </Link>

          {/* Enlaces de navegación - Centro (visible en desktop) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="#inicio"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link
              href="#portfolio"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="#servicios"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Servicios
            </Link>
            <Link
              href="#casos"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Casos
            </Link>
            <Link
              href="#contacto"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Contacto
            </Link>
          </div>

          {/* Botón CTA - Derecha */}
          <Link
            href="#presupuesto"
            className="bg-white text-black px-5 py-2.5 rounded-full font-medium text-sm md:text-base hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Solicitar Presupuesto
          </Link>
        </div>
      </div>
    </nav>
  );
}
