import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16 px-6 max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black">Contactez CYDILY</h1>
        <p className="text-slate-400">
          Une question sur nos programmes ou besoins spécifiques ? Écrivez-nous.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Coordonnées */}
        <div className="space-y-8 bg-slate-900 border border-slate-800 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold">Nos Coordonnées</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-emerald-400" />
              <div>
                <div className="text-xs text-slate-400">Téléphone</div>
                <div className="font-semibold">+221 33 000 00 00</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-emerald-400" />
              <div>
                <div className="text-xs text-slate-400">E-mail</div>
                <div className="font-semibold">contact@cydily.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-emerald-400" />
              <div>
                <div className="text-xs text-slate-400">Siège Social</div>
                <div className="font-semibold">Dakar, Sénégal</div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <form className="space-y-4 bg-slate-900 border border-slate-800 p-8 rounded-3xl">
          <div>
            <label className="text-xs font-semibold text-slate-400 uppercase">
              Nom & Prénom
            </label>
            <input
              type="text"
              className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-400 uppercase">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
            ></textarea>
          </div>
          <button className="w-full py-3.5 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition-all flex justify-center items-center gap-2">
            Envoyer le message <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
