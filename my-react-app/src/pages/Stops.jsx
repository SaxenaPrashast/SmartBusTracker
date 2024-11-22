import React, { useState } from 'react';

const Stops = () => {
  const [stops, setStops] = useState([
    { id: 1, name: 'Stop 1', location: 'Location 1' },
    { id: 2, name: 'Stop 2', location: 'Location 2' },
    { id: 3, name: 'Stop 3', location: 'Location 3' },
  ]);

  const [newStop, setNewStop] = useState({ name: '', location: '' });

  const addStop = () => {
    if (newStop.name && newStop.location) {
      setStops([...stops, { id: stops.length + 1, ...newStop }]);
      setNewStop({ name: '', location: '' });
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Manage Bus Stops</h1>
      <ul>
        {stops.map((stop) => (
          <li key={stop.id}>
            <strong>{stop.name}</strong> - {stop.location}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '20px' }}>
        <h3>Add a New Stop</h3>
        <input
          type="text"
          placeholder="Stop Name"
          value={newStop.name}
          onChange={(e) => setNewStop({ ...newStop, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Stop Location"
          value={newStop.location}
          onChange={(e) => setNewStop({ ...newStop, location: e.target.value })}
        />
        <button onClick={addStop}>Add Stop</button>
      </div>
    </div>
  );
};

export default Stops;
