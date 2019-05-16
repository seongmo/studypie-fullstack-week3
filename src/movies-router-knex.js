const express = require('express')
const Movie = require('./movies-knex')
const {parseId} = require('./middlewares')

const movieRouter = express.Router()

movieRouter.get('/', async (_, res) => {
  return res.json(await Movie.findAll())
})

movieRouter.get('/:id', parseId, async (req, res) => {
  const movie = await Movie.findById(req.params.id)
  return movie ? res.json(movie) : res.sendStatus(404)
})

movieRouter.post('/', async (req, res) => {
  return res.json(await Movie.insert(req.body))
})

movieRouter.post('/:id', parseId, async (req, res) => {
  return res.json(await Movie.update(req.params.id, req.body))
})

movieRouter.delete('/:id', parseId, async (req, res) => {
  return res.json(await Movie.delete(req.params.id))
})

module.exports = movieRouter
