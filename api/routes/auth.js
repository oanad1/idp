const express = require("express");
const axios = require("axios").default;

const router = express.Router();

const options = {
  method: 'POST',
  url: 'https://dev-5f2n3u3p.eu.auth0.com/oauth/token',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  data: {
    grant_type: 'client_credentials',
    client_id: 'dqAJli3Xb4JWTmYaN6gCUIhpyaWzVPuE',
    client_secret: 'XHX8fTZfYxuzcUpm3ikIppBRagFB4T3hNhx99E3SMu6Vf5arU6ErGWTUilYePB0C',
    audience: 'http://donathor-api.com'
  }
};

router.post("/register", (req, res, next) => {
  axios.request(options).then(function (response) {
    console.log(response.data);
    return res.status(200);
  }).catch(function (error) {
    console.error(error);
    return res.status(500);
  });
})

module.exports = router;
