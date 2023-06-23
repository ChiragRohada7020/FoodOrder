const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Cuisine = require("./models/Cuisine");

const app = express();

//MongoDB connection
mongoose
  .connect(
    "mongodb+srv://khasheshaikh:hmAaNlanApTyV8Ae@cluster0.zwndewh.mongodb.net/"
  )
  //khasheshaikh
  //hmAaNlanApTyV8Ae
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

//routes

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", async (req, res) => {
  res.json(
    await Cuisine.find()
      
  );
});


app.listen(4000);