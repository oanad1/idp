const express = require("express");
const connectDb = require("./src/connection");
const cors = require('cors');
const app = express();
const axios = require("axios").default;
const bp = require('body-parser');

app.use(cors());
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

// ----- Test API - se poate sterge
const User = require("./src/User.model");
const Location = require("./src/Location.model");
const Product = require("./src/Products.model");
// const auth = require("./routes/auth");

app.post("/", async (req, res, next) => {
  User.findOne( {email: req.body.email}, function(error, user) {
    if (error || !user) {
      console.log(error);
      return res.json({isinDB: false})
    }
    return res.json({isinDB: true})
  })
})

app.post("/register", async (req, res, next) => {
  const user = new User({
    username: req.body.Username,
    email: req.body.Email,
    phoneNumber: req.body.PhoneNumber,
    isAdmin: false,
    locationID: null,
    notifications: [],
  })
  await user.save().then(() => console.log("User created"));
  return res.status(200).json({message: 'ok'});
})

app.post("/get-user", async(req, res, next) => {
  User.findOne( {email: req.body.email}, function(error, user) {
    if (error || !user) {
      console.log(error);
      return res.status(500).json({message: error});
    }
    return res.json({user: user})
  } )
})

app.post("/get-location", async(req, res, next) => {
  User.findOne( {email: req.body.email}, function(error, user) {
    if (error || !user) {
      console.log(error);
      return res.status(500).json({message: error});
    }
    Location.findById(user.locationID, function(error, location) {
      if (error || !location) {
        console.log(error);
        return res.status(500).json({message: error});
      }
      return res.json({location: location});
    } )
  })
})

app.post("/req-donation", async(req, res, next) => {
  User.findOne( {email: req.body.user.email}, async function(error, user) {
    if (error || !user) {
      console.log(error);
      return res.status(500).json({message: error});
    }
    const prod = new Product({
      name: req.body.produs,
      locationID: user.locationID,
      requestedQuantity: req.body.cantitate,
      donatedQuantity: 0,
    })
    await prod.save().then(() => console.log("Product request made"));
    return res.status(200).json({message: 'ok'});
  })
})

// app.post("/req-donation", async(req, res, next) => {

// })

// // Get users from MongoDB
// app.get("/users", async (req, res) => {
//     const users = await User.find();
  
//     res.json(users);
// });

// // Create new user in MongoDB
// app.get("/user-create", async (req, res) => {
//     const user = new User({ username: "userTest" });
  
//     await user.save().then(() => console.log("User created"));
  
//     res.send("User created \n");
//   });
// // ---------

app.listen(process.env.PORT, function() {
  console.log(`Listening on ${process.env.PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
