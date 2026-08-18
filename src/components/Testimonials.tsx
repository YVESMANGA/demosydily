"use client";

import { useRef } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const testimonials = [
  {
    id: 1,
    quote:
      "La formation en hygiène hospitalière dispensée par CYDILY CBC a radicalement transformé les pratiques de nos équipes d'entretien. Le professionnalisme et la rigueur pédagogique sont exceptionnels.",
    author: "Dr. Aïssatou Sow",
    role: "Directrice des Soins, Clinique Médicale",
    location: "Dakar",
    type: "Entreprise / Institution",
    rating: 5,
    avatar: "/testimonials/avatar-1.jpg",
  },
  {
    id: 2,
    quote:
      "Grâce au programme d'insertion et d'accompagnement de CYDILY, j'ai pu acquérir des compétences solides en gouvernance domestique et décrocher un emploi stable auprès d'une grande résidence.",
    author: "Fatou Kiné Diop",
    role: "Gouvernante de maison certifiée",
    location: "Ngor",
    type: "Bénéficiaire",
    rating: 5,
    avatar: "/testimonials/avatar-2.jpg",
  },
  {
    id: 3,
    quote:
      "L'audit d'hygiène et les sessions sur-mesure pour notre personnel de restauration nous ont permis de respecter scrupuleusement les normes HACCP et d'améliorer la qualité globale de nos services.",
    author: "Mamadou Ndiaye",
    role: "Responsable Qualité & Hygiène",
    location: "Saly",
    type: "Hôtellerie / Restauration",
    rating: 5,
    avatar: "/testimonials/avatar-3.jpg",
  },
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className={`py-20 bg-[#004d40] text-white overflow-hidden ${jakarta.className}`}
    >
      {/* MOTIF DE FOND - ICÔNES DE NETTOYAGE SUBTILES */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23ffffff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 20l25 25M38 38l6 6M22 50l8-8'/%3E%3Cpath d='M85 20v6h-6v10h10V26h-4v-6zM83 36h6l3 12h-12z'/%3E%3Ccircle cx='30' cy='85' r='5'/%3E%3Ccircle cx='90' cy='80' r='6'/%3E%3Cpath d='M80 15l2 4 4 2-4 2-2 4-2-4-4-2 4-2z'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* EN-TÊTE DE LA SECTION + BOUTONS NAV */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#C5A059] text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-[#C5A059]/20">
              <Quote className="w-3.5 h-3.5 text-[#C5A059]" />
              Témoignages & Preuve Sociale
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Ce qu'ils disent de{" "}
              <span className="text-[#C5A059]">CYDILY CBC</span>
            </h2>
            <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
              Découvrez comment nos formations et nos interventions transforment
              la rigueur opérationnelle et la vie de nos apprenants.
            </p>
          </div>

          {/* FLÈCHES DE NAVIGATION DU DÉFILEMENT */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full border border-white/20 bg-white/10 text-white hover:bg-[#C5A059] hover:text-[#004d40] hover:border-[#C5A059] transition-all shadow-sm flex items-center justify-center active:scale-95"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full border border-white/20 bg-white/10 text-white hover:bg-[#C5A059] hover:text-[#004d40] hover:border-[#C5A059] transition-all shadow-sm flex items-center justify-center active:scale-95"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CARROUSEL HORIZONTAL / CARTES STYLE COMMENT.JPG */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-6 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="w-[300px] sm:w-[350px] shrink-0 bg-white text-slate-800 rounded-3xl p-7 shadow-xl border border-slate-100 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
            >
              <div>
                {/* 1. ÉTOILES EN HAUT À GAUCHE */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#C5A059] text-[#C5A059]"
                    />
                  ))}
                </div>

                {/* 2. CITATION AU MILIEU */}
                <p className="text-sm sm:text-base font-medium text-slate-700 leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* 3. PROFIL EN BAS */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full bg-[#004d40] text-[#C5A059] font-bold text-base flex items-center justify-center shrink-0 shadow-sm">
                  {item.author.charAt(0)}
                </div>
                <div className="overflow-hidden">
                  <h3 className="font-extrabold text-slate-900 text-xs tracking-wider uppercase truncate">
                    {item.author}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
