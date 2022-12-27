const IService = require('../../../interfaces/base-service');

class CustomerService extends IService {
  constructor(params = {}) {
    super(params);
    this.repository = params.repository;
    this.enumHelperCustomer = params.enumHelperCustomer;
    this.logger = params.logger;
    this.adapterEncryption = params.adapterEncryption;
    this.adapterToken = params.adapterToken;
    this.httpResponseStatusCodes = params.httpResponseStatusCodes;
    this.emailService = params.emailService;
    this.uuidv4 = params.uuidv4;
  }

  async create(params) {
    try {
      const {
        name, email, password, admin,
      } = params;
      const customerExists = await this.repository.getByEmail(email);
      if (customerExists) {
        this.logger.info(`[CUSTOMER SERVICE] - ${this.enumHelperCustomer.alreadyExists} : ${email}`);
        return this.httpResponseStatusCodes.conflict(this.enumHelperCustomer.alreadyExists);
      }

      const newCustomer = {
        name,
        email,
        password: await this.adapterEncryption.generateHashPassword(password),
        admin: !!admin,
      };

      const customer = await this.repository.create(newCustomer);

      if (!customer) {
        this.logger.info(`[CUSTOMER SERVICE] - ${this.enumHelperCustomer.errorToCreateUser}`);
        return this.httpResponseStatusCodes.conflict(this.enumHelperCustomer.errorToCreateUser);
      }

      const customerCreated = this.removePassword(customer);
      customerCreated.token = this.adapterToken.sign(customerCreated.id);
      return this.httpResponseStatusCodes.created(customerCreated);
    } catch (error) {
      this.logger.error('[CUSTOMER SERVICE] - error to create user');
      return this.httpResponseStatusCodes.serverError(error.message);
    }
  }

  /* eslint-disable */
  removePassword(customer) {
    customer.password = undefined;
    return customer;
  }

  async getByEmail(email) {
    try {
      let customer = await this.repository.getByEmail(email);
      if (!customer) {
        this.logger.info('[CUSTOMER SERVICE] - error to get user by email');
        return this.httpResponseStatusCodes.conflict(this.enumHelperCustomer.notFoundUser);
      }
      return this.httpResponseStatusCodes.OK(customer);
    } catch (error) {
      this.logger.error('[CUSTOMER SERVICE] - error to get user by email');
      return this.httpResponseStatusCodes.serverError(error.message);
    }
  }

  isComparePasswords(password, userPassword) {
    const isComparePassword = this.adapterEncryption.comparePasswords(password, userPassword);
    return isComparePassword
  }

  async getAllCustomers() {
    try {
      const customers = await this.repository.getAllCustomers();
      if (!customers) {
        this.logger.info('[CUSTOMER SERVICE] - doesn\'t customers registered');
        return this.httpResponseStatusCodes.conflict(this.enumHelperCustomer.doNotCustomersRegistered);
      }
      return this.httpResponseStatusCodes.OK(customers);
    } catch (error) {
      this.logger.error('[CUSTOMER SERVICE] - intern error to get all customers');
      return this.httpResponseStatusCodes.serverError(error.message);
    }
  }

  async forgetPassword(emailCustomer) {
    try {
      const result = await this.getByEmail(emailCustomer);
      const customer = result.body.result;
      if (!customer) {
        return this.httpResponseStatusCodes.conflict(this.enumHelperCustomer.notFoundUser);
      }
      const { name, email } = customer;
      const sendEmail = await this.emailService.sendEmailForgetPassword(name, email)
      return this.httpResponseStatusCodes.OK(sendEmail);
    } catch (error) {
      this.logger.error('[CUSTOMER SERVICE] - error to get user by email');
      return this.httpResponseStatusCodes.serverError(error.message);
    }
  } 
}

module.exports = CustomerService;
