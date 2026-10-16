import { ArrowUpRight, BriefcaseBusiness, Code2, GraduationCap, Mail, MapPin, Phone, Printer } from "lucide-react";

const projects = [
  {
    title: "Portfolio personnel",
    type: "Développement Front-End",
    description:
      "Conception d'un portfolio responsive pour présenter le profil, les compétences, le parcours académique et les moyens de contact.",
    stack: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    href: "https://github.com/Rjeb-Anas/Portfolio--S",
    live: "https://rjeb-anas.github.io/Portfolio--S/",
  },
];

const skills = [
  { title: "Front-End", items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"] },
  { title: "Back-End & données", items: ["PHP", "MySQL"] },
  { title: "Outils", items: ["Git", "GitHub", "XAMPP", "Vite"] },
  { title: "Fondamentaux", items: ["Algorithmique", "Programmation C++", "Bases de données", "Systèmes d'exploitation"] },
];

const CV = () => {
  const printCV = () => window.print();

  return (
    <section id="CV" className="scroll-mt-24 py-20 sm:py-28" aria-labelledby="cv-title">
      <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="section-kicker">Curriculum vitæ</span>
          <h2 id="cv-title" className="section-title mt-5">Profil professionnel<span className="text-gradient">.</span></h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Une synthèse de mon parcours, de mes compétences et de mes réalisations. Cette version est conçue pour être imprimée ou enregistrée en PDF.
          </p>
        </div>
        <button type="button" onClick={printCV} className="no-print inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">
          <Printer size={17} /> Imprimer / Enregistrer en PDF
        </button>
      </div>

      <article className="cv-sheet glass-card overflow-hidden rounded-[1.75rem]">
        <div className="cv-header grid gap-6 border-b border-white/10 bg-white/[0.025] p-6 sm:p-9 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.22em] text-cyan-300">Curriculum vitæ</p>
            <h3 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Anass Rjeb</h3>
            <p className="mt-3 text-lg font-medium text-slate-300">Étudiant en Génie Informatique · Développement Web</p>
            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Étudiant en informatique à la FST de Fès, intéressé par le développement web et la création d'interfaces modernes. Je développe mes compétences à travers des projets pratiques et cherche à progresser dans la conception d'applications fiables, accessibles et bien structurées.
            </p>
          </div>
          <div className="cv-contact grid gap-3 text-sm text-slate-300">
            <a className="flex items-center gap-3 transition hover:text-cyan-200" href="mailto:anassrjeb929@gmail.com"><Mail size={17} className="text-cyan-300" /> anassrjeb929@gmail.com</a>
            <a className="flex items-center gap-3 transition hover:text-cyan-200" href="tel:+212665019496"><Phone size={17} className="text-cyan-300" /> +212 665 019 496</a>
            <span className="flex items-center gap-3"><MapPin size={17} className="text-cyan-300" /> Fès, Maroc</span>
            <a className="flex items-center gap-3 transition hover:text-cyan-200" href="https://github.com/Rjeb-Anas" target="_blank" rel="noreferrer"><Code2 size={17} className="text-cyan-300" /> github.com/Rjeb-Anas</a>
          </div>
        </div>

        <div className="grid gap-9 p-6 sm:p-9 lg:grid-cols-[1.2fr_.8fr]">
          <div className="space-y-9">
            <section>
              <h4 className="cv-section-title"><Code2 size={18} /> Projets sélectionnés</h4>
              <div className="mt-5 space-y-5">
                {projects.map((project) => (
                  <div key={project.title} className="cv-project border-l-2 border-cyan-300/50 pl-5">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h5 className="font-bold text-white">{project.title}</h5>
                        <p className="mt-1 text-sm text-cyan-100/70">{project.type}</p>
                      </div>
                      <a href={project.href} target="_blank" rel="noreferrer" className="no-print inline-flex items-center gap-1 text-sm text-cyan-200 hover:text-white">Code source <ArrowUpRight size={14} /></a>
                    </div>
                    <p className="mt-3 leading-7 text-slate-400">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((item) => <span key={item} className="cv-chip rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">{item}</span>)}
                    </div>
                    <a href={project.live} target="_blank" rel="noreferrer" className="no-print mt-3 inline-flex items-center gap-1 text-sm text-slate-400 hover:text-cyan-200">Voir le site <ArrowUpRight size={14} /></a>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-500">
                Voir également mon profil GitHub pour consulter les autres dépôts et leur évolution.
              </p>
            </section>

            <section>
              <h4 className="cv-section-title"><GraduationCap size={18} /> Formation</h4>
              <div className="mt-5 space-y-5">
                <div className="cv-education">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h5 className="font-bold text-white">Licence — parcours informatique</h5>
                    <span className="text-sm text-slate-500">2026 — en cours</span>
                  </div>
                  <p className="mt-1 text-sm text-cyan-100/70">Faculté des Sciences et Techniques de Fès · USMBA</p>
                </div>
                <div className="cv-education">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h5 className="font-bold text-white">DEUST — Génie Informatique</h5>
                    <span className="text-sm text-slate-500">2024 — 2026</span>
                  </div>
                  <p className="mt-1 text-sm text-cyan-100/70">Faculté des Sciences et Techniques de Fès · USMBA</p>
                </div>
                <div className="cv-education">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h5 className="font-bold text-white">Baccalauréat SPC</h5>
                    <span className="text-sm text-slate-500">2023 — 2024</span>
                  </div>
                  <p className="mt-1 text-sm text-cyan-100/70">Lycée Mazarin</p>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-9">
            <section>
              <h4 className="cv-section-title"><BriefcaseBusiness size={18} /> Compétences</h4>
              <div className="mt-5 space-y-5">
                {skills.map((group) => (
                  <div key={group.title}>
                    <h5 className="mb-2 text-sm font-semibold text-white">{group.title}</h5>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => <span key={item} className="cv-chip rounded-lg border border-white/10 bg-white/[0.035] px-2.5 py-1.5 text-xs text-slate-300">{item}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="cv-section-title"><GraduationCap size={18} /> Points forts</h4>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">
                <li>• Curiosité technique et apprentissage continu</li>
                <li>• Intérêt pour les interfaces responsive et accessibles</li>
                <li>• Pratique du développement à travers des projets personnels</li>
                <li>• Travail avec Git et gestion de code sur GitHub</li>
              </ul>
            </section>

            <section className="no-print rounded-2xl border border-cyan-200/15 bg-cyan-300/[0.05] p-5">
              <h4 className="font-bold text-white">Profil GitHub</h4>
              <p className="mt-2 text-sm leading-6 text-slate-400">Consultez les dépôts, le code source et les prochaines réalisations.</p>
              <a href="https://github.com/Rjeb-Anas" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white">Ouvrir GitHub <ArrowUpRight size={15} /></a>
            </section>
          </aside>
        </div>
        <div className="cv-footer flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-6 py-4 text-xs text-slate-500 sm:px-9">
          <span>Anass Rjeb · Fès, Maroc</span>
          <span>Portfolio : rjeb-anas.github.io/Portfolio--S</span>
        </div>
      </article>
    </section>
  );
};

export default CV;
