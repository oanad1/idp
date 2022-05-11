const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const User = require("./src/User.model");
const cors = require('cors');
const PORT = 8080;

// !!Nu sterge - frontendul e pe port 3000 si backendul pe port 8080 ceea ce creaza o problema CORS
app.use(cors());

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

  
app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
