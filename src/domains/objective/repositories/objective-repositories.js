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

  async getById(objectiveId) {
    try {
      const result = await this.model.findByPk(objectiveId);
      return result ? result.dataValues : null;
    } catch (error) {
      this.logger.error({ error }, `[REPOSITORY OBJECTIVE] - ${this.errors.create}`);
      throw this.httpResponseStatusCodes.serverError(this.errors.create);
    }
  }

  async update(objectiveId, params) {
    try {
      const result = await this.model.update({ ...params }, {
        where: {
          id: objectiveId,
        },
      });
      return result.length ? result : null;
    } catch (error) {
      this.logger.error({ error }, `[REPOSITORY OBJECTIVE] - ${this.errors.create}`);
      throw this.httpResponseStatusCodes.serverError(this.errors.create);
    }
  }

  async delete(paramsId) {

  }
}

module.exports = ObjectiveRepository;
