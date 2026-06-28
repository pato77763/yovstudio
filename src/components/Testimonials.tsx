/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TESTIMONIALS } from "../data";
import { Star, Quote, Heart } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 md:py-32 bg-transparent border-y border-gold-deep/15">
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-[35%] h-[35%] rounded-full bg-gold-matte/5 blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Header Block */}
        <div className="max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-gold-deep/15 border border-gold-lux/30 mb-2">
            <Heart size={12} className="text-gold-premium animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-premium">Reconhecimento Corporativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
            Parcerias de <span className="gradient-gold-text">Sucesso e Escala</span>
          </h2>
          <p className="text-[#BDBDBD] text-xs sm:text-sm font-normal">
            Depoimentos reais de marcas que confiaram no nosso ecossistema técnico de crescimento e multiplicaram seus faturamentos periódicos.
          </p>
        </div>

        {/* Testimonials cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              id={`testimonial-card-${test.id}`}
              className="relative p-8 rounded-xl bg-gradient-to-b from-[#1C1A17] to-[#12110E] border border-gold-deep/15 flex flex-col justify-between hover:border-gold-lux/40 transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.5)] group h-full"
            >
              {/* Premium Quote Accessory Decorative Element */}
              <div className="absolute top-6 right-8 text-gold-deep/20 group-hover:text-gold-lux/10 transition-colors duration-300">
                <Quote size={52} />
              </div>

              <div className="space-y-6 relative z-10">
                {/* Stars Indicator */}
                <div className="flex items-center gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#CF9F6B" stroke="none" />
                  ))}
                </div>

                {/* Main Quote Text */}
                <p className="text-sm text-[#F2F2F2] leading-relaxed italic font-normal">
                  &quot;{test.text}&quot;
                </p>
              </div>

              {/* Lower Author Bio Row */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gold-deep/10">
                <div>
                  <h4 className="text-sm font-display font-semibold text-white tracking-wide">
                    {test.name}
                  </h4>
                  <p className="text-[11px] text-[#BDBDBD] mt-0.5">
                    {test.role} • <strong className="text-gold-premium font-normal">{test.company}</strong>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
