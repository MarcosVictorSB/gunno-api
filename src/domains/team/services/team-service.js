const IService = require('../../../interfaces/base-service');

class TeamService extends IService {
  constructor(params) {
    super(params);
    this.repository = params.repository;
    this.httpResponseStatusCodes = params.httpResponseStatusCodes;
    this.errors = params.errors;
    this.helpers = params.helpers;
    this.logger = params.logger;
  }

}

module.exports = TeamService;
