// src/components/MapView.jsx
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapView = () => {
  const [busLocation, setBusLocation] = useState({ lat: 28.7041, lng: 77.1025 });

  useEffect(() => {
    const fetchLocation = async () => {
      const response = await fetch('/api/bus-location'); // Example API endpoint
      const data = await response.json();
      setBusLocation({ lat: data.lat, lng: data.lng });
    };

    fetchLocation();
    const interval = setInterval(fetchLocation, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer center={[busLocation.lat, busLocation.lng]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[busLocation.lat, busLocation.lng]}>
        <Popup>Bus is here!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
