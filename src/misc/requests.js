export function GET(server, route, handler) {
  server.get(route, (req, res, next) => {
    handler(req)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
    next();
  });
}

export function POST(server, route, handler) {
  server.post(route, (req, res, next) => {
    handler(req)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
    next();
  });
}

export function PUT(server, route, handler) {
  server.put(route, (req, res, next) => {
    handler(req)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
    next();
  });
}

export function DELETE(server, route, handler) {
  server.delete(route, (req, res, next) => {
    handler(req)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
    next();
  });
}
