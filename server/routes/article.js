const { Router } = require("express");

const router = Router();

router.get("/articles", async (req, res) => {
  try {
    const articles = await Article.getArticles();
    res.json(articles);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/articles", async (req, res) => {
  try {
    const article = await Article.createArticle({
      ...req.body,
      user_id: req.user.id,
    });
    res.status(201).json(article);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/articles/:id", async (req, res) => {
  try {
    const article = await Article.getArticleById(parseInt(req.params.id));
    res.json(article);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/articles/:id", async (req, res) => {
  try {
    const article = await Article.updateArticle(
      parseInt(req.params.id),
      req.body
    );
    res.json(article);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/articles/:id", async (req, res) => {
  try {
    await Article.deleteArticle(parseInt(req.params.id));
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
