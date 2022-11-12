const { getController } = require('../factories');

const controller = getController();

exports.loadRoutes = function loadRoutes(server) {
  server.post('/interested', (...args) => controller.interested(...args));
};
