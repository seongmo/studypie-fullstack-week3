function parseId(req, _, next) {
  req.params.id = Number(req.params.id)
  next()
}

module.exports = {
  parseId,
}
