import { company } from "../data/site";
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon } from "./icons";

const items = [
  { label: "LinkedIn", href: company.socials.linkedin, Icon: LinkedInIcon },
  { label: "X (Twitter)", href: company.socials.x, Icon: XIcon },
  { label: "Facebook", href: company.socials.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: company.socials.instagram, Icon: InstagramIcon },
];

export default function Socials({ dark = false }: { dark?: boolean }) {
  return (
    <ul className="flex gap-2">
      {items.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`grid h-10 w-10 place-items-center rounded-xl transition hover:-translate-y-0.5 ${
              dark ? "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white" : "bg-brand-50 text-brand-600 hover:bg-brand-100"
            }`}
          >
            <Icon className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
