"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const slides = [
  {
    id: 1,
    tag: "Hygiène, Santé & Agroalimentaire",
    title: "Excellence en Sécurité Sanitaire & Normes HACCP",
    description:
      "Audit, formation certifiante et accompagnement QHSE pour les établissements de santé, l'industrie et la restauration.",
    image: "/h.png",
  },
  {
    id: 2,
    tag: "Métiers Domestiques & Hôtellerie",
    title: "Professionnalisation de l'Intendance & du Housekeeping",
    description:
      "Formations sur-mesure pour gouvernantes, employés de maison et personnel hôtelier. Élevons la gestion domestique vers l'excellence.",
    image: "/h.png",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section
      className={`relative w-full bg-[#0F2C23] text-white overflow-hidden min-h-[90vh] flex items-center ${jakarta.className}`}
    >
      {/* 1. Fond Faux-Split / Halos de lumière aux couleurs CYDILY */}
      <div className="absolute top-0 right-0 w-full lg:w-[48%] h-full bg-[#143B2F] z-0 hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      {/* 2. CONTENU DU HERO */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* COLONNE GAUCHE : TEXTES & VALEURS OFFICIELLES */}
          <div className="lg:col-span-7 space-y-6 lg:pr-6">
            {/* Badge Institutionnel / Slogan */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold tracking-wider uppercase">
              <Award className="w-4 h-4" />
              <span>Faire de l'invisible, une force visible</span>
            </div>

            {/* Titre dynamique selon le pôle */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight min-h-[120px] sm:min-h-[140px] flex items-center">
              {slides[currentIndex].title}
            </h1>

            {/* Description du pôle */}
            <p className="text-base sm:text-lg text-gray-200 max-w-xl leading-relaxed font-normal">
              {slides[currentIndex].description}
            </p>

            {/* Piliers CYDILY CBC */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm font-semibold text-gray-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Audit &
                Expertise
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Formations
                Certifiantes
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />{" "}
                Accompagnement QHSE
              </span>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/services/formations"
                className="bg-[#C5A059] hover:bg-[#b08d49] text-[#0F2C23] px-7 py-3.5 rounded-sm font-black text-xs tracking-wider uppercase transition-all duration-300 shadow-lg flex items-center gap-3 group"
              >
                <span>Explorer les Formations</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/devis"
                className="px-7 py-3.5 rounded-sm font-black text-xs uppercase tracking-wider bg-transparent border border-white/30 hover:bg-white/10 text-white transition-all text-center"
              >
                Demander un Devis / Audit
              </Link>
            </div>
          </div>

          {/* COLONNE DROITE : SLIDER DÉDIÉ AUX PÔLES */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-none h-[400px] sm:h-[480px] flex items-center justify-center">
              {/* CERCLE D'ARRIÈRE-PLAN DORÉ */}
              <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 shadow-2xl backdrop-blur-sm" />

              {/* IMAGE PERSONNE DÉTOURÉE */}
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out z-10 ${
                    index === currentIndex
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-0 translate-x-8 scale-95 pointer-events-none"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.tag}
                    className="object-contain h-full w-auto drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
                  />
                </div>
              ))}

              {/* BADGE PÔLE ACTIF */}
              <div className="absolute bottom-4 left-2 sm:left-4 z-20 bg-[#0F2C23]/90 backdrop-blur-md p-4 rounded-sm shadow-xl border border-[#C5A059]/30 max-w-[240px]">
                <div className="flex items-center gap-2 text-[#C5A059] font-bold text-xs uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  Pôle d'Excellence
                </div>
                <p className="text-xs text-gray-200 font-medium">
                  {slides[currentIndex].tag}
                </p>
              </div>

              {/* COMMANDES DU SLIDER */}
              <div className="absolute bottom-4 right-2 sm:right-4 z-30 flex items-center gap-2 bg-[#0F2C23]/90 p-1.5 rounded-full shadow-lg border border-[#C5A059]/30 backdrop-blur-sm">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full hover:bg-[#C5A059] hover:text-[#0F2C23] text-white transition-colors"
                  aria-label="Précédent"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex gap-1 px-1">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentIndex
                          ? "w-4 bg-[#C5A059]"
                          : "w-1.5 bg-gray-600"
                      }`}
                      aria-label={`Pôle ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-2 rounded-full hover:bg-[#C5A059] hover:text-[#0F2C23] text-white transition-colors"
                  aria-label="Suivant"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
