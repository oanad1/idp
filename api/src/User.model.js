// User.model.js - se poate sterge
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
