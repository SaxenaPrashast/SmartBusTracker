// src/components/AdminDashboard.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [location, setLocation] = useState({ lat: '', lng: '' });

  const updateLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const newLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setLocation(newLocation);

      axios.post('/api/update-location', newLocation).then(() => {
        alert('Location updated successfully!');
      });
    });
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={updateLocation}>Update Bus Location</button>
    </div>
  );
};

export default AdminDashboard;
