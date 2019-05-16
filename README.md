# Movie Server Example

Express REST API server example with knex.



# Install

```bash
$ git clone https://github.com/seongmo/studypie-fullstack-week3.git
$ cd studypie-fullstack-week3
$ npm install # or yarn
```

# Migration & Seed

```bash
$ knex migrate:lastest
$ knex seed:run
```

For production 
```bash
$ NODE_ENV=production knex migrate:lastest
$ NODE_ENV=production knex seed:run
```

# Run

Use array base Model
```
npm run dev
```
Use Knex base Model
```
npm run dev:knex
```
Use Knex base Model with production environment
```
NODE_ENV=production npm run dev:knex
```

# Resources

* http://expressjs.com
* https://knexjs.org

## Web frameworks

* [Express](http://expressjs.com)
* [Koa](https://koajs.com)
* [Fastify](https://www.fastify.io)
* [Hapi](https://hapijs.com)
* [micro](https://github.com/zeit/micro)

## Database

* [Sequelize](http://docs.sequelizejs.com/)
* [Objection](https://vincit.github.io/objection.js/)
* [TypeORM](https://typeorm.io/)

## Utility Library

* [Underscore](https://underscorejs.org/)
* [Lodash](https://lodash.com/)
* [Ramda](https://ramdajs.com/)

## Validation

* [joi](https://github.com/hapijs/joi)
* [yup](https://github.com/jquense/yup)

## Etc

* [dotenv-flow](https://www.npmjs.com/package/dotenv-flow)
* [PM2](https://pm2.io/doc/en/runtime/overview/)
* [Prettier](https://prettier.io/)