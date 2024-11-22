// src/components/StopTimings.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StopTimings = () => {
  const [stops, setStops] = useState([]);

  useEffect(() => {
    axios.get('/api/stop-timings').then(response => setStops(response.data));
  }, []);

  return (
    <div>
      <h2>Stop Timings</h2>
      <ul>
        {stops.map((stop, index) => (
          <li key={index}>
            <strong>{stop.name}:</strong> {stop.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StopTimings;
