const InterestedController = require('../controller/interested-controller');
const InterestedService = require('../service/interested-service');
const InterestedRepository = require('../repositories/interested-repository');
const Interested = require('../model/interested-model');
const { HttpResponseStatusCodes } = require('../../../protocols/httpResponseStatusCodes');
const logger = require('../../../config/logger');
const { interested: enumHelperInterested } = require('../../../helpers/enumHelperInterested');

const getRepository = () => new InterestedRepository({
  logger,
  model: Interested,
  HttpResponseStatusCodes,
});

const getService = () => new InterestedService({
  repository: getRepository(),
  logger,
  responseStatusCode: new HttpResponseStatusCodes(),
  enumHelperInterested,
});

const getController = () => new InterestedController({
  logger,
  service: getService(),
});

module.exports = {
  getController,
};
