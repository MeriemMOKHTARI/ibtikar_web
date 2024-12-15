import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('home');
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login');
  };

  const menuItems = [
    { id: 'home', icon: HomeIcon, label: 'Home', route: 'home' },
    { id: 'avertissements', icon: ExclamationTriangleIcon, label: 'Avertissements', route: 'avertissements' },
    { id: 'mesures', icon: ChartBarIcon, label: 'Mesures', route: 'overview' },
  ];

  const handleNavigation = (item) => {
    setActiveItem(item.id);
    navigate(`/dashboard/${item.route}`);
  };

  return (
    <div className="flex flex-col h-screen w-64 bg-white border-r">
      <div className="p-4">
        <div className="flex items-center justify-center space-x-2">
          <img
            src="../../public/map.png"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-semibold">SmartBand</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <img
            src="../../public/81.png"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="mt-4 mb-6">
            <h3 className="font-medium">Islem Charaf Eddine</h3>
            <p className="text-sm text-gray-500">ic.ourred@esi-sba.dz</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigation(item)}
                className="flex items-center justify-between w-full p-2 rounded-lg transition-colors group"
              >
                <div className={`flex items-center space-x-3 ${
                  activeItem === item.id
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}>
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </div>
                <div className={`w-2 h-2 rounded-full transition-colors ${
                  activeItem === item.id
                    ? 'bg-blue-600'
                    : 'bg-transparent '
                }`} />
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 mb-10 ml-4">
        <button 
          className="flex items-center space-x-3 text-gray-600 hover:text-gray-900"
          onClick={handleLogout}
        >
          <ArrowLeftOnRectangleIcon className="w-5 h-5 text-primary" />
          <span className="text-sm text-primary font-semibold">Se déconnecter</span>
        </button>
      </div>
    </div>
  );
}
