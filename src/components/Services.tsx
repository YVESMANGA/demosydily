"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, Home, Building2, HardHat, Sparkle } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const servicesList = [
  {
    id: "01",
    title: "Nettoyage Résidentiel",
    description: "Entretien régulier ou ponctuel de maisons et appartements pour un cadre de vie sain et étincelant.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
    link: "/services/residentiel",
  },
  {
    id: "02",
    title: "Entretien de Bureaux & Locaux",
    description: "Assurez la propreté de vos espaces professionnels pour garantir la santé et la productivité de vos équipes.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&q=80",
    link: "/services/bureaux",
  },
  {
    id: "03",
    title: "Nettoyage Fin de Chantier",
    description: "Remise en état complète après travaux ou rénovation : évacuation des poussières et débris finaux.",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80",
    link: "/services/fin-de-chantier",
  },
  {
    id: "04",
    title: "Nettoyage de Vitres & Façades",
    description: "Lavage spécialisé des surfaces vitrées et vitrines pour une clarté et un éclat irréprochables.",
    icon: Sparkle,
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80",
    link: "/services/vitres",
  },
];

export default function Services() {
  return (
    <section className={`w-full bg-white py-20 lg:py-28 relative ${jakarta.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#004D40]/10 text-[#004D40] mb-4">
            <Sparkles className="w-3.5 h-3.5 fill-[#004D40]" />
            <span className="text-xs font-bold tracking-widest uppercase">
              Nos Prestations
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
            Des solutions adaptées à <span className="text-[#004D40]">chaque besoin.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4">
            Découvrez nos services de nettoyage professionnels conçus sur-mesure pour les particuliers et les entreprises.
          </p>
        </div>

        {/* GRILLE DE SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-[#FBFBFB] rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image d'illustration avec overlay */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  
                  {/* Badge numéro */}
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#004D40] font-black text-xs px-3 py-1 rounded-full shadow-sm">
                    {service.id}
                  </span>

                  {/* Icône du service */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-[#C5A059] text-slate-900 flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Contenu textuel */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#004D40] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Lien en bas de carte */}
                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#004D40] uppercase tracking-wider group-hover:text-[#C5A059] transition-colors"
                    >
                      <span>En savoir plus</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}