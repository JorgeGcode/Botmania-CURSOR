"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Efecto: Detectar scroll para cambiar el fondo si es necesario
  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        // Aquí definimos: Transparente al inicio, fondo oscuro + blur al bajar (High Ticket)
        isScrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-2" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-14">
        
        {/* --- 1. IDENTIDAD (LOGO) --- */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="text-2xl font-bold tracking-tighter text-white">
            {siteConfig.name}<span className="text-orange-500">.</span>
          </span>
        </Link>

        {/* --- 2. NAVEGACIÓN ESCRITORIO (Usando el Stack Coss UI) --- */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {siteConfig.navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          // Base transparente
                          "group relative bg-transparent text-white hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white h-9 px-4 text-sm font-bold tracking-widest uppercase transition-colors rounded-none",
                          isActive && "text-white"
                        )}
                      >
                        {item.label}
                        {/* La Línea Mágica (High Ticket) */}
                        <span 
                          className={cn(
                            "absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-300 ease-out",
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          )} 
                        />
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* --- 3. ACCIÓN (CTA Transparente) --- */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href={siteConfig.cta.href}>
            <Button 
                // Usamos variant outline pero lo personalizamos para ser transparente
                className="rounded-full border border-white bg-transparent text-white hover:bg-white hover:text-black hover:border-white transition-transform duration-300 hover:scale-105 active:scale-95 px-8 h-12 font-bold tracking-wide text-lg"
            >
              {siteConfig.cta.label}
            </Button>
          </Link>
        </div>

        {/* --- 4. NAVEGACIÓN MÓVIL (Estilo VOX / Full Screen) --- */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            {/* side="top" + h-screen = Menú de pantalla completa que baja */}
            <SheetContent side="top" className="w-full h-screen bg-zinc-950 border-none p-0 flex flex-col z-[100]">
              <SheetTitle className="sr-only">Menú Móvil</SheetTitle>
              
              {/* Header del Menú Móvil */}
              <div className="flex items-center justify-between px-6 h-24 border-b border-white/10">
                <span className="text-2xl font-bold tracking-tighter text-white">
                    {siteConfig.name}<span className="text-orange-500">.</span>
                </span>
                <SheetClose className="text-white opacity-70 hover:opacity-100">
                    <X className="h-8 w-8" />
                </SheetClose>
              </div>

              {/* Enlaces Móviles */}
              <div className="flex flex-col p-6 gap-2 mt-4">
                {siteConfig.navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-3xl font-bold tracking-tight py-4 text-white/50 hover:text-white transition-colors border-l-4 border-transparent pl-4 hover:border-orange-500",
                      pathname === item.href && "text-white border-orange-500"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="mt-10">
                  <Link href={siteConfig.cta.href} onClick={() => setIsOpen(false)}>
                    <Button className="w-full h-14 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 uppercase tracking-widest">
                        {siteConfig.cta.label}
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}