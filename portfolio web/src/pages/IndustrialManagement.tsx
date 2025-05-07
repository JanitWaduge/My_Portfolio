import React from 'react';
import { BarChartIcon, TrendingUpIcon, SettingsIcon, TargetIcon } from 'lucide-react';
const IndustrialManagement = () => {
  return <main className="w-full pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Industrial Management
            </h1>
            <p className="text-lg text-slate-600">
              Applying engineering principles and management techniques to
              optimize industrial processes
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              My Expertise in Industrial Management
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              My background in Industrial Management provides me with a unique
              perspective when approaching technical problems. I combine
              engineering principles with management techniques to optimize
              processes, reduce waste, and improve efficiency.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-slate-50 p-6 rounded-lg">
                <BarChartIcon size={36} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Process Optimization</h3>
                <p className="text-slate-600">
                  Analyzing workflows and implementing improvements to increase
                  productivity and reduce waste.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <TrendingUpIcon size={36} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Performance Analysis</h3>
                <p className="text-slate-600">
                  Using data-driven approaches to evaluate and enhance
                  operational performance metrics.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <SettingsIcon size={36} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Resource Management</h3>
                <p className="text-slate-600">
                  Optimizing allocation of resources to maximize output while
                  minimizing costs.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <TargetIcon size={36} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Quality Control</h3>
                <p className="text-slate-600">
                  Implementing systems to ensure consistent quality standards
                  throughout production processes.
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
              How I Apply Industrial Management to Web Development
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              I leverage my industrial management background to create more
              efficient web development processes:
            </p>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  1
                </span>
                <div>
                  <h3 className="font-medium">Systematic Project Planning</h3>
                  <p>
                    Applying industrial planning methodologies to web
                    development projects for better estimation and execution.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  2
                </span>
                <div>
                  <h3 className="font-medium">Workflow Optimization</h3>
                  <p>
                    Streamlining development processes to reduce redundancies
                    and improve delivery times.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  3
                </span>
                <div>
                  <h3 className="font-medium">Resource Allocation</h3>
                  <p>
                    Efficiently distributing technical resources to maximize
                    project outcomes.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  4
                </span>
                <div>
                  <h3 className="font-medium">Quality Assurance</h3>
                  <p>
                    Implementing rigorous testing and quality control processes
                    in web development.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>;
};
export default IndustrialManagement;