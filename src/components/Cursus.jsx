import { GraduationCap, School, CalendarDays } from "lucide-react";

const education = [
  {
    title: "Baccalauréat SPC",
    place: "Lycée Mazarin",
    period: "2023 — 2024",
    description: "Sciences physiques, mathématiques et sciences fondamentales : une base solide pour poursuivre des études en ingénierie et en informatique.",
    icon: School,
    status: "Obtenu",
  },
  {
    title: "DEUST — Génie Informatique",
    place: "Faculté des Sciences et Techniques de Fès · USMBA",
    period: "2024 — 2026",
    description: "Formation en développement logiciel, bases de données, algorithmique, réseaux, systèmes d'exploitation et projets pratiques.",
    icon: GraduationCap,
    status: "Terminé",
  },
  {
    title: "Licence",
    place: "Faculté des Sciences et Techniques de Fès",
    period: "2026 — en cours",
    description: "Poursuite du parcours universitaire et approfondissement des connaissances en informatique.",
    icon: GraduationCap,
    status: "En cours",
  },
];

const Cursus = () => (
  <section id="Cursus" className="scroll-mt-24 py-20 sm:py-28" aria-labelledby="cursus-title">
    <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div>
        <span className="section-kicker">Formation</span>
        <h2 id="cursus-title" className="section-title mt-5">Mon parcours<br /><span className="text-gradient">académique.</span></h2>
      </div>
      <p className="max-w-md leading-7 text-slate-400">Chaque étape m'a permis de consolider mes bases et de me rapprocher de mon objectif : créer des solutions numériques utiles.</p>
    </div>

    <div className="relative ml-3 space-y-5 border-l border-cyan-200/20 pl-7 sm:ml-5 sm:pl-10">
      {education.map(({ title, place, period, description, icon: Icon, status }) => (
        <article key={title} data-reveal className="glass-card reveal relative rounded-2xl p-5 sm:p-7">
          <span className="absolute -left-[2.13rem] top-8 size-3 rounded-full border-2 border-cyan-200 bg-[#0b1120] shadow-[0_0_16px_rgba(103,232,249,.35)] sm:-left-[2.88rem]" />
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-cyan-200/15 bg-cyan-300/10 text-cyan-200"><Icon size={23} /></div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-bold text-white sm:text-xl">{title}</h3>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${status === "En cours" ? "bg-emerald-300/10 text-emerald-200" : "bg-white/[0.06] text-slate-400"}`}>{status}</span>
              </div>
              <p className="mt-1 text-sm text-cyan-100/70">{place}</p>
              <p className="mt-4 max-w-3xl leading-7 text-slate-400">{description}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 text-sm text-slate-500"><CalendarDays size={15} /> {period}</span>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Cursus;