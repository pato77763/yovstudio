/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { X, CheckCircle, Sparkles, Send, FileText, Calendar, Building, Mail, Phone, User, CheckCircle2 } from "lucide-react";
import { CRMContactRequest } from "../types";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState<CRMContactRequest>({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: [],
    budget: "R$ 5.000 a R$ 15.000",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [leadCode, setLeadCode] = useState("");

  if (!isOpen) return null;

  const servicesOption = [
    "Desenvolvimento Web Premium",
    "Landing Pages de Alta Conversão",
    "Gestão de Tráfego Pago (Ads)",
    "Automação de Marketing & CRM",
    "Chatbots Inteligentes com IA",
    "Design & Identidade Visual",
  ];

  const handleCheckboxChange = (srv: string) => {
    setFormData((prev) => {
      const isExist = prev.interest.includes(srv);
      const updated = isExist
        ? prev.interest.filter((item) => item !== srv)
        : [...prev.interest, srv];
      return { ...prev, interest: updated };
    });
  };

  const generateLeadId = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "NXL-";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const getTierRating = () => {
    if (formData.budget.includes("50.000") || formData.budget.includes("15.000 a R$ 50.000")) {
      return { label: "Tier A (Enterprise)", color: "text-amber-400 border-amber-500/20 bg-amber-950/20" };
    }
    return { label: "Tier B (Growth)", color: "text-gold-premium border-gold-lux/20 bg-gold-deep/20" };
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Por favor, preencha nome, e-mail e telefone.");
      return;
    }

    setLoading(true);

    // Simulate luxury API call integration & CRM upload
    setTimeout(() => {
      setLeadCode(generateLeadId());
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const tier = getTierRating();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>

      {/* Main Card */}
      <div className="bg-[#0B0A08] rounded-2xl border border-gold-lux/30 max-w-lg w-full relative z-10 overflow-hidden shadow-2xl animate-fade-in max-h-[90vh] overflow-y-auto">
        
        {/* Decorative Top Gold Bar */}
        <div className="h-[3px] bg-gradient-to-r from-gold-deep via-gold-premium to-gold-deep"></div>

        <button
          id="close-contact-modal"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#BDBDBD] hover:text-[#F2F2F2] transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div className="p-6 md:p-8 space-y-6">
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-gold-deep/10 border border-gold-lux/30">
                <Sparkles size={11} className="text-gold-premium animate-pulse" />
                <span className="text-[9px] font-mono uppercase tracking-widest text-gold-premium">Solicitação de Briefing</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white tracking-tight">Co-construa seu Próximo Nível</h3>
              <p className="text-xs text-[#BDBDBD] leading-relaxed">
                Preencha os dados abaixo. Nossos estrategistas juniores e seniores farão uma avaliação gratuita da sua marca em até 24 horas úteis.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              {/* Name field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-gold-premium uppercase tracking-widest block">Nome Completo *</label>
                <div className="relative">
                  <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#BDBDBD]/60" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-[#161412] text-white border border-gold-deep/20 rounded focus:border-gold-premium focus:outline-none text-sm transition-all shadow-inner"
                    placeholder="Ex: Alexandre de Souza"
                  />
                </div>
              </div>

              {/* Two Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-gold-premium uppercase tracking-widest block">E-mail Corporativo *</label>
                  <div className="relative">
                    <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#BDBDBD]/60" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#161412] text-white border border-gold-deep/20 rounded focus:border-gold-premium focus:outline-none text-sm transition-all"
                      placeholder="alexandre@suaempresa.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-gold-premium uppercase tracking-widest block">WhatsApp / Telefone *</label>
                  <div className="relative">
                    <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#BDBDBD]/60" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#161412] text-white border border-gold-deep/20 rounded focus:border-gold-premium focus:outline-none text-sm transition-all"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
              </div>

              {/* Company & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-gold-premium uppercase tracking-widest block">Nome da Empresa</label>
                  <div className="relative">
                    <Building size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#BDBDBD]/60" />
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#161412] text-white border border-gold-deep/20 rounded focus:border-gold-premium focus:outline-none text-sm transition-all"
                      placeholder="Ex: YOV Ltda"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-gold-premium uppercase tracking-widest block">Estimativa de Investimento</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-[#161412] text-white border border-gold-deep/20 rounded focus:border-gold-premium focus:outline-none text-sm transition-all"
                  >
                    <option value="R$ 3.000 a R$ 5.000">R$ 3.000 a R$ 5.000</option>
                    <option value="R$ 5.000 a R$ 15.000">R$ 5.000 a R$ 15.000</option>
                    <option value="R$ 15.000 a R$ 50.000">R$ 15.000 a R$ 50.000</option>
                    <option value="R$ 50.000+">R$ 50.000+</option>
                  </select>
                </div>
              </div>

              {/* Checkboxes for Services Interest */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gold-premium uppercase tracking-widest block">Serviços Pretendidos</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-3 bg-[#161412] rounded border border-gold-deep/15">
                  {servicesOption.map((srv) => (
                    <label key={srv} className="flex items-center gap-2.5 text-xs text-[#BDBDBD] cursor-pointer hover:text-white select-none py-1">
                      <input
                        type="checkbox"
                        checked={formData.interest.includes(srv)}
                        onChange={() => handleCheckboxChange(srv)}
                        className="rounded border-gold-deep text-gold-premium focus:ring-gold-deep bg-black w-4 h-4 cursor-pointer accent-gold-premium"
                      />
                      <span>{srv}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message Notes */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-gold-premium uppercase tracking-widest block">Observações Adicionais (Opcional)</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2.5 bg-[#161412] text-white border border-gold-deep/20 rounded focus:border-gold-premium focus:outline-none text-xs transition-all"
                  placeholder="Conte-nos brevemente sobre seus objetivos..."
                />
              </div>

              {/* Submit Button */}
              <button
                id="submit-briefing-form"
                type="submit"
                disabled={loading}
                className="w-full py-4 text-xs font-bold tracking-widest uppercase text-[#0B0A08] bg-gradient-to-r from-gold-champagne via-gold-premium to-gold-champagne rounded hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_4px_20px_rgba(207,159,107,0.25)] flex items-center justify-center gap-2.5 cursor-pointer"
              >
                {loading ? (
                  <span className="flex items-center gap-2"><svg className="animate-spin h-4 w-4 text-black" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg> Catalogando Briefing...</span>
                ) : (
                  <>
                    <Send size={13} /> Enviar Briefing Exclusivo
                  </>
                )}
              </button>

            </form>
          </div>
        ) : (
          /* SUCCESS RESPONSE PANEL (CRM PIPELINE SIMULATION) */
          <div className="p-8 text-center space-y-6">
            <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle size={32} />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-display font-bold text-white tracking-tight">Briefing Recebido com Sucesso</h3>
              <p className="text-sm text-[#BDBDBD] max-w-sm mx-auto leading-relaxed">
                Parabéns {formData.name.split(" ")[0]}, seus dados foram injetados em nosso funil de atendimento e classificados como lead prioritário.
              </p>
            </div>

            {/* Simulated Lead Database Card */}
            <div className="p-5 rounded-lg bg-[#12110F] border border-gold-deep/30 text-left space-y-3.5 relative overflow-hidden">
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded font-mono text-[8px] uppercase tracking-wider border border-white/5 bg-black/40 text-gold-premium">
                Lead Cataloged
              </div>

              <div className="flex items-center gap-1.5 pb-2.5 border-b border-white/5">
                <span className="text-[10px] font-mono text-gold-premium tracking-widest uppercase">Lead Code: {leadCode}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[9px] font-mono text-[#BDBDBD]/50 uppercase block">Empresa</span>
                  <span className="font-semibold text-[#F2F2F2]">{formData.company || "Pessoa Física"}</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-[#BDBDBD]/50 uppercase block">Contato</span>
                  <span className="font-semibold text-[#F2F2F2]">{formData.phone}</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-[#BDBDBD]/50 uppercase block">E-mail</span>
                  <span className="font-semibold text-[#F2F2F2] text-xs truncate block">{formData.email}</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-[#BDBDBD]/50 uppercase block">Classificação Sênior</span>
                  <span className={`inline-block px-1.5 py-0.5 rounded border text-[9px] font-mono font-semibold ${tier.color}`}>
                    {tier.label}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                id="view-diagnostic-btn"
                onClick={() => {
                  alert(`Seu código do Lead é: ${leadCode}. Um especialista sênior YOV Studio entrará em contato via WhatsApp no número ${formData.phone} nas próximas horas.`);
                }}
                className="w-full py-3.5 bg-[#1E1C18] border border-gold-deep/35 hover:bg-[#25221F] text-gold-premium font-semibold text-xs uppercase rounded tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText size={14} /> Visualizar Status do Diagnóstico
              </button>

              <button
                id="close-success-modal"
                onClick={onClose}
                className="text-xs text-[#BDBDBD]/60 hover:text-white transition-colors cursor-pointer"
              >
                Voltar para a Página Principal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
