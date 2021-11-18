import React, { useState } from "react";

const App = () => {
  const [temperature, setTemperature] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  // logic ketika temperature bertambah
  const temperatureBertambah = () => {
    if(temperature === 30) return;
    const NewTemperature = temperature + 1;

    // logic background "hot"
    if(NewTemperature >= 15) {
      // ketika temperature lebih dari 15 derajat, maka background berubah menjadi orange
      setTemperatureColor("hot"); 
    }

    setTemperature(NewTemperature);
  }

  // logic ketika temperature berkurang
  const temperatureBerkurang = () => {
    if(temperature === 0) return;
    const NewTemperature = temperature -1;

    // logic background "hot"
    if(NewTemperature < 15) {
      // ketika temperature kurang dari 15 derajat, maka background berubah menjadi biru
      setTemperatureColor("cold"); 
    }

    setTemperature(NewTemperature);
  }


  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperature}°C</div>
      </div>
      <div className="button-container">
        <button onClick={()=> temperatureBertambah()}>+</button>
        <button onClick={()=> temperatureBerkurang()}>-</button>
      </div>
    </div>
  );
};

export default App;
