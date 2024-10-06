import React, { useState } from 'react';
import './PreferencesForm.css'; // Create a CSS file for professional styling

const PreferencesForm = ({ onSubmit }) => {
  const [city, setCity] = useState('Any');
  const [kindofFood, setKindofFood] = useState('Any');
  const [budget, setBudget] = useState('Any');
  const [rating, setRating] = useState(3);
  const [foodType, setFoodType] = useState('Any');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ city, kindofFood, budget, rating, foodType });
  };

  const handleClear = () => {
    setCity('Any')
    setKindofFood('Any');
    setBudget('Any');
    setRating(3);
    setFoodType('Any');
  };

  return (
    <div className="form-container">
      <h2>Customize Your Preferences</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Madurai">Madurai</option>
            
          </select>
        </div>  
      <div className="form-group">
          <label htmlFor="kindofFood">Kind Of Food</label>
          <select
            id="kindofFood"
            value={kindofFood}
            onChange={(e) => setKindofFood(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="North Indian">North Indian</option>
            <option value="South Indian">South Indian</option>
            <option value="Continental">Continental</option>
            <option value="Chinese">Chinese</option>
            
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="budget">Budget</label>
          <select
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="100 to 500">100 to 500</option>
            <option value="500 to 1000">500 to 1000</option>
            <option value="1000 to 2000">1000 to 2000</option>
            
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="range"
            id="rating"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <span>{rating}</span>
        </div>
        <div className="form-group">
          <label htmlFor="foodType">Preferred Food Type:</label>
          <select
            id="foodType"
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="Chat items">Chat items</option>
            <option value="Main meals">Main meals</option>
            <option value="Desserts">Desserts</option>
            <option value="Tiffen">Tiffen</option>
          </select>
        </div>
        <div className="form-buttons">
          <button type="submit" className="btn-search">Find Hotels</button>
          <button type="button" className="btn-clear" onClick={handleClear}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default PreferencesForm;
