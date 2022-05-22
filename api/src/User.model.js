const mongoose = require("mongoose");

const tupleSchema = new mongoose.Schema({
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
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
    type: [tupleSchema]
  },
  donations: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Products",
  } 
});

const User = mongoose.model("User", userSchema);

module.exports = User;
