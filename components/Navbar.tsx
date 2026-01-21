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
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
        
        {/* --- LOGO --- */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-white font-bold text-3xl tracking-tighter">
            BOTMANIA<span className="text-orange-500">.</span>
          </Link>
        </div>

        {/* --- LINKS (Desktop) --- */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <DesktopNavLink key={link.name} link={link} />
          ))}
        </div>

        {/* --- CTA --- */}
        <div className="hidden lg:block">
          <Link
            href="/presupuesto"
            className="px-8 py-3 rounded-full border-2 border-white text-white font-bold text-xl transition-all duration-300 hover:bg-white hover:text-black"
          >
            Solicitar Presupuesto
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
    <Link href={link.href} className="group relative flex items-center gap-2 py-2">
      <span className="text-lg font-bold tracking-wider text-white transition-opacity duration-300 group-hover:opacity-100 opacity-90">
        {link.name}
      </span>

      {link.hasDropdown && (
        <ChevronDown size={20} className="text-white" />
      )}

      {/* Línea indicadora naranja */}
      <span className={`absolute -bottom-1 left-0 h-[4px] bg-orange-500 transition-all duration-300 ${
        link.active ? "w-full" : "w-0 group-hover:w-full"
      }`} />
    </Link>
  );
}