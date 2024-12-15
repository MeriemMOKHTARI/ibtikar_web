import React from 'react';

export default function Legend() {
  const items = [
    {
      color: 'bg-red-500',
      title: 'Accident de la route',
      description: 'Un accident a causé un ralentissement du trafic.',
    },
    {
      color: 'bg-orange-400',
      title: 'Travaux en cours',
      description: 'Des travaux perturbent la circulation.',
    },
    {
      color: 'bg-green-500',
      title: 'Embouteillage prolongé',
      description: 'Un embouteillage important a été signalé.',
    },
    {
      color: 'bg-blue-500',
      title: 'Violation de feu rouge',
      description: 'Un véhicule a enfreint les règles de signalisation.',
    },
  ];

  return (
    <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm">
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.title} className="flex items-start space-x-3">
            <div className={`w-4 h-4 mt-1 rounded-full ${item.color}`} />
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

