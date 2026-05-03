/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Promotions from "./components/Promotions";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <Menu />
        <Promotions />
        <Testimonials />
        <Contact />
        <CallToAction />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
