"use client";

import {
  ShieldCheck,
  Leaf,
  Clock,
  ThumbsUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const reasons = [
  {
    icon: ShieldCheck,
    title: "Personnel de Confiance",
    description:
      "Chaque agent est rigoureusement recruté, identifié et formé selon des standards d'exigence élevés.",
  },
  {
    icon: Leaf,
    title: "Engagés pour l'Écologie",
    description:
      "Utilisation exclusive de produits de nettoyage respectueux de la santé de vos équipes et de la planète.",
  },
  {
    icon: Clock,
    title: "Haute Flexibilité",
    description:
      "Interventions adaptées à votre emploi du temps : tôt le matin, le soir ou le week-end.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Garantie",
    description:
      "Un contrôle qualité systématique après chaque intervention pour un niveau de service irréprochable.",
  },
];

export default function WhyUs() {
  return (
    <section
      className={`w-full bg-[#004D40] text-white py-20 lg:py-28 relative overflow-hidden ${jakarta.className}`}
    >
      {/* Motifs décoratifs de fond */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* COLONNE GAUCHE : TEXTE & ARGUMENTS */}
          <div className="lg:col-span-6 space-y-8">
            {/* EN-TÊTE DE SECTION */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white text-[#004D40] font-bold text-xs uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
                Nos Engagements
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Pourquoi faire confiance à{" "}
                <span className="text-[#C5A059]">CYDILLY ?</span>
              </h2>

              <p className="text-emerald-100/80 text-sm sm:text-base font-normal leading-relaxed">
                Nous mettons l'accent sur la qualité, la réactivité et la
                discrétion pour chaque espace confié. Découvrez ce qui fait
                notre différence.
              </p>
            </div>

            {/* LISTE DES ARGUMENTS (STYLE CARTES HORIZONTALES) */}
            <div className="space-y-4">
              {reasons.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-start gap-4 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-[#C5A059] text-[#C5A059] flex items-center justify-center shrink-0 bg-[#004D40]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* BOUTON D'ACTION */}
            <div className="pt-2">
              <button className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#C5A059] text-[#004D40] font-extrabold text-sm hover:bg-white transition-all shadow-lg hover:shadow-xl active:scale-95">
                En Savoir Plus
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* COLONNE DROITE : GRILLE D'IMAGES & CARTE FLOTTANTE D'EXPÉRIENCE */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Image Top Left */}
              <div className="h-48 sm:h-60 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
                  alt="Agent de nettoyage professionnel"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Top Right */}
              <div className="h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&q=80"
                  alt="Nettoyage et hygiène"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Bottom Left */}
              <div className="h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-white/10 -mt-16 sm:-mt-20">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
                  alt="Équipe d'entretien"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Bottom Right */}
              <div className="h-48 sm:h-60 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80"
                  alt="Service d'hygiène et propreté"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CARTE CENTRALE FLOTTANTE (BADGE D'EXPÉRIENCE) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C5A059] text-[#004D40] p-6 sm:p-8 rounded-3xl shadow-2xl z-20 border-4 border-[#004D40] text-center min-w-[180px] sm:min-w-[220px]">
                <span className="text-4xl sm:text-5xl font-black tracking-tight block leading-none">
                  10+
                </span>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider block mt-2 leading-tight">
                  Années d'Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
