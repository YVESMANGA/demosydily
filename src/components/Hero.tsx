"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Home, ArrowRight } from "lucide-react";

export default function HeroCYDILY() {
  const [pole, setPole] = useState<"domestique" | "agro">("agro");

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center px-6 bg-slate-950 text-white overflow-hidden py-20">
      {/* Background Glow Effect */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] opacity-30 transition-colors duration-700 pointer-events-none ${
          pole === "agro" ? "bg-emerald-500" : "bg-amber-500"
        }`}
      />

      {/* Switcher Pôles */}
      <div className="z-10 mb-8 inline-flex p-1.5 bg-slate-900/80 border border-slate-800 rounded-full backdrop-blur-md">
        <button
          onClick={() => setPole("agro")}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            pole === "agro"
              ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <ShieldCheck className="w-4 h-4" /> Hygiène & Agroalimentaire
        </button>
        <button
          onClick={() => setPole("domestique")}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            pole === "domestique"
              ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Home className="w-4 h-4" /> Métiers Domestiques
        </button>
      </div>

      {/* Dynamic Content */}
      <div className="z-10 max-w-4xl text-center space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={pole}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {pole === "agro" ? (
              <>
                <span className="text-emerald-400 font-semibold tracking-wider text-xs uppercase px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  Centre d'Excellence & Normes HACCP
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100">
                  Garants de la{" "}
                  <span className="text-emerald-400">sécurité</span> et de la
                  qualité agroalimentaire.
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                  Formations certifiantes aux exigences sanitaires, traçabilité
                  et maîtrise des risques en Restauration & Industrie.
                </p>
              </>
            ) : (
              <>
                <span className="text-amber-400 font-semibold tracking-wider text-xs uppercase px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
                  Professionnalisation & Art de Vivre
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100">
                  L'expertise au service de la{" "}
                  <span className="text-amber-400">gestion domestique</span>.
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                  Développez des compétences de haut niveau en intendance,
                  gouvernance de propriété et services aux particuliers.
                </p>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className={`px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-xl ${
              pole === "agro"
                ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/10"
                : "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/10"
            }`}
          >
            Explorer les Formations <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-3.5 rounded-xl font-semibold bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 transition-all">
            Demander un devis sur-mesure
          </button>
        </div>
      </div>
    </section>
  );
}
