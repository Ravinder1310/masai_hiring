//  import required modules from nodejs and build the server
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("../db.json");
const middleware = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middleware);
server.use(router);

server.listen(port);


// export the server
// eg.module.exports = app;
