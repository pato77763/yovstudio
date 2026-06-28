/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { ArrowRight, Play, Server, Layers, BarChart3, Radio, Sparkles, Smartphone, Monitor } from "lucide-react";

interface HeroProps {
  onOpenContactModal: () => void;
}

export default function Hero({ onOpenContactModal }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"performance" | "automation" | "interface">("performance");
  const [ticker, setTicker] = useState(128450.00);

  // Growth counter effect for premium dashboard
  useEffect(() => {
    const timer = setInterval(() => {
      setTicker((prev) => prev + (Math.random() * 4.5));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen pt-32 pb-24 overflow-hidden flex items-center bg-transparent">
      {/* Absolute Cinematic Lights */}
      <div className="absolute top-[10%] left-[5%] w-[45%] h-[45%] rounded-full bg-gold-deep/15 blur-[120px] premium-background-glow pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-gold-lux/10 blur-[130px] premium-background-glow pointer-events-none"></div>
      
      {/* Decorative Matrix Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,136,97,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
      
      {/* Ambient lines in background */}
      <div className="absolute left-0 right-0 top-[30%] h-[1px] bg-gradient-to-r from-transparent via-gold-matte/10 to-transparent"></div>
      <div className="absolute left-0 right-0 top-[60%] h-[1px] bg-gradient-to-r from-transparent via-gold-deep/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: TEXT & CTAs */}
          <div className="lg:col-span-6 flex flex-col space-y-8 animate-fade-in pt-6">
            
            {/* Main Content */}
            <div className="space-y-4">
              <p className="text-lg sm:text-xl md:text-2xl text-[#F2F2F2] font-normal leading-relaxed max-w-xl font-display tracking-tight">
                Criamos experiências digitais altamente sofisticadas através de sites premium, landing pages, automações inteligentes e estratégias de tráfego pago desenhadas para escalar seu crescimento.
              </p>
            </div>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-2 gap-4 py-2 border-y border-gold-deep/15">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-display text-gold-premium">98.4%</div>
                <div className="text-[10px] uppercase tracking-wider font-mono text-[#BDBDBD] mt-0.5">Satisfação</div>
              </div>
              <div className="border-l border-gold-deep/15 pl-4">
                <div className="text-xl sm:text-2xl font-bold font-display text-gold-premium">3.2x</div>
                <div className="text-[10px] uppercase tracking-wider font-mono text-[#BDBDBD] mt-0.5">Conversão Média</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                id="hero-cta-quote"
                onClick={() => window.open("https://wa.me/5582996145573?text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20a%20YOV%20Studio.", "_blank")}
                className="px-8 py-4 bg-gradient-to-r from-gold-champagne via-gold-premium to-gold-champagne hover:from-gold-premium hover:to-gold-champagne text-[#0B0A08] font-bold text-sm tracking-widest uppercase rounded shadow-[0_8px_30px_rgba(207,159,107,0.25)] hover:shadow-[0_8px_40px_rgba(234,203,156,0.45)] hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
              >
                Solicitar Orçamento
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href="#portfolio"
                className="px-8 py-4 bg-[#1A1815] hover:bg-[#25221F] border border-gold-matte/30 hover:border-gold-lux/50 text-[#F2F2F2] hover:text-[#F2F2F2] font-semibold text-sm tracking-widest uppercase rounded transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                Ver Portfólio
              </a>
            </div>

            {/* Proof text */}
            <div className="flex items-center gap-3 text-xs text-[#BDBDBD]/60 font-mono">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Atendimento Exclusivo Ativo para Novas Contratações</span>
            </div>
            
          </div>

          {/* RIGHT: PREMIUM DEVICE AND DASHBOARD MOCKUP */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* Interactive Control Pill */}
            <div className="flex bg-[#1A1815] border border-gold-deep/20 p-1 rounded-full mb-6 z-20 w-fit">
              <button
                id="hero-tab-perf"
                onClick={() => setActiveTab("performance")}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  activeTab === "performance" ? "bg-gradient-to-r from-gold-deep to-gold-matte text-[#EACB9C]" : "text-[#BDBDBD] hover:text-white"
                }`}
              >
                <BarChart3 size={13} /> Tráfego Pago
              </button>
              <button
                id="hero-tab-auto"
                onClick={() => setActiveTab("automation")}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  activeTab === "automation" ? "bg-gradient-to-r from-gold-deep to-gold-matte text-[#EACB9C]" : "text-[#BDBDBD] hover:text-white"
                }`}
              >
                <Server size={13} /> Automações
              </button>
              <button
                id="hero-tab-interface"
                onClick={() => setActiveTab("interface")}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  activeTab === "interface" ? "bg-gradient-to-r from-gold-deep to-gold-matte text-[#EACB9C]" : "text-[#BDBDBD] hover:text-white"
                }`}
              >
                <Layers size={13} /> Web Premium
              </button>
            </div>

            {/* DEVICE MOCKUP CONTAINER */}
            <div className="relative w-full aspect-video md:aspect-[16/10] max-w-xl mx-auto bg-[#030303] rounded-2xl border border-gold-premium/15 p-[5px] shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(147,111,81,0.15)] group">
              
              {/* Gold light shine inside of container */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gold-deep/5 via-transparent to-gold-premium/5 pointer-events-none"></div>
              
              {/* Camera dot */}
              <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-4 h-[4px] rounded-full bg-[#1A1815] z-30"></div>

              {/* SCREEN CONTENT */}
              <div className="relative w-full h-full bg-[#141210] rounded-xl overflow-hidden flex flex-col border border-gold-deep/35">
                
                {/* Simulated Window Frame */}
                <div className="h-7 bg-[#1A1815] border-b border-gold-deep/15 px-4 flex items-center justify-between z-20">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-900/40"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-900/40"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-900/40"></div>
                  </div>
                  <div className="text-[10px] font-mono text-gold-champagne-light/50 select-none">
                    dashboard.yovstudio.com.br
                  </div>
                  <div className="w-3 h-3 flex items-center">
                    <Radio size={10} className="text-emerald-500 animate-pulse" />
                  </div>
                </div>

                {/* TAB WINDOW COMPONENT ACCORDING TO STATE */}
                <div className="flex-1 p-4 flex flex-col justify-between relative overflow-hidden text-left">
                  
                  {/* Dynamic Backdrop shine base for active state */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-premium/10 rounded-full blur-3xl pointer-events-none"></div>

                  {activeTab === "performance" && (
                    <div className="flex-1 flex flex-col justify-between">
                      {/* Sub-Header */}
                      <div className="flex justify-between items-center pb-2 border-b border-gold-deep/10">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider font-mono text-[#BDBDBD]/60">YOV Studio Ads Tracker</div>
                          <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">ROAS & Escala de Tráfego</h4>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] bg-emerald-900/30 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-mono">LIVE CAMPAIGN</span>
                        </div>
                      </div>

                      {/* Stat Tiles */}
                      <div className="grid grid-cols-3 gap-2 my-2">
                        <div className="p-2 rounded bg-gradient-to-b from-[#1E1C18] to-[#12110E] border border-gold-deep/15">
                          <div className="text-[9px] font-mono text-[#BDBDBD]/50 uppercase">Investido</div>
                          <div className="text-xs font-bold font-mono text-white mt-0.5">R$ 14.285,40</div>
                          <div className="text-[8px] text-emerald-400 font-mono mt-0.5">↑ +18%</div>
                        </div>
                        <div className="p-2 rounded bg-gradient-to-b from-[#1E1C18] to-[#12110E] border border-gold-deep/15">
                          <div className="text-[9px] font-mono text-[#BDBDBD]/50 uppercase">Faturamento</div>
                          <div className="text-xs font-bold font-mono text-gold-premium mt-0.5">R$ {ticker.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                          <div className="text-[8px] text-emerald-400 font-mono mt-0.5">↑ +242.5%</div>
                        </div>
                        <div className="p-2 rounded bg-gradient-to-b from-[#1E1C18] to-[#12110E] border border-gold-deep/15">
                          <div className="text-[9px] font-mono text-[#BDBDBD]/50 uppercase">ROAS Global</div>
                          <div className="text-xs font-bold font-mono text-emerald-400 mt-0.5">8.95x</div>
                          <div className="text-[8px] text-emerald-400 font-mono mt-0.5">Média Escala</div>
                        </div>
                      </div>

                      {/* Visual SVG chart simulation */}
                      <div className="flex-1 relative flex items-end h-20 pt-2">
                        <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="chartGold" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#EACB9C" stopOpacity="0.4"/>
                              <stop offset="100%" stopColor="#493723" stopOpacity="0"/>
                            </linearGradient>
                          </defs>
                          {/* Grid Lines */}
                          <line x1="0" y1="25" x2="400" y2="25" stroke="#493723" strokeWidth="0.5" strokeDasharray="5,5" />
                          <line x1="0" y1="50" x2="400" y2="50" stroke="#493723" strokeWidth="0.5" strokeDasharray="5,5" />
                          <line x1="0" y1="75" x2="400" y2="75" stroke="#493723" strokeWidth="0.5" strokeDasharray="5,5" />
                          
                          {/* Baseline and Gradient Chart */}
                          <path d="M0,90 Q50,70 100,75 T200,45 T300,30 T400,10 L400,100 L0,100 Z" fill="url(#chartGold)" />
                          <path d="M0,90 Q50,70 100,75 T200,45 T300,30 T400,10" fill="none" stroke="#EACB9C" strokeWidth="2.5" />
                          
                          {/* Interactive Points */}
                          <circle cx="200" cy="45" r="4" fill="#CF9F6B" stroke="#0B0A08" strokeWidth="1.5" />
                          <circle cx="300" cy="30" r="4" fill="#EACB9C" stroke="#0B0A08" strokeWidth="1.5" />
                          <circle cx="400" cy="10" r="4" fill="#EACB9C" stroke="#0B0A08" strokeWidth="1.5 animate-ping" />
                        </svg>
                        
                        {/* Hover Overlay info */}
                        <div className="absolute top-2 left-[45%] glass-premium-accent px-2 py-1 rounded text-[8px] font-mono text-gold-premium pointer-events-none">
                          Campanha Escala: <strong className="text-white">ROAS 11.2x</strong>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "automation" && (
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-center pb-2 border-b border-gold-deep/10">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider font-mono text-[#BDBDBD]/60">Automações & Pipelines</div>
                          <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">Integrações de API ativa</h4>
                        </div>
                        <div className="text-right">
                          <span className="text-[9px] text-[#BDBDBD] font-mono bg-gold-deep/30 border border-gold-lux/30 px-2 py-0.5 rounded">Active Node</span>
                        </div>
                      </div>

                      {/* Animated Integration Stack flow */}
                      <div className="grid grid-cols-5 gap-2 my-auto items-center text-center">
                        <div className="p-2 rounded bg-[#1c1a17] border border-gold-deep/30 flex flex-col items-center">
                          <Smartphone size={16} className="text-gold-champagne mb-1" />
                          <span className="text-[7px] font-mono uppercase text-[#BDBDBD]/60">Lead WhatsApp</span>
                        </div>
                        <div className="flex justify-center">
                          <span className="w-full h-[1px] bg-gradient-to-r from-gold-matte to-emerald-500 relative">
                            <span className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                          </span>
                        </div>
                        <div className="p-2 rounded bg-gold-deep/20 border border-gold-premium/40 flex flex-col items-center relative">
                          <span className="absolute -top-1 -right-1 flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-premium opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-premium"></span>
                          </span>
                          <span className="font-mono text-[9px] font-semibold text-gold-premium mb-1">IA AGENT</span>
                          <span className="text-[7px] font-mono uppercase text-[#BDBDBD]/60">YOV Prompt</span>
                        </div>
                        <div className="flex justify-center">
                          <span className="w-full h-[1px] bg-gradient-to-r from-emerald-500 to-gold-matte"></span>
                        </div>
                        <div className="p-2 rounded bg-[#1c1a17] border border-gold-deep/30 flex flex-col items-center">
                          <Server size={16} className="text-gold-champagne mb-1" />
                          <span className="text-[7px] font-mono uppercase text-[#BDBDBD]/60">CRM Lead Hub</span>
                        </div>
                      </div>

                      {/* Log Screen */}
                      <div className="p-2.5 rounded bg-[#070605] border border-gold-deep/20 font-mono text-[8px] text-[#BDBDBD] h-16 overflow-hidden mt-2">
                        <p className="text-gold-premium">[ST-1] webhook_received: New lead via Meta Ads form</p>
                        <p className="text-white opacity-80">[ST-2] ia_analyzer: Lead categorized, target tier &apos;A-Executive&apos;</p>
                        <p className="text-emerald-400">[ST-3] whatsapp_api: Executing personalized proposal flow... OK (200)</p>
                        <p className="text-[#BDBDBD]/40">[ST-4] hubspot_sync: Added deal pipeline &apos;Escopo Premium&apos;...</p>
                      </div>
                    </div>
                  )}

                  {activeTab === "interface" && (
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-center pb-2 border-b border-gold-deep/10">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider font-mono text-[#BDBDBD]/60">UX Design & Interface</div>
                          <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">Premium Visual Studio</h4>
                        </div>
                        <div className="text-right">
                          <span className="text-[9px] text-[#BDBDBD] font-mono bg-gold-deep/30 border border-gold-lux/30 px-2 py-0.5 rounded">60 FPS</span>
                        </div>
                      </div>

                      {/* Wireframe Mock Site View */}
                      <div className="flex-1 border border-gold-deep/20 rounded bg-[#1e1c18] p-3 mt-2 flex flex-col gap-2 justify-center relative shadow-inner overflow-hidden">
                        
                        {/* Beautiful layout preview representing high-end watchmaker website */}
                        <div className="absolute top-1 right-2 flex gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-premium"></div>
                          <div className="w-4 h-1 bg-white/20 rounded"></div>
                        </div>

                        <div className="space-y-1 mt-1">
                          <div className="text-[7px] font-mono text-gold-premium uppercase tracking-[0.2em] font-bold">L&apos;Horizon Royale</div>
                          <h5 className="text-[11px] font-display font-bold text-white max-w-[170px] leading-tight">Art of Horology & Timeless Prestige</h5>
                        </div>

                        {/* Miniature layout grid */}
                        <div className="grid grid-cols-3 gap-2 pt-1">
                          <div className="aspect-square bg-gradient-to-tr from-gold-deep/40 to-[#12110E] border border-gold-lux/25 rounded p-1 flex items-end justify-between">
                            <span className="text-[6px] font-mono text-[#BDBDBD]">CHF 4.100</span>
                          </div>
                          <div className="aspect-square bg-gradient-to-tr from-gold-deep/40 to-[#12110E] border border-gold-lux/25 rounded p-1 flex items-end justify-between">
                            <span className="text-[6px] font-mono text-[#BDBDBD]">CHF 8.750</span>
                          </div>
                          <div className="aspect-square bg-gradient-to-tr from-gold-deep/40 to-[#12110E] border border-gold-lux/25 rounded p-1 flex items-end justify-between">
                            <span className="text-[6px] font-mono text-[#BDBDBD]">CHF 12.500</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[6px] text-[#BDBDBD]/60 font-mono border-t border-white/5 pt-1.5">
                          <span>Luxury Retail eCommerce</span>
                          <span className="text-gold-premium">Active Live Preview</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tiny status footer inside device */}
                  <div className="text-[8px] font-mono text-[#BDBDBD]/30 flex justify-between pt-1 border-t border-gold-deep/10">
                    <span>YOV Studio Suite v1.4</span>
                    <span>Secure Cloud Ingress (Port 3000)</span>
                  </div>

                </div>

              </div>

              {/* Floating Miniature Smartphone Mockup overlapping Laptop */}
              <div className="absolute -bottom-6 -right-6 w-[120px] h-[220px] bg-[#030303] rounded-[24px] border border-gold-premium/20 p-[4px] shadow-2xl hidden md:block">
                <div className="w-full h-full bg-[#141210] rounded-[20px] overflow-hidden flex flex-col relative border border-gold-deep/30">
                  {/* Speaker hole inside bezel */}
                  <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-10 h-[3px] rounded bg-[#2D2A26] z-30"></div>
                  {/* Dynamic Island style dot */}
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black z-30 flex items-center justify-center p-[2px]">
                    <div className="w-[4px] h-[4px] bg-blue-500 rounded-full"></div>
                  </div>

                  <div className="flex-1 p-2 flex flex-col justify-between pt-8 text-left">
                    <div className="space-y-1">
                      <div className="h-5 w-5 rounded bg-gold-deep/30 border border-gold-lux/30 flex items-center justify-center text-[8px] font-bold text-gold-premium font-display">N</div>
                      <div className="text-[7px] font-mono uppercase text-[#BDBDBD]/60">YOV Studio Mobile</div>
                      <div className="text-[9px] font-display font-medium text-white leading-none">Crescimento sob controle</div>
                    </div>

                    {/* Progress Circle Visual */}
                    <div className="my-2 flex justify-center scale-90">
                      <div className="relative w-16 h-16 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="32" cy="32" r="26" stroke="#493723" strokeWidth="4" fill="transparent" />
                          <circle cx="32" cy="32" r="26" stroke="#CF9F6B" strokeWidth="4" fill="transparent" strokeDasharray="163" strokeDashoffset="40" strokeLinecap="round" />
                        </svg>
                        <div className="absolute font-mono text-[9px] font-bold text-white">+312%</div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[8px] font-semibold text-[#BDBDBD] bg-gold-deep/20 p-1 rounded border border-gold-lux/20 text-center">
                        ROI Calculado
                      </div>
                      <button
                        id="hero-phone-cta"
                        onClick={() => window.open("https://wa.me/5582996145573?text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20a%20YOV%20Studio.", "_blank")}
                        className="w-full py-1 text-[8px] uppercase tracking-wider font-bold bg-[#F2F2F2] hover:bg-gold-premium hover:text-[#0B0A08] text-[#0B0A08] rounded text-center transition-colors"
                      >
                        Agendar Briefing
                      </button>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            {/* Glowing reflection under dashboard */}
            <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold-premium/40 to-transparent blur-md mt-16 scale-150 pointer-events-none"></div>

          </div>

        </div>
      </div>
    </section>
  );
}
