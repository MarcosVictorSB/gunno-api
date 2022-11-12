const Controller = require('../../../interfaces/base-controller');

class PageController extends Controller {
  async index(request, response) {
    try {
      return response.render('index');
    } catch (error) {
      return response.render('index');
    }
  }
}

module.exports = PageController;
