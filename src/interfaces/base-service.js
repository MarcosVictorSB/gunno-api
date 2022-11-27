const message = require('../helpers/messages/iservice-message');

class IService {
  constructor(params) {
    this.repository = params.repository;
    this.httpResponseStatusCodes = params.httpResponseStatusCodes;
    this.errors = params.errors;
    this.helpers = params.helpers;
    this.logger = params.logger;
  }

  async getById(id) {
    try {
      const result = await this.repository.getById(id);
      if (!result) return this.httpResponseStatusCodes.OK(message.notFound);
      return this.httpResponseStatusCodes.OK(result);
    } catch (error) {
      this.logger.error({ error }, `[INTERFACE SERVICE] - ${message.errorToGetById}`);
      throw this.httpResponseStatusCodes.serverError(error);
    }
  }

  async update(id, params) {
    try {
      const result = await this.repository.getById(id);
      if (!result) return this.httpResponseStatusCodes.OK(message.notFound);

      const resultUpdated = await this.repository.update(id, params);
      if (!resultUpdated) return this.httpResponseStatusCodes.OK(message.notUpdated);

      return this.httpResponseStatusCodes.noContent(message.update);
    } catch (error) {
      this.logger.error({ error }, `[INTERFACE SERVICE] - ${message.errorUpdated}`);
      throw this.httpResponseStatusCodes.serverError(error);
    }
  }

  async delete(id) {
    try {
      const result = await this.repository.getById(id);
      if (!result) return this.httpResponseStatusCodes.OK(message.notFound);

      const resultDeleted = await this.repository.delete(id);
      if (!resultDeleted) return this.httpResponseStatusCodes.OK(message.notDeleted);

      return this.httpResponseStatusCodes.OK(message.deleted);
    } catch (error) {
      this.logger.error({ error }, `[INTERFACE - SERVICE] - ${message.errorToDeleted}`);
      throw this.httpResponseStatusCodes.serverError(error);
    }
  }
}

module.exports = IService;
