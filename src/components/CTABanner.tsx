import { ArrowRight } from "lucide-react";
import { useContact } from "../contact";
import { cta } from "../data/site";
import Reveal from "./Reveal";

export default function CTABanner() {
  const { goToContact } = useContact();
  return (
    <section className="py-16 md:py-24">
      <Reveal className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-900 via-ink-900 to-ink-700 px-6 py-14 text-center shadow-xl sm:px-12 md:py-20">
          <div aria-hidden className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" />
          <div aria-hidden className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-ink-400/30 blur-3xl" />
          <h2 className="relative text-3xl font-bold text-white md:text-5xl">{cta.title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-ink-100">{cta.text}</p>
          <button
            onClick={() => goToContact()}
            className="btn relative mt-9 bg-brand-500 text-ink-950 shadow-lg shadow-brand-500/30 hover:-translate-y-0.5 hover:bg-brand-400 focus-visible:ring-white focus-visible:ring-offset-ink-900"
          >
            {cta.button} <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
