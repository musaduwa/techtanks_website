import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Activity, BadgeCheck, Signal, Smartphone } from "lucide-react";
import { useContact } from "../contact";
import { hero, stats } from "../data/site";
import Counter from "./Counter";

export default function Hero() {
  const { goToContact } = useContact();
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section id="top" className="bg-soft relative overflow-hidden pt-28 md:pt-36">
      {/* soft background blobs */}
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-200/30 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-ink-200/40 blur-3xl" />

      <div className="container-x relative grid items-center gap-14 pb-16 lg:grid-cols-2 lg:gap-8 lg:pb-24">
        <div>
          <motion.p {...fade(0)} className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-700 backdrop-blur sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            {hero.eyebrow}
          </motion.p>
          <motion.h1 {...fade(0.08)} className="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.6rem]">
            Technology Solutions That <span className="text-gradient">Move Your Business</span> Forward
          </motion.h1>
          <motion.p {...fade(0.16)} className="mt-6 max-w-xl text-lg leading-relaxed">
            {hero.subtitle}
          </motion.p>
          <motion.div {...fade(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => goToContact()} className="btn-primary">
              {hero.primaryCta} <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#solutions" className="btn-secondary">
              {hero.secondaryCta}
            </a>
          </motion.div>
        </div>

        <HeroVisual />
      </div>

      {/* trust strip */}
      <div className="container-x relative pb-16 md:pb-20">
        <p className="mb-6 text-center text-sm font-medium text-slate-500">{hero.trustLine}</p>
        <dl className="glass grid grid-cols-2 divide-slate-200/70 md:grid-cols-4 md:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse px-6 py-6 text-center">
              <dt className="mt-1 text-sm text-slate-600">{s.label}</dt>
              <dd className="text-3xl font-extrabold text-ink-900 md:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/** Layered UI mockup cards floating on a gradient blob. Decorative only. */
function HeroVisual() {
  const reduce = useReducedMotion();
  const float = (d: number) =>
    reduce ? {} : { animate: { y: [0, -10, 0] }, transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const, delay: d } };

  return (
    <div aria-hidden className="relative mx-auto h-[400px] w-full max-w-[520px] sm:h-[460px]">
      <div className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-brand-400/40 via-brand-300/30 to-ink-200/40 blur-2xl" />

      {/* dashboard card */}
      <motion.div {...float(0)} className="glass absolute left-0 top-6 w-[78%] p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>
          <span className="text-[11px] font-semibold text-slate-400">Dashboard</span>
        </div>
        <div className="mb-4 grid grid-cols-3 gap-2">
          {["Uptime", "Users", "Tickets"].map((l, i) => (
            <div key={l} className="rounded-xl bg-white/80 p-2.5">
              <p className="text-[10px] text-slate-400">{l}</p>
              <p className="text-sm font-bold text-ink-800">{["99.9%", "12.4k", "−32%"][i]}</p>
            </div>
          ))}
        </div>
        <div className="flex h-24 items-end gap-1.5 rounded-xl bg-white/80 p-3">
          {[40, 65, 45, 80, 60, 90, 72, 95, 85].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-brand-500 to-brand-300" style={{ height: `${h}%` }} />
          ))}
        </div>
      </motion.div>

      {/* phone */}
      <motion.div {...float(1.2)} className="absolute bottom-0 right-2 w-[38%] rounded-[2rem] border-4 border-white bg-gradient-to-b from-ink-800 to-ink-900 p-3 shadow-glow">
        <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-white/40" />
        <Smartphone className="mb-2 h-5 w-5 text-white/90" />
        <p className="text-xs font-semibold text-white">Your app</p>
        <div className="mt-3 space-y-2">
          {[80, 60, 70].map((w, i) => (
            <div key={i} className="h-7 rounded-lg bg-white/20" style={{ width: `${w + 20}%` }} />
          ))}
        </div>
        <div className="mt-3 h-8 rounded-lg bg-white text-center text-[10px] font-bold leading-8 text-brand-600">Continue</div>
      </motion.div>

      {/* network chip */}
      <motion.div {...float(0.6)} className="glass absolute bottom-16 left-4 flex items-center gap-3 px-4 py-3 sm:bottom-20">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink-100 text-ink-700">
          <Signal className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-bold text-ink-800">Network online</p>
          <p className="flex items-center gap-1 text-[11px] text-emerald-600">
            <Activity className="h-3 w-3" /> 4 sites · stable
          </p>
        </div>
      </motion.div>

      {/* approval chip */}
      <motion.div {...float(1.8)} className="glass absolute right-0 top-0 flex items-center gap-2 px-3 py-2.5">
        <BadgeCheck className="h-5 w-5 text-brand-600" />
        <p className="text-xs font-bold text-ink-800">Type approval granted</p>
      </motion.div>
    </div>
  );
}
