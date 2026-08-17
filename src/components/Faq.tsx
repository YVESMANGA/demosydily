"use client";

import { useState } from "react";
import { Sparkles, ChevronDown, HelpCircle } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const faqItems = [
  {
    question: "Comment est calculé le tarif d'une prestation de nettoyage ?",
    answer: "Le tarif varie selon la superficie des locaux (m²), la fréquence des interventions (ponctuelle ou régulière) et la spécificité des besoins (nettoyage standard, vitrerie, fin de chantier). Un devis gratuit et personnalisé vous est transmis après étude de votre demande.",
  },
  {
    question: "Devez-vous fournir les produits et le matériel de nettoyage ?",
    answer: "Non, nos équipes interviennent avec l'intégralité du matériel professionnel nécessaire (aspirateurs industriels, autolaveuses, chiffons microfibres) ainsi que nos produits écologiques certifiés.",
  },
  {
    question: "Proposez-vous des contrats d'entretien régulier pour les entreprises ?",
    answer: "Oui, nous proposons des contrats hebdomadaires, bimensuels ou mensuels adaptés à vos horaires de bureau afin de ne pas perturber l'activité de vos collaborateurs.",
  },
  {
    question: "Vos agents de nettoyage sont-ils assurés en cas de dommage ?",
    answer: "Absolument. Tout notre personnel est déclaré, formé et couvert par une assurance responsabilité civile professionnelle (RC Pro) garantissant la protection de vos locaux et biens.",
  },
  {
    question: "Sous quel délai pouvez-vous intervenir en cas d'urgence ?",
    answer: "Nous sommes en mesure d'organiser une intervention d'urgence en moins de 24 à 48 heures selon la disponibilité de nos équipes dans votre région.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`w-full bg-white py-20 lg:py-28 relative ${jakarta.className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#004D40]/10 text-[#004D40] mb-4">
            <Sparkles className="w-3.5 h-3.5 fill-[#004D40]" />
            <span className="text-xs font-bold tracking-widest uppercase">
              Questions Fréquentes
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
            Des réponses à vos <span className="text-[#004D40]">interrogations.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4">
            Retrouvez les réponses aux questions les plus couramment posées par nos clients.
          </p>
        </div>

        {/* ACCORDÉON FAQ */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#004D40] bg-[#FBFBFB] shadow-md"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? "text-[#004D40]" : "text-slate-400"}`} />
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#004D40]" : ""
                    }`}
                  />
                </button>

                {/* Contenu déroulant */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/60 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}