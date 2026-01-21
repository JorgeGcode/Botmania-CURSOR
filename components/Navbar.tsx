"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "INICIO", href: "/", active: true },
  { name: "ACERCA DE VOX", href: "/nosotros", hasDropdown: true },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "SERVICIOS", href: "/servicios", hasDropdown: true },
  { name: "CLIENTES", href: "/clientes" },
  { name: "NOVEDADES", href: "/novedades" },
  { name: "CONTACTO", href: "/contacto" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gradient-to-b from-black/90 to-transparent">
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
        
        {/* --- LOGO --- */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-white font-bold text-3xl tracking-tighter">
            BOTMANIA<span className="text-orange-500">.</span>
          </Link>
        </div>

        {/* --- LINKS (Desktop) --- */}
        {/* CORRECCIÓN: gap-6 para juntar secciones, whitespace-nowrap para evitar saltos de línea */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <DesktopNavLink key={link.name} link={link} />
          ))}
        </div>

        {/* --- CTA (High Ticket Style) --- */}
        <div className="hidden lg:block flex-shrink-0">
          <Link
            href="/presupuesto"
            className="group flex flex-col items-center justify-center w-48 h-12 border border-white rounded-full transition-all duration-300 hover:bg-white hover:text-black"
          >
            <span className="text-[10px] uppercase tracking-widest leading-none mb-1 group-hover:font-semibold">
              Solicitar
            </span>
            <span className="text-sm font-bold leading-none">
              Presupuesto
            </span>
          </Link>
        </div>

        {/* --- MENÚ HAMBURGUESA --- */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {/* --- MENÚ MÓVIL --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-28 left-0 w-full bg-black/95 flex flex-col p-10 gap-8 border-b border-white/10 h-screen">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-white text-3xl font-bold border-b border-white/5 pb-4"
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
    <Link href={link.href} className="group relative flex items-center gap-1 py-4">
      {/* CORRECCIÓN: text-white sólido (sin opacidad) y whitespace-nowrap */}
      <span className="text-sm font-medium tracking-wide text-white whitespace-nowrap transition-colors duration-300">
        {link.name}
      </span>

      {link.hasDropdown && (
        <ChevronDown size={16} className="text-white transition-transform duration-300 group-hover:rotate-180" />
      )}

      {/* Indicador naranja */}
      <span className={`absolute bottom-2 left-0 h-[2px] bg-orange-500 transition-all duration-300 ${
        link.active ? "w-full" : "w-0 group-hover:w-full"
      }`} />
    </Link>
  );
}