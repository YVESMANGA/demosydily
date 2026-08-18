"use client";

import {
  HeartHandshake,
  ShieldCheck,
  Award,
  Users,
  Sparkles,
  Quote,
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const values = [
  {
    icon: HeartHandshake,
    title: "Humanité & Bienveillance",
    description:
      "Un accompagnement adapté et respectueux qui place la personne humaine au centre de l'apprentissage.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    tag: "Pilier 01",
  },
  {
    icon: ShieldCheck,
    title: "Hygiène & Rigueur",
    description:
      "L'application stricte des normes sanitaires et des protocoles professionnels les plus exigeants.",
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    tag: "Pilier 02",
  },
  {
    icon: Users,
    title: "Responsabilité & Engagement",
    description:
      "Un impact durable sur la société en redonnant sens, fierté et employabilité à chaque apprenant.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80",
    tag: "Pilier 03",
  },
  {
    icon: Award,
    title: "Excellence & Intégrité",
    description:
      "Des standards élevés d'éthique et de qualité dans toutes nos interventions et formations.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    tag: "Pilier 04",
  },
];

export default function ValuesSection() {
  return (
    <section
      className={`w-full bg-[#004d40] py-24 lg:py-32 relative overflow-hidden ${jakarta.className}`}
    >
      {/* EFFETS LUMINEUX SUBTILS EN ARRIÈRE-PLAN */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-300/5 rounded-full blur-[100px]" />
        {/* Motif de grille subtil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* EN-TÊTE DE LA SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-[#C5A059]/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#C5A059]">
              Notre Raison d'Être
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
            Former avec exigence et humanité vers{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#E2C792] to-[#C5A059]">
              l’excellence.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-emerald-100/75 leading-relaxed font-normal max-w-2xl mx-auto">
            Chez <strong className="text-white font-medium">CYDILY CBC</strong>,
            nous croyons que la vraie performance repose sur le respect et la
            valorisation de chaque individu. Notre engagement est de transformer
            le savoir-faire en une véritable fierté professionnelle.
          </p>
        </div>

        {/* GRILLE DES VALEURS AVEC IMAGES & GLASSMORPHISM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-[#C5A059]/40 hover:bg-white/[0.07] transition-all duration-500 flex flex-col justify-between p-7 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#C5A059]/10"
              >
                {/* Image d'arrière-plan avec masque dégradé subtil */}
                <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004d40] via-[#004d40]/80 to-[#004d40]/40" />
                </div>

                {/* Contenu de la carte */}
                <div className="relative z-10">
                  {/* Icône + Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C5A059] to-[#9E7C3B] text-[#004d40] flex items-center justify-center shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-[11px] font-extrabold text-[#C5A059] bg-[#C5A059]/10 border border-[#C5A059]/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#C5A059] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Ligne décorative en bas de carte */}
                <div className="relative z-10 mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-emerald-200/50 font-semibold group-hover:text-emerald-200/80 transition-colors">
                    Valeur Fondatrice
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#C5A059] group-hover:shadow-[0_0_8px_#C5A059] transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* BANNIÈRE DE CITATION DU SLOGAN (ELEGANT BANNER) */}
        <div className="mt-16 sm:mt-20 relative rounded-2xl overflow-hidden border border-[#C5A059]/30 bg-gradient-to-r from-black/40 via-black/20 to-black/40 backdrop-blur-xl p-8 sm:p-12 shadow-2xl">
          {/* Image de fond très subtile en filigrane */}
          <div className="absolute inset-0 -z-10 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
              alt="Formation CYDILY CBC"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center shrink-0">
                <Quote className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="text-[#C5A059] text-xs font-extrabold uppercase tracking-widest block">
                  Notre Slogan
                </span>
                <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight italic">
                  « Faire de l'invisible, une force visible »
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C5A059] to-[#D4B06A] text-[#004d40] px-7 py-3.5 rounded-xl font-extrabold text-xs tracking-wider uppercase shadow-xl hover:brightness-110 transition-all cursor-default">
                <Award className="w-4 h-4" />
                <span>Engagement Qualité</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
