import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IndustrialManagement from './pages/IndustrialManagement';
import ComputerScience from './pages/ComputerScience';
import Mathematics from './pages/Mathematics';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
export function App() {
  return <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industrial-management" element={<IndustrialManagement />} />
          <Route path="/computer-science" element={<ComputerScience />} />
          <Route path="/mathematics" element={<Mathematics />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>;
}