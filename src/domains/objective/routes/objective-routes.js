const { getController } = require('../factories');

const controller = getController();

exports.loadRoutes = function loadRoutes(server) {
  server.post('/objective', (...args) => controller.create(...args));
};
