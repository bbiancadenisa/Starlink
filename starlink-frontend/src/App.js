import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Canvas from "./components/Canvas";
import "./App.css";

function App() {
  const [latLng, setLatLng] = useState([]);

  const getSatelittesPositions = async (req, res) => {
    axios
      .get("http://localhost:30001/satellite-position")
      .then((response) => {
        setLatLng(response.data);
      })
      .catch((error) => console.log(error));
    // const response = await axios.get()
  };

  useEffect(() => {
    getSatelittesPositions();
  }, []);

  return (
    <div className="App">
      <Canvas latLng={latLng} />
    </div>
  );
}

export default App;
