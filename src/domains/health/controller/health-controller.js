const Controller = require('../../../interfaces/base-controller');
const logger = require('../../../config/logger');

class healthController extends Controller {
  constructor(params = {}) {
    super();
    this.service = params.service;
    this.logger = params.logger || logger;
  }

  async health(request, response) {
    try {
      const result = await this.service.health();
      return response.status(result.status).json(result.body);
    } catch (error) {
      this.logger.error(`${error}, error`);
      return this.errorHandler(error, request, response);
    }
  }
}

module.exports = healthController;
