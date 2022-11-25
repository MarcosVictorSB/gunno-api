class ObjectiveService {
  constructor(params = {}) {
    this.repository = params.repository;
    this.httpResponseStatusCodes = params.httpResponseStatusCodes;
    this.errors = params.errors;
    this.helpers = params.helpers;
  }

  async create(params) {
    try {
      const newParams = {
        name: params.name,
        quarter: this.helpers.getCurrentQuarter(),
        year: this.helpers.getCurrentYear(),
      };
      const result = await this.repository.create(newParams);
      return this.httpResponseStatusCodes.created(result);
    } catch (error) {
      this.logger.error(`[OBJECTIVE SERVICE] - ${this.errors.create}`);
      throw this.httpResponseStatusCodes.serverError(error);
    }
  }
  async getById(objectiveId) {

  }
  async update(objectiveId) {

  }
  async delete(objectiveId) {

  }
}

module.exports = ObjectiveService;
