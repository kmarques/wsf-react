const knex = require("knex")({
  client: "sqlite3", // or 'better-sqlite3'
  connection: {
    filename: "../data.sqlite",
  },
  useNullAsDefault: true,
});

module.exports = knex;
