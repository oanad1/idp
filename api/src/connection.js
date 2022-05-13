const mongoose = require("mongoose");

var options = {
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASS
};

const connectDb = () => {
  return mongoose.connect(process.env.MONGO_CONN_STRING,options)
  .then(res => console.log("Connected to DB"))
  .catch(err => console.log(err));
};

module.exports = connectDb;
