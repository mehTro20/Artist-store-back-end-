const express = require("express");
const router = express.Router();
const { getArtists, setArtist } = require("./artistControllers");

router.get("/", getArtists);
router.post("/", setArtist);

module.exports = router;