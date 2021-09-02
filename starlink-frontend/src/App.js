
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function App() {
const [latLng, setLatLng] = useState();

const getSatelittesPositions = async(req, res) =>{
  axios 
  .get("http://localhost:30001/satellite-position")
  .then(response =>{
    
    console.log("Latitude: ", response.data)
    
    setLatLng(latLng)
  })
.catch(error => console.log(error))
}

useEffect(()=>{
  getSatelittesPositions();
}, [latLng])

  return (
    <div className="App">
      <h1>this is gonna be cool</h1>
    </div>
  );
}

export default App;
