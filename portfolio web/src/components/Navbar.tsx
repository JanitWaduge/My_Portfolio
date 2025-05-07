import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Industrial Management',
    path: '/industrial-management'
  }, {
    name: 'Computer Science',
    path: '/computer-science'
  }, {
    name: 'Mathematics',
    path: '/mathematics'
  }];
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold tracking-tighter">
            <span className="text-blue-600">J</span>anith{' '}
            <span className="text-blue-600">W</span>aduge
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(item => <Link key={item.path} to={item.path} className={`font-medium hover:text-blue-600 transition-colors ${location.pathname === item.path ? 'text-blue-600' : 'text-slate-700'}`}>
                {item.name}
              </Link>)}
            <Link to="/#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
              Contact Me
            </Link>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navItems.map(item => <Link key={item.path} to={item.path} className={`font-medium py-2 hover:text-blue-600 transition-colors ${location.pathname === item.path ? 'text-blue-600' : 'text-slate-700'}`} onClick={toggleMenu}>
                {item.name}
              </Link>)}
            <Link to="/#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors text-center" onClick={toggleMenu}>
              Contact Me
            </Link>
          </div>
        </div>}
    </nav>;
};
export default Navbar;