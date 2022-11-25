const Controller = require('../../../interfaces/base-controller');

class ObjectiveController extends Controller {
  constructor(params = {}) {
    super(params);
    this.service = params.service;
    this.logger = params.logger;
    this.errors = params.errors;
  }

  async create(request, response) {
    try {
      const result = await this.service.create(request.body);
      return response.status(result.status).json(result.body);
    } catch (error) {
      this.logger.error({ error }, `[OBJECTIVE CONTROLLER] - ${this.errors.create}`);
      return this.errorHandler(error, request, response);
    }
  }
  async getById(request, response) {

  }
  async update(request, response) {

  }
  async delete(request, response) {

  }
}

module.exports = ObjectiveController;
