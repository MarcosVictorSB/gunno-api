const Controller = require('../../../interfaces/base-controller');

class TeamController extends Controller {
  constructor(params) {
    super(params);
    this.service = params.service;
    this.logger = params.logger;
    this.errors = params.errors;
  }
}

module.exports = TeamController;
