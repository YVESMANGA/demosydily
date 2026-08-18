"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const quickLinks = [
  { name: "Accueil", href: "/" },
  { name: "À Propos", href: "/about" },
  { name: "Notre Pédagogie", href: "/pedagogie" },
  { name: "Demander un devis", href: "/devis" },
  { name: "Contact", href: "/contact" },
];

const domainesLinks = [
  {
    name: "Hygiène Hospitalière & Industrielle",
    href: "/domaines/hygiene-hospitaliere",
  },
  {
    name: "Métiers Domestiques & Conciergerie",
    href: "/domaines/metiers-domestiques",
  },
  {
    name: "Restauration & Hôtellerie",
    href: "/domaines/restauration-hotellerie",
  },
  {
    name: "Audit & Formation Intra-entreprise",
    href: "/domaines/audit-formation",
  },
  {
    name: "Insertion & Employabilité",
    href: "/domaines/insertion-employabilite",
  },
];

export default function Footer() {
  return (
    <footer
      className={`w-full bg-[#00382E] text-white relative overflow-hidden ${jakarta.className}`}
    >
      {/* BANNIÈRE CTA SUPERIEURE */}
      <div className="border-b border-white/10 bg-[#004d40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#C5A059] text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 fill-[#C5A059]" />
                <span>Prêt à valoriser votre capital humain ?</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Obtenez un devis sur-mesure pour vos formations
              </h2>
              <p className="text-slate-300 text-sm">
                Nos experts conçoivent des programmes adaptés aux exigences de
                vos métiers et standards de qualité.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/devis"
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
          {/* COLONNE 1 : LOGO & IDENTITÉ */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative shrink-0">
                <Image
                  src="/logoss.jpg"
                  alt="CYDILY CBC Logo"
                  width={200}
                  height={65}
                  className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-sm font-black text-white leading-none uppercase tracking-tight block">
                  Faire de l'invisible
                </span>
                <span className="text-[10px] font-bold text-[#C5A059] uppercase leading-none tracking-[0.2em] mt-1 block">
                  Une force visible
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              CYDILY CBC accompagne le développement des compétences dans les
              métiers de l'hygiène, des services domestiques, de la restauration
              et de l'hôtellerie à travers des programmes d'excellence.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#C5A059] font-medium bg-white/5 border border-white/10 p-3 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#C5A059]" />
              <span>Centre de formation certifié & audits de qualité</span>
            </div>
          </div>

          {/* COLONNE 2 : NAVIGATION */}
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

          {/* COLONNE 3 : DOMAINES D'INTERVENTION */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#C5A059] pb-2 inline-block">
              Domaines
            </h3>
            <ul className="space-y-2.5">
              {domainesLinks.map((link, idx) => (
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

          {/* COLONNE 4 : CONTACT & ADRESSE */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#C5A059] pb-2 inline-block">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Ngor-Extension, Dakar, Sénégal</span>
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href="tel:+221782908479"
                  className="hover:text-[#C5A059] transition-colors"
                >
                  +221 78 290 84 79
                </a>
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href="mailto:cydily.cbc@gmail.com"
                  className="hover:text-[#C5A059] transition-colors"
                >
                  cydily.cbc@gmail.com
                </a>
              </li>
            </ul>

            {/* RÉSEAUX SOCIAUX EN BAS DU CONTACT */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-[#C5A059] text-slate-900 flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-[#C5A059] text-slate-900 flex items-center justify-center hover:bg-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-[#C5A059] text-slate-900 flex items-center justify-center hover:bg-white transition-colors"
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
        </div>
      </div>

      {/* BARRE MENTIONS LÉGALES & COPYRIGHT */}
      <div className="border-t border-white/10 bg-[#002B23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} CYDILY CBC. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/mentions-legales"
              className="hover:text-white transition-colors"
            >
              Mentions Légales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="hover:text-white transition-colors"
            >
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
