import React, { useState } from 'react';
import './Admin.css'; // Add some styling if needed

const Admin = () => {
  const [activeTab, setActiveTab] = useState('buses'); // State for active tab

  return (
    <div className="admin-dashboard">
      {/* Header Section */}
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
      </header>

      {/* Navigation Section */}
      <nav className="admin-nav">
        <ul>
          <li
            className={activeTab === 'buses' ? 'active' : ''}
            onClick={() => setActiveTab('buses')}
          >
            Manage Buses
          </li>
          <li
            className={activeTab === 'stops' ? 'active' : ''}
            onClick={() => setActiveTab('stops')}
          >
            Manage Stops
          </li>
          <li
            className={activeTab === 'users' ? 'active' : ''}
            onClick={() => setActiveTab('users')}
          >
            Manage Users
          </li>
        </ul>
      </nav>

      {/* Content Section */}
      <main className="admin-content">
        {activeTab === 'buses' && (
          <div>
            <h2>Manage Buses</h2>
            <p>Here you can add, update, or delete buses.</p>
            {/* Add your bus management components or forms here */}
          </div>
        )}
        {activeTab === 'stops' && (
          <div>
            <h2>Manage Stops</h2>
            <p>Here you can add, update, or delete bus stops.</p>
            {/* Add your stop management components or forms here */}
          </div>
        )}
        {activeTab === 'users' && (
          <div>
            <h2>Manage Users</h2>
            <p>Here you can manage user accounts and permissions.</p>
            {/* Add your user management components or forms here */}
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
