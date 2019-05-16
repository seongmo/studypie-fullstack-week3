exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', table => {
    table.increments('id').primary()
    table.string('title').notNullable()
    table
      .string('desc')
      .notNullable()
      .defaultTo('')
    table.integer('year').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movies')
}
