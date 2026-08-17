"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Home, ArrowRight, Clock, Award } from "lucide-react";

const ALL_FORMATIONS = [
  {
    id: "haccp",
    category: "agro",
    title: "Hygiène Alimentaire & HACCP",
    duration: "30h (1 semaine)",
    level: "Tous niveaux",
    price: "150 000 FCFA",
  },
  {
    id: "audit-sanitaire",
    category: "agro",
    title: "Audit & Traçabilité Sanitaire",
    duration: "45h (2 semaines)",
    level: "Intermédiaire",
    price: "250 000 FCFA",
  },
  {
    id: "gouvernance",
    category: "domestique",
    title: "Gouvernance & Intendance de Propriété",
    duration: "60h (3 semaines)",
    level: "Avancé",
    price: "200 000 FCFA",
  },
  {
    id: "art-table",
    category: "domestique",
    title: "Cuisine & Art de la Table",
    duration: "40h (2 semaines)",
    level: "Tous niveaux",
    price: "160 000 FCFA",
  },
];

export default function FormationsPage() {
  const [filter, setFilter] = useState<"all" | "agro" | "domestique">("all");

  const filtered =
    filter === "all"
      ? ALL_FORMATIONS
      : ALL_FORMATIONS.filter((f) => f.category === filter);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16 px-6 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black">
          Catalogue de nos Formations
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Choisissez le pôle de compétences et développez des savoir-faire
          certifiés.
        </p>

        {/* Filtres */}
        <div className="flex justify-center gap-3 pt-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2 rounded-xl text-sm font-bold ${filter === "all" ? "bg-slate-100 text-slate-950" : "bg-slate-900 text-slate-400"}`}
          >
            Toutes
          </button>
          <button
            onClick={() => setFilter("agro")}
            className={`px-5 py-2 rounded-xl text-sm font-bold ${filter === "agro" ? "bg-emerald-500 text-slate-950" : "bg-slate-900 text-slate-400"}`}
          >
            Agroalimentaire
          </button>
          <button
            onClick={() => setFilter("domestique")}
            className={`px-5 py-2 rounded-xl text-sm font-bold ${filter === "domestique" ? "bg-amber-500 text-slate-950" : "bg-slate-900 text-slate-400"}`}
          >
            Domestique
          </button>
        </div>
      </div>

      {/* Grille */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 flex flex-col justify-between hover:border-slate-700 transition-all"
          >
            <div className="space-y-4">
              <span
                className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${item.category === "agro" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"}`}
              >
                {item.category === "agro"
                  ? "Hygiène & Agroalimentaire"
                  : "Métiers Domestiques"}
              </span>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-500" /> {item.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-slate-500" /> {item.level}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-800">
              <div className="text-xl font-extrabold text-white">
                {item.price}
              </div>
              <Link
                href={`/formations/${item.id}`}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 font-bold rounded-xl text-sm flex items-center gap-2 transition-all"
              >
                S'inscrire <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
