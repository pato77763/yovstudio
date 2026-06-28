/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { SERVICES } from "../data";
import { MonitorSmartphone, TrendingUp, Cpu, Layers, CheckCircle2, ArrowUpRight, HelpCircle } from "lucide-react";

interface ServiceSectionProps {
  onOpenContactModal: () => void;
}

export default function ServiceSection({ onOpenContactModal }: ServiceSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Dynamic Lucide-React Icon lookup helper
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "MonitorSmartphone":
        return <MonitorSmartphone className={className} />;
      case "TrendingUp":
        return <TrendingUp className={className} />;
      case "Cpu":
        return <Cpu className={className} />;
      case "Layers":
        return <Layers className={className} />;
      default:
        return <CheckCircle2 className={className} />;
    }
  };

  return (
    <section id="servicos" className="relative py-24 md:py-32 bg-transparent">
      {/* Background decoration lines */}
      <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-premium/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Caption */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-deep/15 border border-gold-lux/30 mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-premium animate-pulse"></span>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-premium">Portfólio de Capacidades</span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white">
            Soluções Digitais de <span className="gradient-gold-text">Alta Performance</span>
          </h2>
          <p className="text-[#BDBDBD] text-base md:text-md leading-relaxed">
            Desenvolvemos infraestruturas completas de marketing e desenvolvimento para posicionar sua empresa entre os líderes do mercado. Design cirúrgico e engenharia de ponta juntos.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {SERVICES.map((srv) => {
            const isHovered = hoveredCard === srv.id;
            return (
              <div
                key={srv.id}
                id={`service-card-${srv.id}`}
                onMouseEnter={() => setHoveredCard(srv.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative p-8 rounded-xl bg-gradient-to-b from-[#1E1C18] to-[#12110E] border border-gold-deep/15 hover:border-gold-lux/50 transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_rgba(173,136,97,0.15)] flex flex-col justify-between overflow-hidden group"
              >
                {/* Gold Highlight Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-gold-deep/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                ></div>

                {/* Animated Gold Corner Glow */}
                <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gold-premium/15 blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>

                <div>
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded bg-gold-deep/20 border border-gold-lux/30 flex items-center justify-center text-gold-premium group-hover:bg-gradient-to-br group-hover:from-gold-lux group-hover:to-gold-premium group-hover:text-[#0B0A08] transition-all duration-300">
                      {renderIcon(srv.iconName, "w-6 h-6")}
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#BDBDBD]/60 border border-white/5 px-2.5 py-1 rounded bg-[#0B0A08]/40">
                      SYSTEM NODE {srv.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-display font-semibold text-white tracking-wide mb-3 flex items-center justify-between">
                    {srv.title}
                    <ArrowUpRight size={18} className="text-[#BDBDBD] group-hover:text-gold-premium group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 opacity-60 group-hover:opacity-100" />
                  </h3>
                  <p className="text-sm text-[#BDBDBD] leading-relaxed mb-6 font-normal">
                    {srv.shortDesc}
                  </p>

                  <div className="w-full h-[1px] bg-gold-deep/15 mb-6"></div>

                  <h5 className="text-[10px] font-mono tracking-widest uppercase text-gold-champagne-light mb-4">Módulos Inclusos</h5>
                  
                  {/* Features List */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {srv.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-[#F2F2F2]">
                        <CheckCircle2 size={12} className="text-gold-premium flex-shrink-0" />
                        <span className="font-normal opacity-90">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA inside card */}
                <button
                  id={`service-cta-btn-${srv.id}`}
                  onClick={() => window.open("https://wa.me/5582996145573?text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20a%20YOV%20Studio.", "_blank")}
                  className="w-full py-3 text-center text-xs tracking-wider uppercase font-bold text-[#F2F2F2] hover:text-[#0B0A08] bg-[#1A1815] hover:bg-gradient-to-r hover:from-gold-champagne hover:to-gold-premium border border-gold-matte/30 hover:border-transparent rounded transition-all duration-300 cursor-pointer"
                >
                  Contratar Solução
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-[#BDBDBD]/50 font-mono">
            * Todas as soluções incluem auditoria de SEO profunda, integração com Google Analytics 4 e otimização Core Web Vitals.
          </p>
        </div>

      </div>
    </section>
  );
}
