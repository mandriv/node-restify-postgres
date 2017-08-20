import pgPromise from 'pg-promise';

import settings from '../config/settings';
// repos
import posts from './repos/posts';
import users from './repos/users';

const repos = {
  posts,
  users,
};

const initOptions = {
  extend: (obj) => {
    /* eslint-disable */
    obj.posts = new repos.posts(obj, pgp);
    obj.users = new repos.users(obj, pgp);
    /* eslint-enable */
  },
};

const pgp = pgPromise(initOptions);
const database = pgp(settings.db);

export default database;
