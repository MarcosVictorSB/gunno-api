const IService = require('../../../interfaces/base-service');

class ObjectiveService extends IService {
  constructor(params = {}) {
    super(params);
    this.repository = params.repository;
    this.httpResponseStatusCodes = params.httpResponseStatusCodes;
    this.errors = params.errors;
    this.helpers = params.helpers;
    this.message = params.message;
    this.logger = params.logger;
  }

  async create(params) {
    try {
      const newParams = {
        name: params.name,
        quarter: this.helpers.getCurrentQuarter(),
        year: this.helpers.getCurrentYear(),
        idTeam: params.idTeam,
      };
      const result = await this.repository.create(newParams);
      return this.httpResponseStatusCodes.created(result);
    } catch (error) {
      this.logger.error(`[OBJECTIVE SERVICE] - ${this.errors.create}`);
      throw this.httpResponseStatusCodes.serverError(error);
    }
  }
}

module.exports = ObjectiveService;
