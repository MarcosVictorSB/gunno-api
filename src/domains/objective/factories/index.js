const ObjectiveController = require('../controller/objective-controller');
const ObjectiveRepository = require('../repositories/objective-repositories');
const ObjectiveService = require('../services/objective-service');
const { HttpResponseStatusCodes } = require('../../../protocols/httpResponseStatusCodes');
const ObjectiveModel = require('../../../infra/database/models/objectives');
const logger = require('../../../config/logger');
const errors = require('../../../helpers/errors/objective-errors');
const helpers = require('../helpers');

const getRepository = () => new ObjectiveRepository({
  logger,
  model: ObjectiveModel,
  httpResponseStatusCodes: new HttpResponseStatusCodes(),
  errors,
});

const getService = () => new ObjectiveService({
  repository: getRepository(),
  httpResponseStatusCodes: new HttpResponseStatusCodes(),
  errors,
  helpers,
});

const getController = () => new ObjectiveController({
  service: getService(),
  logger,
  errors,
});

module.exports = {
  getController,
  getService,
  getRepository,
};
