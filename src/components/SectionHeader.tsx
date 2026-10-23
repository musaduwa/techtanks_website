import Reveal from "./Reveal";

type Props = { eyebrow: string; title: string; subtitle?: string; align?: "center" | "left" };

export default function SectionHeader({ eyebrow, title, subtitle, align = "center" }: Props) {
  const center = align === "center";
  return (
    <Reveal className={`mb-12 max-w-2xl md:mb-16 ${center ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-600">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed md:text-lg">{subtitle}</p>}
    </Reveal>
  );
}
