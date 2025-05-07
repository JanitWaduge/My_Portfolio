import React, { useState } from 'react';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';
const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = [{
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A fully responsive e-commerce website with product filtering, cart functionality, and payment integration.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
    category: 'frontend',
    technologies: ['React', 'Tailwind CSS', 'Node.js'],
    github: 'https://github.com/username/ecommerce-platform',
    live: '#'
  }, {
    id: 2,
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for visualizing and analyzing statistical data with customizable charts and filters.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    category: 'data',
    technologies: ['D3.js', 'React', 'Python'],
    github: 'https://github.com/username/data-dashboard',
    live: '#'
  }, {
    id: 3,
    title: 'Project Management Tool',
    description: 'A tool for managing projects, tasks, and team collaboration with real-time updates.',
    image: 'https://images.unsplash.com/photo-1572177812156-58036aae439c',
    category: 'fullstack',
    technologies: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com/username/project-management',
    live: '#'
  }, {
    id: 4,
    title: 'Personal Finance Tracker',
    description: 'Application to track personal expenses, income, and financial goals with visualization.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
    category: 'frontend',
    technologies: ['React', 'Chart.js', 'Firebase'],
    github: 'https://github.com/username/finance-tracker',
    live: '#'
  }, {
    id: 5,
    title: 'Supply Chain Optimization',
    description: 'System for optimizing industrial supply chains using mathematical models and algorithms.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
    category: 'industrial',
    technologies: ['Python', 'R', 'Optimization Algorithms'],
    github: 'https://github.com/username/supply-chain-opt',
    live: '#'
  }, {
    id: 6,
    title: 'Statistical Analysis Tool',
    description: 'Web application for performing statistical analysis on datasets with visualization capabilities.',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4',
    category: 'data',
    technologies: ['R', 'Shiny', 'JavaScript'],
    github: 'https://github.com/username/statistical-tool',
    live: '#'
  }];
  const filters = [{
    key: 'all',
    label: 'All Projects'
  }, {
    key: 'frontend',
    label: 'Frontend'
  }, {
    key: 'fullstack',
    label: 'Full Stack'
  }, {
    key: 'data',
    label: 'Data Analysis'
  }, {
    key: 'industrial',
    label: 'Industrial'
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  return <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Explore my latest works and creative solutions
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map(filter => <button key={filter.key} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter.key ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`} onClick={() => setActiveFilter(filter.key)}>
              {filter.label}
            </button>)}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => <span key={index} className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-xs">
                      {tech}
                    </span>)}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800">
                    <GithubIcon size={16} />
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800">
                    <ExternalLinkIcon size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProjectsSection;