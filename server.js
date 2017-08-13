const restify = require('restify');
const pgp = require('pg-promise')();

const server = restify.createServer({
  name: 'node-restify-postgres',
  version: '1.0.0',
});
const port = process.env.PORT || '3000';

const dbConfig = {
  host: 'localhost',
  port: 5432,
  database: 'test',
  user: 'wojciech',
};

const db = pgp(dbConfig);

server.get('/ping', (req, res, next) => {
  res.send(200, 'pong');
  next();
});

server.get('/', (req, res, next) => {
  db.any('SELECT * FROM account')
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
  next();
});

server.listen(port, () => {
  console.log(`${server.name} listening at ${server.url}`); // eslint-disable-line
});
