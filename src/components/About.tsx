"use client";

import Link from "next/link";
import { CheckCircle2, ShieldCheck, Award, ArrowRight, Sparkles } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const features = [
  {
    title: "Personnel Qualifié & Assuré",
    description: "Des agents rigoureusement sélectionnés, formés aux dernières normes d'hygiène et de sécurité.",
  },
  {
    title: "Produits Éco-Responsables",
    description: "Utilisation prioritaire de produits nettoyants biodégradables, sans risque pour votre santé ni l'environnement.",
  },
  {
    title: "Service Sur-Mesure",
    description: "Un cahier des charges personnalisé selon la fréquence et la spécificité de vos locaux.",
  },
];

export default function About() {
  return (
    <section className={`w-full bg-[#FBFBFB] py-20 lg:py-28 relative overflow-hidden ${jakarta.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ----------------------------------------------------- */}
          {/* COLONNE GAUCHE : COMPOSITION VISUELLE                */}
          {/* ----------------------------------------------------- */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Cadre principal d'image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                  alt="Agent de nettoyage professionnel CYDILLY"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Element décoratif arrière-plan */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#004D40]/10 rounded-2xl -z-10 hidden sm:block" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#C5A059]/15 rounded-full -z-10 hidden sm:block" />

              {/* Badge flottant d'expérience / garantie */}
              <div className="absolute -bottom-6 right-4 sm:right-8 bg-white p-5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-[260px]">
                <div className="w-12 h-12 rounded-lg bg-[#C5A059] text-slate-900 flex items-center justify-center shrink-0 shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-black text-slate-900 leading-none">100%</p>
                  <p className="text-xs font-bold text-[#004D40] uppercase tracking-wider mt-1">
                    Garantie Satasfaction
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ----------------------------------------------------- */}
          {/* COLONNE DROITE : CONTENU TEXTUEL                      */}
          {/* ----------------------------------------------------- */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tag d'en-tête */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#004D40]/10 text-[#004D40]">
              <Sparkles className="w-3.5 h-3.5 fill-[#004D40]" />
              <span className="text-xs font-bold tracking-widest uppercase">
                À Propos de CYDILLY
              </span>
            </div>

            {/* Titre principal */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.2] tracking-tight">
              L'excellence du nettoyage au service de <span className="text-[#004D40]">votre confort.</span>
            </h2>

            {/* Texte explicatif */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Chez <strong className="text-slate-900 font-semibold">CYDILLY</strong>, nous redéfinissons les standards de la propreté. Que ce soit pour des espaces de travail stimulants ou un intérieur résidentiel impeccable, nous combinons savoir-faire artisanal, rigueur méthodologique et équipements de pointe.
            </p>

            {/* Liste des points forts */}
            <div className="space-y-4 pt-2">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white transition-colors">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#004D40] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
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
                className="inline-flex items-center gap-3 bg-[#004D40] hover:bg-[#00382E] text-white px-7 py-3.5 rounded-sm font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl group"
              >
                <span>En savoir plus sur notre histoire</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}