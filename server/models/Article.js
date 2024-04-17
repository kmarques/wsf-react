const knex = require("./db");

async function createArticle(articleData) {
  const [id] = await knex("articles").insert(articleData);
  return getArticleById(id);
}

function getArticles() {
  return knex("articles").select();
}

function getArticleById(id) {
  return knex("articles").where({ id }).first();
}

async function updateArticle(id, articleData) {
  const result = await knex("articles").where({ id }).update(articleData);
  if (result === 0) {
    throw new Error("Article not found");
  }
  return getArticleById(id);
}

function deleteArticle(id) {
  return knex("articles").where({ id }).del();
}

module.exports = {
  createArticle,
  getArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
};
