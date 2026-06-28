/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, ArrowRight, Shield } from "lucide-react";

interface FinalCTAProps {
  onOpenContactModal: () => void;
}

export default function FinalCTA({ onOpenContactModal }: FinalCTAProps) {
  return (
    <section id="contato" className="relative py-24 bg-transparent overflow-hidden">
      
      {/* Decorative inner container with luxury gradients */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="relative rounded-2xl p-10 md:p-16 overflow-hidden bg-gradient-to-br from-gold-deep via-[#292015] to-[#12110D] border border-gold-lux/30 text-center shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          
          {/* Internal Glow Lights */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold-premium/15 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold-matte/10 blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-8 relative z-10">
            {/* Crown Icon / Tagline Header */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-gold-premium/20 backdrop-blur-md">
              <Sparkles size={12} className="text-gold-premium animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-premium font-semibold">
                Convite Exclusivo • YOV Executive
              </span>
            </div>

            {/* Core copy titles */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                Vamos construir o <br />
                <span className="gradient-gold-text">próximo nível</span> da sua presença digital?
              </h2>
              
              <p className="text-sm sm:text-base text-[#BDBDBD] font-normal leading-relaxed">
                Solicite uma avaliação estratégica e descubra em detalhes como podemos transformar a presença digital de sua marca em uma verdadeira máquina previsível de geração de oportunidades.
              </p>
            </div>

            {/* Master Action Trigger */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
              <button
                id="final-cta-btn"
                onClick={() => window.open("https://wa.me/5582996145573?text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20a%20YOV%20Studio.", "_blank")}
                className="w-full sm:w-auto px-10 py-4.5 text-xs tracking-wider uppercase font-extrabold text-[#0B0A08] bg-gradient-to-r from-gold-champagne via-gold-premium to-gold-champagne hover:scale-105 active:scale-95 transition-all duration-300 rounded shadow-[0_4px_25px_rgba(207,159,107,0.35)] hover:shadow-[0_4px_35px_rgba(234,203,156,0.55)] cursor-pointer group flex items-center justify-center gap-3"
              >
                Falar com um Especialista
                <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

            {/* Security stamp verification */}
            <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-[#BDBDBD]/50 pt-4">
              <Shield size={11} className="text-gold-lux" />
              <span>Conexão Segura Direct SSL Connection • Seus dados estão 100% protegidos pelas leis da LGPD</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
