"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Music, Instagram, MapPin, Clock, ChevronRight } from "lucide-react";

const experiences = [
  {
    tag: "VIBE",
    title: "Noailles raw",
    desc: "L'énergie brute du centre-ville, version premium. Lumières chaudes, textures brutes, ambiance magnétique.",
  },
  {
    tag: "SON",
    title: "Vinyl only",
    desc: "Deep house, grooves méditerranéens et sets qui accompagnent la soirée sans jamais l'écraser.",
  },
  {
    tag: "GOÛT",
    title: "Mixologie signature",
    desc: "Des cocktails visuels, précis et mémorables. Pensés pour surprendre dès la première gorgée.",
  },
];

const testimonials = [
  {
    quote: "Le seul bar à Marseille qui comprend vraiment la vibe TikTok sans faire de la figuration.",
    author: "@MarseilleVibes",
  },
  {
    quote: "Cocktails incroyables, playlist parfaite. LILY est devenu notre QG.",
    author: "Julien B.",
  },
];

function Button({ children, secondary = false }: { children: React.ReactNode; secondary?: boolean }) {
  return (
    <a
      href="#reservation"
      className={`inline-flex items-center gap-3 px-6 py-4 md:px-8 md:py-5 font-black uppercase italic tracking-tight transition-transform duration-200 hover:scale-[1.02] ${
        secondary
          ? "bg-white text-black border-4 border-black shadow-[8px_8px_0_0_#ff4d00]"
          : "bg-[#ff4d00] text-white border-4 border-black shadow-[8px_8px_0_0_#000]"
      }`}
    >
      {children}
      <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6" strokeWidth={3} />
    </a>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="mb-4 text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-[#ff4d00]">{eyebrow}</p>
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase leading-[0.82] tracking-tighter">
        {title}
      </h2>
    </div>
  );
}

