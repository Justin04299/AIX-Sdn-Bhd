import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ITStack from './pages/ITStack';
import PowerElectrical from './pages/PowerElectrical';
import ThermalManagement from './pages/ThermalManagement';
import FacilitySafety from './pages/FacilitySafety';
import AboutUs from './pages/AboutUs';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="it-stack" element={<ITStack />} />
          <Route path="power-electrical" element={<PowerElectrical />} />
          <Route path="thermal-management" element={<ThermalManagement />} />
          <Route path="facility-safety" element={<FacilitySafety />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
