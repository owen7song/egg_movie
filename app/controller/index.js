'use strict';

const Controller = require('../core/BaseCotroller');

class IndexController extends Controller {
  async indexPage() {
    const {
      ctx,
    } = this;
    await ctx.render('home/index.js', {
      message: 'egg react server side render',
      title: '油柑网',
      names: '2121',
    });
  }
}

module.exports = IndexController;