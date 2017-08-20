import restify from 'restify';
import db from './db';
import settings from './config/settings';
import { GET, POST } from './misc/requests';

const server = restify.createServer({
  name: settings.name,
  version: settings.version,
});

server.use(restify.plugins.bodyParser());

server.get('/ping', (req, res, next) => {
  res.send(200, 'pong');
  next();
});

// USERS ROUTES

// get all users
GET(server, '/users', () => db.users.all());
// create a new user
POST(server, '/users', req => db.users.create(req.body));

// POSTS ROUTES

// get all posts
GET(server, '/posts', () => db.posts.all());


server.listen(settings.port, () => {
  console.log(`${server.name} listening at ${server.url}`); // eslint-disable-line
});
