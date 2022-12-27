const logger = require('../config/logger');

class IController {
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
      const { status, body } = await this.service.create(request.body);
      return response.status(status).json({ status, body });
    } catch (error) {
      this.logger.error({ error }, '[CONTROLLER] - created');
      return this.errorHandler(error, request, response);
    }
  }

  async getById(request, response) {
    try {
      const { id } = request.params;
      const { status, body } = await this.service.getById(id);
      return response.status(status).json({ status, body });
    } catch (error) {
      this.logger.error({ error }, '[CONTROLLER] - error to get registry by id');
      return this.errorHandler(error, request, response);
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;
      const params = request.body;
      const { status, body } = await this.service.update(id, params);
      return response.status(status).json({ status, body });
    } catch (error) {
      this.logger.error({ error }, '[CONTROLLER] - error to update registry');
      return this.errorHandler(error, request, response);
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;
      const { status, body } = await this.service.delete(id);
      return response.status(status).json({ status, body });
    } catch (error) {
      this.logger.error({ error }, '[CONTROLLER] - error to delete registry');
      return this.errorHandler(error, request, response);
    }
  }
}

module.exports = IController;
