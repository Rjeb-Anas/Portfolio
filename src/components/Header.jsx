import { useState } from "react";
import { Menu, X, Code2, ArrowUpRight } from "lucide-react";

const links = [
  { href: "#Head", label: "Accueil" },
  { href: "#About", label: "À propos" },
  { href: "#Cursus", label: "Parcours" },
  { href: "#CV", label: "CV" },
  { href: "#Contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="Head" className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080d18]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Navigation principale">
        <a href="#Head" className="group flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <span className="flex size-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition group-hover:border-cyan-200/50">
            <Code2 size={21} strokeWidth={1.8} />
          </span>
          <span className="text-base font-bold tracking-tight text-white">Anass<span className="text-cyan-300">.dev</span></span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/[0.06] hover:text-white">
              {link.label}
            </a>
          ))}
          <a href="#Contact" className="ml-3 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">
            Parlons ensemble <ArrowUpRight size={16} />
          </a>
        </div>

        <button type="button" aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 transition hover:bg-white/10 md:hidden">
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#0b1120] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-cyan-200">
                {link.label}
              </a>
            ))}
            <a href="#Contact" onClick={() => setIsMenuOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-4 py-3 text-sm font-bold text-slate-950">
              Parlons ensemble <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;