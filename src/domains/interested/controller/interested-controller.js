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
      await this.service.saveInterested(email);
      return response.render('index');
    } catch (error) {
      this.logger.error({ error }, '[INTERESTED CONTROLLER] - error to save possible customer');
      return response.render('index');
    }
  }
}

module.exports = InterestedController;
