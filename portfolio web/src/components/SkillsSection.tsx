import React from 'react';
const SkillsSection = () => {
  const skills = [{
    category: 'Programming Languages',
    items: ['Java', 'Python', 'JavaScript', 'R']
  }, {
    category: 'Web Technologies',
    items: ['HTML', 'CSS', 'React', 'Node.js']
  }, {
    category: 'Databases',
    items: ['MySQL', 'MongoDB', 'PostgreSQL']
  }, {
    category: 'Tools & Frameworks',
    items: ['Git', 'Docker', 'Express', 'Bootstrap', 'Tailwind CSS']
  }, {
    category: 'Analysis',
    items: ['Data Analysis', 'Statistical Modeling', 'Data Visualization']
  }, {
    category: 'Industrial Management',
    items: ['Project Management', 'Process Optimization', 'Quality Control']
  }];
  return <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            A diverse set of technical skills and expertise
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-600">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => <span key={skillIndex} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>)}
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-lg shadow inline-block">
            <h3 className="text-lg font-medium mb-3">Skill Proficiency</h3>
            <div className="space-y-4 w-full max-w-md">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">
                    Frontend Development
                  </span>
                  <span className="text-sm font-medium">90%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{
                  width: '90%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">
                    Backend Development
                  </span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{
                  width: '85%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Data Analysis</span>
                  <span className="text-sm font-medium">80%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{
                  width: '80%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">
                    Industrial Management
                  </span>
                  <span className="text-sm font-medium">75%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{
                  width: '75%'
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SkillsSection;