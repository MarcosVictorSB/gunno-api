const TeamController = require('../controller/team-controller');
const TeamRepository = require('../repositories/team-repository');
const TeamService = require('../services/team-service');
const { HttpResponseStatusCodes } = require('../../../protocols/httpResponseStatusCodes');

const TeamModel = require('../../../infra/database/models/team');
const logger = require('../../../config/logger');
const errors = require('../../../helpers/errors/objective-errors');

const getRepository = () => new TeamRepository({
  logger,
  model: TeamModel,
  httpResponseStatusCodes: new HttpResponseStatusCodes(),
});

const getService = () => new TeamService({
  repository: getRepository(),
  httpResponseStatusCodes: new HttpResponseStatusCodes(),
  errors,
  logger,
});

const getController = () => new TeamController({
  service: getService(),
  logger,
});

module.exports = {
  getController,
  getService,
  getRepository,
};
