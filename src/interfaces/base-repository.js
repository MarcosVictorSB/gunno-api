class IRepository {
  constructor(params) {
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
      this.logger.error({ error }, '[REPOSITORY] - Error to create');
      throw this.httpResponseStatusCodes.serverError(error);
    }
  }

  async getById(id) {
    try {
      const result = await this.model.findByPk(id);
      return result ? result.dataValues : null;
    } catch (error) {
      this.logger.error({ error }, `[REPOSITORY] - Error to getById: ${id}`);
      throw this.httpResponseStatusCodes.serverError(error);
    }
  }

  async update(id, params) {
    try {
      const result = await this.model.update({ ...params }, {
        where: { id },
      });
      return result.length ? result : null;
    } catch (error) {
      this.logger.error({ error }, `[REPOSITORY] - Error to update: ${id}`);
      throw this.httpResponseStatusCodes.serverError(error);
    }
  }

  async delete(id) {
    try {
      const result = await this.model.destroy({ where: { id } });
      return result.length ? result : null;
    } catch (error) {
      this.logger.error({ error }, `[REPOSITORY] - Error to delete: ${id}`);
      throw this.httpResponseStatusCodes.serverError(error);
    }
  }
}

module.exports = IRepository;
