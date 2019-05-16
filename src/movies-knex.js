const {NODE_ENV = 'development'} = process.env
const config = require('../knexfile.js')[NODE_ENV]

const knex = require('knex')(config)

const isSqlite = config.client === 'sqlite3'

const getMovies = () => knex('movies').orderBy('id', 'desc')
const getMovie = id =>
  knex('movies')
    .where({id})
    .first()

function insertMovie({title, year, desc}) {
  const query = knex('movies').insert({title, year, desc})

  return isSqlite
    ? query.then(([id]) => getMovie(id))
    : query.returning('*').then(arr => arr.pop())
}

function updateMovie(id, data) {
  const query = knex('movies')
    .where({id})
    .update(data)

  return isSqlite
    ? query.then(() => getMovie(id))
    : query.returning('*').then(arr => arr.pop())
}

const deleteMovie = id =>
  knex('movies')
    .where({id})
    .del()

module.exports = {
  findAll: getMovies,
  findById: getMovie,
  insert: insertMovie,
  update: updateMovie,
  delete: deleteMovie,
}
