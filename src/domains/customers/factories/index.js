const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const CustomerService = require('../services/customer-service');
const CustomerController = require('../controller/customer-controllers');
const CustomerRepository = require('../repositories/customer-repository');
const CustomerValidator = require('../validator/customer-validator');
const AdapterEncryption = require('../adapter/adapterEncryption');
const AdapterToken = require('../../authentication/adapter/adapterToken');
const CustomerModel = require('../model/customers-model');
const logger = require('../../../config/logger');
const { customer: enumHelperCustomer } = require('../../../helpers/enumHelperCustomer');
const { HttpResponseStatusCodes } = require('../../../protocols/httpResponseStatusCodes');
const { getService: getServiceEmail } = require('../../email/factories');

const getRepository = (params = {}) => new CustomerRepository({
  logger,
  model: CustomerModel,
  httpResponseStatusCode: params.httpResponseStatusCode || new HttpResponseStatusCodes(),
});

const getService = (params = {}) => new CustomerService({
  repository: params.repository || getRepository(),
  enumHelperCustomer: params.enumHelperCustomer || enumHelperCustomer,
  logger: params.logger || logger,
  validator: params.validator || new CustomerValidator(),
  adapterEncryption: params.adapterEncryption || new AdapterEncryption({ bcrypt }),
  adapterToken: params.adapterToken || new AdapterToken(),
  httpResponseStatusCode: params.httpResponseStatusCode || new HttpResponseStatusCodes(),
  emailService: params.emailService || getServiceEmail(),
  uuidv4: params.uuidv4 || uuidv4(),
});

const getController = (params = {}) => new CustomerController({
  service: params.service || getService(),
  logger: params.logger || logger,
  enumHelperCustomer: params.enumHelperCustomer || enumHelperCustomer,
  validator: params.validator || new CustomerValidator(),
});

module.exports = {
  getController,
  getService,
};
