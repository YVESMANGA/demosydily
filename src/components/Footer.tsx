"use client";

import Link from "next/link";
import { Sparkles, Phone, Mail, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const quickLinks = [
  { name: "Accueil", href: "/" },
  { name: "À Propos", href: "/a-propos" },
  { name: "Nos Services", href: "/services" },
  { name: "Pourquoi Nous Choisir", href: "/#pourquoi-nous" },
  { name: "Témoignages", href: "/#temoignages" },
  { name: "FAQ", href: "/#faq" },
];

const servicesLinks = [
  { name: "Nettoyage Résidentiel", href: "/services/residentiel" },
  { name: "Entretien de Bureaux", href: "/services/bureaux" },
  { name: "Nettoyage Fin de Chantier", href: "/services/fin-de-chantier" },
  { name: "Nettoyage Vitres & Façades", href: "/services/vitres" },
];

export default function Footer() {
  return (
    <footer className={`w-full bg-[#002D25] text-white relative overflow-hidden ${jakarta.className}`}>
      
      {/* SECTION CTA INCLUSE EN HAUT DU FOOTER */}
      <div className="border-b border-white/10 bg-[#00382E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 fill-[#C5A059]" />
                <span>Prêt à sublimer vos espaces ?</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Obtenez un devis gratuit et sans engagement
              </h2>
              <p className="text-slate-300 text-sm">
                Nos équipes interviennent rapidement avec des prestations adaptées à vos besoins.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#C5A059] hover:bg-[#b38e48] text-slate-900 px-8 py-4 rounded-sm font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span>Demander un devis</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* COLONNE 1 : PRÉSENTATION & BRANDING */}
          <div className="lg:col-span-4 space-y-6">
          <Link href="/" className="inline-flex items-center gap-3 group">
  {/* Remplace l'image ci-dessous par l'URL ou le chemin de ton icône */}
  <img
    src="/logoss.jpg"
    alt="CYDILLY Icone"
    className="h-14 w-auto object-contain group-hover:scale-105 transition-transform"
  />
  <span className="text-2xl font-extrabold tracking-wider text-white">
    CYDILY<span className="text-[#C5A059]">.</span>
  </span>
</Link>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              CYDILLY est votre partenaire de confiance pour des services de nettoyage professionnel sur-mesure. Nous assurons la propreté et l'hygiène de vos espaces résidentiels et professionnels.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#C5A059] font-medium bg-white/5 border border-white/10 p-3 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#C5A059]" />
              <span>Entreprise assurée & agents certifiés</span>
            </div>
          </div>

          {/* COLONNE 2 : NAVIGATION RAPIDE */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#C5A059] pb-2 inline-block">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-300 hover:text-[#C5A059] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE 3 : PRESTATIONS */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#C5A059] pb-2 inline-block">
              Nos Prestations
            </h3>
            <ul className="space-y-2.5">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-300 hover:text-[#C5A059] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE 4 : COORDONNÉES */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#C5A059] pb-2 inline-block">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Dakar, Sénégal</span>
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="tel:+221770000000" className="hover:text-[#C5A059] transition-colors">
                  +221 77 000 00 00
                </a>
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="mailto:contact@cydilly.com" className="hover:text-[#C5A059] transition-colors">
                  contact@cydilly.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BARRE MENTIONS LÉGALES & COPYRIGHT */}
      <div className="border-t border-white/10 bg-[#001F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} CYDILLY. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions Légales
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-white transition-colors">
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}