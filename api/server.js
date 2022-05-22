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
const { User, Tuple } = require("./src/User.model");
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

app.post("/get-product", async(req, res, next) => {
  Product.findById(req.body.id, function(error, prod) {
    if (error || !prod) {
      console.log(error);
      return res.status(500).json({message: error});
    }
    return res.json({prod: prod});
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

app.post("/get-donations", async(req, res, next) => {
  User.findOne( {email: req.body.email}, function(error, user) {
    if (error || !user) {
      console.log(error);
      return res.status(500).json({message: "not ok"});
    }
    return res.json({prod: user.donations});
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
      const tuple = new Tuple({
        product: prod._id,
        quantity: Number(req.body.quantity),
        confirmed: false
      })
      user.donations.push(tuple);
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

app.post("/put-notification", async(req, res, next) => {
    User.findOne( {email: req.body.user.email}, async function(error, user) {
      if (error || !user) {
        console.log(error);
        return res.status(500).json({message: 'caca'});
      }
      user.notifications.push(req.body.id);
      await user.save().then(() => console.log("Notification put"));
      return res.status(200).json({message: 'ok'});
    })
})

app.post("/delete-notification", async(req, res, next) => {
  User.findOne( {email: req.body.user.email}, async function(error, user) {
    if (error || !user) {
      console.log(error);
      return res.status(500).json({message: 'caca'});
    }
    const index = user.notifications.indexOf(req.body.id);
    if (index > -1) {
      user.notifications.splice(index, 1);
    }
    await user.save().then(() => console.log("Notification deleted"));
    return res.status(200).json({message: 'ok'});
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
