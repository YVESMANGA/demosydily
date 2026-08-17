import QuoteSimulator from "@/components/QuoteSimulator";
import { Building2, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function EntreprisesPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16 space-y-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
        <div className="inline-flex p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl border border-emerald-500/20 mb-2">
          <Building2 className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black">
          Solutions de Formation sur-mesure pour Entreprises
        </h1>
        <p className="text-slate-400 text-lg">
          Hôtels, usines agroalimentaires, restaurants et collectivités : formez
          vos équipes directement in-situ ou dans nos centres.
        </p>
      </div>

      {/* Avantages B2B */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-3">
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          <h3 className="text-xl font-bold">Audit Préalable</h3>
          <p className="text-slate-400 text-sm">
            Évaluation directe sur le terrain de vos besoins sanitaires et de
            gouvernance.
          </p>
        </div>
        <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-3">
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          <h3 className="text-xl font-bold">Programmes Adaptés</h3>
          <p className="text-slate-400 text-sm">
            Contenus de cours calibrés selon le secteur d'activité de votre
            entreprise.
          </p>
        </div>
        <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-3">
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          <h3 className="text-xl font-bold">Certification Équipe</h3>
          <p className="text-slate-400 text-sm">
            Attestations officielles d'aptitude transmises aux RH pour chaque
            participant.
          </p>
        </div>
      </div>

      {/* Embedded Simulator */}
      <QuoteSimulator />
    </div>
  );
}
