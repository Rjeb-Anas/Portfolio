import { ArrowDown, ArrowUpRight, Code2, Sparkles, FileDown } from "lucide-react";
import profileImage from "../assets/img.png";

const cvPdfBase64 = "JVBERi0xLjQKJeLjz9MKMSAwIG9iago8PCAvVHlwZSAvQ2F0YWxvZyAvUGFnZXMgMiAwIFIgPj4KZW5kb2JqCjIgMCBvYmoKPDwgL1R5cGUgL1BhZ2VzIC9LaWRzIFszIDAgUl0gL0NvdW50IDEgPj4KZW5kb2JqCjMgMCBvYmoKPDwgL1R5cGUgL1BhZ2UgL1BhcmVudCAyIDAgUiAvTWVkaWFCb3ggWzAgMCA1OTUgODQyXSAvUmVzb3VyY2VzIDw8IC9Gb250IDw8IC9GMSA0IDAgUiAvRjIgNSAwIFIgPj4gPj4gL0NvbnRlbnRzIDYgMCBSID4+CmVuZG9iago0IDAgb2JqCjw8IC9UeXBlIC9Gb250IC9TdWJ0eXBlIC9UeXBlMSAvQmFzZUZvbnQgL0hlbHZldGljYSAvRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZyA+PgplbmRvYmoKNSAwIG9iago8PCAvVHlwZSAvRm9udCAvU3VidHlwZSAvVHlwZTEgL0Jhc2VGb250IC9IZWx2ZXRpY2EtQm9sZCAvRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZyA+PgplbmRvYmoKNiAwIG9iago8PCAvTGVuZ3RoIDI1NDMgPj4Kc3RyZWFtCjAuMDkgMC4yIDAuMyByZyBCVCAvRjIgMjQgVGYgNDUgNzk1IFRkIChBTkFTUyBSSkVCKSBUaiBFVAowLjE0IDAuMzkgMC42NSByZyBCVCAvRjIgMTIgVGYgNDUgNzczIFRkIChFdHVkaWFudCBlbiBMaWNlbmNlIEN5YmVyc+ljdXJpdGUpIFRqIEVUCjAuMTMgMC4yMiAwLjMyIHJnIEJUIC9GMSA5IFRmIDQ1IDc1MCBUZCAoRmVzLCBNYXJvYyAgfCAgKzIxMiA2NjUgMDE5IDQ5NiAgfCAgYW5hc3NyamViOTI5QGdtYWlsLmNvbSkgVGogRVQKMC4xMyAwLjIyIDAuMzIgcmcgQlQgL0YxIDkgVGYgNDUgNzM1IFRkIChHaXRIdWIgOiBnaXRodWIuY29tL1JqZWItQW5hcykgVGogRVQKMC4wOSAwLjIgMC4zIHJnIEJUIC9GMiAxMSBUZiA0NSA3MDQgVGQgKFBST0ZJTCkgVGogRVQKMC44MyAwLjg4IDAuOTMgUkcgMSB3IDQ1IDY5NyBtIDU1MCA2OTcgbCBTCjAuMTMgMC4yMiAwLjMyIHJnIEJUIC9GMSA5IFRmIDQ1IDY4NCBUZCAoRXR1ZGlhbnQgZW4gaW5mb3JtYXRpcXVlIHNvdWhhaXRhbnQgc2Ugc3DpY2lhbGlzZXIgZW4gY3liZXJz6WN1cml06S4gSW506XJlc3PpIHBhciBsYSBz6WN1cml06SkgVGogRVQKMC4xMyAwLjIyIDAuMzIgcmcgQlQgL0YxIDkgVGYgNDUgNjcwIFRkIChkZXMgYXBwbGljYXRpb25zIHdlYiwgbGVzIHN5c3TobWVzIExpbnV4IGV0IGxlcyBib25uZXMgcHJhdGlxdWVzIGRlIGTpdmVsb3BwZW1lbnQgc+ljdXJpc+kuKSBUaiBFVAowLjA5IDAuMiAwLjMgcmcgQlQgL0YyIDExIFRmIDQ1IDY0NiBUZCAoRk9STUFUSU9OKSBUaiBFVAowLjgzIDAuODggMC45MyBSRyAxIHcgNDUgNjM5IG0gNTUwIDYzOSBsIFMKMC4xMyAwLjIyIDAuMzIgcmcgQlQgL0YyIDkgVGYgNDUgNjI2IFRkIChMaWNlbmNlIGVuIEN5YmVyc+ljdXJpdOkglyBGU1QgRuhzLCBVbml2ZXJzaXTpIFNpZGkgTW9oYW1lZCBCZW4gQWJkZWxsYWggfCAyMDI2IJYgZW4gY291cnMpIFRqIEVUCjAuMTMgMC4yMiAwLjMyIHJnIEJUIC9GMSA5IFRmIDQ1IDYxMCBUZCAoREVVU1QgLyBwYXJjb3VycyBpbmZvcm1hdGlxdWUglyBGU1QgRuhzLCBVU01CQSB8IDIwMjQgliAyMDI2KSBUaiBFVAowLjEzIDAuMjIgMC4zMiByZyBCVCAvRjEgOSBUZiA0NSA1OTQgVGQgKEJhY2NhbGF1culhdCBTY2llbmNlcyBQaHlzaXF1ZXMglyBMeWPpZSBNYXphcmluIHwgMjAyMyCWIDIwMjQpIFRqIEVUCjAuMDkgMC4yIDAuMyByZyBCVCAvRjIgMTEgVGYgNDUgNTY3IFRkIChDT01QyVRFTkNFUykgVGogRVQKMC44MyAwLjg4IDAuOTMgUkcgMSB3IDQ1IDU2MCBtIDU1MCA1NjAgbCBTCjAuMTMgMC4yMiAwLjMyIHJnIEJUIC9GMSA5IFRmIDQ1IDU0NyBUZCAoUHJvZ3JhbW1hdGlvbiA6IEMvQysrLCBQeXRob24sIEphdmFTY3JpcHQsIFBIUCwgU1FMKSBUaiBFVAowLjEzIDAuMjIgMC4zMiByZyBCVCAvRjEgOSBUZiA0NSA1MzEgVGQgKFdlYiA6IEhUTUw1LCBDU1MzLCBUYWlsd2luZCBDU1MsIFJlYWN0LCBhdXRoZW50aWZpY2F0aW9uIFBIUC9NeVNRTCkgVGogRVQKMC4xMyAwLjIyIDAuMzIgcmcgQlQgL0YxIDkgVGYgNDUgNTE1IFRkIChDeWJlcnPpY3VyaXTpIDogYmFzZXMgZHUgZOl2ZWxvcHBlbWVudCBz6WN1cmlz6Swgbm90aW9ucyBPV0FTUCwgZ2VzdGlvbiBkZXMgc2Vzc2lvbnMpIFRqIEVUCjAuMTMgMC4yMiAwLjMyIHJnIEJUIC9GMSA5IFRmIDQ1IDQ5OSBUZCAoU3lzdOhtZXMgZXQgb3V0aWxzIDogTGludXgsIFdpbmRvd3MsIEdpdC9HaXRIdWIsIE15U1FMLCBYQU1QUCwgVlMgQ29kZSkgVGogRVQKMC4wOSAwLjIgMC4zIHJnIEJUIC9GMiAxMSBUZiA0NSA0NzIgVGQgKFBST0pFVFMpIFRqIEVUCjAuODMgMC44OCAwLjkzIFJHIDEgdyA0NSA0NjUgbSA1NTAgNDY1IGwgUwowLjEzIDAuMjIgMC4zMiByZyBCVCAvRjIgOSBUZiA0NSA0NTIgVGQgKFBvcnRmb2xpbyBwZXJzb25uZWwpIFRqIEVUCjAuMTMgMC4yMiAwLjMyIHJnIEJUIC9GMSA5IFRmIDQ1IDQzNiBUZCAoUG9ydGZvbGlvIHJlc3BvbnNpdmUgculhbGlz6SBhdmVjIFJlYWN0LCBWaXRlIGV0IFRhaWx3aW5kIENTUy4pIFRqIEVUCjAuMTMgMC4yMiAwLjMyIHJnIEJUIC9GMSA5IFRmIDQ1IDQyMCBUZCAoR2l0SHViIDogZ2l0aHViLmNvbS9SamViLUFuYXMvUG9ydGZvbGlvLS1TKSBUaiBFVAowLjEzIDAuMjIgMC4zMiByZyBCVCAvRjIgOSBUZiA0NSAzOTYgVGQgKEFwcGxpY2F0aW9uIHdlYiBQSFAvTXlTUUwpIFRqIEVUCjAuMTMgMC4yMiAwLjMyIHJnIEJUIC9GMSA5IFRmIDQ1IDM4MCBUZCAoUHJvamV0IGSSYXBwcmVudGlzc2FnZSBhdmVjIGF1dGhlbnRpZmljYXRpb24sIGdlc3Rpb24gZGVzIHV0aWxpc2F0ZXVycyBldCBiYXNlIGRlIGRvbm7pZXMuKSBUaiBFVAowLjA5IDAuMiAwLjMgcmcgQlQgL0YyIDExIFRmIDQ1IDM1MCBUZCAoTEFOR1VFUykgVGogRVQKMC44MyAwLjg4IDAuOTMgUkcgMSB3IDQ1IDM0MyBtIDU1MCAzNDMgbCBTCjAuMTMgMC4yMiAwLjMyIHJnIEJUIC9GMSA5IFRmIDQ1IDMzMCBUZCAoQXJhYmUgOiBsYW5ndWUgbWF0ZXJuZWxsZSAgfCAgRnJhbudhaXMgOiBwcm9mZXNzaW9ubmVsICB8ICBBbmdsYWlzIDogaW50ZXJt6WRpYWlyZSkgVGogRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNwowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDA2NCAwMDAwMCBuIAowMDAwMDAwMTIxIDAwMDAwIG4gCjAwMDAwMDAyNTcgMDAwMDAgbiAKMDAwMDAwMDM1NCAwMDAwMCBuIAowMDAwMDAwNDU2IDAwMDAwIG4gCnRyYWlsZXIKPDwgL1NpemUgNyAvUm9vdCAxIDAgUiA+PgpzdGFydHhyZWYKMzA1MAolJUVPRgo=";

