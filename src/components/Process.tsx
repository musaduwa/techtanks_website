import { process } from "../data/site";
import ProcessStep from "./ProcessStep";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Process() {
  return (
    <section id="process" className="section bg-soft">
      <div className="container-x">
        <SectionHeader eyebrow="Our Process" title="A simple path from idea to launch" subtitle="Four clear stages, with regular check-ins so you always know where things stand." />
        <div className="relative">
          {/* connecting gradient line: vertical on mobile, horizontal on desktop */}
          <div aria-hidden className="absolute bottom-8 left-8 top-8 w-0.5 bg-gradient-to-b from-brand-500 via-brand-500 to-ink-400 lg:bottom-auto lg:left-[12.5%] lg:right-[12.5%] lg:top-8 lg:h-0.5 lg:w-auto lg:bg-gradient-to-r" />
          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
            {process.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 0.1}>
                  <ProcessStep step={i + 1} {...p} />
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
