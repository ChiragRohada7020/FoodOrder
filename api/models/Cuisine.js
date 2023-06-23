const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const CuisineSchema = new Schema({
  name: String,
  img: String,
  dishes: [{ name: String, img: String, price: String, description: String }],
});

const CuisineModel = model("Cuisine", CuisineSchema);

module.exports = CuisineModel;
