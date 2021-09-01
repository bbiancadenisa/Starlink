const express = require('express')
const mongoose = require('mongoose');
const app = express();
const port = 30001;
const bodyParser = require("body-parser");
const cors = require("cors");


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