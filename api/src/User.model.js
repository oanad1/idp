const mongoose = require("mongoose");

const tupleSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
  },
  quantity: {
    type: Number,
    required: true,
  },
  confirmed: {
    type: Boolean,
    required: true,
  }
});

const Tuple = mongoose.model("Tuple", tupleSchema);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  locationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
  },
  notifications: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Products",
  },
  donations: {
    type: [tupleSchema],
  } 
});

const User = mongoose.model("User", userSchema);

module.exports = { User, Tuple };
