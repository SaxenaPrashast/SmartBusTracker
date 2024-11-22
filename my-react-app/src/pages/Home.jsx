import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to the Smart Bus Management System</h1>
      <p>
        Easily manage buses, stops, and live tracking with our system. Navigate to different sections using the menu.
      </p>
      <img
        src="https://via.placeholder.com/800x400" // Replace with your image URL
        alt="Bus Management System"
        style={{ width: '80%', borderRadius: '10px', marginTop: '20px' }}
      />
    </div>
  );
};

export default Home;
