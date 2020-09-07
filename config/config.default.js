/* eslint valid-jsdoc: "off" */
'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.target = 'web';


  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1593754907094_8027';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  //网络请求配置
  config.httpclient = {
    request: {
      // 默认 request 超时时间
      timeout: 10000,
    }
  }

  //服务接口地址
  config.serverAddress = ''

  // 保证构建的静态资源文件能够被访问到
  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'public'),
  };

  config.reactssr = {
    layout: path.join(appInfo.baseDir, 'app/view/layout.html'),
  };


  return {
    ...config,
    ...userConfig,
  };
};