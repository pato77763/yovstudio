/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crown, Sparkles, Award, ShieldCheck, Zap } from "lucide-react";

export default function AuthoritySection() {
  const points = [
    {
      title: "Estratégias Personalizadas",
      description: "Nada de modelos prontos. Cada projeto nasce após cuidadoso estudo comercial do seu mercado e comportamento dos seus potenciais clientes.",
    },
    {
      title: "Performance Orientada por Dados",
      description: "Monitoramos e otimizamos diariamente cada investimento em anúncios para extrair a máxima quantidade de leads com o melhor ROI.",
    },
    {
      title: "Tecnologia de Ponta",
      description: "Sites integrados às melhores APIs globais, carregamento instantâneo, código otimizado para SEO e segurança de última geração.",
    },
    {
      title: "Atendimento Especializado",
      description: "Suporte sob demanda de alto padrão. Você lida diretamente com estrategistas experientes focados nos seus objetivos de negócios.",
    },
  ];

  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-transparent border-t border-gold-deep/15">
      {/* Background radial highlight */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] h-[50%] bg-gold-matte/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: BRAND MANIFESTO */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 text-gold-premium font-mono text-xs uppercase tracking-widest bg-gold-deep/10 border border-gold-lux/20 px-3 py-1 rounded">
              <Crown size={12} />
              <span>Manifesto YOV Studio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
              Sua marca merece mais do que apenas{" "}
              <span className="gradient-gold-text">presença online</span>.
            </h2>

            <p className="text-[#BDBDBD] text-base md:text-lg leading-relaxed font-normal">
              Na YOV Studio, nós combinamos estratégia corporativa, tecnologia avançada e sofisticação criativa para construir ecossistemas digitais robustos, capazes de atrair, converter e escalar resultados mensuráveis. 
            </p>

            <blockquote className="border-l-2 border-gold-premium pl-6 py-2 italic text-[#F2F2F2] text-sm font-normal bg-[#161412] rounded-r">
              &quot;Agências comuns oferecem cliques e curtidas. Nós arquitetamos máquinas previsíveis de conquista de mercado, alinhando excelente estética técnica com retorno financeiro absoluto.&quot;
            </blockquote>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 rounded bg-[#1A1815] border border-gold-deep/10">
                <div className="text-2xl font-bold font-display text-gold-premium">R$ 0</div>
                <div className="text-xs text-[#BDBDBD] mt-1 font-mono uppercase tracking-wider">Investimento em Métricas de Vaidade</div>
              </div>
              <div className="p-4 rounded bg-[#1A1815] border border-gold-deep/10">
                <div className="text-2xl font-bold font-display text-gold-premium">100%</div>
                <div className="text-xs text-[#BDBDBD] mt-1 font-mono uppercase tracking-wider">Foco na Sua Margem de Lucro</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: VALUE PILLARS CHECKLIST */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {points.map((pt, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-lg bg-[#1A1815]/65 border border-gold-deep/15 hover:border-gold-lux/40 hover:bg-[#201E1A] transition-all duration-300 relative overflow-hidden text-left"
                >
                  {/* Hover visual highlight */}
                  <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-gold-lux to-gold-premium scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>

                  <div className="flex gap-4 items-start">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-gold-deep/20 border border-gold-lux/40 flex items-center justify-center text-gold-premium group-hover:bg-gold-premium group-hover:text-[#0B0A08] transition-all duration-300 shadow-[0_4px_10px_rgba(73,55,35,0.1)]">
                      {i === 0 && <Award size={16} />}
                      {i === 1 && <Zap size={16} />}
                      {i === 2 && <ShieldCheck size={16} />}
                      {i === 3 && <Sparkles size={16} />}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white tracking-wide flex items-center gap-2">
                        {pt.title}
                        <span className="text-[10px] text-gold-premium font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">✓ Ativo</span>
                      </h4>
                      <p className="text-sm text-[#BDBDBD] leading-relaxed mt-2 font-normal">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
