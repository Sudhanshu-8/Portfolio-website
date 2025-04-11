import React from "react";
import Intro from "./Components/Intro";
import AboutMe from "./Components/AboutMe";
import Resume from "./Components/Resume";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Chatbot from "./Components/Chatbot";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black text-white font-sans">
      <Navbar />

      <div className="pt-24 pb-16 space-y-10">
        <section id="home" className="px-6 md:px-32">
          <Intro />
        </section>

        <section id="about" className="px-6 mt-10 md:mt-80 scroll-mt-24">
          <AboutMe />
        </section>

        <section id="resume" className="px-6">
          <Resume />
        </section>

        <section id="services" className="px-6 scroll-mt-24">
          <Services />
        </section>

        <section id="chat" className="px-6">
          <Chatbot />
        </section>

        <section id="portfolio" className="px-6">
          <Work />
        </section>

        <section id="contact" className="px-6 max-w-3xl mx-auto">
          <Contact />
        </section>
      </div>
    </div>
  );
}
