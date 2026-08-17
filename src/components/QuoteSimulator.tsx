"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Calculator,
  ArrowRight,
  Building2,
  User,
} from "lucide-react";

const FORMATIONS = {
  agro: [
    {
      id: "haccp",
      name: "Normes HACCP & Hygiène Alimentaire",
      pricePerPerson: 150000,
    },
    {
      id: "audit",
      name: "Audit & Traçabilité Sanitaire",
      pricePerPerson: 250000,
    },
    {
      id: "desinfection",
      name: "Nettoyage & Désinfection Bio-Industrielle",
      pricePerPerson: 180000,
    },
  ],
  domestique: [
    {
      id: "gouvernance",
      name: "Gouvernance & Intendance de Propriété",
      pricePerPerson: 200000,
    },
    {
      id: "art_table",
      name: "Cuisine, Dressage & Art de la Table",
      pricePerPerson: 160000,
    },
    {
      id: "petite_enfance",
      name: "Garde d'Enfants & Sécurité Domestique",
      pricePerPerson: 120000,
    },
  ],
};

export default function QuoteSimulator() {
  const [step, setStep] = useState(1);
  const [sector, setSector] = useState<"agro" | "domestique">("agro");
  const [selectedFormation, setSelectedFormation] = useState(
    FORMATIONS.agro[0].id,
  );
  const [peopleCount, setPeopleCount] = useState(5);

  const currentFormation =
    FORMATIONS[sector].find((f) => f.id === selectedFormation) ||
    FORMATIONS[sector][0];
  const totalEstimate = currentFormation.pricePerPerson * peopleCount;

  return (
    <section className="py-20 px-6 bg-slate-900 text-slate-100 min-h-[600px] flex items-center">
      <div className="max-w-4xl mx-auto w-full bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl border border-emerald-500/20">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Simulateur de Devis de Formation
            </h2>
            <p className="text-slate-400 text-sm">
              Obtenez une estimation personnalisée pour vos équipes en 3 clics.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                step >= i ? "bg-emerald-500" : "bg-slate-800"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-medium text-slate-300">
                1. Sélectionnez votre domaine d'activité :
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setSector("agro");
                    setSelectedFormation(FORMATIONS.agro[0].id);
                  }}
                  className={`p-6 rounded-2xl border text-left flex flex-col gap-3 transition-all ${
                    sector === "agro"
                      ? "border-emerald-500 bg-emerald-500/10 text-white"
                      : "border-slate-800 bg-slate-900/50 hover:border-slate-700 text-slate-400"
                  }`}
                >
                  <Building2 className="w-8 h-8 text-emerald-400" />
                  <div>
                    <div className="font-bold text-lg text-white">
                      Hygiène & Agroalimentaire
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Restauration, usines, laboratoires & collectivités
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setSector("domestique");
                    setSelectedFormation(FORMATIONS.domestique[0].id);
                  }}
                  className={`p-6 rounded-2xl border text-left flex flex-col gap-3 transition-all ${
                    sector === "domestique"
                      ? "border-amber-500 bg-amber-500/10 text-white"
                      : "border-slate-800 bg-slate-900/50 hover:border-slate-700 text-slate-400"
                  }`}
                >
                  <User className="w-8 h-8 text-amber-400" />
                  <div>
                    <div className="font-bold text-lg text-white">
                      Métiers Domestiques
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Particuliers employeurs, intendance & gouvernance
                    </div>
                  </div>
                </button>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 bg-emerald-500 text-slate-950 font-semibold rounded-xl flex items-center gap-2 hover:bg-emerald-400 transition-all"
                >
                  Étape suivante <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-medium text-slate-300">
                2. Choisissez le programme et l'effectif :
              </h3>

              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                  Module de formation
                </label>
                <select
                  value={selectedFormation}
                  onChange={(e) => setSelectedFormation(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                >
                  {FORMATIONS[sector].map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                    Nombre de participants
                  </label>
                  <span className="text-emerald-400 font-bold">
                    {peopleCount} personne(s)
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={peopleCount}
                  onChange={(e) => setPeopleCount(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 bg-slate-800 rounded-lg h-2"
                />
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 bg-slate-900 border border-slate-800 text-slate-300 font-semibold rounded-xl hover:bg-slate-800"
                >
                  Retour
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-3 bg-emerald-500 text-slate-950 font-semibold rounded-xl flex items-center gap-2 hover:bg-emerald-400 transition-all"
                >
                  Calculer le devis <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 text-center py-4"
            >
              <div className="inline-flex p-3 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 mb-2">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-slate-400 text-sm">
                  Estimation indicative pour votre session
                </span>
                <div className="text-4xl md:text-5xl font-black text-white mt-1">
                  {totalEstimate.toLocaleString()}{" "}
                  <span className="text-lg text-emerald-400 font-normal">
                    FCFA
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Inclut le matériel pédagogique, la certification et
                  l'évaluation finale pour {peopleCount} participant(s).
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button className="px-8 py-3.5 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition-all">
                  Recevoir la proposition officielle PDF
                </button>
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl hover:bg-slate-800"
                >
                  Nouveau calcul
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
