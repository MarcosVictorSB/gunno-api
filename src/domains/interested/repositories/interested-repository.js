class InterestedRepository {
  constructor(params = {}) {
    this.logger = params.logger;
    this.model = params.model;
    this.httpResponseStatusCode = params.httpResponseStatusCode;
  }

  async saveInterested(email) {
    try {
      const result = await this.model.create({ email });
      return result.dataValues;
    } catch (error) {
      this.logger.error({ error }, '[INTERESTED REPOSITORY] - error to save possible customer');
      throw this.httpResponseStatusCode.serverError(error.message);
    }
  }
}

module.exports = InterestedRepository;
