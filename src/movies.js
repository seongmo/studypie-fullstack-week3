const max = require('lodash/max')
const find = require('lodash/find')

const movies = [
  {
    id: 1,
    title: 'About Time',
    desc:
      'At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.',
    year: 2013,
  },
  {
    id: 2,
    title: 'Avengers: Endgame',
    desc:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
    year: 2019,
  },
  {
    id: 3,
    title: 'Iron Man',
    desc:
      'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
    year: 2008,
  },
  {
    id: 4,
    title: 'Mars Attacks!',
    desc:
      'Earth is invaded by Martians with unbeatable weapons and a cruel sense of humor.',
    year: 1996,
  },
  {
    id: 5,
    title: '2001: A Space Odyssey',
    desc:
      'After discovering a mysterious artifact buried beneath the lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer HAL 9000.',
    year: 1968,
  },
  {
    id: 6,
    title: '2010',
    desc:
      'A joint U.S.-Soviet expedition is sent to Jupiter to learn what happened to the Discovery.',
    year: 1984,
  },
]

// const getMaxId = () => movies.reduce((p, c) => Math.max(p, c.id), 0)
const getMaxId = () => max(movies.map(m => m.id))
const getNextId = () => getMaxId() + 1

const getMovies = () => movies
// const getMovie = id => movies.find(m => m.id === id)
const getMovie = id => find(movies, {id})

function insertMovie({title, year, desc}) {
  const newMovie = {
    id: getNextId(),
    title,
    desc,
    year,
  }
  movies.push(newMovie)
  return newMovie
}

const updateMovie = (id, data) => Object.assign(getMovie(id), data)

function deleteMovie(id) {
  const idx = movies.findIndex(m => m.id === id)
  return idx < 0 ? 0 : movies.splice(idx, 1).length
}

module.exports = {
  all: getMovies,
  get: getMovie,
  insert: insertMovie,
  update: updateMovie,
  delete: deleteMovie,
}
