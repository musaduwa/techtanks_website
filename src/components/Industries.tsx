import { industries } from "../data/site";
import Reveal from "./Reveal";

export default function Industries() {
  return (
    <section aria-labelledby="industries-title" className="py-16 md:py-20">
      <Reveal className="container-x text-center">
        <h2 id="industries-title" className="text-sm font-semibold uppercase tracking-widest text-brand-600">
          Who We Serve
        </h2>
        <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-3">
          {industries.map((i) => (
            <li key={i} className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-brand-200 hover:text-brand-700">
              {i}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
