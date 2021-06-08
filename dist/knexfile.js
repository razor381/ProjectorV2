"use strict";

require('dotenv').config({
  path: `${__dirname}/../.env`
});

const connection = {
  // port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  charset: 'utf-8',
  timezone: 'UTC'
};
module.exports = {
  connection,
  client: process.env.DB_CLIENT,
  migrations: {
    tableName: 'migrations',
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  }
};
//# sourceMappingURL=knexfile.js.map