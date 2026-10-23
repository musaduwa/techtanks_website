import { solutions } from "../data/site";
import SectionHeader from "./SectionHeader";
import SolutionCard from "./SolutionCard";

// 6-column grid on desktop: the two core services span 3 columns each, the rest span 2 (2 + 3 layout).
const spans = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "md:col-span-2 lg:col-span-2"];

export default function Solutions() {
  return (
    <section id="solutions" className="section relative">
      <div className="container-x">
        <SectionHeader
          eyebrow="Our Solutions"
          title="Type approval and telecom specialists"
          subtitle="Our core expertise is getting your equipment certified and your network running, backed by software and app development when you need it."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {solutions.map((s, i) => (
            <SolutionCard key={s.title} {...s} index={i} className={spans[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
