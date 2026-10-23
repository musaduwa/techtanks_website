import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useContact } from "../contact";
import { nav } from "../data/site";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { goToContact } = useContact();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    const els = nav.map((n) => document.querySelector(n.href)).filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b border-slate-200/70 bg-white/80 shadow-sm backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20" aria-label="Main">
        <Logo />
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                aria-current={active === n.href ? "true" : undefined}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  active === n.href ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:text-ink-900"
                }`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={() => goToContact()} className="btn-primary hidden !px-5 !py-2.5 !text-sm sm:inline-flex">
            Get a Quote
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-xl text-slate-700 hover:bg-slate-100 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-200/70 lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 font-medium ${
                      active === n.href ? "bg-brand-50 text-brand-700" : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => {
                    setOpen(false);
                    goToContact();
                  }}
                  className="btn-primary w-full"
                >
                  Get a Quote
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
