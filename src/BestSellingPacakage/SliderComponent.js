import React, { useState } from 'react';
import './SliderComponent.css'


const SliderComponent = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className="slider">
      <label htmlFor="fader"></label>
      <input type="range" min="0" max="100" value={sliderValue} id="fader" step="25" list="sliderId" onChange={handleSliderChange} />
      <datalist id="sliderId">
        <option  >0</option>
        <option >25</option>
        <option >50</option>
        <option >75</option>
        <option >100</option>
      </datalist>
    </div>
  );
};

export default SliderComponent;
