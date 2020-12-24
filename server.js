var server = require('pushstate-server');

server.start({
  port: 5001,
  directory: './dist'
});
