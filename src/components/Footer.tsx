/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crown, Heart, ArrowUp, Instagram, Linkedin, Twitter, MessageSquare } from "lucide-react";

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative bg-transparent pt-20 pb-12 border-t border-gold-deep/15 text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Upper Row: Brand info and sitemaps */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-gold-deep/10">
          
          {/* Brand Info (col-span-5) */}
          <div className="md:col-span-5 space-y-6">
            <a href="#inicio" className="flex items-center gap-2 group">
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg md:text-xl tracking-widest text-[#F2F2F2]">
                  YOV<span className="text-gold-premium"> STUDIO</span>
                </span>
                <span className="text-[8px] tracking-[0.3em] font-mono text-gold-champagne uppercase -mt-1">Digital Growth</span>
              </div>
            </a>
            
            <p className="text-[#BDBDBD] text-xs max-w-sm leading-relaxed font-normal">
              Especialistas em escalar negócios tradicionais e digitais de alto nível. Unificamos design visual impecável, campanhas de tráfego sintonizadas e ecossistemas automatizados de faturamento.
            </p>

            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/nexalume_" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#1A1815] hover:bg-gold-deep/30 text-[#BDBDBD] hover:text-gold-premium border border-white/5 hover:border-gold-lux/30 flex items-center justify-center transition-all">
                <Instagram size={14} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#1A1815] hover:bg-gold-deep/30 text-[#BDBDBD] hover:text-gold-premium border border-white/5 hover:border-gold-lux/30 flex items-center justify-center transition-all">
                <Linkedin size={14} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#1A1815] hover:bg-gold-deep/30 text-[#BDBDBD] hover:text-gold-premium border border-white/5 hover:border-gold-lux/30 flex items-center justify-center transition-all">
                <Twitter size={14} />
              </a>
              <a href="https://wa.me/5582996145573?text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20a%20YOV%20Studio." target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#1A1815] hover:bg-gold-deep/30 text-[#BDBDBD] hover:text-gold-premium border border-white/5 hover:border-gold-lux/30 flex items-center justify-center transition-all">
                <MessageSquare size={14} />
              </a>
            </div>
          </div>

          {/* Sitemaps (col-span-3) */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="text-[10px] font-mono uppercase tracking-widest text-gold-premium">Navegação</h5>
            <ul className="space-y-2.5">
              <li>
                <a href="#inicio" className="text-xs text-[#BDBDBD] hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="text-xs text-[#BDBDBD] hover:text-white transition-colors">Portfólio de Serviços</a>
              </li>
              <li>
                <a href="#portfolio" className="text-xs text-[#BDBDBD] hover:text-white transition-colors">Projetos Executados</a>
              </li>
              <li>
                <a href="#resultados" className="text-xs text-[#BDBDBD] hover:text-white transition-colors">Métricas de Sucesso</a>
              </li>
            </ul>
          </div>

          {/* Core Areas Tag Cloud (col-span-4) */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="text-[10px] font-mono uppercase tracking-widest text-gold-premium">Portfólio de Atuação</h5>
            <div className="flex flex-wrap gap-2.5">
              <span className="text-[10px] font-mono text-[#BDBDBD] bg-[#1A1815] border border-white/5 px-2.5 py-1 rounded">Sites Institucionais</span>
              <span className="text-[10px] font-mono text-[#BDBDBD] bg-[#1A1815] border border-white/5 px-2.5 py-1 rounded">Landing Pages</span>
              <span className="text-[10px] font-mono text-[#BDBDBD] bg-[#1A1815] border border-white/5 px-2.5 py-1 rounded">Tráfego Pago (Ads)</span>
              <span className="text-[10px] font-mono text-[#BDBDBD] bg-[#1A1815] border border-white/5 px-2.5 py-1 rounded">Automação & CRM</span>
              <span className="text-[10px] font-mono text-[#BDBDBD] bg-[#1A1815] border border-white/5 px-2.5 py-1 rounded">Integrações de APIs</span>
              <span className="text-[10px] font-mono text-[#BDBDBD] bg-[#1A1815] border border-white/5 px-2.5 py-1 rounded">Chatbots IA</span>
            </div>
          </div>

        </div>

        {/* Lower copyright row */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-[10px] font-mono text-[#BDBDBD]/40">
            © {currentYear} YOV STUDIO. Todos os direitos reservados. CNPJ 00.000.000/0000-00.
          </p>
          
          <button
            id="scroll-to-top"
            onClick={scrollUp}
            className="group flex items-center gap-2 text-[10px] font-mono text-gold-premium uppercase tracking-widest py-1 px-3.5 rounded bg-gold-deep/10 border border-gold-lux/20 hover:bg-gold-premium hover:text-[#0B0A08] transition-all cursor-pointer"
          >
            <span>Retornar ao Topo</span>
            <ArrowUp size={11} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
