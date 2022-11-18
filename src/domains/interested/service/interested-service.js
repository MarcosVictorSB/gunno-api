class InterestedService {
  constructor(params = {}) {
    this.repository = params.repository;
    this.logger = params.logger;
    this.httpResponseStatusCode = params.httpResponseStatusCode;
    this.enumHelperInterested = params.enumHelperInterested;
  }

  async saveInterested(email) {
    try {
      await this.repository.saveInterested(email);
      return this.httpResponseStatusCode.created(this.enumHelperInterested.interestedSave);
    } catch (error) {
      this.logger.error({ error }, '[INTERESTED SERVICE] - error to save possible customer');
      return this.httpResponseStatusCode.serverError(error.message);
    }
  }
}

module.exports = InterestedService;
