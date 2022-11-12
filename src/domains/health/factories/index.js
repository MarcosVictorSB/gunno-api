const HealthService = require('../services/health-service');
const HealthController = require('../controller/health-controller');
const logger = require('../../../config/logger');
const { HttpResponseStatusCodes } = require('../../../protocols/httpResponseStatusCodes');

const getService = () => new HealthService({
  logger,
  httpResponseStatusCode: new HttpResponseStatusCodes(),
});

const getController = (params = {}) => new HealthController({
  service: params.service || getService(),
  logger,
});

module.exports = {
  getController,
  getService,
};
