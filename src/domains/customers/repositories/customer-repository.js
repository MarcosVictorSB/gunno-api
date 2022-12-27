const FIRST_POSITION = 0;
const IRepository = require('../../../interfaces/base-repository');

class CustomerRepository extends IRepository {
  constructor(params = {}) {
    super(params);
    this.logger = params.logger;
    this.model = params.model;
    this.httpResponseStatusCode = params.httpResponseStatusCode;
  }

  async getByEmail(email) {
    try {
      const customer = await this.model.findAll({ where: { email }, raw: true });
      return customer[FIRST_POSITION];
    } catch (error) {
      this.logger.error('[CUSTOMER REPOSITORY] - error to get customer by email');
      return this.httpResponseStatusCode.serverError(error.message);
    }
  }

  async getAllCustomers() {
    try {
      const customers = await this.model.findAll({ raw: true });
      return customers;
    } catch (error) {
      this.logger.error('[CUSTOMER REPOSITORY] - error to get all customers');
      return this.httpResponseStatusCode.serverError(error.message);
    }
  }

  // async delete(id) {
  //   try {
  //     console.log({ id });
  //     const customer = await this.model.destroy({ id, truncate: true });
  //     console.log({ customer });
  //     return customer;
  //   } catch (error) {
  //     this.logger.error({ error }, '[CUSTOMER REPOSITORY DELETE] - error to delete user');
  //     throw this.httpResponseStatusCode.serverError(error.message);
  //   }
  // }
}

module.exports = CustomerRepository;
