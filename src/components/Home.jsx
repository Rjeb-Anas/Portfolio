import { ArrowDown, ArrowUpRight, Code2, Sparkles } from "lucide-react";
import profileImage from "../assets/img.png";

const Home = () => (
  <section className="flex min-h-[calc(100svh-76px)] items-center py-20 sm:py-24 lg:py-28" aria-labelledby="hero-title">
    <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
      <div className="order-2 text-center lg:order-1 lg:text-left">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-2 text-sm text-emerald-200">
          <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-60" /><span className="relative inline-flex size-2 rounded-full bg-emerald-300" /></span>
          Disponible pour de nouvelles opportunités
        </div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[.24em] text-cyan-300">Portfolio · Génie informatique</p>
        <h1 id="hero-title" className="text-5xl font-extrabold tracking-[-.07em] text-white sm:text-6xl lg:text-7xl">
          Anass <span className="text-gradient">Rjeb</span>
        </h1>
        <h2 className="mt-5 text-xl font-medium text-slate-300 sm:text-2xl">Développeur web <span className="text-cyan-300">Front-End</span></h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0">
          Étudiant en Génie Informatique, je transforme des idées en expériences web modernes, rapides et accessibles avec React, JavaScript et Tailwind CSS.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <a href="#Contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200">
            Me contacter <ArrowUpRight size={18} />
          </a>
          <a href="https://github.com/Rjeb-Anas" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08]">
            <Code2 size={18} /> Voir GitHub
          </a>
        </div>
        <a href="#About" className="mt-12 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-200">
          Découvrir mon profil <ArrowDown size={15} />
        </a>
      </div>

      <div className="order-1 mx-auto w-full max-w-md lg:order-2">
        <div className="relative mx-auto aspect-[4/4.5] max-w-[390px]">
          <div className="absolute inset-5 rounded-[2rem] bg-cyan-400/15 blur-3xl" />
          <div className="absolute -inset-3 rotate-[-5deg] rounded-[2rem] border border-cyan-200/20 bg-cyan-300/[0.03]" />
          <div className="glass-card absolute inset-0 overflow-hidden rounded-[2rem] p-3">
            <div className="absolute inset-3 rounded-[1.4rem] border border-white/10" />
            <img src={profileImage} alt="Portrait ou illustration du portfolio d'Anass Rjeb" className="size-full rounded-[1.4rem] object-cover" />
          </div>
          <div className="glass-card absolute -left-5 bottom-12 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-left-10">
            <span className="flex size-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200"><Code2Icon /></span>
            <span><strong className="block text-sm text-white">Clean code</strong><small className="text-slate-400">Interfaces modernes</small></span>
          </div>
          <div className="glass-card absolute -right-3 top-10 flex items-center gap-2 rounded-2xl px-4 py-3 sm:-right-8">
            <Sparkles size={18} className="text-amber-200" />
            <span className="text-sm font-semibold text-slate-100">Curieux & créatif</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

function Code2Icon() {
  return <span className="font-mono text-xs font-bold">{"</>"}</span>;
}

export default Home;