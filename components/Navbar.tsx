"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // 1. Hook para saber dónde estamos
import { Menu } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils"; // Utilidad para mezclar clases si hace falta

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Obtenemos la ruta actual (ej: "/servicios")

  return (
    // CAMBIO: bg-transparent absoluto. 
    // Nota: Asegúrate de que tu "Hero Section" tenga fondo oscuro, o el texto no se verá.
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300">
      <div className="container mx-auto flex h-28 items-center justify-between px-6">
        
        {/* --- LOGO --- */}
        <Link href="/" className="text-3xl font-bold tracking-tighter text-white">
          {siteConfig.name}<span className="text-orange-500">.</span>
        </Link>

        {/* --- MENÚ DE ESCRITORIO --- */}
        <nav className="hidden lg:flex items-center gap-10">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex flex-col items-center justify-center py-2"
              >
                {/* Texto del link */}
                <span className="text-sm font-bold tracking-widest text-white uppercase transition-opacity hover:opacity-100 opacity-90">
                  {item.label}
                </span>

                {/* LA LÍNEA MÁGICA (Hover Effect) */}
                <span 
                  className={cn(
                    "absolute -bottom-2 left-0 h-[4px] bg-orange-500 transition-all duration-300 ease-out",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )} 
                />
              </Link>
            );
          })}
        </nav>

        {/* --- CTA --- */}
        <div className="hidden lg:block">
          <Link
            href={siteConfig.cta.href}
            className="group flex h-14 w-52 flex-col items-center justify-center rounded-full border border-white/30 bg-white/5 backdrop-blur-sm text-white transition-all hover:bg-white hover:text-black hover:border-white"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 font-medium mb-0.5">
              {siteConfig.cta.subLabel}
            </span>
            <span className="text-lg font-bold leading-none tracking-wide">
              {siteConfig.cta.label}
            </span>
          </Link>
        </div>

        {/* --- MENÚ MÓVIL --- */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-8 w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l border-white/10 bg-black/95 text-white">
              <div className="flex flex-col gap-8 mt-12">
                {siteConfig.navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl font-bold tracking-tight transition-colors",
                      pathname === item.href ? "text-orange-500" : "text-white hover:text-orange-500"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}