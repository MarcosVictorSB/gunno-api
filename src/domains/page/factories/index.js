const PageController = require('../controller/page-controller');

const getController = () => new PageController();

module.exports = {
  getController,
};
