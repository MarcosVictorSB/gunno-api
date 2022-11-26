class ObjectiveService {
  constructor(params = {}) {
    this.repository = params.repository;
    this.httpResponseStatusCodes = params.httpResponseStatusCodes;
    this.errors = params.errors;
    this.helpers = params.helpers;
    this.message = params.message;
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
    try {
      const result = await this.repository.getById(objectiveId);
      return this.httpResponseStatusCodes.OK(result);
    } catch (error) {
      this.logger.error(`[OBJECTIVE SERVICE] - ${this.errors.getById}`);
      throw this.httpResponseStatusCodes.serverError(error);
    }
  }

  async update(objectiveId, params) {
    try {
      const objective = await this.repository.getById(objectiveId);
      if (!objective) return this.httpResponseStatusCodes.OK(this.message.notFound);

      await this.repository.update(objectiveId, params);
      return this.httpResponseStatusCodes.noContent(this.message.update);
    } catch (error) {
      this.logger.error(`[OBJECTIVE SERVICE] - ${this.errors.getById}`);
      throw this.httpResponseStatusCodes.serverError(error);
    }
  }

  async delete(objectiveId) {

  }
}

module.exports = ObjectiveService;
