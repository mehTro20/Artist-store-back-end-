const mongoose = require("mongoose");
const Artist = require("./artistModel");
const MyObjectId = mongoose.Schema.Types.ObjectId;

const genreSchema = mongoose.Schema({
  artist: {
    type: MyObjectId,
    ref: "Artist",
  },
  genre: {
    type: String,
    required: [true, "What type of music"],
  },
});

Genre = mongoose.model("Genre", genreSchema);
module.exports = Genre;
