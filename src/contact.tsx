import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

type ContactCtx = {
  service: string;
  setService: (s: string) => void;
  /** Scroll to the contact section, optionally pre-selecting a service. */
  goToContact: (service?: string) => void;
};

const Ctx = createContext<ContactCtx | null>(null);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [service, setService] = useState("");
  const goToContact = useCallback((s?: string) => {
    if (s) setService(s);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", "#contact");
  }, []);
  return <Ctx.Provider value={{ service, setService, goToContact }}>{children}</Ctx.Provider>;
}

export function useContact() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useContact must be used inside ContactProvider");
  return ctx;
}
