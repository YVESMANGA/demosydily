import Link from "next/link";
import {
  CheckCircle,
  ShieldCheck,
  Clock,
  Calendar,
  FileText,
} from "lucide-react";

export default function FormationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16 px-6 max-w-5xl mx-auto space-y-12">
      {/* Banner Header */}
      <div className="space-y-6 bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl">
        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
          Formation Certifiante
        </span>
        <h1 className="text-3xl md:text-5xl font-black">
          Normes HACCP & Hygiène Agroalimentaire
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          Maîtrisez les risques sanitaires et apprenez à mettre en place un plan
          de maîtrise sanitaire complet en entreprise ou restaurant.
        </p>

        <div className="flex flex-wrap gap-6 pt-4 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-400" /> 30 heures de cours
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-400" /> Prochaine session:
            15 du mois
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" /> Attestation
            officielle
          </div>
        </div>
      </div>

      {/* Programme de formation */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Programme Pédagogique</h2>
        <div className="space-y-4">
          {[
            "Module 1 : Principes fondamentaux de la méthode HACCP",
            "Module 2 : Micro-organismes et dangers microbiologiques",
            "Module 3 : Nettoyage, désinfection et gestion des flux",
            "Module 4 : Traçabilité, gestion des contrôles et audits",
          ].map((module, index) => (
            <div
              key={index}
              className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl flex items-center gap-4"
            >
              <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <span className="font-semibold">{module}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-emerald-500 text-slate-950 p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-2xl font-extrabold">
            Prêt à suivre cette formation ?
          </h3>
          <p className="text-slate-900 font-medium">
            Réservez votre place dès maintenant pour la prochaine session.
          </p>
        </div>
        <Link
          href="/inscription"
          className="px-8 py-4 bg-slate-950 text-white font-bold rounded-2xl hover:bg-slate-900 transition-all"
        >
          S'inscrire à cette session
        </Link>
      </div>
    </div>
  );
}
