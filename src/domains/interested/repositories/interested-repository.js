class InterestedRepository {
  constructor(params = {}) {
    this.logger = params.logger;
    this.model = params.model;
    this.httpResponseStatusCode = params.httpResponseStatusCode;
  }

  async saveInterested(email) {
    try {
      await this.model.create({ email });
      return 0;
    } catch (error) {
      this.logger.error({ error }, '[INTERESTED REPOSITORY] - error to save possible customer');
      return this.httpResponseStatusCode.serverError(error.message);
    }
  }
}

module.exports = InterestedRepository;
