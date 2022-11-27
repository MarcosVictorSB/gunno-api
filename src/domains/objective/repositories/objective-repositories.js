const IRepository = require('../../../interfaces/base-repository');

class ObjectiveRepository extends IRepository {
  constructor(params = {}) {
    super(params);
    this.logger = params.logger;
    this.model = params.model;
    this.httpResponseStatusCodes = params.httpResponseStatusCodes;
    this.errors = params.errors;
  }
}

module.exports = ObjectiveRepository;
