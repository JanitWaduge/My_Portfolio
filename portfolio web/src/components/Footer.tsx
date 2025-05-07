import React from 'react';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Janith Waduge</h3>
            <p className="text-slate-300 mb-4">
              Creative Web Developer with expertise in Industrial Management,
              Computer Science, and Mathematics & Statistics.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/janithwaduge" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href="https://linkedin.com/in/janithwaduge" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://twitter.com/janithwaduge" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/industrial-management" className="text-slate-300 hover:text-white transition-colors">
                  Industrial Management
                </Link>
              </li>
              <li>
                <Link to="/computer-science" className="text-slate-300 hover:text-white transition-colors">
                  Computer Science
                </Link>
              </li>
              <li>
                <Link to="/mathematics" className="text-slate-300 hover:text-white transition-colors">
                  Mathematics & Statistics
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-slate-300 mb-2">WhatsApp: 0775896223</p>
            <p className="text-slate-300 mb-4">Email: jwaduge819@gmail.com</p>
            <p className="text-slate-300">
              "Learn to do it creatively, not hard."
            </p>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {currentYear} Janith Waduge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;