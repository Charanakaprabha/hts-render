import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import {
  Intro, WhyChoose, TechSuite, SpecializedServices,
  Impact, Industries
} from './components/WhatWeDo';
import { SuccessStories } from './components/SuccessStories';
import { Partnerships } from './components/Partnerships';
import { Insights } from './components/Insights';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Intro />
      <WhyChoose />
      <TechSuite />
      <SpecializedServices />
      <Impact />
      <Industries />
      <Insights />
      <SuccessStories />
      <Partnerships />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
