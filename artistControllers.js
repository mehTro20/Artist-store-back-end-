const asyncHandler = require("express-async-handler");
const Artist = require("./models/artistModel");
const Genre = require("./models/genreModel");

const getArtists = asyncHandler(async (req, res) => {
  if (req.query._id === undefined) {
    const artists = await Artist.find();
    console.log(`get many`);
    return res.status(200).json(artists);
  } else {
    const artist = await Artist.findOne({ _id: req.query._id });
    console.log(`get one`);
    res.status(200).json(artist);
  }
});

const getGenres = asyncHandler(async (req, res) => {
  if (req.query._id === undefined) {
    const genres = await Genre.find();
    console.log(`getMany`);
    return res.status(200).json(genres);
  }
  const genre = await Genre.findOne({ _id: req.query._id });
  console.log(`getOne`);
  res.status(200).json(genre);
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

const setGenre = asyncHandler(async (req, res) => {
  const body = req.body;
  const artistFind = await Artist.findById(req.params.id);
  console.log(artistFind)

  if (req.params.id) {
    // console.log(req.params.id)
    const genre = await Genre.create({
      artist: req.params.id,
      genre: body.genre,
    });
    console.log(`new genre`);
    return res.status(200).json(genre);
  } else if (!req.params.id) {
    res.status(400);
    throw new Error("Error message");
  }
});

const putArtist = asyncHandler(async (req, res) => {
  const artists = await Artist.findById(req.params.id);

  if (!artists) {
    res.status(400);
    throw new Error("Artist not found");
  }

  const updateArtist = await Artist.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  console.log(req.body);
  res.status(200).json(updateArtist);
});

const deleteArtist = asyncHandler(async (req, res) => {
  const artists = await Artist.findById(req.params.id);

  if (!artists) {
    res.status(400);
    throw new Error("Artist not found");
  }

  await artists.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getArtists,
  setArtist,
  putArtist,
  deleteArtist,
  getGenres,
  setGenre,
};
