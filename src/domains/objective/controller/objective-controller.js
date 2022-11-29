const IController = require('../../../interfaces/base-controller');

class ObjectiveController extends IController {
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
    try {
      const { id: objectiveId } = request.params;
      const result = await this.service.getById(objectiveId);
      return response.status(result.status).json(result.body);
    } catch (error) {
      this.logger.error({ error }, `[OBJECTIVE CONTROLLER] - ${this.errors.getById}`);
      return this.errorHandler(error, request, response);
    }
  }

  async update(request, response) {
    try {
      const objectiveId = request.params.id;
      const params = request.body;
      const result = await this.service.update(objectiveId, params);
      return response.status(result.status).json(result.body);
    } catch (error) {
      this.logger.error({ error }, `[OBJECTIVE CONTROLLER] - ${this.errors.getById}`);
      return this.errorHandler(error, request, response);
    }
  }

  async delete(request, response) {
    try {
      const objectiveId = request.params.id;
      const result = await this.service.delete(objectiveId);
      return response.status(result.status).json(result.body);
    } catch (error) {
      this.logger.error({ error }, `[OBJECTIVE CONTROLLER] - ${this.errors.delete}`);
      return this.errorHandler(error, request, response);
    }
  }
}

module.exports = ObjectiveController;
