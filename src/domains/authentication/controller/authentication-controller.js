const IController = require('../../../interfaces/base-controller');

class AuthenticationController extends IController {
  constructor(params = {}) {
    super(params);
    this.serviceAuth = params.serviceAuth;
    this.validator = params.validator;
    this.customerService = params.customerService;
    this.enumHelperCustomer = params.enumHelperCustomer;
    this.enumHelperAuthentication = params.enumHelperAuthentication;
    this.logger = params.logger;
  }

  async authenticate(request, response) {
    try {
      const { email, password } = await this.validator.validateBodyParams(request.body);
      const { status, body } = await this.serviceAuth.authenticate(email, password);
      return response.status(status).json({ status, body });
    } catch (error) {
      return this.errorHandler(error, request, response);
    }
  }

  async register(request, response) {
    try {
      const customer = await this.validator.validateBodyParams(request.body);
      const result = await this.customerService.create(customer);
      return response.status(result.status).json(result.body);
    } catch (error) {
      this.logger.error(`[REGISTER AUTHENTICATION] ${error.message} - ${this.enumHelperCustomer.customer.errorToCreatedUser}`);
      return this.errorHandler(error, request, response);
    }
  }
}

module.exports = AuthenticationController;
