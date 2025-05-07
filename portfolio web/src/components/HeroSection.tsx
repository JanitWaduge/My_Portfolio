import React from 'react';
import { ChevronDownIcon } from 'lucide-react';
const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Hi, I'm <span className="text-blue-600">Janith Waduge</span>
          </h1>
          <div className="overflow-hidden h-16 mb-6">
            <div className="animate-slide">
              <div className="text-2xl md:text-3xl font-medium text-slate-700">
                Creative Web Developer
              </div>
              <div className="text-2xl md:text-3xl font-medium text-slate-700">
                Industrial Management
              </div>
              <div className="text-2xl md:text-3xl font-medium text-slate-700">
                Computer Science
              </div>
              <div className="text-2xl md:text-3xl font-medium text-slate-700">
                Mathematics & Statistics
              </div>
            </div>
          </div>
          <p className="text-lg md:text-xl text-slate-600 mb-8 italic">
            "Learn to do it creatively, not hard."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              View My Work
            </a>
            <a href="#contact" className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <button onClick={scrollToAbout} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" aria-label="Scroll down">
        <ChevronDownIcon size={36} className="text-blue-600" />
      </button>
    </section>;
};
export default HeroSection;
// Add this to your CSS for the animation
// You can add this to index.css or create a separate file
// @keyframes slide {
//   0%, 25% { transform: translateY(0); }
//   30%, 50% { transform: translateY(-25%); }
//   55%, 75% { transform: translateY(-50%); }
//   80%, 100% { transform: translateY(-75%); }
// }
// .animate-slide {
//   animation: slide 12s infinite;
// }