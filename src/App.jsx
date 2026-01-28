import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Modules from "./components/Modules";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import SEOFeatures from "./components/SEOFeatures";
import Services from "./components/Services";
import UseCases from "./components/UseCases";
import CLI from "./components/CLI";
import Testimonials from "./components/Testimonials";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <SEOFeatures />
        <Modules />
        {/* <Benefits />*/}
        <UseCases />
        <Collaboration />
        <CLI />
        <Testimonials />
        {/* <Services />*/}
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
      <Analytics />
    </>
  );
};

export default App;
