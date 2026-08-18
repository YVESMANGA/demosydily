"use client";

import { useState } from "react";
import { Sparkles, ChevronUp, ChevronDown, ArrowRight } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const faqItems = [
  {
    question: "Comment est calculé le tarif d'une prestation de nettoyage ?",
    answer:
      "Le tarif varie selon la superficie des locaux (m²), la fréquence des interventions (ponctuelle ou régulière) et la spécificité des besoins (nettoyage standard, vitrerie, fin de chantier). Un devis gratuit et personnalisé vous est transmis après étude de votre demande.",
  },
  {
    question: "Devez-vous fournir les produits et le matériel de nettoyage ?",
    answer:
      "Non, nos équipes interviennent avec l'intégralité du matériel professionnel nécessaire (aspirateurs industriels, autolaveuses, chiffons microfibres) ainsi que nos produits écologiques certifiés.",
  },
  {
    question:
      "Proposez-vous des contrats d'entretien régulier pour les entreprises ?",
    answer:
      "Oui, nous proposons des contrats hebdomadaires, bimensuels ou mensuels adaptés à vos horaires de bureau afin de ne pas perturber l'activité de vos collaborateurs.",
  },
  {
    question: "Vos agents de nettoyage sont-ils assurés en cas de dommage ?",
    answer:
      "Absolument. Tout notre personnel est déclaré, formé et couvert par une assurance responsabilité civile professionnelle (RC Pro) garantissant la protection de vos locaux et biens.",
  },
  {
    question: "Sous quel délai pouvez-vous intervenir en cas d'urgence ?",
    answer:
      "Nous sommes en mesure d'organiser une intervention d'urgence en moins de 24 à 48 heures selon la disponibilité de nos équipes dans votre région.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`w-full bg-[#F4F6F8] py-20 lg:py-28 relative ${jakarta.className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* EN-TÊTE ASYMÉTRIQUE (TITRE À GAUCHE / DESCRIPTION + BOUTON À DROITE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-slate-200 text-[#004D40] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
              <span className="text-xs font-bold tracking-widest uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#004D40] tracking-tight leading-[1.15]">
              Questions <span className="text-[#C5A059]">Fréquentes</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center justify-between gap-6">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md">
              Retrouvez les réponses aux interrogations les plus courantes
              concernant nos prestations et notre organisation.
            </p>
            <button className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#C5A059] text-[#004D40] font-extrabold text-sm hover:bg-[#004D40] hover:text-white transition-all shadow-md shrink-0">
              En Savoir Plus
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* SECTION PRINCIPALE : IMAGE À GAUCHE + ACCORDÉON À DROITE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* COLONNE GAUCHE : GRAND VISUEL DANS UN CADRE BLANC */}
          <div className="lg:col-span-5">
            <div className="bg-white p-4 rounded-3xl shadow-xl border border-slate-200/80">
              <div className="relative h-[380px] sm:h-[480px] lg:h-[520px] w-full rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                  alt="Agent de nettoyage professionnel au travail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : ACCORDÉON DE QUESTIONS */}
          <div className="lg:col-span-7 space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#004D40]/30 shadow-lg"
                      : "border-slate-200/80 shadow-sm hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-extrabold text-[#004D40] text-base sm:text-lg transition-colors"
                  >
                    <span>{item.question}</span>
                    <div
                      className={`p-1.5 rounded-full transition-colors shrink-0 ${isOpen ? "bg-[#004D40]/10 text-[#004D40]" : "text-slate-400"}`}
                    >
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {/* Contenu déroulant */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
