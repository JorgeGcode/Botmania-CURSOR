"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react"; // Iconos

// 1. DATA: Definimos los links aquí para no ensuciar el HTML
const NAV_LINKS = [
  { name: "INICIO", href: "/", active: true }, // 'active' simula la página actual
  { name: "ACERCA DE NOSOTROS", href: "/nosotros", hasDropdown: true },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "SERVICIOS", href: "/servicios", hasDropdown: true },
  { name: "CLIENTES", href: "/clientes" },
  { name: "NOVEDADES", href: "/novedades" },
  { name: "CONTACTO", href: "/contacto" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* --- SECCIÓN 1: LOGO --- */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-white font-bold text-3xl tracking-tighter">
            BOTMANIA<span className="text-orange-500">.</span>
          </Link>
        </div>

        {/* --- SECCIÓN 2: LINKS (Desktop) --- */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <DesktopNavLink key={link.name} link={link} />
          ))}
        </div>

        {/* --- SECCIÓN 3: CTA (Botón Presupuesto) --- */}
        <div className="hidden lg:block">
          <Link
            href="/presupuesto"
            className="group relative px-6 py-2.5 rounded-full border border-white text-white font-medium transition-all duration-300 hover:bg-white hover:text-black"
          >
            Solicitar Presupuesto
          </Link>
        </div>

        {/* --- SECCIÓN 4: MENÚ HAMBURGUESA (Móvil) --- */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MENU MÓVIL (Desplegable) --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-black border-b border-white/10 flex flex-col p-6 gap-4">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-white text-lg font-medium py-2 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
           <Link
            href="/presupuesto"
            className="mt-4 text-center px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition-colors"
          >
            Solicitar Presupuesto
          </Link>
        </div>
      )}
    </nav>
  );
}

// --- SUB-COMPONENTE: Link de Escritorio 
// Esto maneja la lógica visual de la línea naranja y la flechita
function DesktopNavLink({ link }: { link: typeof NAV_LINKS[0] }) {
  return (
    <Link href={link.href} className="group relative flex items-center gap-1 h-full py-2">
      <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
        link.active ? "text-white" : "text-gray-300 group-hover:text-white"
      }`}>
        {link.name}
      </span>

      {/* Icono de Dropdown si corresponde */}
      {link.hasDropdown && (
        <ChevronDown size={14} className="text-gray-400 group-hover:text-white transition-colors" />
      )}

      {/* La Línea Dorada/Naranja (Estilo VOX) */}
      {/* Si está activo, la línea es visible fija. Si no, aparece al hover */}
      <span className={`absolute bottom-0 left-0 h-[3px] bg-orange-500 transition-all duration-300 ${
        link.active ? "w-full" : "w-0 group-hover:w-full"
      }`} />
    </Link>
  );
}