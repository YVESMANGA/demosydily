"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Images Unsplash traitées via le proxy de détourage remove.bg
const slides = [
  {
    id: 1,
    // Agent avec du matériel de lavage détouré
    image: "h.png",
    quote: "Une prestation d'exception et un souci du détail incomparable.",
    author: "CYDILLY Experience",
  },
  {
    id: 2,
    // Personne avec équipement de nettoyage professionnel
    image: "h.png",
    quote: "La transformation visuelle de notre marque a été spectaculaire.",
    author: "Design Sur-Mesure",
  },
  {
    id: 3,
    // Agent de nettoyage avec pulvérisateur et gant
    image: "h.png",
    quote: "Une équipe réactive, créative et extrêmement professionnelle.",
    author: "Savoir-Faire & Qualité",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className={`relative w-full bg-[#FBFBFB] text-slate-900 overflow-hidden min-h-[90vh] flex items-center ${jakarta.className}`}>
      
      {/* 1. FOND SPLIT VERT ÉMERAUDE */}
      <div 
        className="absolute top-0 right-0 w-full lg:w-[45%] h-full bg-[#004D40] z-0 hidden lg:block transition-all duration-700"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />
      <div className="absolute bottom-0 left-0 w-full h-[45%] bg-[#004D40] z-0 lg:hidden" />

      {/* 2. CONTENU DU HERO */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* COLONNE GAUCHE : TEXTES & BOUTONS */}
          <div className="lg:col-span-6 space-y-6 lg:pr-4">
            <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-slate-400 uppercase">
              CYDILLY CLEANING SERVICE
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
              Faire de <br />
              <span className="text-slate-900">l'invisible</span> une forme <br />
              <span className="text-[#004D40]">propres & éclatante.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed font-normal">
              Des services de nettoyage professionnels adaptés à vos espaces professionnels et résidentiels. Un résultat impeccable garanti.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="bg-[#004D40] hover:bg-[#00382E] text-white px-7 py-3.5 rounded-sm font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-3 group"
              >
                <span>Obtenir un devis</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="flex items-center gap-3 text-xs font-bold text-slate-800 uppercase tracking-wider group hover:text-[#004D40] transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-[#C5A059] group-hover:bg-[#b08d49] text-slate-900 flex items-center justify-center transition-transform group-hover:scale-105 shadow-md">
                  <Play className="w-4 h-4 fill-slate-900 ml-0.5" />
                </div>
                <span>Découvrir nos services</span>
              </Link>
            </div>
          </div>

          {/* COLONNE DROITE : SLIDER PERSONNE DÉTOURÉE SUR FOND TRANSPARENT */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-none h-[420px] sm:h-[520px] flex items-center justify-center">
              
              {/* CERCLE D'ARRIÈRE-PLAN DORÉ */}
              <div className="absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] rounded-full bg-[#C5A059] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 shadow-lg" />

              {/* ÉTINCELLES */}
              <div className="absolute top-4 right-8 lg:right-12 z-20 text-[#C5A059] flex gap-1">
                <Sparkles className="w-6 h-6 fill-[#C5A059]" />
                <Sparkles className="w-4 h-4 fill-[#C5A059] -mt-2" />
              </div>

              {/* PERSONNE SANS FOND (PNG DÉTOURÉ) */}
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
  src="/h.png"
  alt="CYDILLY Cleaning"
  className="object-contain h-full w-auto drop-shadow-2xl"
/>
                </div>
              ))}

              {/* BADGE TÉMOIGNAGE */}
              <div className="absolute bottom-2 left-2 sm:left-6 z-20 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-lg shadow-xl border border-slate-100 max-w-[220px] sm:max-w-[260px] transition-all duration-500">
                <p className="text-[#C5A059] text-2xl font-serif font-black leading-none mb-1">“</p>
                <p className="text-xs text-slate-700 font-medium leading-relaxed italic">
                  {slides[currentIndex].quote}
                </p>
                <p className="text-[10px] font-bold text-[#004D40] uppercase tracking-wider mt-2">
                  — {slides[currentIndex].author}
                </p>
              </div>

              {/* COMMANDES DU SLIDER */}
              <div className="absolute bottom-2 right-2 lg:-right-4 z-30 flex items-center gap-2 bg-white/90 p-1.5 rounded-full shadow-lg border border-slate-100 backdrop-blur-sm">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full hover:bg-[#004D40] hover:text-white text-slate-700 transition-colors"
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
                        idx === currentIndex ? "w-4 bg-[#004D40]" : "w-1.5 bg-slate-300"
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-2 rounded-full hover:bg-[#004D40] hover:text-white text-slate-700 transition-colors"
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