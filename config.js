/*
 * Configuration file
 */

var config = {};

config.development = {
  name: 'development',
  database: 'mongodb://localhost/npe-dev',
  secret: 'superman',
  httpPort: 5000,
  httpsPort: 5001
};

config.production = {
  name: 'production',
  database: process.env.DATABASE,
  secret: process.env.SECRET,
  httpPort: 80,
  httpsPort: 443
};

var moduleToExport =
  typeof process.env.NODE_ENV === 'string'
    ? config[process.env.NODE_ENV]
    : config.development;

module.exports = moduleToExport;
