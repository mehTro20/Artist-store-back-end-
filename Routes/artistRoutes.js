const express = require("express");
const router = express.Router();
const {
  getArtists,
  setArtist,
  putArtist,
  deleteArtist,
} = require("../artistControllers");

router.get("/", getArtists);
router.post("/", setArtist);

router.put("/:id", putArtist);
router.delete("/:id", deleteArtist);

module.exports = router;
