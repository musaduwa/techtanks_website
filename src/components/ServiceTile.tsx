import type { Solution } from "../data/site";

export default function ServiceTile({ icon: Icon, title, description }: Solution) {
  return (
    <div className="flex h-full gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div>
        <h3 className="text-base font-semibold leading-snug">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
