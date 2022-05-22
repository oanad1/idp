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
const { json } = require("body-parser");
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
    donations: []
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

app.post("/get-products-location", async(req, res, next) => {
  User.findOne( {email: req.body.email}, function(error, user) {
    if (error || !user) {
      console.log(error);
      return res.status(500).json({message: "not ok"});
    }
    Location.findById(user.locationID, function(error, location) {
      if (error) {
        console.log(error);
        return res.status(500).json({message: "not ok"});
      }
      Product.find( {centreName: location.name, cityName: location.city}, function(error, prod) {
        if (error) {
          console.log(error);
          return res.status(500).json({message: "not ok"});
        }
        return res.json({prod: prod})
      })
    })
  })
})

app.post("/get-all-products-location", async(req, res, next) => {
  User.findOne( {email: req.body.email}, function(error, user) {
    if (error || !user) {
      console.log(error);
      return res.status(500).json({message: "not ok"});
    }
    Product.find({}, function(error, prod) {
      if (error) {
        console.log(error);
        return res.status(500).json({message: "not ok"});
      }
      return res.json({prod: prod});
    })
  })
})

app.post("/put-donation", async(req, res, next) => {
  Product.findById(req.body.id, async function(error, prod) {
    if (error) {
      console.log(error);
      return res.status(500).json({message: "not ok"});
    }
    User.findOne( {email: req.body.user.email}, async function(error, user) {
      if (error || !user) {
        console.log(error);
        return res.status(500).json({message: "not ok"});
      }
      user.donations.push(prod);
      await user.save().then(() => console.log("Donation put"));
      prod.donatedQuantity += Number(req.body.quantity);
      await prod.save().then(() => console.log("Quantity increased"));
      return res.status(200).json({message: 'ok'});
    } )
  } )
})

app.post("/req-donation", async(req, res, next) => {
  User.findOne( {email: req.body.user.email}, async function(error, user) {
    if (error || !user) {
      console.log(error);
      return res.status(500).json({message: error});
    }
    Location.findById( user.locationID, async function(error, location) {
      if (error) {
        console.log(error);
        return res.status(500).json({message: error});
      }
      const prod = new Product({
        name: req.body.produs,
        centreName: location.name,
        cityName: location.city,
        requestedQuantity: req.body.cantitate,
        donatedQuantity: 0,
      })
      await prod.save().then(() => console.log("Product request made"));
      return res.status(200).json({message: 'ok'});
    } )
  })
})

app.post("/delete-product", async(req, res, next) => {
  Product.deleteOne( {_id: req.body.id}, async function(error, ack) {
    if (error || !ack) {
      console.log(error);
      return res.status(500).json({message: "not ok"});
    }
    return res.status(200).json({message: ack});
  } )
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
