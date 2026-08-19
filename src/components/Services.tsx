"use client";

import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  SprayCan,
  Utensils,
  BedDouble,
  HeartHandshake,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRef } from "react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Formations professionnelles CYDILY CBC
const servicesList = [
  {
    id: "01",
    title: "Technicien de Surface",
    description:
      "Formation aux techniques professionnelles de nettoyage, de bio-nettoyage, d'entretien des locaux et à l'utilisation adaptée des produits et équipements.",
    icon: SprayCan,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
    link: "/formations/technicien-de-surface",
  },
  {
    id: "02",
    title: "Intendant de Cuisine",
    description:
      "Maîtrise des bonnes pratiques d'hygiène, de l'entretien des espaces et équipements de cuisine et du respect des règles de sécurité alimentaire.",
    icon: Utensils,
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80",
    link: "/formations/intendant-de-cuisine",
  },
  {
    id: "03",
    title: "Housekeeping",
    description:
      "Formation aux standards professionnels de l'entretien des chambres, à la préparation des espaces et à l'excellence du service dans l'hôtellerie.",
    icon: BedDouble,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80",
    link: "/formations/housekeeping",
  },
  {
    id: "04",
    title: "Aide à Domicile",
    description:
      "Développement des compétences nécessaires pour accompagner les personnes à domicile avec professionnalisme, bienveillance, discrétion et respect.",
    icon: HeartHandshake,
    image:
      "https://images.unsplash.com/photo-1576765608866-5b51046452be?auto=format&fit=crop&w=600&q=80",
    link: "/formations/aide-a-domicile",
  },
  {
    id: "05",
    title: "Excellence Comportementale",
    description:
      "Développement du savoir-être professionnel, de la communication, de la ponctualité, de la présentation et des attitudes indispensables en entreprise.",
    icon: Award,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80",
    link: "/formations/excellence-comportementale",
  },
];

export default function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;

      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className={`w-full bg-white py-24 lg:py-32 relative overflow-hidden ${jakarta.className}`}
    >
      {/* EFFETS ET HALOS LUMINEUX DE FOND */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#004d40]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#C5A059]/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* EN-TÊTE DE SECTION + BOUTONS DE NAVIGATION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">

          <div className="max-w-2xl space-y-4">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004d40]/10 border border-[#004d40]/20 text-[#004d40]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />

              <span className="text-xs font-extrabold tracking-widest uppercase">
                Nos Formations
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Formez-vous aux métiers des services,{" "}
              <span className="text-[#004d40]">
                avec excellence.
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Une formation professionnelle pratique et adaptée aux réalités
              du marché pour développer les compétences techniques et
              comportementales indispensables aux métiers des services.
            </p>

          </div>

          {/* FLÈCHES DE NAVIGATION */}
          <div className="flex items-center gap-3 shrink-0">

            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white text-[#004d40] hover:bg-[#004d40] hover:text-white transition-all shadow-sm flex items-center justify-center active:scale-95"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white text-[#004d40] hover:bg-[#004d40] hover:text-white transition-all shadow-sm flex items-center justify-center active:scale-95"
              aria-label="Suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>
        </div>

        {/* CONTENEUR DÉFILANT HORIZONTAL */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-8 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >

          {servicesList.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="w-[280px] sm:w-[320px] shrink-0 group relative bg-gradient-to-b from-[#f0f7f5] via-[#f7faf8] to-[#edf5f2] rounded-[32px] p-4 border border-[#004d40]/10 shadow-sm hover:shadow-xl hover:border-[#C5A059]/40 transition-all duration-500 flex flex-col justify-between"
              >

                <div>

                  {/* IMAGE */}
                  <div className="relative h-60 w-full overflow-hidden rounded-[24px]">

                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* ICÔNE */}
                    <div className="absolute top-3 left-3 w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-md text-[#004d40] flex items-center justify-center shadow-md border border-slate-100/50">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>

                  </div>

                  {/* TITRE */}
                  <div className="pt-6 px-3">

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#004d40] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                  </div>

                </div>

                {/* BOUTON */}
                <div className="pt-8 px-2 pb-1">

                  <Link
                    href={service.link}
                    className="w-full bg-white hover:bg-[#004d40] text-slate-900 hover:text-white px-5 py-3 rounded-full flex items-center justify-between shadow-sm transition-all duration-300 group/btn"
                  >

                    <span className="text-xs font-bold tracking-wide">
                      En savoir plus
                    </span>

                    <div className="w-7 h-7 rounded-full bg-[#004d40]/10 group-hover/btn:bg-white/20 text-[#004d40] group-hover/btn:text-white flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>

                  </Link>

                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}