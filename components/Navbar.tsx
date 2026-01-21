"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { siteConfig } from "@/config/site"; // 1. Importamos tu configuración
import { Button } from "@/components/ui/button"; // 2. Usamos el botón estandarizado
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // 3. El menú móvil "inteligente"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/90 backdrop-blur-md transition-all">
      {/* Container: Centra el contenido automáticamente sin calcular márgenes */}
      <div className="container mx-auto flex h-24 items-center justify-between px-6">
        
        {/* --- LOGO --- */}
        <Link href="/" className="text-3xl font-bold tracking-tighter text-white">
          {siteConfig.name}<span className="text-orange-500">.</span>
        </Link>

        {/* --- MENÚ DE ESCRITORIO (Itera sobre la config) --- */}
        <nav className="hidden lg:flex items-center gap-8">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white transition-colors hover:text-orange-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* --- CTA (High Ticket) --- */}
        <div className="hidden lg:block">
          <Link
            href={siteConfig.cta.href}
            className="group flex h-12 w-48 flex-col items-center justify-center rounded-full border border-white bg-transparent text-white transition-all hover:bg-white hover:text-black"
          >
            <span className="text-[10px] uppercase tracking-widest opacity-80 group-hover:opacity-100 font-semibold">
              {siteConfig.cta.subLabel}
            </span>
            <span className="text-base font-bold leading-none">
              {siteConfig.cta.label}
            </span>
          </Link>
        </div>

        {/* --- MENÚ MÓVIL (Sheet) --- */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            
            {/* El panel lateral que se desliza */}
            <SheetContent side="right" className="w-[300px] border-l border-white/10 bg-black/95 text-white sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-10">
                {siteConfig.navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold tracking-tight hover:text-orange-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* CTA Móvil */}
                <Link
                  href={siteConfig.cta.href}
                  onClick={() => setIsOpen(false)}
                  className="mt-4 flex h-14 w-full items-center justify-center rounded-full bg-white text-black font-bold text-lg"
                >
                  {siteConfig.cta.subLabel} {siteConfig.cta.label}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}