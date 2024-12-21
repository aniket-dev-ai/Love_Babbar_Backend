const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Server Started at port no. 3000 ");
});

app.get("/", (req, res) => {
  res.send("Hello jee.");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name, brand);
  res.send("Car Submitted Successfully");
});

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/myDatabase")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.log("Received an error", error);
  });

