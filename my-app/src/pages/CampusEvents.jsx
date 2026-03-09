import React, { useState } from 'react';

function CampusEvents() {
  const [showEvents, setShowEvents] = useState(false);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Campus Events</h1>
      
      <button 
        onClick={() => setShowEvents(!showEvents)}
        style={{ padding: '10px 20px', cursor: 'pointer', marginBottom: '20px' }}
      >
        {showEvents ? 'Hide Events' : 'Show Events'}
      </button>

      {showEvents && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>Orientation Day - February 09, 2026</li>
          <li>SIT Conference - March 11, 2026</li>
          <li>Annual Sports Meet - November 5, 2026</li>
        </ul>
      )}
    </div>
  );
}

export default CampusEvents;
