/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DIFFERENTIALS } from "../data";
import { Compass, Cpu, Gauge, TrendingUp } from "lucide-react";

export default function DifferentialsSection() {
  const getIcon = (id: string, className: string) => {
    switch (id) {
      case "estrategia":
        return <Compass className={className} />;
      case "tecnologia":
        return <Cpu className={className} />;
      case "performance":
        return <Gauge className={className} />;
      case "escalabilidade":
        return <TrendingUp className={className} />;
      default:
        return <Compass className={className} />;
    }
  };

  return (
    <section id="diferenciais" className="relative py-24 bg-transparent border-y border-gold-deep/15">
      {/* Background glow shadow */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[30%] h-[40%] bg-gold-deep/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center md:text-left mb-16 space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-gold-deep/15 border border-gold-lux/30">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-premium">Prerrogativas YOV Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
            O que torna a <span className="gradient-gold-text">YOV Studio</span> diferente?
          </h2>
          <p className="text-[#BDBDBD] text-base leading-relaxed">
            Nós nos distanciamos das agências convencionais. Integramos inteligência financeira ao código de altíssimo padrão.
          </p>
        </div>

        {/* Horizontal Cards Grid */}
        <div className="flex flex-col gap-6">
          {DIFFERENTIALS.map((diff) => (
            <div
              key={diff.id}
              id={`differential-row-${diff.id}`}
              className="group relative p-6 md:p-8 rounded-xl bg-gradient-to-r from-[#1A1815] to-[#12110E] border border-gold-deep/15 hover:border-gold-lux/50 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden"
            >
              {/* Gold line hover */}
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-gold-lux to-gold-premium scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>

              {/* Icon & Details (Left side) */}
              <div className="flex items-start md:items-center gap-5 md:flex-1 text-left">
                <div className="w-12 h-12 flex-shrink-0 rounded bg-gold-deep/20 border border-gold-lux/20 flex items-center justify-center text-gold-premium group-hover:scale-110 transition-transform duration-300">
                  {getIcon(diff.id, "w-6 h-6")}
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-display font-semibold text-white tracking-wide">
                    {diff.title}
                  </h4>
                  <p className="text-sm text-[#BDBDBD] leading-relaxed max-w-xl font-normal">
                    {diff.description}
                  </p>
                </div>
              </div>

              {/* Right side stats metrics (Stripe/Linear aesthetics) */}
              <div className="flex justify-end pr-4 md:border-l border-gold-deep/15 md:pl-10 text-left min-w-[150px]">
                <div>
                  <div className="text-3xl md:text-4xl font-display font-extrabold text-gold-premium tracking-tight">
                    {diff.metric}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#BDBDBD]/60 mt-0.5">
                    {diff.metricLabel}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
