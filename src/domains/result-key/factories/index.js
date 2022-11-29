const ResultKeyRepository = require('../repositories/result-key-repository');
const ResultKeyService = require('../services/result-key-service');
const ResultKeyController = require('../controller/result-key-controller');
const ResultKeyModel = require('../model/result-key-model');
const { HttpResponseStatusCodes } = require('../../../protocols/httpResponseStatusCodes');
const logger = require('../../../config/logger');
const errors = require('../../../helpers/errors/result-key-error');

const getRepository = () => new ResultKeyRepository({
  logger,
  model: ResultKeyModel,
  httpResponseStatusCodes: new HttpResponseStatusCodes(),
});

const getService = () => new ResultKeyService({
  repository: getRepository(),
  httpResponseStatusCodes: new HttpResponseStatusCodes(),
  errors,
  logger,
});

const getController = () => new ResultKeyController({
  service: getService(),
  logger,
  errors,
});

module.exports = {
  getRepository,
  getService,
  getController,
};
