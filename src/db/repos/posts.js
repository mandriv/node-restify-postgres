import sql from '../sql';

const query = sql.posts;

export default class PostsRepository {
  constructor(db, pgp) {
    this.db = db;
    this.pgp = pgp;
  }

  all() {
    return this.db.any(query.all);
  }
}
