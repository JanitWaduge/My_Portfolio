import React from 'react';
import { CodeIcon, DatabaseIcon, ServerIcon, ShieldIcon } from 'lucide-react';
const ComputerScience = () => {
  return <main className="w-full pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Computer Science
            </h1>
            <p className="text-lg text-slate-600">
              From algorithms to software engineering, my computer science
              background powers my development work
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Computer Science Expertise
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              My computer science education has given me a strong foundation in
              core principles and practices that I apply daily in my web
              development work. This knowledge allows me to create efficient,
              scalable, and maintainable solutions.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-slate-50 p-6 rounded-lg">
                <CodeIcon size={36} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">
                  Algorithms & Data Structures
                </h3>
                <p className="text-slate-600">
                  Implementing efficient algorithms and appropriate data
                  structures to solve complex problems.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <DatabaseIcon size={36} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Database Systems</h3>
                <p className="text-slate-600">
                  Designing and optimizing database schemas for performance and
                  data integrity.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <ServerIcon size={36} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">System Architecture</h3>
                <p className="text-slate-600">
                  Creating robust system architectures that are scalable,
                  maintainable, and efficient.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <ShieldIcon size={36} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Security Principles</h3>
                <p className="text-slate-600">
                  Implementing security best practices to protect applications
                  and user data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Programming Languages & Technologies
            </h2>
            <div className="space-y-6 mb-12">
              <div>
                <h3 className="text-xl font-medium mb-3">Java</h3>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{
                  width: '95%'
                }}></div>
                </div>
                <p className="mt-2 text-slate-600">
                  Extensive experience with Java for backend development, data
                  processing, and enterprise applications.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Python</h3>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{
                  width: '90%'
                }}></div>
                </div>
                <p className="mt-2 text-slate-600">
                  Proficient in Python for data analysis, automation, and web
                  development with frameworks like Django and Flask.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">
                  JavaScript/TypeScript
                </h3>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{
                  width: '90%'
                }}></div>
                </div>
                <p className="mt-2 text-slate-600">
                  Expert in modern JavaScript and TypeScript for frontend and
                  backend development.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Databases</h3>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{
                  width: '85%'
                }}></div>
                </div>
                <p className="mt-2 text-slate-600">
                  Experience with SQL and NoSQL databases including MySQL,
                  PostgreSQL, and MongoDB.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">
                Computer Science Principles I Apply
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>
                    Applying object-oriented design patterns for maintainable
                    code
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>
                    Optimizing algorithms for performance in web applications
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>
                    Implementing clean architecture principles for scalable
                    systems
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>
                    Using data structures effectively for optimal solutions
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span>
                    Applying security principles to protect web applications
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>;
};
export default ComputerScience;