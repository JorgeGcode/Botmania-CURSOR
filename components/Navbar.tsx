"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "INICIO", href: "/", active: true },
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
    // Transparencia total sin desenfoque ni bordes
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
        
        {/* --- LOGO --- */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-white font-bold text-3xl tracking-tighter">
            BOTMANIA<span className="text-orange-500">.</span>
          </Link>
        </div>

        {/* --- LINKS (Desktop) - Fuente agrandada y blanco puro --- */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <DesktopNavLink key={link.name} link={link} />
          ))}
        </div>

        {/* --- CTA (Botón Estilo VOX) --- */}
        <div className="hidden lg:block">
          <Link
            href="/presupuesto"
            className="px-8 py-3 rounded-full border-2 border-white text-white font-bold text-lg transition-all duration-300 hover:bg-white hover:text-black"
          >
            Solicitar Presupuesto
          </Link>
        </div>

        {/* --- MENÚ MÓVIL --- */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* --- DESPLEGABLE MÓVIL (Con fondo oscuro para legibilidad) --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-black/95 flex flex-col p-8 gap-6 border-b border-white/10">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-white text-2xl font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

function DesktopNavLink({ link }: { link: typeof NAV_LINKS[0] }) {
  return (
    <Link href={link.href} className="group relative flex items-center gap-1 py-2">
      <span className={`text-base font-bold tracking-wider transition-colors duration-300 ${
        link.active ? "text-white" : "text-white/80 group-hover:text-white"
      }`}>
        {link.name}
      </span>

      {link.hasDropdown && (
        <ChevronDown size={18} className="text-white transition-colors" />
      )}

      {/* Línea indicadora (Naranja Botmania) */}
      <span className={`absolute -bottom-1 left-0 h-[4px] bg-orange-500 transition-all duration-300 ${
        link.active ? "w-full" : "w-0 group-hover:w-full"
      }`} />
    </Link>