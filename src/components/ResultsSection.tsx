/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { RECHARTS_ROI_DATA, RECHARTS_CONVERSIONS_DATA } from "../data";
import { BarChart3, LineChart, ShieldCheck, DollarSign, Target, Percent } from "lucide-react";

export default function ResultsSection() {
  const [activeTab, setActiveTab] = useState<"roi" | "conversions">("roi");

  // Custom premium glass tooltip for Recharts graph
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-premium p-4 rounded-lg border border-gold-premium/20 text-left text-xs space-y-2">
          <p className="font-mono text-[10px] text-gold-premium uppercase tracking-widest">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="flex justify-between gap-8 items-center" style={{ color: entry.color || "#FFF" }}>
              <span className="opacity-80 font-sans">{entry.name}:</span>
              <span className="font-mono font-bold">
                {entry.name.includes("ROI") || entry.name.includes("Estratégia") 
                  ? `${entry.value}x` 
                  : `${entry.value}%`}
              </span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="resultados" className="relative py-24 md:py-32 bg-transparent border-y border-gold-deep/15">
      <div className="absolute top-[10%] right-[5%] w-[35%] h-[35%] rounded-full bg-gold-deep/10 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16 text-left">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-gold-deep/15 border border-gold-lux/30">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-premium">Previsibilidade Real</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
              Transformamos Investimentos em <span className="gradient-gold-text">Resultados Mensuráveis</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 text-left lg:text-right">
            <p className="text-[#BDBDBD] text-sm md:text-base leading-relaxed max-w-lg lg:ml-auto">
              Compromisso estrito com a inteligência competitiva. Acompanhe abaixo o impacto comparativo de nossas estratégias em comparação com a média das agências tradicionais.
            </p>
          </div>
        </div>

        {/* Dynamic Analytics Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Static Numeric Badges */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            
            {/* Nav controls */}
            <div className="p-2.5 rounded-xl bg-[#1A1815] border border-gold-deep/15 space-y-2 text-left">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#BDBDBD]/60 px-2">Toggle Visualizer</span>
              
              <button
                id="results-tab-roi"
                onClick={() => setActiveTab("roi")}
                className={`w-full p-4 rounded-lg text-xs font-semibold tracking-wider transition-all duration-300 flex items-center justify-between cursor-pointer ${
                  activeTab === "roi" 
                    ? "bg-gradient-to-r from-gold-deep to-gold-matte text-[#EACB9C] border border-gold-lux/30" 
                    : "text-[#BDBDBD] hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="flex items-center gap-2"><DollarSign size={15} /> Multiplicador ROI</span>
                <span className="font-mono text-xs opacity-70">Ativo</span>
              </button>

              <button
                id="results-tab-conv"
                onClick={() => setActiveTab("conversions")}
                className={`w-full p-4 rounded-lg text-xs font-semibold tracking-wider transition-all duration-300 flex items-center justify-between cursor-pointer ${
                  activeTab === "conversions" 
                    ? "bg-gradient-to-r from-gold-deep to-gold-matte text-[#EACB9C] border border-gold-lux/30" 
                    : "text-[#BDBDBD] hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="flex items-center gap-2"><Percent size={15} /> Taxas de Conversão</span>
                <span className="font-mono text-xs opacity-70">Ativo</span>
              </button>
            </div>

            {/* Impact Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 flex-1">
              <div className="p-5 rounded-xl bg-gradient-to-b from-[#1C1A17] to-[#12110E] border border-gold-deep/15 text-left relative overflow-hidden">
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <span className="font-semibold text-xs">+300%</span>
                </div>
                <div className="text-[10px] font-mono text-[#BDBDBD]/60 uppercase tracking-wider">Média de Tráfego</div>
                <div className="text-2xl font-bold text-white mt-1">Escala de ROAS</div>
                <div className="text-xs text-[#BDBDBD] mt-2">Custo de Lead (CPL) reduzido em até 48% em campanhas premium.</div>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-b from-[#1C1A17] to-[#12110E] border border-gold-deep/15 text-left relative overflow-hidden">
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gold-premium/10 flex items-center justify-center text-gold-premium">
                  <span className="font-semibold text-xs">A++</span>
                </div>
                <div className="text-[10px] font-mono text-[#BDBDBD]/60 uppercase tracking-wider">Métrica de Velocidade</div>
                <div className="text-2xl font-bold text-white mt-1">Sistemas Rápidos</div>
                <div className="text-xs text-[#BDBDBD] mt-2">Arquiteturas ultraleves com nota máxima no Google Mobile Speed Page.</div>
              </div>
            </div>

          </div>

          {/* Right Panel: Recharts interactive chart inside gold border container */}
          <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl bg-[#141210] border border-gold-premium/10 shadow-2xl flex flex-col justify-between">
            
            {/* Dynamic Card Header */}
            <div className="flex justify-between items-center pb-6 border-b border-gold-deep/10 mb-6 text-left">
              <div>
                <h4 className="text-lg font-display font-semibold text-white">
                  {activeTab === "roi" ? "Retorno Sobre Investimento (ROI) Acumulado" : "Eficiência de Conversão Comparada"}
                </h4>
                <p className="text-xs text-[#BDBDBD]/70 mt-1">
                  {activeTab === "roi" 
                    ? "Monitoramento do faturamento proporcional ao capital injetado em anúncios pagos (Google/Meta Ads)." 
                    : "Porcentagem média de contatos / leads gerados em comparação com a concorrência geral."}
                </p>
              </div>
              
              <div className="hidden sm:flex items-center gap-1 bg-[#1A1815] border border-gold-deep/15 p-1 rounded">
                <span className="w-2 h-2 rounded-full bg-gold-premium"></span>
                <span className="text-[9px] font-mono text-gold-premium uppercase tracking-widest px-2">YOV Data</span>
              </div>
            </div>

            {/* Recharts Container */}
            <div className="w-full flex-1 min-h-[300px]" relative-id="recharts-chart-wrapper">
              <ResponsiveContainer width="100%" height={300}>
                {activeTab === "roi" ? (
                  <AreaChart data={RECHARTS_ROI_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorNexa" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#AD8861" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#AD8861" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorMarket" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#493723" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#493723" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#1A1815" strokeDasharray="3 3" />
                    <XAxis dataKey="month" stroke="#BDBDBD_30" style={{ fontSize: 10, fontFamily: "monospace" }} />
                    <YAxis stroke="#BDBDBD_30" style={{ fontSize: 10, fontFamily: "monospace" }} tickFormatter={(val) => `${val}x`} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: 11, paddingTop: 15 }} />
                    <Area 
                      type="monotone" 
                      name="Com YOV Studio" 
                      dataKey="Com YOV Studio" 
                      stroke="#CF9F6B" 
                      strokeWidth={2.5} 
                      fillOpacity={1} 
                      fill="url(#colorNexa)" 
                    />
                    <Area 
                      type="monotone" 
                      name="Sem Estratégia" 
                      dataKey="Sem Estratégia" 
                      stroke="#493723" 
                      strokeWidth={1.5} 
                      fillOpacity={1} 
                      fill="url(#colorMarket)" 
                    />
                  </AreaChart>
                ) : (
                  <BarChart data={RECHARTS_CONVERSIONS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid stroke="#1A1815" strokeDasharray="3 3" />
                    <XAxis dataKey="category" stroke="#BDBDBD_30" style={{ fontSize: 9 }} />
                    <YAxis stroke="#BDBDBD_30" style={{ fontSize: 10, fontFamily: "monospace" }} tickFormatter={(val) => `${val}%`} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: 11, paddingTop: 15 }} />
                    <Bar name="Criação YOV Studio" dataKey="Criação YOV Studio" fill="#EACB9C" radius={[4, 4, 0, 0]} barSize={28} />
                    <Bar name="Média Mercado" dataKey="Média Mercado" fill="#493723" radius={[4, 4, 0, 0]} barSize={28} />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
