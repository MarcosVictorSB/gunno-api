class ObjectiveRepository {
  constructor(params = {}) {
    this.logger = params.logger;
    this.model = params.model;
    this.httpResponseStatusCodes = params.httpResponseStatusCodes;
    this.errors = params.errors;
  }

  async create(params) {
    try {
      const result = await this.model.create(params);
      return result.dataValues;
    } catch (error) {
      this.logger.error({ error }, '[REPOSITORY OBJECTIVE] - Error to create repository');
      throw this.httpResponseStatusCodes.serverError(this.errors.create);
    }
  }

  async getById(paramsId) {

  }

  async update(paramsId) {

  }

  async delete(paramsId) {

  }
}

module.exports = ObjectiveRepository;
