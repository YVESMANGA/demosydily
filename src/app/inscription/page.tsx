"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function InscriptionPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16 px-6 max-w-2xl mx-auto">
      <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold">Formulaire d'Inscription</h1>
          <p className="text-slate-400 text-sm">
            Réservez votre place pour la prochaine session de formation CYDILY.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
            <h2 className="text-2xl font-bold">Candidature Envoyée !</h2>
            <p className="text-slate-400 text-sm">
              Un conseiller de CYDILY vous contactera dans les 24 heures pour
              finaliser votre dossier.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase">
                Nom complet
              </label>
              <input
                required
                type="text"
                placeholder="John Doe"
                className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase">
                Téléphone / WhatsApp
              </label>
              <input
                required
                type="tel"
                placeholder="+221 ..."
                className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase">
                Formation Souhaitée
              </label>
              <select className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500">
                <option>Hygiène Alimentaire & HACCP</option>
                <option>Gouvernance & Intendance de Propriété</option>
                <option>Audit & Traçabilité Sanitaire</option>
                <option>Cuisine & Art de la Table</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition-all flex justify-center items-center gap-2"
            >
              Valider ma candidature <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
