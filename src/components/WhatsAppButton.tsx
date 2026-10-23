import { company } from "../data/site";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-600/30 transition hover:-translate-y-1 hover:shadow-xl"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
