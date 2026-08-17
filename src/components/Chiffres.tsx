"use client";

import { CheckCircle2, Star, ShieldCheck, Users } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const stats = [
  {
    id: 1,
    icon: Users,
    value: "+500",
    label: "Clients Satisfaits",
    description: "Particuliers et entreprises",
  },
  {
    id: 2,
    icon: Star,
    value: "4.9/5",
    label: "Note Moyenne",
    description: "Basée sur +200 avis vérifiés",
  },
  {
    id: 3,
    icon: CheckCircle2,
    value: "100%",
    label: "Éco-Responsable",
    description: "Produits biodégradables",
  },
  {
    id: 4,
    icon: ShieldCheck,
    value: "24/7",
    label: "Support & Intervention",
    description: "Réactivité garantie",
  },
];

export default function StatsBar() {
  return (
    <section className={`w-full bg-white border-y border-slate-100 py-10 relative z-20 ${jakarta.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="flex flex-col items-center text-center p-4 sm:pt-0 group hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Icône avec fond d'accentuation */}
                <div className="w-12 h-12 rounded-full bg-[#004D40]/10 text-[#004D40] flex items-center justify-center mb-4 group-hover:bg-[#C5A059]/20 group-hover:text-[#C5A059] transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Chiffre clé */}
                <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {stat.value}
                </span>

                {/* Libellé */}
                <span className="text-xs sm:text-sm font-bold text-[#004D40] uppercase tracking-wider mt-1">
                  {stat.label}
                </span>

                {/* Description */}
                <p className="text-xs text-slate-500 font-normal mt-1">
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