import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Tracking = () => {
  const busLocations = [
    { id: 1, name: 'Bus 1', lat: 28.7041, lng: 77.1025 }, // Replace with real coordinates
    { id: 2, name: 'Bus 2', lat: 28.5355, lng: 77.3910 },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Live Bus Tracking</h1>
      <MapContainer
        center={[28.7041, 77.1025]} // Center of the map
        zoom={10}
        style={{ height: '500px', width: '100%', marginTop: '20px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {busLocations.map((bus) => (
          <Marker key={bus.id} position={[bus.lat, bus.lng]}>
            <Popup>
              {bus.name}
              <br />
              Current Location: {bus.lat.toFixed(2)}, {bus.lng.toFixed(2)}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Tracking;
