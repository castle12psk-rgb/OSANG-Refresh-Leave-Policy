import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Rules } from './components/Rules';
import { Calculator } from './components/Calculator';
import { Process } from './components/Process';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <Rules />
        <Calculator />
        <Process />
      </main>
      <Footer />
    </div>
  );
}

export default App;
