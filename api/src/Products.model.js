const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  centreName: {
    type: String,
    required: true,
  },
  cityName: {
    type: String,
    required: true,
  },
  requestedQuantity: {
    type: Number,
    required: true,
  },
  donatedQuantity: {
    type: Number,
    required: true,
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;