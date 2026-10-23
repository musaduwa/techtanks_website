import { ArrowUp, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { company, services, solutions } from "../data/site";
import Logo from "./Logo";
import Socials from "./Socials";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const subscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Please enter a valid email.");
    setError("");
    setSubscribed(true);
    setEmail("");
  };

  const columns = [
    { title: "Solutions", links: solutions.map((s) => ({ label: s.title, href: "#solutions" })) },
    { title: "Services", links: services.slice(0, 5).map((s) => ({ label: s.title, href: "#services" })) },
    {
      title: "Company",
      links: [
        { label: "Why Us", href: "#why-us" },
        { label: "Our Process", href: "#process" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: company.email, href: `mailto:${company.email}` },
        { label: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
        { label: company.address, href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="bg-ink-900 text-slate-400">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-sm">{company.tagline}</p>
            <form onSubmit={subscribe} noValidate className="mt-8 max-w-sm">
              <label htmlFor="newsletter" className="mb-2 block text-sm font-semibold text-white">
                Get tech insights in your inbox
              </label>
              {subscribed ? (
                <p className="flex items-center gap-2 text-sm text-emerald-400" role="status">
                  <CheckCircle2 className="h-4 w-4" /> Thanks for subscribing!
                </p>
              ) : (
                <div className="flex gap-2">
                  <input
                    id="newsletter"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={!!error}
                    aria-describedby={error ? "newsletter-err" : undefined}
                    className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none"
                  />
                  <button type="submit" className="btn-primary !px-4 !py-2.5 !text-sm">
                    Subscribe
                  </button>
                </div>
              )}
              {error && <p id="newsletter-err" className="mt-2 text-sm text-rose-400">{error}</p>}
            </form>
            <div className="mt-8">
              <Socials dark />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {columns.map((c) => (
              <div key={c.title}>
                <h3 className="mb-4 text-sm font-semibold text-white">{c.title}</h3>
                <ul className="space-y-3 text-sm">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="break-words transition hover:text-white">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <a href="#top" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 transition hover:border-white/30 hover:text-white">
            Back to top <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
