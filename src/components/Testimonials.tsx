"use client";

import { ShieldCheck, Leaf, Clock, ThumbsUp, Sparkles } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const reasons = [
  {
    icon: ShieldCheck,
    title: "Personnel de Confiance",
    description: "Chaque agent est rigoureusement recruté, identifié et formé selon des standards d'exigence élevés.",
  },
  {
    icon: Leaf,
    title: "Engagés pour l'Écologie",
    description: "Utilisation exclusive de produits de nettoyage respectueux de la santé de vos équipes et de la planète.",
  },
  {
    icon: Clock,
    title: "Haute Flexibilité",
    description: "Interventions adaptées à votre emploi du temps : tôt le matin, le soir après le travail ou les week-ends.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Garantie",
    description: "Un contrôle qualité systématique après chaque intervention pour assurer un niveau de service irréprochable.",
  },
];

export default function WhyUs() {
  return (
    <section className={`w-full bg-[#004D40] text-white py-20 lg:py-28 relative overflow-hidden ${jakarta.className}`}>
      
      {/* Motifs décoratifs de fond */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[#C5A059] mb-4 backdrop-blur-sm border border-white/10">
            <Sparkles className="w-3.5 h-3.5 fill-[#C5A059]" />
            <span className="text-xs font-bold tracking-widest uppercase">
              Nos Engagements
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.2]">
            Pourquoi faire confiance à <span className="text-[#C5A059]">CYDILLY ?</span>
          </h2>
          <p className="text-slate-200 text-sm sm:text-base mt-4 font-normal">
            Nous mettons l'accent sur la qualité, la réactivité et la discrétion pour chaque espace confié.
          </p>
        </div>

        {/* CONTENU PRINCIPAL : IMAGE + GRILLE D'ARGUMENTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* SECTION IMAGE STYLEE */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Cadre décoratif doré */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#C5A059] to-transparent opacity-30 blur-sm" />

              {/* Image principale */}
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                  alt="Agent de nettoyage professionnel CYDILLY"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004D40]/80 via-transparent to-transparent" />
              </div>

              {/* Badge flottant 1 : Qualité */}
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059] flex items-center justify-center text-slate-900 font-bold">
                  100%
                </div>
                <div>
                  <p className="text-xs text-slate-300 font-medium">Service Pro</p>
                  <p className="text-sm font-bold text-white">Qualité Certifiée</p>
                </div>
              </div>

              {/* Badge flottant 2 : Statut */}
              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-2xl shadow-xl hidden sm:flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-white">Équipes Disponibles</span>
              </div>

            </div>
          </div>

          {/* GRILLE D'ARGUMENTS */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
                >
                  <div>
                    {/* Conteneur d'icône avec survol */}
                    <div className="w-12 h-12 rounded-xl bg-[#C5A059] text-slate-900 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Titre & Description */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#C5A059] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}