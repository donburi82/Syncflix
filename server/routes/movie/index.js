require('dotenv').config();

const express = require('express');
const { Movie } = require('../../models/movie');
const { User } = require('../../models/user');

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const userId = req.query.userId;
    const movies = await Movie.find();

    if (userId) {
        let favoriteActor = null;
        const user = await User.findById(userId).populate("watched");
        if (user && user.watched.length>0) {
            const actorCount = {};

            user.watched.forEach((movie) => {
                movie.cast.forEach((actor) => {
                    actorCount[actor] = (actorCount[actor] || 0) + 1;
                });
            });

            favoriteActor = Object.entries(actorCount).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
        }

        const personalizedMovies = movies.map((movie) => {
            let selectedPoster = movie.posters.default;
      
            if (favoriteActor && movie.cast.includes(favoriteActor)) {
                selectedPoster = movie.posters.actorFocused.get(favoriteActor) || selectedPoster;
            }
      
            return {
                id: movie._id,
                title: movie.title,
                cast: movie.cast.join(", "),
                genre: movie.genre.join(", "),
                releaseDate: movie.date,
                duration: movie.duration,
                rating: movie.rating,
                description: movie.description,
                image: `${process.env.S3URL}/${selectedPoster}`
            };
        });

        res.status(200).json({ status: 'success', data: personalizedMovies });
    } else {
        res.status(200).json({ status: 'success', data: movies });
    }
  } catch (error) {
    res.status(500).json({ status: 'error', msg: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, cast, genre, date, duration, rating, description, posters } = req.body;

    const newMovie = new Movie({
        title,
        cast,
        genre,
        date,
        duration,
        rating,
        description,
        posters,
    });
    const savedMovie = await newMovie.save();

    res.status(201).json({ status: 'success', data: savedMovie });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: 'error', msg: error.message });
  }
});

module.exports = router;
