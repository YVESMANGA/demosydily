import { ShieldCheck, Target, Award } from "lucide-react";

export default function AProposPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16 px-6 max-w-5xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black">À Propos de CYDILY</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          L'organisme de référence dédié au développement des compétences en
          hygiène agroalimentaire et aux métiers de la gestion domestique.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
          <Target className="w-10 h-10 text-emerald-400" />
          <h2 className="text-2xl font-bold">Notre Mission</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Professionaliser les acteurs des métiers de l'hygiène et du service
            pour élever les standards de qualité, de sécurité sanitaire et de
            rigueur dans chaque organisation.
          </p>
        </div>

        <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
          <Award className="w-10 h-10 text-amber-400" />
          <h2 className="text-2xl font-bold">Excellence Pédagogique</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Formateurs experts du secteur, ateliers pratiques immersifs et
            délivrance d'attestations certifiantes reconnues.
          </p>
        </div>
      </div>
    </div>
  );
}