const Home = () => (
  <section className="flex min-h-[calc(100svh-76px)] items-center py-20 sm:py-24 lg:py-28" aria-labelledby="hero-title">
    <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
      <div className="order-2 text-center lg:order-1 lg:text-left">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-2 text-sm text-emerald-200">
          <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-60" /><span className="relative inline-flex size-2 rounded-full bg-emerald-300" /></span>
          Disponible pour de nouvelles opportunités
        </div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[.24em] text-cyan-300">Portfolio · Cybersécurité</p>
        <h1 id="hero-title" className="text-5xl font-extrabold tracking-[-.07em] text-white sm:text-6xl lg:text-7xl">
          Anass <span className="text-gradient">Rjeb</span>
        </h1>
        <h2 className="mt-5 text-xl font-medium text-slate-300 sm:text-2xl">Étudiant en <span className="text-cyan-300">Licence Cybersécurité</span></h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0">
          Étudiant en informatique, intéressé par la cybersécurité, les systèmes Linux et le développement web sécurisé.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <a href="#Contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200">
            Me contacter <ArrowUpRight size={18} />
          </a>
          <a href={`data:application/pdf;base64,${cvPdfBase64}`} download="CV_Anass_Rjeb_Licence_Cybersecurite.pdf" className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/[0.08] px-6 py-3.5 font-semibold text-cyan-100 transition hover:-translate-y-1 hover:border-cyan-200/60 hover:bg-cyan-300/[0.14]">
            <FileDown size={18} /> Télécharger mon CV (PDF)
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
