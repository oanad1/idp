var AuthenticationClient = require('auth0').AuthenticationClient;

const auth0 = new AuthenticationClient({
  domain: 'dev-5f2n3u3p.eu.auth0.com.auth0.com',
  clientId: 'dqAJli3Xb4JWTmYaN6gCUIhpyaWzVPuE',
});

module.exports = auth0;