import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";
import { useContact } from "../contact";
import type { Solution } from "../data/site";

export default function SolutionCard({ icon: Icon, title, description, featured, highlights, index, className = "" }: Solution & { index: number; className?: string }) {
  const { goToContact } = useContact();
  const reduce = useReducedMotion();
  const motionProps = {
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  };

  if (featured) {
    return (
      <motion.article
        {...motionProps}
        className={`group relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-ink-900 to-ink-800 p-8 text-slate-300 shadow-xl transition duration-300 hover:-translate-y-1.5 hover:shadow-glow md:p-10 ${className}`}
      >
        <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl transition group-hover:bg-brand-500/35" />
        <div className="relative flex items-start justify-between gap-4">
          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-500 text-ink-950 shadow-lg shadow-brand-500/30">
            <Icon className="h-8 w-8" aria-hidden />
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-300">
            <Star className="h-3.5 w-3.5" aria-hidden /> Core service
          </span>
        </div>
        <h3 className="relative mt-7 text-2xl font-bold text-white md:text-3xl">{title}</h3>
        <p className="relative mt-3 leading-relaxed">{description}</p>
        {highlights && (
          <ul className="relative mt-6 grid flex-1 gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm leading-snug text-slate-200">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden />
                {h}
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={() => goToContact(title)}
          className="btn relative mt-8 self-start bg-brand-500 text-ink-950 hover:-translate-y-0.5 hover:bg-brand-400 focus-visible:ring-white focus-visible:ring-offset-ink-900"
          aria-label={`Get started with ${title}`}
        >
          Get started <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </motion.article>
    );
  }

  return (
    <motion.article
      {...motionProps}
      className={`glass group relative flex flex-col p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-glow md:p-8 ${className}`}
    >
      <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-100 via-brand-50 to-ink-100 text-brand-600 transition group-hover:from-brand-600 group-hover:to-brand-500 group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden />
      </span>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 flex-1 leading-relaxed">{description}</p>
      <button
        onClick={() => goToContact(title)}
        className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-600 hover:gap-2.5 hover:text-brand-700"
        aria-label={`Learn more about ${title}`}
      >
        Learn more <ArrowRight className="h-4 w-4 transition-all" aria-hidden />
      </button>
    </motion.article>
  );
}
