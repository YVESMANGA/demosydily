"use client";

import Link from "next/link";
import {
  HeartHandshake,
  Award,
  ArrowRight,
  Sparkles,
  Quote,
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const founderPillars = [
  {
    title: "20 ans d'expertise RH & Sociale",
    description:
      "Une solide expérience comme DRH, formatrice et auditrice qualité au service du développement humain.",
  },
  {
    title: "Valorisation & Dignité",
    description:
      "Redonner du sens, de la fierté et de l'estime de soi aux professionnels des métiers d'appui et du service.",
  },
  {
    title: "Accompagnement Bienveillant",
    description:
      "Une pédagogie active et inclusive qui alliance rigueur opérationnelle et respect de la personne.",
  },
];

export default function FounderAbout() {
  return (
    <section
      className={`w-full bg-[#FBFBFB] py-20 lg:py-28 relative overflow-hidden ${jakarta.className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* COLONNE GAUCHE : PORTRAIT DE LA FONDATRICE */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Cadre d'image principal */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
                <img
                  src="d.jpg"
                  alt="Cissé Yatera - Fondatrice de CYDILY CBC"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C23]/70 via-transparent to-transparent" />

                {/* Identification sur l'image */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[#C5A059] text-xs font-extrabold uppercase tracking-widest block mb-1">
                    Fondatrice & Directrice
                  </span>
                  <h3 className="text-2xl font-bold">Cissé Yatera</h3>
                </div>
              </div>

              {/* Éléments décoratifs */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#0F2C23]/10 rounded-2xl -z-10 hidden sm:block" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#C5A059]/20 rounded-full -z-10 hidden sm:block" />

              {/* Badge flottant avec citation / slogan */}
              <div className="absolute -bottom-6 right-4 sm:right-8 bg-[#0F2C23] text-white p-5 rounded-xl shadow-xl border border-[#C5A059]/30 flex items-center gap-4 max-w-[290px]">
                <div className="w-12 h-12 rounded-lg bg-[#C5A059] text-[#0F2C23] flex items-center justify-center shrink-0 shadow-md">
                  <Quote className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                    Sa Vision
                  </p>
                  <p className="text-xs font-medium text-gray-200 mt-0.5 leading-snug italic">
                    « Faire de l'invisible, une force visible. »
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : PARCOURS & ENGAGEMENT DE LA FONDATRICE */}
          <div className="lg:col-span-6 space-y-6">
            {/* Tag d'en-tête */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F2C23]/10 text-[#0F2C23]">
              <Sparkles className="w-3.5 h-3.5 fill-[#0F2C23]" />
              <span className="text-xs font-bold tracking-widest uppercase">
                Mot de la Fondatrice
              </span>
            </div>

            {/* Titre principal */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.2] tracking-tight">
              Placer la dignité humaine au cœur de{" "}
              <span className="text-[#0F2C23]">l'excellence.</span>
            </h2>

            {/* Texte explicatif sur Cissé Yatera */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Forte de vingt années d’expérience dans le travail social et les
              ressources humaines en tant que DRH, formatrice et auditrice
              qualité,{" "}
              <strong className="text-slate-900 font-semibold">
                Cissé Yatera
              </strong>{" "}
              a fondé CYDILY CBC avec une ambition forte : professionnaliser et
              valoriser les métiers de l'ombre en alliant exigence sanitaire,
              savoir-faire et estime de soi.
            </p>

            {/* Liste des piliers de la fondatrice */}
            <div className="space-y-4 pt-2">
              {founderPillars.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-white transition-colors"
                >
                  <div className="mt-1 w-7 h-7 rounded-full bg-[#0F2C23] text-[#C5A059] flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bouton d'action */}
            <div className="pt-4">
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-3 bg-[#0F2C23] hover:bg-[#143B2F] text-white px-7 py-3.5 rounded-sm font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl group"
              >
                <span>Découvrir son Histoire & sa Vision</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
