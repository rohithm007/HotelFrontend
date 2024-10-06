import React, { useState } from 'react';
import PreferencesForm from './components/PreferencesForm';
import './App.css';

const App = () => {
  const [hotels, setHotels] = useState([]);
  const [showHotels, setShowHotels] = useState(false); // State for transition effect

  const handleSubmit = (preferences) => {
    fetch('http://localhost:5000/api/hotels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(preferences),
    })
      .then((response) => response.json())
      .then((data) => {
        setHotels(data);
        setShowHotels(true); // Trigger transition effect
      });
  };

  const handleRetry = () => {
    setHotels([]);
    setShowHotels(false); // Reset form and hide hotels
  };

  return (
    <div className="App">
      <header>
        <h1>Welcome To Foodie Finds!</h1>
      </header>
      {!showHotels && <PreferencesForm onSubmit={handleSubmit} />}
      
      <section className={`hotel-results ${showHotels ? 'show' : ''}`}>
        <h2>Matched Hotels</h2>
        <div className="hotel-list">
          {hotels.length > 0 ? (
            hotels.map((hotel, index) => (
              <div className="hotel-card" key={index}>
                <h3>{hotel.name}</h3>
                <p><strong>City:</strong> {hotel.city}</p>
                <p><strong>Kind Of Food:</strong> {hotel.kindofFood}</p>
                <p><strong>Budget</strong> {hotel.budget}</p>
                <p><strong>Rating</strong> {hotel.rating}</p>
                <p><strong>Food Type:</strong> {hotel.foodType}</p>

              </div>
            ))
          ) : (
            <p>No hotels matched your preferences. Try adjusting your selections.</p>
          )}
        </div>
        <button className="btn-retry" onClick={handleRetry}>Retry</button>
      </section>
    </div>
  );
};

export default App;
