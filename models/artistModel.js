const mongoose = require("mongoose");
const Genre = require("./genreModel");

const MyObjectId = mongoose.Types.ObjectId;

const artistSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add artist name"],
  },

  followers: {
    type: Number,
    required: [true, "How many followers"],
  },

  awards: {
    type: Array,
    required: [true, "How many accolades"],
  },

  age: {
    type: Number,
    required: [true, "How old are they"],
  },
  genre: {
    type: MyObjectId,
    ref: Genre,
  },
});

Artist = mongoose.model("Artist", artistSchema);
module.exports = Artist;
