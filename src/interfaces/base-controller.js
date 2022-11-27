const logger = require('../config/logger');

class Controller {
  constructor(params) {
    /* eslint-disable default-param-last */
    this.errorHandler = (error = {}, request, response) => {
      logger.error(error);
      response.status(error.status || 400).json(error);
    };
    this.service = params.service;
    this.logger = params.logger;
  }

  async create(request, response) {
    try {
      const result = await this.service.create(request.body);
      return response.status(result.status).json(result.body);
    } catch (error) {
      this.logger.error({ error }, '[CONTROLLER] - created');
      return this.errorHandler(error, request, response);
    }
  }

  async getById(request, response) {
    try {
      const { id } = request.params;
      const result = await this.service.getById(id);
      return response.status(result.status).json(result.body);
    } catch (error) {
      this.logger.error({ error }, '[CONTROLLER] - error to get registry by id');
      return this.errorHandler(error, request, response);
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;
      const params = request.body;
      const result = await this.service.update(id, params);
      return response.status(result.status).json(result.body);
    } catch (error) {
      this.logger.error({ error }, '[CONTROLLER] - error to update registry');
      return this.errorHandler(error, request, response);
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;
      const result = await this.service.delete(id);
      return response.status(result.status).json(result.body);
    } catch (error) {
      this.logger.error({ error }, '[CONTROLLER] - error to delete registry');
      return this.errorHandler(error, request, response);
    }
  }
}

module.exports = Controller;
