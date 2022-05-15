const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  locationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
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