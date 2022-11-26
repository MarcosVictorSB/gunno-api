const { getController } = require('../factories');

const controller = getController();

exports.loadRoutes = function loadRoutes(server) {
  server.post('/objective', (...args) => controller.create(...args));
  server.get('/objective/:id', (...args) => controller.getById(...args));
  server.put('/objective/:id', (...args) => controller.update(...args));
};
