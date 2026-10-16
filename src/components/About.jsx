import { ArrowDownToLine, Eye, Code2, Server, Wrench, Layers3 } from "lucide-react";

const skillGroups = [
  { title: "Front-End", icon: Code2, skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"], number: "01" },
  { title: "Back-End", icon: Server, skills: ["PHP", "MySQL"], number: "02" },
  { title: "Outils", icon: Wrench, skills: ["Git", "GitHub", "XAMPP"], number: "03" },
];

const About = () => (
  <section id="About" className="scroll-mt-24 py-20 sm:py-28" aria-labelledby="about-title">
    <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
      <div>
        <span className="section-kicker">À propos</span>
        <h2 id="about-title" className="section-title mt-5">Un peu de moi,<br /><span className="text-gradient">beaucoup de curiosité.</span></h2>
        <p className="mt-6 max-w-xl leading-8 text-slate-400">
          Je suis étudiant en Génie Informatique à la Faculté des Sciences et Techniques de Fès. Passionné par le développement web, la cybersécurité et les nouvelles technologies, j'aime concevoir des applications utiles et continuer à apprendre à chaque projet.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="/Portfolio--S/CV_Anass_Rjeb.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">
            <ArrowDownToLine size={17} /> Télécharger mon CV
          </a>
          <a href="/Portfolio--S/CV_Anass_Rjeb.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-200/40 hover:text-cyan-200">
            <Eye size={17} /> Voir le CV
          </a>
        </div>
        <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
          <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-200"><Layers3 size={20} /></div>
          <div><p className="font-semibold text-white">Toujours en apprentissage</p><p className="mt-1 text-sm text-slate-500">Construire, tester, améliorer.</p></div>
        </div>
      </div>

      <div>
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Compétences techniques</h3>
          <span className="text-xs font-medium uppercase tracking-widest text-slate-500">Stack actuelle</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map(({ title, icon: Icon, skills, number }) => (
            <article key={title} data-reveal className="glass-card reveal rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/25">
              <div className="mb-5 flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200"><Icon size={21} /></span>
                <span className="font-mono text-xs text-slate-600">{number}</span>
              </div>
              <h4 className="mb-4 font-bold text-white">{title}</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => <span key={skill} className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300">{skill}</span>)}
              </div>
            </article>
          ))}
          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-white/15 p-5 sm:col-span-2">
            <p className="text-sm leading-6 text-slate-400">J'élargis progressivement mes compétences en réalisant des projets pratiques et en explorant de nouvelles technologies.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;