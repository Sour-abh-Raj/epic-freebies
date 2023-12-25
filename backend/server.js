const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 4000;

app.use(cors());

app.get("/fetchGames", async (req, res) => {
  try {
    const { country, locale } = req.query;
    const url = `https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions?country=${country}&locale=${locale}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
