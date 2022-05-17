var ManagementClient = require('auth0').ManagementClient;

var management = new ManagementClient({
    token: '627f909a3fc82e003fdea7ac',
    domain: 'dev-5f2n3u3p.eu.auth0.com',
    telemetry: false,
  });

module.exports = management;