import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { company } from "../data/site";
import ContactForm from "./ContactForm";
import { WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Socials from "./Socials";

export default function Contact() {
  const details = [
    { Icon: MapPin, label: "Address", value: company.address },
    { Icon: Phone, label: "Phone", value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
    { Icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
    { Icon: Clock, label: "Business hours", value: company.hours },
  ];

  return (
    <section id="contact" className="section bg-soft">
      <div className="container-x">
        <SectionHeader eyebrow="Contact" title="Let's talk about your project" subtitle="Share a few details and we'll get back to you within 24 hours with next steps." />
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <aside className="glass flex h-full flex-col p-6 sm:p-8">
              <h3 className="text-xl font-bold">Contact details</h3>
              <ul className="mt-6 space-y-5">
                {details.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm text-slate-500">{label}</p>
                      {href ? (
                        <a href={href} className="font-medium text-ink-900 hover:text-brand-600">{value}</a>
                      ) : (
                        <p className="font-medium text-ink-900">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-8 bg-[#25D366] text-ink-900 hover:-translate-y-0.5 hover:bg-[#20bd5a]"
              >
                <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
              </a>
              <div className="mt-8 border-t border-slate-200/70 pt-6">
                <p className="mb-3 text-sm font-medium text-slate-500">Follow us</p>
                <Socials />
              </div>
              {company.mapEmbedUrl && (
                <iframe
                  title={`${company.name} location map`}
                  src={company.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="mt-6 h-48 w-full rounded-xl border-0"
                />
              )}
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
