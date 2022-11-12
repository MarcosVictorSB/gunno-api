class InterestedService {
  constructor(params = {}) {
    this.repository = params.repository;
    this.logger = params.logger;
    this.httpResponseStatusCode = params.httpResponseStatusCode;
  }

  async saveInterested(email) {
    try {
      await this.repository.saveInterested(email);
      return 0;
    } catch (error) {
      this.logger.error({ error }, '[INTERESTED SERVICE] - error to save possible customer');
      return this.httpResponseStatusCode.serverError(error.message);
    }
  }
}

module.exports = InterestedService;
