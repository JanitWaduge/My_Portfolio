import React from 'react';
import { CodeIcon, TrendingUpIcon, BookOpenIcon } from 'lucide-react';
const AboutSection = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            A Creative Web Developer with expertise in multiple disciplines
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-blue-600 absolute -top-4 -left-4 w-64 h-64 rounded-lg opacity-20"></div>
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a" alt="Professional portrait of Janith Waduge" className="rounded-lg shadow-lg w-full object-cover z-10 relative" style={{
            height: '400px'
          }} />
          </div>
          <div>
            <p className="text-lg text-slate-600 mb-6">
              I'm a creative web developer with a diverse background spanning
              Industrial Management, Computer Science, and Mathematics &
              Statistics. This unique combination allows me to approach problems
              from multiple angles and create innovative solutions.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              With proficiency in Java, Python, HTML, CSS, JavaScript,
              databases, and R language, I build robust and visually appealing
              web applications that deliver exceptional user experiences.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg">
                <CodeIcon size={32} className="text-blue-600 mb-2" />
                <h3 className="font-medium">Web Development</h3>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg">
                <TrendingUpIcon size={32} className="text-blue-600 mb-2" />
                <h3 className="font-medium">Industrial Management</h3>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg">
                <BookOpenIcon size={32} className="text-blue-600 mb-2" />
                <h3 className="font-medium">Data Analysis</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;