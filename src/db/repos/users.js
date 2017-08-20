import sql from '../sql';

const query = sql.users;

export default class UsersRepository {
  constructor(db, pgp) {
    this.db = db;
    this.pgp = pgp;
  }

  all() {
    return this.db.any(query.all);
  }

  create(user) {
    return this.db.one(query.create, {
      username: user.username,
      passwordHash: user.password,
    });
  }
}
