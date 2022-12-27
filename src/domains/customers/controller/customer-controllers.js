const IController = require('../../../interfaces/base-controller');

class CustomerController extends IController {
  constructor(params = {}) {
    super(params);
    this.service = params.service;
    this.logger = params.logger;
    this.enumHelperCustomer = params.enumHelperCustomer;
    this.validator = params.validator;
  }

  async create(request, response) {
    try {
      const customer = await this.validator.validateBodyParams(request.body);
      const { status, body } = await this.service.create(customer);
      return response.status(status).json({ status, body });
    } catch (error) {
      this.logger.error(`[CUSTOMER CONTROLLER] - ${this.enumHelperCustomer.errorToCreatedUser}`);
      return this.errorHandler(error, request, response);
    }
  }

  async getByEmail(request, response) {
    try {
      const { email } = request.query;
      const { status, body } = await this.service.getByEmail(email);
      return response.status(status).json({ status, body });
    } catch (error) {
      this.logger.error(`[CUSTOMER CONTROLLER] - ${this.enumHelperCustomer.errorToCreateUser}`);
      return this.errorHandler(error, request, response);
    }
  }

  async getAllCustomers(request, response) {
    try {
      const { status, body } = await this.service.getAllCustomers();
      return response.status(status).json({ status, body });
    } catch (error) {
      this.logger.error({ error }, `[CUSTOMER CONTROLLER] - ${this.enumHelperCustomer.errorToCreateUser}`);
      return this.errorHandler(error, request, response);
    }
  }

  async forgetPassword(request, response) {
    try {
      const { email } = request.query;
      const { status, body } = await this.service.forgetPassword(email);
      return response.status(status).json({ status, body });
    } catch (error) {
      this.logger.error(`[CUSTOMER CONTROLLER] - ${this.enumHelperCustomer.errorToCreateUser}`);
      return this.errorHandler(error, request, response);
    }
  }
}

module.exports = CustomerController;
