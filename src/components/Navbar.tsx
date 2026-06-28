/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenContactModal: () => void;
}

export default function Navbar({ onOpenContactModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Processo", href: "#processo" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Resultados", href: "#resultados" },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "glass-premium py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-b border-gold-deep/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* LOGO */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg md:text-xl tracking-widest text-[#F2F2F2]">
              YOV<span className="text-gold-premium"> STUDIO</span>
            </span>
            <span className="text-[8px] tracking-[0.3em] font-mono text-gold-champagne uppercase -mt-1">Digital Growth</span>
          </div>
        </a>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[#BDBDBD] hover:text-[#F2F2F2] hover:shadow-[0_1px_0_0_#CF9F6B] transition-all duration-200 py-1"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            id="nav-cta-budget"
            onClick={() => window.open("https://wa.me/5582996145573?text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20a%20YOV%20Studio.", "_blank")}
            className="relative px-5 py-2.5 text-xs tracking-wider uppercase font-semibold text-[#0B0A08] bg-gradient-to-r from-gold-champagne via-gold-premium to-gold-champagne hover:scale-105 active:scale-95 transition-all duration-300 rounded shadow-[0_4px_20px_rgba(207,159,107,0.3)] hover:shadow-[0_4px_25px_rgba(234,203,156,0.5)] cursor-pointer overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Solicitar Orçamento <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="lg:hidden flex items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#F2F2F2] hover:text-gold-premium transition-colors p-1"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed top-[72px] left-0 w-full bg-[#0B0A08]/95 backdrop-blur-xl border-b border-gold-deep/40 overflow-hidden transition-all duration-300 ease-in-out z-30 ${
          mobileMenuOpen ? "max-h-[500px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="px-6 flex flex-col gap-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#BDBDBD] hover:text-gold-premium transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button
            id="mobile-nav-cta"
            onClick={() => {
              setMobileMenuOpen(false);
              window.open("https://wa.me/5582996145573?text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20a%20YOV%20Studio.", "_blank");
            }}
            className="w-full mt-4 py-3 text-center text-xs tracking-wider uppercase font-bold text-[#0B0A08] bg-gradient-to-r from-gold-champagne to-gold-premium rounded shadow-[0_4px_15px_rgba(207,159,107,0.2)]"
          >
            Falar com um Especialista
          </button>
        </div>
      </div>
    </header>
  );
}
