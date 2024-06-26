// routes/movieRoutes.js
const express = require('express');
const {
  createMovie,
  getAllMovies,
  getMoviesByType,
  getMoviesByRating,
  getMoviesByTitle,
  getMoviesByLanguage,
  getMoviesByQuality,
  getMoviesByGenre,
  getMovieById,
  updateMovie,
  deleteMovie
} = require('../controller/movieController');

const router = express.Router();

router.post('/', createMovie);
router.get('/', getAllMovies);
router.get('/type/:type', getMoviesByType);
router.get('/rating/:rating', getMoviesByRating);
router.get('/title/:title', getMoviesByTitle);
router.get('/language/:language', getMoviesByLanguage);
router.get('/quality/:quality', getMoviesByQuality);
router.get('/genre/:genre', getMoviesByGenre);
router.get('/:id', getMovieById);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
