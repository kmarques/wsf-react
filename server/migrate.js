const knex = require("./models/db");
(async () => {
  await knex.schema
    .createTable("users", function (table) {
      table.increments("id");
      table.string("username");
      table.string("password");
    })
    .then(() => {
      console.log("Table users created!");
    })
    .catch((err) => {
      console.log(err);
    });

  await knex.schema
    .createTable("articles", function (table) {
      table.increments("id");
      table.string("title");
      table.string("content");
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("users.id");
    })
    .then(() => {
      console.log("Table articles created!");
    })
    .catch((err) => {
      console.log(err);
    });
  await knex.destroy();
})();
