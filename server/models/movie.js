const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cast: [{ type: String, required: true }],
  genre: [{ type: String, required: true }],
  date: { type: Date, required: true },
  duration: { type: Number, required: true },
  rating: { type: String, required: true },
  description: { type: String, required: true },
  posters: {
    default: { type: String, required: true },
    actorFocused: { type: Map, of: String, default: {}},
  }
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = { Movie };
