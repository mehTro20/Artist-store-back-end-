const asyncHandler = require("express-async-handler");
const Artist = require("./artistModel");

const getArtists = asyncHandler(async (req, res) => {
  const artists = await Artist.find();
  console.log(`get`);
  return res.status(200).json(artists);
});

const setArtist = asyncHandler(async (req, res) => {
  const body = req.body;
  console.log(body);
  if (!body) {
    res.status(400);
    throw new Error("Error message");
  }
  const artists = await Artist.create({
    name: body.name,
    followers: body.followers,
    awards: body.awards,
    age: body.age,
  });

  res.status(200).json(artists);
});

module.exports = {
  getArtists,
  setArtist,
};
