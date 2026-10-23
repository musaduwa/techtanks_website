import type { LucideIcon } from "lucide-react";

type Props = { step: number; icon: LucideIcon; title: string; text: string };

export default function ProcessStep({ step, icon: Icon, title, text }: Props) {
  return (
    <div className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
      <div className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white shadow-soft ring-1 ring-brand-100">
        <Icon className="h-6 w-6 text-brand-600" aria-hidden />
        <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-brand-700 text-xs font-bold text-white">
          {step}
        </span>
      </div>
      <div className="pb-2 lg:mt-6">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-1.5 leading-relaxed lg:mx-auto lg:max-w-[220px]">{text}</p>
      </div>
    </div>
  );
}
