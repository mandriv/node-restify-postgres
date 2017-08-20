import pgPromise from 'pg-promise';
import path from 'path';

function sql(file) {
  const fullPath = path.join(__dirname, file); // generating full path;

  const options = {
    minify: true,
    compress: true,
  };

  const qf = new pgPromise.QueryFile(fullPath, options);

  if (qf.error) {
    console.error(qf.error); // eslint-disable-line
  }

  return qf;
}

export default {
  posts: {
    all: sql('posts/all.sql'),
  },
  users: {
    all: sql('users/all.sql'),
    create: sql('users/create.sql'),
  },
};
