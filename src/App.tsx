/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export default function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const xPx = useTransform(smoothX, (v) => `${v}px`);
  const yPx = useTransform(smoothY, (v) => `${v}px`);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="font-sans selection:bg-gold selection:text-slate-900">
      {/* 1. HERO SECTION */}
      <motion.header 
        className="hero overflow-hidden"
        onMouseMove={handleMouseMove}
        style={{
          background: `radial-gradient(circle at var(--x) var(--y), rgba(212, 175, 55, 0.2) 0%, rgba(0, 119, 190, 0.1) 30%, #0f172a 70%)`,
          // We'll use CSS variables to pass the smooth motion values
          // @ts-ignore
          "--x": xPx,
          // @ts-ignore
          "--y": yPx,
        } as any}
      >
        <div className="animate-float text-center px-4">
          <h1 className="font-display text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
            Les Croûtons <br />
            à <span className="text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">Moncao 2026</span>
          </h1>
          <p className="text-xl md:text-3xl font-light mb-12 max-w-3xl mx-auto opacity-80 uppercase tracking-widest">
            Nice • Antibes • Cannes <br />
            <span className="text-azure font-bold">7 Jours de Pure Folie</span>
          </p>
          <a href="#plan" className="btn btn-gold text-xl">Découvrir le plan</a>
        </div>
      </motion.header>

      {/* 2. SECTION PRÉSENTATION */}
      <section id="plan" className="py-24 px-4 max-w-7xl mx-auto animate-on-scroll">
        <h2 className="section-title">Le Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center group">
            <div className="text-6xl mb-6 group-hover:scale-125 transition-transform">📅</div>
            <h3 className="font-display font-bold text-xl mb-2">Dates</h3>
            <p className="text-azure font-semibold">24 - 31 Juillet</p>
          </div>
          <div className="card text-center group">
            <div className="text-6xl mb-6 group-hover:scale-125 transition-transform">👥</div>
            <h3 className="font-display font-bold text-xl mb-2">Le Crew</h3>
            <p className="text-azure font-semibold">7 Personnes</p>
          </div>
          <div className="card text-center group">
            <div className="text-6xl mb-6 group-hover:scale-125 transition-transform">☀️</div>
            <h3 className="font-display font-bold text-xl mb-2">Destination</h3>
            <p className="text-azure font-semibold">French Riviera</p>
          </div>
        </div>
      </section>

      {/* 3. SECTION TRANSPORT */}
      <section className="py-24 px-4 max-w-7xl mx-auto animate-on-scroll">
        <h2 className="section-title">Types de transport</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card border-t-4 border-azure">
            <div className="icon-box">✈️</div>
            <h3 className="font-bold text-2xl mb-4">Avion</h3>
            <p className="text-4xl font-black text-gold mb-2">200€</p>
            <p className="text-sm opacity-60 mb-6">Par personne</p>
            <ul className="space-y-3 text-sm opacity-80">
              <li>✅ Rapide (1h30)</li>
              <li>❌ Galère bagages</li>
              <li>❌ Pas de voiture sur place</li>
            </ul>
          </div>
          <div className="card border-t-4 border-azure">
            <div className="icon-box">🚆</div>
            <h3 className="font-bold text-2xl mb-4">Train</h3>
            <p className="text-4xl font-black text-gold mb-2">165€</p>
            <p className="text-sm opacity-60 mb-6">Par personne</p>
            <ul className="space-y-3 text-sm opacity-80">
              <li>✅ Confort Max</li>
              <li>❌ 5h30 de trajet</li>
              <li>❌ Pas de voiture sur place</li>
            </ul>
          </div>
          <div className="card border-4 border-gold scale-105 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <div className="icon-box">🚗</div>
            <h3 className="font-bold text-2xl mb-4">Voiture</h3>
            <p className="text-4xl font-black text-gold mb-2">150€</p>
            <p className="text-sm opacity-60 mb-6">Par personne</p>
            <ul className="space-y-3 text-sm font-bold text-azure">
              <li>✅ Libérté Totale</li>
              <li>✅ Moins chère</li>
              <li>✅ Moyen de déplacement sur place</li>
            </ul>
          </div>
          <div className="card border-t-4 border-azure">
            <div className="icon-box">🚌</div>
            <h3 className="font-bold text-2xl mb-4">Bus</h3>
            <p className="text-4xl font-black text-gold mb-2">110€</p>
            <p className="text-sm opacity-60 mb-6">Par personne</p>
            <ul className="space-y-3 text-sm opacity-80">
              <li>❌ 12h d'enfer</li>
              <li>❌ Pas de clim</li>
              <li>❌ Aucune utilité</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. SECTION LOGEMENT */}
      <section className="py-24 px-4 max-w-7xl mx-auto animate-on-scroll">
        <h2 className="section-title">Le logement</h2>
        <div className="max-w-3xl mx-auto">
          <div className="card">
            <h3 className="font-display text-4xl font-black mb-6 text-gold">Airbnb type Villa</h3>
            <p className="text-xl opacity-80 mb-8 leading-relaxed">
              Piscine, proche de la mer, 4 à 5 chambres, 2 salles de bain, terrasse...
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="opacity-50 text-sm uppercase">Total Villa</p>
                <p className="text-4xl font-black text-azure">5 000 € Max</p>
              </div>
              <div className="text-right">
                <p className="opacity-50 text-sm uppercase">Par tête</p>
                <p className="text-4xl font-black text-gold">715 €</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION NIGHTLIFE & JAMAL MODE */}
      <div className="nightlife py-32">
        <section className="px-4 max-w-7xl mx-auto animate-on-scroll">
          <h2 className="section-title">Soirées & Bar</h2>
          <p className="text-center text-2xl mb-16 font-light italic opacity-80">
            "On vient pour faire la fête pas pour dormir."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="card group">
              <div className="text-5xl mb-6 group-hover:rotate-12 transition-transform">🍾</div>
              <h3 className="font-bold text-2xl mb-4 text-night-pink">Boîtes de Nuit</h3>
              <p className="text-4xl font-black mb-2">800 €</p>
              <p className="text-sm opacity-60">Budget groupe / soir</p>
            </div>
            <div className="card group">
              <div className="text-5xl mb-6 group-hover:rotate-12 transition-transform">🍹</div>
              <h3 className="font-bold text-2xl mb-4 text-night-pink">Beach Clubs</h3>
              <p className="text-4xl font-black mb-2">100 €</p>
              <p className="text-sm opacity-60">Par personne / jour</p>
            </div>
            <div className="card group">
              <div className="text-5xl mb-6 group-hover:rotate-12 transition-transform">✡️</div>
              <h3 className="font-bold text-2xl mb-4 text-night-pink">VIP Tables</h3>
              <p className="text-4xl font-black mb-2">1 500 €+</p>
              <p className="text-sm opacity-60">L'expérience ultime</p>
            </div>
          </div>

          <div className="jamal-mode">
            <h3 className="text-5xl font-black mb-6 italic tracking-tighter">🚀 MODE JAMAL PUISSANCE MAX 🚀</h3>
            <p className="text-2xl mb-12 max-w-3xl mx-auto font-bold leading-tight">
              C'est le prix à payer si on veut <span className="underline decoration-white underline-offset-8">choquer les babies</span>. 
              On sort l'artillerie lourde : bouteilles, restaurant, love hotel...
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="card bg-white/10 border-none">
                <p className="text-xs uppercase font-bold mb-2 opacity-70">Pour exister</p>
                <p className="text-3xl font-black">100€ /soir</p>
                <p className="text-sm opacity-60 font-medium mt-3 leading-relaxed">
                  Une soirée tranquille, un petit verre et un couché du soleil avec une pizza. Rapide, simple, efficace.
                </p>
              </div>
              <div className="card bg-white/20 border-white/40 scale-110 shadow-2xl">
                <p className="text-xs uppercase font-bold mb-2 opacity-70">Pour briller</p>
                <p className="text-3xl font-black">250€ /soir</p>
                <p className="text-sm opacity-60 font-medium mt-3 leading-relaxed">
                  Un resto avec un bon petit plat et une belle bouteille, suivi d'une soirée à siroter des Mojito fraise bien frais chacal.
                </p>
              </div>
              <div className="card bg-white/10 border-none">
                <p className="text-xs uppercase font-bold mb-2 opacity-70">Pour choquer</p>
                <p className="text-3xl font-black">500€ /soir</p>
                <p className="text-sm opacity-60 font-medium mt-3 leading-relaxed">
                  Resto &gt; club &gt; hotel. Pas besoin de vous faire de dessin, c'est la stratégie la plus directe pour aller droit au but.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 6. BUDGET GLOBAL */}
      <section id="budget" className="py-24 px-4 max-w-7xl mx-auto animate-on-scroll">
        <h2 className="section-title">Petit résumé</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="card border-l-8 border-azure">
            <h3 className="text-3xl font-black mb-8 text-azure">Option A</h3>
            <div className="space-y-6 text-lg mb-12">
              <div className="flex justify-between border-b border-white/10 pb-2"><span>Voiture</span><span className="font-bold">150€</span></div>
              <div className="flex justify-between border-b border-white/10 pb-2"><span>Logement</span><span className="font-bold">715€</span></div>
              <div className="flex justify-between border-b border-white/10 pb-2"><span>Food</span><span className="font-bold">200€</span></div>
              <div className="flex justify-between border-b border-white/10 pb-2"><span>Sorties</span><span className="font-bold">700€</span></div>
              <div className="flex justify-between border-b border-white/10 pb-2"><span>Sécurité</span><span className="font-bold">500€</span></div>
            </div>
            <div className="bg-azure/20 p-6 rounded-2xl">
              <p className="text-5xl font-black text-azure">2 265€</p>
              <p className="opacity-60">Par personne pour la semaine</p>
            </div>
          </div>
          <div className="card border-l-8 border-gold">
            <h3 className="text-3xl font-black mb-8 text-gold">Option B</h3>
            <div className="space-y-6 text-lg mb-12">
              <div className="flex justify-between border-b border-white/10 pb-2"><span>Voiture</span><span className="font-bold">150€</span></div>
              <div className="flex justify-between border-b border-white/10 pb-2"><span>Logement</span><span className="font-bold">715€</span></div>
              <div className="flex justify-between border-b border-white/10 pb-2"><span>Food </span><span className="font-bold">400€</span></div>
              <div className="flex justify-between border-b border-white/10 pb-2"><span>Sorties</span><span className="font-bold">1000€</span></div>
              <div className="flex justify-between border-b border-white/10 pb-2"><span>Sécurité</span><span className="font-bold">500€</span></div>

            </div>
            <div className="bg-gold/20 p-6 rounded-2xl">
              <p className="text-5xl font-black text-gold">2 765€</p>
              <p className="opacity-60">Par personne pour la semaine</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
