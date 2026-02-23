import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import {
  Intro, WhyChoose, TechSuite, SpecializedServices,
  Impact, Industries, WhatWeDoTimeline
} from './components/WhatWeDo';
import { WhoWeAre } from './components/WhoWeAre';
import { SuccessStories } from './components/SuccessStories';
import { Partnerships } from './components/Partnerships';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Insights } from './components/Insights';
import Chatbot from './components/Chatbot';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Intro />
      <WhatWeDoTimeline>
        <WhyChoose />
        <TechSuite />
        <SpecializedServices />
      </WhatWeDoTimeline>
      <Impact />
      <Industries />
      <WhoWeAre />
      <Insights />
      <SuccessStories />
      <Partnerships />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
