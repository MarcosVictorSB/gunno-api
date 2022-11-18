const Controller = require('../../../interfaces/base-controller');

class InterestedController extends Controller {
  constructor(params = {}) {
    super(params);
    this.logger = params.logger;
    this.service = params.service;
  }

  async interested(request, response) {
    try {
      const { email } = request.body;
      const result = await this.service.saveInterested(email);
      return response.status(result.status).json(result.body);
    } catch (error) {
      this.logger.error({ error }, '[INTERESTED CONTROLLER] - error to save possible customer');
      return this.errorHandler(error, request, response);
    }
  }
}

module.exports = InterestedController;
