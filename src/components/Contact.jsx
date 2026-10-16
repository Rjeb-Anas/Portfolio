import { Mail, Phone, MapPin, Code2, ArrowUpRight } from "lucide-react";

const contacts = [
  { label: "E-mail", value: "anassrjeb929@gmail.com", href: "mailto:anassrjeb929@gmail.com", icon: Mail },
  { label: "Téléphone", value: "+212 665 019 496", href: "tel:+212665019496", icon: Phone },
  { label: "Localisation", value: "Fès, Maroc", href: "https://maps.google.com/?q=Fes,Morocco", icon: MapPin, external: true },
  { label: "GitHub", value: "github.com/Rjeb-Anas", href: "https://github.com/Rjeb-Anas", icon: Code2, external: true },
];

const Contact = () => (
  <section id="Contact" className="scroll-mt-24 py-20 sm:py-28" aria-labelledby="contact-title">
    <div className="relative overflow-hidden rounded-[2rem] border border-cyan-200/15 bg-gradient-to-br from-cyan-300/[0.09] via-slate-900/80 to-indigo-400/[0.08] p-6 sm:p-10 lg:p-14">
      <div className="absolute -right-20 -top-28 size-72 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden="true" />
      <div className="relative z-10 grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div>
          <span className="section-kicker">Contact</span>
          <h2 id="contact-title" className="section-title mt-5">Une idée en tête ?<br /><span className="text-gradient">Discutons-en.</span></h2>
          <p className="mt-5 max-w-md leading-7 text-slate-400">Une opportunité, une collaboration ou un projet à construire ensemble ? Je serais ravi d'en parler avec vous.</p>
          <a href="mailto:anassrjeb929@gmail.com" className="mt-7 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">
            Envoyer un e-mail <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {contacts.map(({ label, value, href, icon: Icon, external }) => (
            <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="group flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-[#080d18]/55 p-4 transition hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-[#080d18]/80">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-cyan-200 transition group-hover:bg-cyan-300/10"><Icon size={20} /></span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">{label}</span>
                <span className="mt-1 block break-words text-sm font-semibold text-slate-200 transition group-hover:text-cyan-100">{value}</span>
              </span>
              <ArrowUpRight size={16} className="shrink-0 text-slate-600 transition group-hover:text-cyan-200" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Contact;