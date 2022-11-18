class InterestedService {
  constructor(params = {}) {
    this.repository = params.repository;
    this.logger = params.logger;
    this.responseStatusCode = params.responseStatusCode;
    this.enumHelperInterested = params.enumHelperInterested;
  }

  async saveInterested(email) {
    try {
      await this.repository.saveInterested(email);
      return this.responseStatusCode.created(this.enumHelperInterested.interestedSave);
    } catch (error) {
      this.logger.error({ error }, '[INTERESTED SERVICE] - error to save possible customer');
      throw this.responseStatusCode.serverError(error.message);
    }
  }
}

module.exports = InterestedService;
