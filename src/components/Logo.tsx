import { company } from "../data/site";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="inline-flex shrink-0" aria-label={`${company.name} home`}>
      <img
        src={light ? "/logo-light.png" : "/logo.png"}
        alt={company.name}
        width={473}
        height={234}
        className="h-10 w-auto md:h-12"
      />
    </a>
  );
}
