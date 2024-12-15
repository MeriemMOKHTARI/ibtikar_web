import React, { useEffect, useRef } from 'react';

export default function Map() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapInstanceRef.current && window.google) {
      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: 40.7128, lng: -74.006 },
        zoom: 12,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
      });

      const markers = [
        {
          position: { lat: 40.7128, lng: -74.006 },
          type: 'accident',
          icon: '🔴',
        },
        {
          position: { lat: 40.7228, lng: -74.016 },
          type: 'construction',
          icon: '🟠',
        },
        {
          position: { lat: 40.7328, lng: -74.026 },
          type: 'traffic',
          icon: '🟢',
        },
      ];

      markers.forEach((marker) => {
        new window.google.maps.Marker({
          position: marker.position,
          map: mapInstanceRef.current,
          label: marker.icon,
        });
      });
    }
  }, []);

  return (
    <div className="relative flex-1 h-full">
      <div ref={mapRef} className="absolute inset-0" />
    </div>
  );
}

