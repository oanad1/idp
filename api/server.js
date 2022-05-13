const express = require("express");
const connectDb = require("./src/connection");
const cors = require('cors');
const app = express();
app.use(cors());


// ----- Test API - se poate sterge
const User = require("./src/User.model");

// Get users from MongoDB
app.get("/users", async (req, res) => {
    const users = await User.find();
  
    res.json(users);
});

// Create new user in MongoDB
app.get("/user-create", async (req, res) => {
    const user = new User({ username: "userTest" });
  
    await user.save().then(() => console.log("User created"));
  
    res.send("User created \n");
  });
// ---------
  


app.listen(process.env.PORT, function() {
  console.log(`Listening on ${process.env.PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
