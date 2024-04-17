const knex = require("./db");

async function register(userData) {
  // Check if the user already exists
  if (await knex("users").where({ username: userData.username }).first()) {
    throw new Error("Username already exists");
  }
  const [id] = await knex("users").insert(userData);
  return knex("users").select().where({ id }).first();
}

function login(credentials) {
  return knex("users").where(credentials).first();
}

function getUserById(id) {
  return knex("users").where({ id }).first();
}

module.exports = {
  register,
  login,
  getUserById,
};
