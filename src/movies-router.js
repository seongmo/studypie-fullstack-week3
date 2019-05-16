const express = require('express')
const Movie = require('./movies')
const {parseId} = require('./middlewares')

const movieRouter = express.Router()

movieRouter.get('/', (req, res) => {
  res.json(Movie.all())
})

movieRouter.get('/:id', parseId, (req, res) => {
  const movie = Movie.get(req.params.id)
  return movie ? res.json(movie) : res.sendStatus(404)
})

movieRouter.post('/', (req, res) => {
  res.json(Movie.insert(req.body))
})

movieRouter.post('/:id', parseId, (req, res) =>
  res.json(Movie.update(req.params.id, req.body)),
)

movieRouter.delete('/:id', parseId, (req, res) => {
  res.json(Movie.delete(req.params.id))
})

module.exports = movieRouter
