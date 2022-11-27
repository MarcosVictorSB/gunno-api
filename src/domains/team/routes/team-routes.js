const { getController } = require('../factories');

const controller = getController();

exports.loadRoutes = function loadRoutes(server) {
  server.post('/team', (...args) => controller.create(...args));
  server.get('/team/:id', (...args) => controller.getById(...args));
  server.put('/team/:id', (...args) => controller.update(...args));
  server.delete('/team/:id', (...args) => controller.delete(...args));
};
