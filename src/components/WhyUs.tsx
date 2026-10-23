import { CheckCircle2, CalendarCheck, ShieldCheck, MessageCircle } from "lucide-react";
import { useContact } from "../contact";
import { stats, whyUs } from "../data/site";
import Counter from "./Counter";
import Reveal from "./Reveal";

export default function WhyUs() {
  const { goToContact } = useContact();
  return (
    <section id="why-us" className="section">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-600">Why Choose Us</p>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">{whyUs.title}</h2>
          <p className="mt-5 text-lg leading-relaxed">{whyUs.body}</p>
          <ul className="mt-8 space-y-5">
            {whyUs.points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-brand-600" aria-hidden />
                <div>
                  <p className="font-semibold text-ink-900">{p.title}</p>
                  <p className="text-sm leading-relaxed md:text-base">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={() => goToContact()} className="btn-primary mt-10">
            Talk to Our Team
          </button>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="bg-soft relative overflow-hidden rounded-3xl p-6 sm:p-10">
            <div aria-hidden className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
            <div aria-hidden className="glass relative p-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="font-bold text-ink-900">Project timeline</p>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">On track</span>
              </div>
              {[
                { l: "Discovery", w: 100 },
                { l: "Design", w: 100 },
                { l: "Build & Test", w: 68 },
                { l: "Launch", w: 15 },
              ].map((r) => (
                <div key={r.l} className="mb-4 last:mb-0">
                  <div className="mb-1.5 flex justify-between text-xs font-medium text-slate-600">
                    <span>{r.l}</span>
                    <span>{r.w}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-gradient-to-r from-brand-500 to-ink-400" style={{ width: `${r.w}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div aria-hidden className="relative mt-4 grid grid-cols-3 gap-3">
              {[
                { I: ShieldCheck, t: "Compliant" },
                { I: CalendarCheck, t: "On time" },
                { I: MessageCircle, t: "Supported" },
              ].map(({ I, t }) => (
                <div key={t} className="glass flex flex-col items-center gap-2 px-2 py-4 text-center">
                  <I className="h-5 w-5 text-brand-600" />
                  <span className="text-xs font-semibold text-slate-700">{t}</span>
                </div>
              ))}
            </div>
            <dl className="relative mt-4 grid grid-cols-2 gap-3">
              {stats.slice(0, 2).map((s) => (
                <div key={s.label} className="glass flex flex-col-reverse p-5">
                  <dt className="text-sm text-slate-600">{s.label}</dt>
                  <dd className="text-3xl font-extrabold text-ink-900">
                    <Counter value={s.value} suffix={s.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
