"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, ChevronDown, Menu, X, Phone, MapPin } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "800"],
});

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);

  // Animation de rotation du logo
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  return (
    <header className="w-full bg-white shadow-sm font-sans sticky top-0 z-50">
      {/* 1. TOP BAR */}
      <div className="relative flex items-center justify-between border-b border-gray-100 min-h-[42px] overflow-hidden">
        {/* Infos de contact CYDILY CBC */}
        <div className="relative z-10 bg-[#004d40] text-white px-4 md:px-8 py-2.5 text-xs flex items-center gap-4 sm:gap-6 pr-12 [clip-path:polygon(0_0,_100%_0,_92%_100%,_0%_100%)]">
          <a
            href="mailto:cydily.cbc@gmail.com"
            className="flex items-center gap-2 hover:text-[#C5A059] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="hidden xs:inline">cydily.cbc@gmail.com</span>
          </a>
          <a
            href="tel:+221782908479"
            className="flex items-center gap-2 hover:text-[#C5A059] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>+221 78 290 84 79</span>
          </a>
          <div className="hidden lg:flex items-center gap-2 border-l border-white/20 pl-4">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Ngor-Extension, Dakar</span>
          </div>
        </div>

        {/* Réseaux Sociaux */}
        <div className="flex items-center gap-2 px-4 md:px-8">
          <a
            href="#"
            className="w-7 h-7 rounded-full bg-[#C5A059] text-white flex items-center justify-center hover:bg-[#004d40] transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-7 h-7 rounded-full bg-[#C5A059] text-white flex items-center justify-center hover:bg-[#004d40] transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-7 h-7 rounded-full bg-[#C5A059] text-white flex items-center justify-center hover:bg-[#004d40] transition-colors"
            aria-label="Instagram"
          >
            <svg
              className="w-3.5 h-3.5 fill-none stroke-current stroke-2 stroke-round"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-28 flex items-center justify-between">
        {/* LOGO ET SLOGAN CYDILY CBC */}
        <Link
          href="/"
          className="flex items-center gap-4 py-2 overflow-visible group"
        >
          <div className="relative flex-shrink-0">
            <Image
              src="/logoss.jpg"
              alt="CYDILY CBC Logo"
              width={320}
              height={100}
              className={`h-16 sm:h-20 w-auto object-contain transition-all duration-1000 ease-in-out ${
                isAnimating
                  ? "rotate-[360deg] brightness-110 drop-shadow-[0_0_15px_rgba(197,160,89,0.7)]"
                  : "rotate-0 brightness-100"
              }`}
              priority
            />
          </div>

          <div
            className={`flex flex-col justify-center w-fit ${jakarta.className}`}
          >
            <span className="text-sm sm:text-base font-black text-[#004d40] leading-none uppercase tracking-tight block">
              Faire de l'invisible
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-[#C5A059] uppercase leading-none tracking-[0.2em] mt-1.5 block">
              Une force visible
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU LINKS */}
        <nav className="hidden xl:flex items-center gap-7 text-[14px] font-semibold text-gray-700">
          <Link
            href="/"
            className="hover:text-[#C5A059] transition-colors py-2"
          >
            Accueil
          </Link>

          {/* DROPDOWN: À PROPOS */}
          <div className="group relative py-6 flex items-center gap-1 cursor-pointer hover:text-[#C5A059] transition-colors">
            <Link href="#">À propos</Link>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-[#C5A059] transition-transform group-hover:rotate-180" />

            <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-md border-t-2 border-[#C5A059] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2 text-sm">
              <Link
                href="#"
                className="block px-4 py-2.5 text-gray-700 hover:bg-[#004d40]/5 hover:text-[#004d40] font-medium"
              >
                Mot de la Fondatrice
              </Link>
              <Link
                href="#"
                className="block px-4 py-2.5 text-gray-700 hover:bg-[#004d40]/5 hover:text-[#004d40] font-medium"
              >
                Nos Valeurs & Vision
              </Link>
            </div>
          </div>

          {/* DROPDOWN: FORMATIONS */}
          <div className="group relative py-6 flex items-center gap-1 cursor-pointer hover:text-[#C5A059] transition-colors">
            <span>Formations</span>

            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-[#C5A059] transition-transform group-hover:rotate-180" />

            <div className="absolute top-full left-0 w-80 bg-white shadow-xl rounded-b-md border-t-2 border-[#C5A059] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2 text-sm">
              <Link
                href="/formations/technicien-de-surface"
                className="block px-4 py-2.5 text-gray-700 hover:bg-[#004d40]/5 hover:text-[#004d40] font-medium"
              >
                Technicien de Surface
              </Link>

              <Link
                href="/formations/intendant-de-cuisine"
                className="block px-4 py-2.5 text-gray-700 hover:bg-[#004d40]/5 hover:text-[#004d40] font-medium"
              >
                Intendant de Cuisine
              </Link>

              <Link
                href="/formations/housekeeping"
                className="block px-4 py-2.5 text-gray-700 hover:bg-[#004d40]/5 hover:text-[#004d40] font-medium"
              >
                Housekeeping
              </Link>

              <Link
                href="/formations/aide-a-domicile"
                className="block px-4 py-2.5 text-gray-700 hover:bg-[#004d40]/5 hover:text-[#004d40] font-medium"
              >
                Aide à Domicile
              </Link>

              <Link
                href="/formations/excellence-comportementale"
                className="block px-4 py-2.5 text-gray-700 hover:bg-[#004d40]/5 hover:text-[#004d40] font-medium"
              >
                Excellence Comportementale
              </Link>
            </div>
          </div>

          <Link
            href="#"
            className="hover:text-[#C5A059] transition-colors py-2"
          >
            Audit-Conseil Hygiène
          </Link>

          <Link
            href="#"
            className="hover:text-[#C5A059] transition-colors py-2"
          >
            Contact
          </Link>
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden xl:block">
          <Link
            href="#"
            className="bg-[#004d40] hover:bg-[#C5A059] text-white px-6 py-3 text-xs font-black tracking-wider uppercase transition-all shadow-md rounded-sm inline-block"
          >
            Demander un devis
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden p-2 text-gray-700 hover:text-[#004d40]"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-4 font-semibold text-gray-700 max-h-[80vh] overflow-y-auto">
          <Link
            href="/"
            className="block text-[#004d40] text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Accueil
          </Link>

          {/* Accordéon À Propos */}
          <div>
            <button
              onClick={() => toggleMobileDropdown("about")}
              className="flex items-center justify-between w-full py-1 hover:text-[#C5A059]"
            >
              <span>À propos</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${activeMobileDropdown === "about" ? "rotate-180" : ""}`}
              />
            </button>
            {activeMobileDropdown === "about" && (
              <div className="pl-4 mt-2 space-y-2 text-sm text-gray-600 border-l-2 border-[#C5A059]">
                <Link
                  href="/about#fondatrice"
                  className="block py-1 hover:text-[#004d40]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mot de la Fondatrice
                </Link>
                <Link
                  href="/about#valeurs"
                  className="block py-1 hover:text-[#004d40]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Nos Valeurs & Vision
                </Link>
              </div>
            )}
          </div>

          {/* Accordéon Domaines d'intervention */}
          <div>
            <button
              onClick={() => toggleMobileDropdown("domaines")}
              className="flex items-center justify-between w-full py-1 hover:text-[#C5A059]"
            >
              <span>Domaines d'intervention</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${activeMobileDropdown === "domaines" ? "rotate-180" : ""}`}
              />
            </button>
            {activeMobileDropdown === "domaines" && (
              <div className="pl-4 mt-2 space-y-2 text-sm text-gray-600 border-l-2 border-[#C5A059]">
                <Link
                  href="/domaines/hygiene-hospitaliere"
                  className="block py-1 hover:text-[#004d40]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hygiène Hospitalière & Industrielle
                </Link>
                <Link
                  href="/domaines/metiers-domestiques"
                  className="block py-1 hover:text-[#004d40]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Métiers Domestiques & Conciergerie
                </Link>
                <Link
                  href="/domaines/restauration-hotellerie"
                  className="block py-1 hover:text-[#004d40]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Restauration & Hôtellerie
                </Link>
                <Link
                  href="/domaines/audit-formation"
                  className="block py-1 hover:text-[#004d40]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Audit & Formation Intra-entreprise
                </Link>
                <Link
                  href="/domaines/insertion-employabilite"
                  className="block py-1 hover:text-[#004d40]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Insertion & Employabilité
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/pedagogie"
            className="block hover:text-[#C5A059]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Notre Pédagogie
          </Link>

          <Link
            href="/contact"
            className="block hover:text-[#C5A059]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/devis"
            className="block text-center bg-[#004d40] hover:bg-[#C5A059] text-white py-3 text-xs font-bold tracking-wider uppercase mt-4 transition-colors rounded-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Demander un devis
          </Link>
        </div>
      )}
    </header>
  );
}
