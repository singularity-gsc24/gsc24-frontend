import React from "react";
import MapSection from "./components/map/Map";
import "./App.css";

const location = {
  address: "Salmon",
  lat: 37.42216,
  lng: -122.08427,
};

function App() {
  return (
    <div className="App">
      <MapSection location={location} zoomLevel={17} />
    </div>
  );
}

export default App;
