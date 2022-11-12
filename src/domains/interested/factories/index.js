const InterestedController = require('../controller/interested-controller');
const InterestedService = require('../service/interested-service');
const InterestedRepository = require('../repositories/interested-repository');
const Interested = require('../../../infra/database/models/interested');
const { HttpResponseStatusCodes } = require('../../../protocols/httpResponseStatusCodes');
const logger = require('../../../config/logger');

const getRepository = () => new InterestedRepository({
  logger,
  model: Interested,
  HttpResponseStatusCodes,
});

const getService = () => new InterestedService({
  repository: getRepository(),
  logger,
  HttpResponseStatusCodes,
});

const getController = () => new InterestedController({
  logger,
  service: getService(),
});

module.exports = {
  getController,
};
