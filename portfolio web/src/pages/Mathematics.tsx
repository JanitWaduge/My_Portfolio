import React from 'react';
import { PieChartIcon, ActivityIcon, TrendingUpIcon, BarChartIcon } from 'lucide-react';
const Mathematics = () => {
  return <main className="w-full pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Mathematics & Statistics
            </h1>
            <p className="text-lg text-slate-600">
              Applying mathematical principles and statistical analysis to
              create data-driven solutions
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Mathematical & Statistical Expertise
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              My background in Mathematics and Statistics provides me with
              analytical skills that enhance my approach to problem-solving,
              data analysis, and algorithm development. This foundation allows
              me to create more efficient and data-driven web solutions.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-slate-50 p-6 rounded-lg">
                <PieChartIcon size={36} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Data Analysis</h3>
                <p className="text-slate-600">
                  Extracting meaningful insights from complex datasets using
                  statistical methods and visualization techniques.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <ActivityIcon size={36} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Statistical Modeling</h3>
                <p className="text-slate-600">
                  Building predictive models and performing statistical analysis
                  to support data-driven decision making.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <TrendingUpIcon size={36} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">
                  Optimization Algorithms
                </h3>
                <p className="text-slate-600">
                  Implementing mathematical optimization techniques to solve
                  complex problems efficiently.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <BarChartIcon size={36} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Data Visualization</h3>
                <p className="text-slate-600">
                  Creating clear, insightful visualizations that communicate
                  complex data relationships effectively.
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
              Applications in Web Development
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              I leverage my mathematical and statistical background to enhance
              web applications in several ways:
            </p>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">
                  Algorithm Optimization
                </h3>
                <p className="text-slate-600 mb-4">
                  Using mathematical principles to optimize algorithms for
                  better performance and efficiency in web applications.
                </p>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full" style={{
                  width: '90%'
                }}></div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">
                  Data-Driven UX Design
                </h3>
                <p className="text-slate-600 mb-4">
                  Applying statistical analysis to user behavior data to inform
                  and improve UX design decisions.
                </p>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full" style={{
                  width: '85%'
                }}></div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">
                  Interactive Data Visualizations
                </h3>
                <p className="text-slate-600 mb-4">
                  Creating engaging, interactive data visualizations for web
                  applications using D3.js and other libraries.
                </p>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full" style={{
                  width: '95%'
                }}></div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Predictive Features</h3>
                <p className="text-slate-600 mb-4">
                  Implementing predictive algorithms in web applications to
                  enhance user experience with smart features.
                </p>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full" style={{
                  width: '80%'
                }}></div>
                </div>
              </div>
            </div>
            <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="text-xl font-bold mb-4">Tools & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded shadow-sm text-center">
                  <span className="font-medium">R Language</span>
                </div>
                <div className="bg-white p-3 rounded shadow-sm text-center">
                  <span className="font-medium">Python/NumPy</span>
                </div>
                <div className="bg-white p-3 rounded shadow-sm text-center">
                  <span className="font-medium">D3.js</span>
                </div>
                <div className="bg-white p-3 rounded shadow-sm text-center">
                  <span className="font-medium">Pandas</span>
                </div>
                <div className="bg-white p-3 rounded shadow-sm text-center">
                  <span className="font-medium">Matplotlib</span>
                </div>
                <div className="bg-white p-3 rounded shadow-sm text-center">
                  <span className="font-medium">Scikit-learn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>;
};
export default Mathematics;