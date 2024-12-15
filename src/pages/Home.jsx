import React from 'react';
import MapEmbed from '../components/MapEmbed';
import Legend from '../components/Legend';

export default function Home() {
  return (
    <div>
      <div className="relative h-full h-screen">
        <MapEmbed />
      </div>
      
        <Legend />
         </div>
  );
}
