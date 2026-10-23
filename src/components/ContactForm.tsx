import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { useContact } from "../contact";
import { serviceOptions } from "../data/site";

type Fields = { name: string; email: string; phone: string; company: string; service: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", phone: "", company: "", service: "", message: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Please enter a valid email address.";
  if (!/^\+?[\d\s()-]{7,20}$/.test(f.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!f.service) e.service = "Please choose the service you need.";
  if (f.message.trim().length < 10) e.message = "Tell us a little more (at least 10 characters).";
  return e;
}

const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

async function submit(data: Fields) {
  if (!endpoint) {
    // No backend configured: simulate a request so the UX can be previewed.
    await new Promise((r) => setTimeout(r, 1200));
    return;
  }
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Request failed");
}

export default function ContactForm() {
  const { service, setService } = useContact();
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ ok: boolean; text: string } | null>(null);

  // Pre-select the service chosen from a card elsewhere on the page.
  useEffect(() => {
    if (service) setF((p) => ({ ...p, service }));
  }, [service]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(t);
  }, [toast]);

  const update = (k: keyof Fields, v: string) => {
    setF((p) => ({ ...p, [k]: v }));
    if (k === "service") setService(v);
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate(f);
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) {
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }
    setLoading(true);
    try {
      await submit(f);
      setF(empty);
      setService("");
      setToast({ ok: true, text: "Thanks! We'll get back to you within 24 hours." });
    } catch {
      setToast({ ok: false, text: "Something went wrong. Please try again or reach us on WhatsApp." });
    } finally {
      setLoading(false);
    }
  };

  const field = "w-full rounded-xl border bg-white px-4 py-3 text-ink-900 placeholder:text-slate-400 transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15";
  const cls = (k: keyof Fields) => `${field} ${errors[k] ? "border-rose-400" : "border-slate-200"}`;
  const err = (k: keyof Fields) =>
    errors[k] && (
      <p id={`cf-${k}-err`} className="mt-1.5 flex items-center gap-1 text-sm text-rose-600">
        <AlertCircle className="h-3.5 w-3.5" aria-hidden /> {errors[k]}
      </p>
    );
  const aria = (k: keyof Fields) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `cf-${k}-err` : undefined });
  const label = "mb-1.5 block text-sm font-medium text-slate-700";

  return (
    <>
      <form onSubmit={onSubmit} noValidate className="glass grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
        <div>
          <label htmlFor="cf-name" className={label}>Full Name *</label>
          <input id="cf-name" autoComplete="name" className={cls("name")} value={f.name} onChange={(e) => update("name", e.target.value)} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>Email *</label>
          <input id="cf-email" type="email" autoComplete="email" className={cls("email")} value={f.email} onChange={(e) => update("email", e.target.value)} {...aria("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="cf-phone" className={label}>Phone *</label>
          <input id="cf-phone" type="tel" autoComplete="tel" className={cls("phone")} value={f.phone} onChange={(e) => update("phone", e.target.value)} {...aria("phone")} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="cf-company" className={label}>Company <span className="font-normal text-slate-400">(optional)</span></label>
          <input id="cf-company" autoComplete="organization" className={cls("company")} value={f.company} onChange={(e) => update("company", e.target.value)} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-service" className={label}>Service Needed *</label>
          <select id="cf-service" className={cls("service")} value={f.service} onChange={(e) => update("service", e.target.value)} {...aria("service")}>
            <option value="">Select a service…</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
            <option value="Other">Other / Not sure yet</option>
          </select>
          {err("service")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className={label}>Message *</label>
          <textarea id="cf-message" rows={5} className={`${cls("message")} resize-y`} placeholder="Tell us about your project, goals, and timeline." value={f.message} onChange={(e) => update("message", e.target.value)} {...aria("message")} />
          {err("message")}
        </div>
        <div className="sm:col-span-2">
          <button type="submit" disabled={loading} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
            {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <>Send Message <Send className="h-4 w-4" /></>}
          </button>
        </div>
      </form>

      <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center px-4">
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className={`pointer-events-auto flex items-center gap-3 rounded-2xl px-5 py-4 text-sm font-medium shadow-xl ${toast.ok ? "bg-ink-900 text-white" : "bg-rose-600 text-white"}`}
            >
              {toast.ok ? <CheckCircle2 className="h-5 w-5 text-emerald-400" /> : <AlertCircle className="h-5 w-5" />}
              {toast.text}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
