import { partners } from "../data/site";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Partners() {
  return (
    <section id="partners" className="section bg-soft">
      <div className="container-x">
        <SectionHeader
          eyebrow="Our Partners"
          title="Trusted by leading organisations"
          subtitle="We're proud to work with respected names across technology, banking, finance, retail, and government."
        />
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {partners.map((p, i) => (
            <li key={p.name}>
              <Reveal delay={i * 0.06} className="h-full">
                <div className="group flex h-full flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-200 sm:p-7">
                  <div className="flex h-20 w-full items-center justify-center sm:h-24">
                    {p.logo ? (
                      <img
                        src={p.logo}
                        alt={`${p.name} logo`}
                        loading="lazy"
                        className="max-h-full max-w-[85%] object-contain transition duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <span aria-hidden className="grid h-14 min-w-14 place-items-center rounded-2xl bg-ink-900 px-3 text-xs font-extrabold tracking-wide text-white">
                        {p.short}
                      </span>
                    )}
                  </div>
                  <p className="mt-5 text-sm font-bold leading-snug text-ink-900 sm:text-base">{p.name}</p>
                  <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">{p.sector}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
