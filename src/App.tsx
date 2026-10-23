import { ContactProvider } from "./contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Industries from "./components/Industries";
import Partners from "./components/Partners";
import CTABanner from "./components/CTABanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <ContactProvider>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Solutions />
        <Services />
        <WhyUs />
        <Process />
        <Industries />
        <Partners />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </ContactProvider>
  );
}
