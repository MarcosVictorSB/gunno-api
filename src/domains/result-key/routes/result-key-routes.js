const { getController } = require('../factories');

const controller = getController();

exports.loadRoutes = function loadRoutes(server) {
  server.post('/result-key', (...args) => controller.create(...args));
  server.get('/result-key/:id', (...args) => controller.getById(...args));
  server.put('/result-key/:id', (...args) => controller.update(...args));
  server.delete('/result-key/:id', (...args) => controller.delete(...args));
};
