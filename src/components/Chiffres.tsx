"use client";

import {
  Award,
  BookOpen,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const stats = [
  {
    id: 1,
    icon: Award,
    value: "100%",
    label: "Conformité Normes",
    description: "Normes HACCP & Hygiène Hospitalière",
    // Premier bloc avec fond sombre (#0F2C23)
    bgColor: "bg-[#0F2C23] text-white",
    valueColor: "text-white",
    labelColor: "text-slate-200",
  },
  {
    id: 2,
    icon: BookOpen,
    value: "+98%",
    label: "Taux de Réussite",
    description: "Formations certifiantes & accompagnement",
    // Deuxième bloc avec fond vert foncé (#004d40)
    bgColor: "bg-[#004d40] text-white",
    valueColor: "text-white",
    labelColor: "text-emerald-100",
  },
  {
    id: 3,
    icon: ShieldCheck,
    value: "360°",
    label: "Accompagnement QHSE",
    description: "Audit, conseil & suivi sur-mesure",
    // Troisième bloc avec fond émeraude moyen (#00695c)
    bgColor: "bg-[#00695c] text-white",
    valueColor: "text-white",
    labelColor: "text-teal-100",
  },
  {
    id: 4,
    icon: HeartHandshake,
    value: "Exigence",
    label: "& Humanité",
    description: "Valorisation des métiers du service",
    // Quatrième bloc d'accentuation doré (#C5A059)
    bgColor: "bg-[#C5A059] text-[#0F2C23]",
    valueColor: "text-[#0F2C23]",
    labelColor: "text-[#0F2C23]/90",
  },
];

export default function StatsBar() {
  return (
    <section
      className={`w-full bg-slate-50 pt-16 lg:pt-24 relative z-20 ${jakarta.className}`}
    >
      {/* SECTION DU HAUT : VISUEL + TEXTE DE PRÉSENTATION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 lg:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* COLONNE GAUCHE : IMAGE */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[320px] sm:h-[400px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200/80">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
                alt="Équipe CYDILY CBC"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C23]/60 via-transparent to-transparent" />
            </div>
            {/* Halo décoratif discret */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#C5A059]/20 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* COLONNE DROITE : TITRE ET TEXTE */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004d40]/10 border border-[#004d40]/20 text-[#004d40]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
              <span className="text-xs font-extrabold tracking-widest uppercase">
                Chiffres Clés
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              CYDILY CBC en{" "}
              <span className="text-[#004d40]">Quelques Chiffres</span>
            </h2>

            <p className="text-slate-600 text-base lg:text-lg leading-relaxed font-normal max-w-2xl">
              Chaque intervention et chaque formation s'appuient sur une rigueur
              opérationnelle sans compromis. Notre engagement envers la qualité
              et la valorisation des compétences se traduit par un suivi
              personnalisé et des résultats concrets pour nos partenaires.
            </p>
          </div>
        </div>
      </div>

      {/* BANNIÈRE INFÉRIEURE : 4 BLOCS COLORÉS ATTENANTS */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 shadow-2xl rounded-t-[32px] lg:rounded-t-[40px] overflow-hidden">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            // Coin arrondi spécifique sur la toute première carte sur grand écran
            const isFirst = index === 0;

            return (
              <div
                key={stat.id}
                className={`p-8 lg:p-10 flex flex-col justify-between ${stat.bgColor} ${
                  isFirst ? "rounded-tl-[32px] lg:rounded-tl-[40px]" : ""
                } transition-all duration-300 hover:brightness-105`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="w-7 h-7 opacity-90" />
                    <span className="text-xs font-bold uppercase tracking-wider opacity-60">
                      0{stat.id}
                    </span>
                  </div>

                  <div
                    className={`text-4xl sm:text-5xl font-black tracking-tight ${stat.valueColor}`}
                  >
                    {stat.value}
                  </div>

                  <div
                    className={`text-sm sm:text-base font-bold uppercase tracking-wide mt-2 ${stat.labelColor}`}
                  >
                    {stat.label}
                  </div>
                </div>

                <p className="text-xs font-medium opacity-80 mt-6 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
