const express = require("express");
const connectDb = require("./src/connection");
const cors = require('cors');
const app = express();
app.use(cors());


// ----- Test API - se poate sterge
const User = require("./src/User.model");
const Location = require("./src/Location.model");
const Product = require("./src/Products.model");
const auth0 = require("./AuthClient");
const management = require("./ManagementClient");

app.get("/", async(req, res) => {
  // redirect to /login
})

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

// function create(user, callback) {
//   const bcrypt = require('bcrypt');
//   const MongoClient = require('mongodb@3.1.4').MongoClient;
//   const client = new MongoClient('mongodb://admin:admin@localhost:8081');

//   client.connect(function (err) {
//     if (err) return callback(err);

//     const db = client.db('db-name');
//     const users = db.collection('User');

//     users.findOne({ email: user.email }, function (err, withSameMail) {
//       if (err || withSameMail) {
//         client.close();
//         return callback(err || new Error('the user already exists'));
//       }

//       bcrypt.hash(user.password, 10, function (err, hash) {
//         if (err) {
//           client.close();
//           return callback(err);
//         }

//         user.password = hash;
//         user.isAdmin = false;
//         user.locationID = null;
//         user.notifications = [];

//         users.insert(user, function (err, inserted) {
//           client.close();

//           if (err) return callback(err);
//           callback(null);
//         });
//       });
//     });
//   });
// }
  


app.listen(process.env.PORT, function() {
  console.log(`Listening on ${process.env.PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