export default function Page() {
  return (
    <main className="bg-[#0a0a0a] text-white overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 opacity-[0.04] mix-blend-overlay">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,77,0,0.35),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.12),transparent_20%),radial-gradient(circle_at_50%_80%,rgba(255,77,0,0.18),transparent_25%)]" />
      </div>

      <header className="fixed left-0 top-0 z-50 w-full px-5 py-5 md:px-8 md:py-6 mix-blend-difference">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#top" className="text-3xl md:text-4xl font-black italic tracking-tighter">
            LILY<span className="text-[#ff4d00]">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.24em]">
            <a href="#experiences" className="hover:text-[#ff4d00] transition-colors">Expériences</a>
            <a href="#social" className="hover:text-[#ff4d00] transition-colors">Social proof</a>
            <a href="#reservation" className="hover:text-[#ff4d00] transition-colors">Réserver</a>
          </nav>
          <a href="#reservation" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] hover:border-white/50 transition-colors">
            <Instagram className="h-4 w-4" />
            TikTok ready
          </a>
        </div>
      </header>

      <section id="top" className="relative min-h-screen px-5 pb-16 pt-28 md:px-8 md:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white/80">
              <MapPin className="h-4 w-4 text-[#ff4d00]" />
              Marseille • 7e arrondissement • esprit découverte
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="max-w-4xl text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black italic uppercase leading-[0.82] tracking-tighter">
              Un bar <span className="text-[#ff4d00]">découverte</span> pensé pour faire parler Marseille.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-6 max-w-2xl text-lg md:text-2xl font-semibold leading-relaxed text-white/80">
              LILY mélange expériences, cocktails signatures et ambiance magnétique pour transformer une sortie en vrai moment à partager.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button>Réserver maintenant</Button>
              <Button secondary>Voir les expériences</Button>
            </motion.div>

            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {[["Ambiance", "premium & vivante"], ["Signature", "cocktails & surprises"], ["Audience", "Marseillais + TikTok"]].map(([label, value]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">{label}</p>
                  <p className="mt-2 text-sm md:text-base font-bold italic uppercase leading-tight">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="absolute -left-4 top-8 z-10 rotate-[-8deg] rounded-full border-4 border-black bg-[#ff4d00] px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-white shadow-[8px_8px_0_0_#000]">
              Vertical Hype
            </div>
            <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] border-4 border-white/10 bg-black shadow-[24px_24px_0_0_#ff4d00]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                  <Sparkles className="h-4 w-4 text-[#ff4d00]" />
                  Marseille after dark
                </div>
                <p className="max-w-sm text-3xl md:text-4xl font-black italic uppercase leading-[0.9] tracking-tighter">
                  Le spot qui donne envie de sortir maintenant.
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-white/70">
                  <Clock className="h-4 w-4" />
                  Ouvert pour vos soirées, vos apéros, vos découvertes
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experiences" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="L'expérience" title={<>Pas juste un bar.<br />Un terrain de jeu.</>} />
          <div className="grid gap-6 lg:grid-cols-3">
            {experiences.map((item) => (
              <div key={item.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8 transition-transform hover:-translate-y-2">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ff4d00]">{item.tag}</p>
                <h3 className="mt-4 text-3xl md:text-4xl font-black italic uppercase leading-none">{item.title}</h3>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-white/75">{item.desc}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/60">
                  Découvrir <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/10 bg-[#ff4d00] py-5 md:py-7">
        <motion.div animate={{ x: [0, -1200] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="flex whitespace-nowrap text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-black">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="mr-10 inline-flex items-center gap-4">
              LILY • Marseille • expériences • cocktails • TikTok •
              <Music className="h-8 w-8" />
            </span>
          ))}
        </motion.div>
      </section>

      <section id="social" className="px-5 py-20 md:px-8 md:py-28 bg-white text-black">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div>
            <SectionTitle eyebrow="Social proof" title={<>Le spot<br /><span className="text-[#ff4d00]">dont on parle.</span></>} />
            <div className="space-y-5">
              {testimonials.map((t) => (
                <div key={t.author} className="rounded-[1.75rem] border-2 border-black bg-[#f4f4f4] p-6 md:p-7 shadow-[10px_10px_0_0_#000]">
                  <p className="text-lg md:text-xl font-bold italic leading-relaxed">“{t.quote}”</p>
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.25em] text-black/55">— {t.author}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="aspect-[9/16] overflow-hidden rounded-[2rem] bg-black text-white shadow-[18px_18px_0_0_#ff4d00]">
              <div className="h-full bg-[url('https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&q=80')] bg-cover bg-center" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-[2rem] border-2 border-black p-6 md:p-7">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#ff4d00]">Adresse</p>
                <p className="mt-3 text-2xl md:text-3xl font-black italic uppercase leading-tight">Marseille, 7e arrondissement</p>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-black/70">Une adresse pensée pour les sorties qui commencent par un apéro et finissent en souvenir.</p>
              </div>
              <div className="rounded-[2rem] border-2 border-black bg-black p-6 md:p-7 text-white">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-white/55">Format</p>
                <p className="mt-3 text-2xl md:text-3xl font-black italic uppercase leading-tight">Parfait pour les contenus courts</p>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-white/70">La landing page est conçue pour convertir vite et donner envie de partager sur TikTok.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reservation" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl rounded-[2.25rem] border-2 border-white/10 bg-[linear-gradient(135deg,#111,#0a0a0a)] p-8 md:p-12 lg:p-16 shadow-[24px_24px_0_0_#ff4d00]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ff4d00]">Réservation</p>
              <h2 className="mt-4 text-5xl md:text-7xl font-black italic uppercase leading-[0.82] tracking-tighter">
                Prêt à faire parler <span className="text-[#ff4d00]">LILY</span> ?
              </h2>
              <p className="mt-6 max-w-2xl text-lg md:text-2xl font-semibold leading-relaxed text-white/75">
                Réserve une table, lance une soirée, ou contacte l’équipe pour organiser une expérience qui marque Marseille.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Button>Réserver une table</Button>
              <a href="mailto:hello@lily-marseille.fr" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-4 md:px-8 md:py-5 text-sm font-black uppercase italic tracking-tight text-white/80 hover:border-white/40 transition-colors">
                Nous contacter
                <ArrowUpRight className="h-5 w-5" strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
