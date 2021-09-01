const Satellite = require('./Schemas/Satellite')
const express = require('express')
const mongoose = require('mongoose');
const app = express();
const port = 30001;
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require('axios');


app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/all-satellites', (req, res)=>{
 axios
   .get("https://api.n2yo.com/rest/v1/satellite/above/45.771065/21.196458/132/180/52/&apiKey=3H4Q2H-JCHZWY-EB77MM-4RTN")
   .then(result => {
      const resp= result.data;
      res.send(resp)
   })
   .catch(err => console.log(err))

 
  }
);

app.get ('/satellite-position', (req, res) =>{
  axios
  .get("https://api.n2yo.com/rest/v1/satellite/above/45.771065/21.196458/132/180/52/&apiKey=3H4Q2H-JCHZWY-EB77MM-4RTN")
  .then(result => {
     const resp = result.data.above;
  //    console.log(Object.keys(result.data).forEach(key => {if(key === 'above') result.data[key].map() 
  // }))
     const arrayCopy = resp.map(r => ({latitude: r.satlat, longitude: r.satlng, altitude: r.satlat}))
     res.send(arrayCopy)   
  })
  .catch(err => console.log(err))
 
});
 
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});

app.use("*", (req, res) =>
  res.status(404).json({ message: "Pagina nu a fost gasita" })
);

const mongoURI = "mongodb://localhost:27017";
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to database");
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});