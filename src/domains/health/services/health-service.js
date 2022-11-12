const logger = require('../../../config/logger');

class HealthService {
  constructor(params = {}) {
    this.logger = params.logger || logger;
    this.httpResponseStatusCode = params.httpResponseStatusCode;
  }

  async health() {
    return this.httpResponseStatusCode.OK(new Date());
  }
}

module.exports = HealthService;
