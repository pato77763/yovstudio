/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { PORTFOLIO_PROJECTS } from "../data";
import { PortfolioProject } from "../types";
import { ExternalLink, Target, Kanban, X, ArrowUpRight, CheckSquare } from "lucide-react";

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState<string>("Tudo");
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const filters = ["Tudo", "Web", "Landing Page", "Automação", "Identidade Visual"];

  const filteredProjects = selectedFilter === "Tudo"
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-transparent">
      {/* Dynamic line vector */}
      <div className="absolute left-[5%] bottom-0 w-[1px] h-[30%] bg-gradient-to-t from-gold-deep/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Caption */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-gold-deep/15 border border-gold-lux/30 mb-5">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-premium">Case Studies & Vitrine</span>
        </div>

        {/* Header Header */}
        <div className="max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
            Portfólio de <span className="gradient-gold-text">Alto Padrão</span>
          </h2>
          <p className="text-[#BDBDBD] text-xs sm:text-sm font-normal leading-relaxed">
            Nossos projetos são criados sob medida para expressar integridade técnica e converter oportunidades em lucros. Explore nossos últimos desenvolvimentos de luxo.
          </p>
        </div>

        {/* Tab Filter Pill Menu */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {filters.map((fil) => (
            <button
              key={fil}
              id={`portfolio-filter-${fil.replace(/\s+/g, "-")}`}
              onClick={() => setSelectedFilter(fil)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                selectedFilter === fil
                  ? "bg-[#1E1C18] text-gold-premium border border-gold-lux/30 shadow-[0_4px_15px_rgba(73,55,35,0.2)]"
                  : "text-[#BDBDBD] bg-transparent border border-white/5 hover:border-gold-matte/40 hover:text-white"
              }`}
            >
              {fil}
            </button>
          ))}
        </div>

        {/* CASE STUDIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              id={`portfolio-item-${proj.id}`}
              onClick={() => setActiveProject(proj)}
              className="group relative rounded-xl bg-gradient-to-b from-[#1C1A17] to-[#12110E] border border-gold-deep/15 overflow-hidden transition-all duration-300 hover:border-gold-lux/50 cursor-pointer shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            >
              {/* Image Frame */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-black relative">
                <img
                  src={proj.image}
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                
                {/* Metric Quick Tag Badge */}
                <div className="absolute top-4 right-4 glass-premium px-3 py-1.5 rounded border border-gold-premium/20 flex flex-col items-end">
                  <span className="text-[8px] font-mono text-[#BDBDBD] uppercase tracking-wider">{proj.stats.label}</span>
                  <span className="text-sm font-bold font-display text-gold-premium">{proj.stats.value}</span>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono uppercase bg-gold-deep/80 text-gold-premium px-2.5 py-1 rounded border border-gold-lux/40 backdrop-blur-sm">
                    {proj.category}
                  </span>
                </div>

                {/* Cover Overlay hover prompt */}
                <div className="absolute inset-0 bg-[#0B0A08]/75 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-10 h-10 rounded-full bg-gold-deep/30 border border-gold-premium/40 flex items-center justify-center text-gold-premium mx-auto">
                      <ExternalLink size={18} />
                    </div>
                    <p className="text-xs uppercase tracking-[0.2em] font-mono text-gold-premium font-bold">Ver Detalhes do Case</p>
                  </div>
                </div>
              </div>

              {/* Text Meta Content */}
              <div className="p-6">
                <div className="text-[10px] font-mono text-[#BDBDBD]/50 uppercase tracking-widest">{proj.client}</div>
                <h3 className="text-xl font-display font-bold text-white mt-1 group-hover:text-gold-premium transition-colors flex items-center justify-between">
                  {proj.title}
                  <ArrowUpRight size={16} className="text-gold-lux" />
                </h3>
                <p className="text-xs text-[#BDBDBD] leading-relaxed mt-2 line-clamp-2">
                  {proj.description}
                </p>

                {/* Subtag Pill Grid */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.tags.map((tg, idx) => (
                    <span key={idx} className="text-[8px] font-mono uppercase tracking-wider text-[#BDBDBD] border border-[#201E1A] bg-[#1A1815] px-2 py-0.5 rounded">
                      #{tg}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CASE MODAL PREVIEW DETAIL */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setActiveProject(null)}
            ></div>

            {/* Inner Card Container */}
            <div className="bg-[#141210] rounded-2xl border border-gold-lux/30 max-w-2xl w-full relative z-10 overflow-hidden shadow-2xl">
              
              {/* Header Header */}
              <div className="aspect-[16/9] w-full relative">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  id="close-portfolio-modal"
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/55 backdrop-blur-sm text-white hover:text-gold-premium hover:scale-105 transition-all flex items-center justify-center cursor-pointer border border-white/15"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-sm px-3 py-1 text-xs text-gold-premium rounded font-mono border border-gold-deep">
                  {activeProject.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 space-y-6 text-left">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-xs font-mono text-gold-lux uppercase tracking-widest">{activeProject.client}</span>
                    <h3 className="text-2xl font-display font-bold text-white mt-1">{activeProject.title}</h3>
                  </div>
                  <div className="bg-gold-deep/20 border border-gold-premium/25 p-3 rounded text-right">
                    <span className="text-[9px] font-mono text-[#BDBDBD] block uppercase tracking-wider">{activeProject.stats.label}</span>
                    <span className="text-lg font-bold font-display text-gold-premium">{activeProject.stats.value}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="text-xs uppercase tracking-wider font-mono text-white/40">Visão Geral do Escopo</h5>
                  <p className="text-sm text-[#BDBDBD] leading-relaxed">
                    Trabalho completo da YOV Studio planejado para otimizar funis, elevar a percepção de valor corporativo da marca e acelerar conversões orgânicas e pagas com performance de alto padrão.
                  </p>
                  <p className="text-xs text-[#BDBDBD]/80 leading-relaxed italic">
                    {activeProject.description}
                  </p>
                </div>

                {/* Subtag Pill Grid */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {activeProject.tags.map((tg, idx) => (
                    <span key={idx} className="text-[10px] font-mono uppercase tracking-wider text-gold-premium border border-gold-deep/20 bg-gold-deep/10 px-3 py-1 rounded">
                      {tg}
                    </span>
                  ))}
                </div>

                {/* Footer and dynamic CTA */}
                <div className="w-full h-[1px] bg-gold-deep/15 pt-2"></div>
                <div className="flex justify-between items-center bg-[#1E1C18] p-4 rounded border border-gold-deep/15">
                  <span className="text-xs text-[#BDBDBD]">Gostou desse tipo de solução?</span>
                  <button
                    id="portfolio-case-cta"
                    onClick={() => {
                      setActiveProject(null);
                      window.open("https://wa.me/5582996145573?text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20a%20YOV%20Studio.", "_blank");
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-gold-champagne to-gold-premium text-[#0B0A08] font-bold text-xs uppercase rounded tracking-wider transition-all"
                  >
                    Falar com Especialistas
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
