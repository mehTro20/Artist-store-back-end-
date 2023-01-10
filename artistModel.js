const mongoose = require("mongoose");

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
});

module.exports = mongoose.model("Artist", artistSchema);
