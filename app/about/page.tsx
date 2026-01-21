import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Zap, Monitor, Globe, BarChart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // <--- Aquí reciclamos tu componente existente

const features = [
  {
    Icon: Zap,
    name: "Velocidad Extrema",
    description: "Desarrollo y entrega en tiempo récord con Next.js.",
    href: "#",
    cta: "Ver Más",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute right-0 top-0 h-[300px] w-[600px] bg-gradient-to-b from-orange-500/20 to-transparent opacity-20 blur-3xl" />,
  },
  {
    Icon: Monitor,
    name: "Diseño High Ticket",
    description: "Estética Apple/SaaS que justifica precios premium.",
    href: "#",
    cta: "Ver Portfolio",
    className: "col-span-3 lg:col-span-2",
    background: <div className="absolute right-0 top-0 h-[300px] w-[600px] bg-gradient-to-b from-blue-500/20 to-transparent opacity-20 blur-3xl" />,
  },
  {
    Icon: Globe,
    name: "Escalabilidad Global",
    description: "Infraestructura lista para recibir tráfico mundial.",
    href: "#",
    cta: "Saber más",
    className: "col-span-3 lg:col-span-2",
    background: <div className="absolute right-0 top-0 h-[300px] w-[600px] bg-gradient-to-b from-purple-500/20 to-transparent opacity-20 blur-3xl" />,
  },
  {
    Icon: BarChart,
    name: "Conversión",
    description: "Optimizada para convertir visitantes en clientes.",
    href: "#",
    cta: "Empezar",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute right-0 top-0 h-[300px] w-[600px] bg-gradient-to-b from-green-500/20 to-transparent opacity-20 blur-3xl" />,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      {/* Cabecera temporal para volver al inicio */}
      <div className="mb-10 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Laboratorio de Pruebas: <span className="text-orange-500">About</span></h1>
        <Link href="/">
            <Button variant="outline">Volver a Home</Button>
        </Link>
      </div>

      {/* Aquí probamos el componente Magic UI */}
      <section className="max-w-5xl mx-auto">
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </section>
    </main>
  );
}