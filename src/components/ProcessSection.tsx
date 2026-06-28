/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PROCESS_STEPS } from "../data";
import { ArrowRight, ChevronRight, Activity } from "lucide-react";

export default function ProcessSection() {
  return (
    <section id="processo" className="relative py-24 md:py-32 bg-transparent overflow-hidden border-b border-gold-deep/15">
      {/* Background radial lines */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-gold-matte/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-deep/15 border border-gold-lux/30 mb-2">
            <Activity size={12} className="text-gold-premium animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-premium">Workflow Metodológico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white">
            Como Nós <span className="gradient-gold-text">Desafiamos o Comum</span>
          </h2>
          <p className="text-[#BDBDBD] text-base leading-relaxed">
            Nossa rota metodológica garante precisão absoluta. Combinamos rigor técnico com análises comerciais pontuais para criar projetos sem margem para falha.
          </p>
        </div>

        {/* Chronological Grid with Intersected Progress Line */}
        <div className="relative">
          
          {/* Horizontal Connecting Line for Desktop */}
          <div className="absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-gold-deep/20 via-gold-lux/40 to-gold-deep/20 hidden lg:block pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                id={`process-step-${step.number}`}
                className="group flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
              >
                {/* Visual Milestone Bubble */}
                <div className="relative z-20 flex justify-center items-center">
                  
                  {/* Outer circle glow on hover */}
                  <div className="absolute -inset-3 rounded-full bg-gold-premium/5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
                  
                  {/* Main Bubble */}
                  <div className="w-16 h-16 rounded-full bg-[#1A1815] border-2 border-gold-deep group-hover:border-gold-premium text-gold-premium group-hover:text-[#0B0A08] group-hover:bg-gradient-to-br group-hover:from-gold-champagne group-hover:to-gold-premium font-display font-extrabold text-lg flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.6)] transition-all duration-300">
                    {step.number}
                  </div>
                </div>

                {/* Text Block */}
                <div className="space-y-2 max-w-xs">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#BDBDBD]/60 flex items-center justify-center lg:justify-start gap-1">
                    <span>{step.subtitle}</span>
                    {idx < 4 && <ChevronRight size={10} className="text-gold-lux hidden lg:inline" />}
                  </div>
                  
                  <h4 className="text-lg font-display font-semibold text-white group-hover:text-gold-premium transition-colors">
                    {step.title}
                  </h4>
                  
                  <p className="text-xs text-[#BDBDBD] font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
