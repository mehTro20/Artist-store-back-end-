const express = require("express");
const router = express.Router();
const { getGenres, setGenre } = require("../artistControllers");

router.get("/", getGenres);
router.post("/:id", setGenre);

module.exports = router;
