import { services } from "../data/site";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import ServiceTile from "./ServiceTile";

export default function Services() {
  return (
    <section id="services" className="section bg-soft">
      <div className="container-x">
        <SectionHeader
          eyebrow="What We Do"
          title="Services that support every stage"
          subtitle="Beyond our core solutions, we offer practical services that keep your business running smoothly."
        />
        {/* flex-wrap + justify-center gives a centred 4 + 3 layout on desktop */}
        <ul className="flex flex-wrap justify-center gap-5">
          {services.map((s, i) => (
            <li key={s.title} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]">
              <Reveal delay={i * 0.05} className="h-full">
                <ServiceTile {...s} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
