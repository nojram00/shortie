const router = require("express").Router();
const Link = require("../models/links.model");
const { randomUUID } = require("crypto");

router.get("/links", async (req, res) => {
  try {
    const links = await Link.find();
    res.json(links);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/links/find", async (req, res) => {
  try {
    const { code } = req.query;
    const result = await Link.findOne({
        code
    });

    res.json(result);
    
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.post("/links/add", async (req, res) => {
  try {
    const { originalLink, url } = req.body;
    const code = randomUUID().split("-")[0];
    const result = await Link.insertOne({
      code,
      originalLink,
      shortenedLink: `${url ?? "https://short.ie/"}${code}`,
    });

    res.json({
      message: "success",
      result,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
