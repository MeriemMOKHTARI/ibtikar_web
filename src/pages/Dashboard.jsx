import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Home from './Home';
import Avertissements from './Avertissements';
import Overview from './Overview';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="avertissements" element={<Avertissements />} />
          <Route path="overview" element={<Overview />} />
        </Routes>
        <Outlet />
      </main>
    </div>
  );
}
